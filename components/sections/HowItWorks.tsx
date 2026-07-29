import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { howItWorks, whatsappLink, whatsappMessages } from "@/content/site";

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="how-it-works-heading" className="py-20 sm:py-28">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Como funciona"
            title="O caminho até a nossa primeira sessão"
            subtitle="Sem burocracia e sem mistério — veja o passo a passo de como começamos."
            id="how-it-works-heading"
          />
        </RevealOnScroll>

        <ol className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {howItWorks.map((item, index) => (
            <RevealOnScroll as="li" key={item.step} delay={index * 0.08} className="relative">
              <div className="relative flex items-center">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage-dark font-serif text-lg text-white">
                  {item.step}
                </span>
                {index < howItWorks.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="ml-3 hidden h-px flex-1 bg-brown-light lg:block"
                  />
                )}
              </div>
              <h3 className="mt-5 font-serif text-lg text-ink">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-warmgray">{item.description}</p>
            </RevealOnScroll>
          ))}
        </ol>

        <RevealOnScroll className="mt-14 flex justify-center">
          <Button
            href={whatsappLink(whatsappMessages.howItWorks)}
            target="_blank"
            rel="noopener noreferrer"
            withWhatsappIcon
          >
            Dar o primeiro passo
          </Button>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
