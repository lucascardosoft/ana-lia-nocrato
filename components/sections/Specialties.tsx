import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { iconMap } from "@/lib/icons";
import { specialties } from "@/content/site";

export function Specialties() {
  return (
    <section id="especialidades" aria-labelledby="especialidades-heading" className="py-20 sm:py-28">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Especialidades"
            title="Como posso te ajudar"
            subtitle="Cada processo terapêutico é único — estas são algumas das áreas em que costumamos trabalhar juntas."
            id="especialidades-heading"
          />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <RevealOnScroll key={item.title} delay={index * 0.06}>
                <Card className="h-full">
                  <div className="flex size-12 items-center justify-center rounded-full bg-sage-light">
                    <Icon className="size-6 text-sage-dark" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-warmgray">
                    {item.description}
                  </p>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
