import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { problems } from "@/content/site";

export function Problems() {
  return (
    <section aria-labelledby="problems-heading" className="bg-sand py-20 sm:py-28">
      <Container className="max-w-3xl">
        <RevealOnScroll>
          <SectionHeading eyebrow={problems.eyebrow} title={problems.title} id="problems-heading" />
        </RevealOnScroll>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {problems.items.map((item, index) => (
            <RevealOnScroll
              as="li"
              key={item}
              delay={index * 0.05}
              className="flex items-start gap-3 rounded-lg bg-cream/70 p-4"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-terracotta-light">
                <Check className="size-3.5 text-terracotta-dark" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span className="text-[15px] leading-relaxed text-ink-soft">{item}</span>
            </RevealOnScroll>
          ))}
        </ul>
      </Container>
    </section>
  );
}
