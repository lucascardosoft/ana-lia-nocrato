import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { approach, images } from "@/content/site";
import { withBasePath } from "@/lib/basePath";

export function Approach() {
  return (
    <section id="abordagem" aria-labelledby="approach-heading" className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-sage-dark">
            {approach.eyebrow}
          </p>
          <h2
            id="approach-heading"
            className="font-serif text-[32px] leading-[1.2] text-ink sm:text-[40px]"
          >
            {approach.title}
          </h2>
          <div className="mt-6 space-y-4">
            {approach.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-relaxed text-warmgray">
                {paragraph}
              </p>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mx-auto w-full max-w-lg overflow-hidden rounded-xl shadow-soft-lg">
          <Image
            src={withBasePath(images.about2.src)}
            alt={images.about2.alt}
            width={2035}
            height={1419}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="h-full w-full object-cover"
          />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
