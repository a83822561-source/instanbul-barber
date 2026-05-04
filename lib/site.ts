export const site = {
  name: "Istanbul Barber Shop",
  tagline: "Precision Cuts. Timeless Style.",
  phone: "(647) 563-2085",
  phoneHref: "tel:+16475632085",
  city: "North York · Toronto",
  // TODO: replace with the exact street address
  address: "North York, Toronto, ON",
  // Search-based embed (no API key required). Swap for a precise embed once
  // the exact address is confirmed.
  mapEmbed:
    "https://maps.google.com/maps?q=Istanbul+Barbershop+North+York+Toronto&z=15&output=embed",
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "10:00 AM – 9:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 9:00 PM" },
    { day: "Thursday", time: "10:00 AM – 9:00 PM" },
    { day: "Friday", time: "10:00 AM – 9:00 PM" },
    { day: "Saturday", time: "10:00 AM – 9:00 PM" },
    { day: "Sunday", time: "10:00 AM – 5:00 PM" },
  ],
  yearsInBusiness: 10,
  clientsServed: "10,000+",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    name: "Haircut",
    price: "$25",
    description: "Precision cut tailored to your style and face shape.",
  },
  {
    name: "Haircut + Beard",
    price: "$35",
    description: "Sharp cut paired with a defined beard trim and lineup.",
  },
  {
    name: "Haircut + Beard + Wash",
    price: "$40",
    description: "Full grooming reset — cut, beard work, and a relaxing wash.",
  },
  {
    name: "Haircut + Beard + Wash + Mask",
    price: "$45",
    description:
      "The complete experience — cut, beard, wash, and a clarifying hair & scalp mask.",
  },
  {
    name: "Haircut + Beard + Mask",
    price: "$40",
    description:
      "Cut, beard shape, and a nourishing mask. Skip the wash if you're short on time.",
  },
  {
    name: "Facial (Deep)",
    price: "$75",
    description:
      "Deep-cleansing facial with extraction, steam, and finishing care.",
  },
  {
    name: "Facial (Mask + Steam)",
    price: "$50",
    description: "Hydrating facial with a clarifying mask and warm steam therapy.",
  },
];

// Real shop photos. Save the corresponding files to /public/images/.
// First image is featured (2x2 tile in the gallery grid).
export const galleryImages = [
  {
    src: "/images/interior-haircut.png",
    alt: "Inside Istanbul Barbershop — kid getting a fresh cut",
  },
  {
    src: "/images/fade-profile.png",
    alt: "Sharp skin fade with beard lineup",
  },
  {
    src: "/images/beard-trim.png",
    alt: "Precision beard trim with scissor work",
  },
  {
    src: "/images/mens-undercut.png",
    alt: "Top-knot undercut fade",
  },
  {
    src: "/images/storefront.png",
    alt: "Istanbul Barbershop storefront",
  },
];

// Hand-curated from real Google reviews. These act as the fallback when the
// Places API isn't configured (or fails). When live data is available, the
// Reviews component pulls from Google directly.
export const reviews = [
  {
    name: "Matthew Rizk",
    rating: 5,
    text: "This is the best Barbershop in all of Toronto! The service and the barbers are top notch and they will make sure you leave happy. They take care and time with every single haircut and will go above and beyond to ensure the customer is satisfied.",
    date: "9 months ago",
  },
  {
    name: "prince kumar",
    rating: 5,
    text: "I had an appointment booked at 5:30 PM and I'm genuinely impressed with their professionalism and punctuality. As soon as I arrived, I was attended to right on time — no waiting around, just smooth and efficient service.",
    date: "9 months ago",
  },
  {
    name: "Ahmed Sultani",
    rating: 5,
    text: "One barbershop in the entire GTA that I would go and visit again and again. Highly recommend — your one stop shop for everything: trim, lineup, fade, cut, men, women.",
    date: "6 months ago",
  },
  {
    name: "Yusuf Aydın",
    rating: 5,
    text: "Mehmet is a highly skilled, professional, and detail-oriented barber. The work he has done is phenomenal. Such a nice place with a reasonable price!",
    date: "a year ago",
  },
  {
    name: "Ömer Arslan",
    rating: 5,
    text: "I have been in Canada for 5 years. I've been to many barbers and they all ruined my hair. Then I found Fatih Barber. He has cut my hair very nicely so far. I really appreciate him as someone who loves his job and takes great care.",
    date: "a year ago",
  },
  {
    name: "Tam M",
    rating: 5,
    text: "For $25 Ahmed and his talented Turkish team will build world wonders on your head.",
    date: "2 years ago",
  },
];

export const ratingSummary = {
  average: 4.7,
  count: 184,
};
