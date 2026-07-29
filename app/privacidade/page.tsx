import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { contact, professional } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | Ana Lia Nocrato",
  description: "Política de Privacidade do site de Ana Lia Nocrato, psicóloga clínica.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <Container className="max-w-3xl py-16 sm:py-24">
          <h1 className="font-serif text-[32px] text-ink sm:text-[40px]">Política de Privacidade</h1>
          <p className="mt-3 text-sm text-warmgray">Última atualização: julho de 2026</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
            <section>
              <h2 className="font-serif text-xl text-ink">1. Quem somos</h2>
              <p className="mt-3">
                Este site é mantido por {professional.fullName} ({professional.crp}), psicóloga
                clínica, com atendimento em {contact.address.full}.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-ink">2. Quais dados coletamos</h2>
              <p className="mt-3">
                Este site não possui formulários de coleta de dados. Ao clicar em qualquer botão de
                &ldquo;Agendar&rdquo; ou &ldquo;WhatsApp&rdquo;, você é redirecionado(a) para o WhatsApp,
                onde a conversa e os dados trocados (como nome e telefone) seguem a política de
                privacidade do próprio WhatsApp/Meta. Podemos utilizar ferramentas de análise de
                audiência (como Google Analytics) para entender, de forma agregada e anônima, como o
                site é utilizado.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-ink">3. Confidencialidade das sessões</h2>
              <p className="mt-3">
                O conteúdo compartilhado durante as sessões de psicoterapia é sigiloso, conforme o
                Código de Ética Profissional do Psicólogo. As únicas exceções à quebra de sigilo são
                situações em que há risco de vida.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-ink">4. Cookies</h2>
              <p className="mt-3">
                O site pode utilizar cookies estritamente necessários ao seu funcionamento e, quando
                aplicável, cookies de análise de audiência. Você pode gerenciar ou desativar cookies
                diretamente nas configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-ink">5. Seus direitos (LGPD)</h2>
              <p className="mt-3">
                Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode
                solicitar, a qualquer momento, informações sobre eventuais dados tratados, correção,
                ou exclusão, entrando em contato pelo WhatsApp {contact.whatsappDisplay}.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-ink">6. Contato</h2>
              <p className="mt-3">
                Dúvidas sobre esta política podem ser enviadas pelo WhatsApp{" "}
                {contact.whatsappDisplay} ou pelo Instagram {contact.instagramHandle}.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
