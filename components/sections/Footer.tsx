import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InstagramGlyph } from "@/components/ui/icons/InstagramGlyph";
import { professional, contact, whatsappLink, whatsappMessages } from "@/content/site";

const quickLinks = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Perguntas frequentes" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-white">{professional.displayName}</p>
          <p className="mt-2 text-sm text-cream/70">{professional.role}</p>
          <p className="mt-1 text-sm text-cream/70">{professional.crp}</p>
        </div>

        <nav aria-label="Links rápidos">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-cream/50">
            Navegação
          </p>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-cream/80 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-cream/50">
            Contato
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={whatsappLink(whatsappMessages.fab)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-cream/80 hover:text-white"
              >
                <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-cream/80 hover:text-white"
              >
                <InstagramGlyph className="mt-0.5 size-4 shrink-0" />
                {contact.instagramHandle}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-cream/80">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{contact.address.full}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/60 sm:flex-row">
          <p>
            © {year} {professional.displayName}. Todos os direitos reservados.
          </p>
          <Link href="/privacidade" className="hover:text-white">
            Política de Privacidade
          </Link>
        </Container>
      </div>
    </footer>
  );
}
