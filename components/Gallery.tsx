import Image from "next/image";
import { galleryImages } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-neutral-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Work"
          title="Crafted, Cut by Cut"
          description="A glimpse of the styles, fades, and shaves that walk out of our chair every day."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-xl bg-neutral-900 ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <p className="text-sm font-medium text-white">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
