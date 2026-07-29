import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { iconMap } from "@/lib/icons";
import { modalities, contact } from "@/content/site";

export function Modalities() {
  return (
    <section aria-labelledby="modalities-heading" className="py-20 sm:py-28">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Modalidades"
            title="Presencial ou online — você escolhe"
            id="modalities-heading"
          />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {modalities.map((modality, index) => {
            const Icon = iconMap[modality.icon];
            return (
              <RevealOnScroll key={modality.title} delay={index * 0.08}>
                <Card className="flex h-full flex-col">
                  <div className="flex size-12 items-center justify-center rounded-full bg-sage-light">
                    <Icon className="size-6 text-sage-dark" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-ink">{modality.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-warmgray">
                    {modality.description}
                  </p>

                  {modality.title === "Presencial" && (
                    <div className="mt-6 aspect-[4/3] w-full">
                      <MapEmbed />
                    </div>
                  )}
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-warmgray">{contact.address.full}</p>
      </Container>
    </section>
  );
}
