import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { whatsappLink, whatsappMessages } from "@/content/site";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-sage-dark py-20 sm:py-24">
      <Container className="max-w-2xl text-center">
        <RevealOnScroll>
          <h2 id="final-cta-heading" className="font-serif text-[32px] leading-[1.2] text-white sm:text-[40px]">
            Dar o primeiro passo já é parte do cuidado
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/85">
            Se algo neste site ressoou com você, será um prazer conversar e entender como posso
            ajudar.
          </p>
          <div className="mt-9 flex justify-center">
            <Button
              href={whatsappLink(whatsappMessages.finalCta)}
              target="_blank"
              rel="noopener noreferrer"
              withWhatsappIcon
              variant="inverse"
            >
              Agende a sua sessão
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
