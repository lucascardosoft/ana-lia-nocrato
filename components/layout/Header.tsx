"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { professional, whatsappLink, whatsappMessages } from "@/content/site";

const navLinks = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Perguntas frequentes" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.06] bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="font-serif text-lg text-ink sm:text-xl"
          onClick={() => setIsOpen(false)}
        >
          {professional.displayName}
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] text-ink-soft transition-colors hover:text-sage-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={whatsappLink(whatsappMessages.fab)} target="_blank" rel="noopener noreferrer">
            Agendar consulta
          </Button>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full text-ink lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navegação móvel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/[0.06] bg-cream lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md px-2 py-3 text-[15px] text-ink-soft hover:bg-white hover:text-sage-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  href={whatsappLink(whatsappMessages.fab)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  Agendar consulta
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
