import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { testimonials, whatsappLink, whatsappMessages } from "@/content/site";

export function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="testimonials-heading" className="bg-sand py-20 sm:py-28">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Depoimentos"
            title="O que dizem as pacientes"
            id="testimonials-heading"
          />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.author} delay={index * 0.06}>
              <Card className="h-full">
                <div className="flex gap-0.5" role="img" aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-terracotta text-terracotta" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-5 text-sm font-medium text-warmgray">{testimonial.author}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-14 flex justify-center">
          <Button
            href={whatsappLink(whatsappMessages.testimonials)}
            target="_blank"
            rel="noopener noreferrer"
            withWhatsappIcon
          >
            Agende a sua sessão
          </Button>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
