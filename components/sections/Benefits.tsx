import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { iconMap } from "@/lib/icons";
import { benefits } from "@/content/site";

export function Benefits() {
  return (
    <section aria-labelledby="benefits-heading" className="bg-sand py-20 sm:py-28">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Benefícios da terapia"
            title="O que você pode construir no processo"
            id="benefits-heading"
          />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {benefits.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <RevealOnScroll key={item.title} delay={index * 0.06} className="flex gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white shadow-soft">
                  <Icon className="size-6 text-sage-dark" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-warmgray">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
