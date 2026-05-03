import { ratingSummary, reviews as fallbackReviews } from "./site";

export type Review = {
  name: string;
  rating: number;
  text: string;
  date: string;
};

export type ReviewsData = {
  average: number;
  count: number;
  reviews: Review[];
  source: "google" | "fallback";
};

type GooglePlaceDetailsResponse = {
  status: string;
  error_message?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: Array<{
      author_name: string;
      rating: number;
      text: string;
      relative_time_description: string;
    }>;
  };
};

// Cache live results for 6 hours. Google's Places ToS allows up to 30 days,
// but fresher is friendlier and 6h keeps API costs negligible.
const REVALIDATE_SECONDS = 60 * 60 * 6;

const PLACES_ENDPOINT =
  "https://maps.googleapis.com/maps/api/place/details/json";

/**
 * Fetches the live Google rating + reviews for the shop.
 *
 * Returns the static fallback (curated reviews from `lib/site.ts`) when:
 *   - the env vars aren't set (local dev / preview),
 *   - the API call fails for any reason,
 *   - or Google returns no reviews.
 *
 * To enable live data, set in `.env.local`:
 *   GOOGLE_PLACES_API_KEY=...
 *   GOOGLE_PLACE_ID=...
 *
 * The Place ID can be looked up at:
 *   https://developers.google.com/maps/documentation/places/web-service/place-id
 */
export async function getReviews(): Promise<ReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallback();
  }

  try {
    const url = new URL(PLACES_ENDPOINT);
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("reviews_sort", "most_relevant");
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.warn(`[google-reviews] HTTP ${res.status}`);
      return fallback();
    }

    const data = (await res.json()) as GooglePlaceDetailsResponse;

    if (data.status !== "OK" || !data.result) {
      console.warn(
        `[google-reviews] status=${data.status} ${data.error_message ?? ""}`,
      );
      return fallback();
    }

    const liveReviews =
      data.result.reviews?.map<Review>((r) => ({
        name: r.author_name,
        rating: r.rating,
        text: r.text,
        date: r.relative_time_description,
      })) ?? [];

    if (liveReviews.length === 0) {
      return fallback();
    }

    return {
      average: data.result.rating ?? ratingSummary.average,
      count: data.result.user_ratings_total ?? ratingSummary.count,
      reviews: liveReviews,
      source: "google",
    };
  } catch (err) {
    console.warn("[google-reviews] fetch failed", err);
    return fallback();
  }
}

function fallback(): ReviewsData {
  return {
    average: ratingSummary.average,
    count: ratingSummary.count,
    reviews: fallbackReviews,
    source: "fallback",
  };
}
