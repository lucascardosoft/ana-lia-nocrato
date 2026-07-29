import { Clock, Repeat } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { sessionFormats } from "@/content/site";

export function SessionFormat() {
  return (
    <section aria-labelledby="session-format-heading" className="bg-sand py-20 sm:py-28">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Como é o atendimento"
            title="Duração e frequência das sessões"
            id="session-format-heading"
          />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto">
          {sessionFormats.map((format, index) => (
            <RevealOnScroll key={format.title} delay={index * 0.08}>
              <Card className="h-full">
                <h3 className="font-serif text-xl text-ink">{format.title}</h3>
                <div className="mt-5 flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-sage-dark" strokeWidth={1.75} aria-hidden="true" />
                  <p className="text-[15px] leading-relaxed text-warmgray">{format.duration}</p>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <Repeat className="mt-0.5 size-5 shrink-0 text-sage-dark" strokeWidth={1.75} aria-hidden="true" />
                  <p className="text-[15px] leading-relaxed text-warmgray">{format.frequency}</p>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
