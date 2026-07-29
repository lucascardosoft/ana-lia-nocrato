import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Accordion } from "@/components/ui/Accordion";
import { faq } from "@/content/site";

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <RevealOnScroll>
          <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" id="faq-heading" />
        </RevealOnScroll>

        <RevealOnScroll className="mt-12">
          <Accordion items={faq} />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
