import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { about, images, professional } from "@/content/site";
import { withBasePath } from "@/lib/basePath";

export function About() {
  return (
    <section id="sobre" aria-labelledby="about-heading" className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll className="order-2 mx-auto w-full max-w-sm overflow-hidden rounded-xl shadow-soft-lg lg:order-1 lg:max-w-none">
          <Image
            src={withBasePath(images.about1.src)}
            alt={images.about1.alt}
            width={683}
            height={1024}
            sizes="(min-width: 1024px) 40vw, 80vw"
            className="h-full w-full object-cover"
          />
        </RevealOnScroll>

        <RevealOnScroll className="order-1 lg:order-2">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-sage-dark">
            {about.eyebrow}
          </p>
          <h2 id="about-heading" className="font-serif text-[32px] leading-[1.2] text-ink sm:text-[40px]">
            {about.title}
          </h2>
          <p className="mt-2 text-lg text-ink-soft">{professional.fullName}</p>

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-relaxed text-warmgray">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-6 font-serif text-xl text-sage-dark">{about.invitation}</p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
