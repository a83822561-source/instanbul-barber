import { getReviews } from "@/lib/google-reviews";
import SectionHeading from "./SectionHeading";

export default async function Reviews() {
  const data = await getReviews();
  const isLive = data.source === "google";

  return (
    <section id="reviews" className="py-24 md:py-32 bg-neutral-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Reviews"
          title="Trusted by the Neighborhood"
        />

        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <Stars rating={data.average} />
            <span className="font-display text-3xl text-gold ml-2">
              {data.average.toFixed(1)}
            </span>
          </div>
          <p className="text-sm text-neutral-400 tracking-wide">
            Based on{" "}
            <span className="text-neutral-200 font-medium">{data.count}</span>{" "}
            Google reviews
          </p>
          {isLive && (
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-400/80 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live from Google
            </span>
          )}
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.reviews.map((review, i) => (
            <article
              key={`${review.name}-${i}`}
              className="bg-neutral-900 border border-white/5 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <Stars rating={review.rating} small />
                <span className="text-xs text-neutral-500">{review.date}</span>
              </div>
              <p className="text-neutral-300 leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-neutral-950 font-semibold text-sm">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-100">
                    {review.name}
                  </p>
                  <p className="text-xs text-neutral-500">via Google</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({
  rating,
  small = false,
}: {
  rating: number;
  small?: boolean;
}) {
  const size = small ? "w-4 h-4" : "w-6 h-6";
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(rating);
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
            className={`${size} ${filled ? "text-gold" : "text-neutral-700"}`}
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      })}
    </div>
  );
}
