"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { professional, images, whatsappLink, whatsappMessages } from "@/content/site";
import { withBasePath } from "@/lib/basePath";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 60]);

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-label="Apresentação"
      className="relative overflow-hidden bg-sand"
    >
      <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-sage-dark">
            {professional.crp} · Psicóloga clínica em Fortaleza/CE
          </p>
          <h1 className="font-serif text-[40px] leading-[1.12] text-ink sm:text-[52px] lg:text-[56px]">
            Psicoterapia para ansiedade, relacionamentos e autoestima
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-warmgray">
            Atendimento individual e de casal, presencial em Fortaleza ou online, com um olhar
            acolhedor sobre a sua história — para você construir, no seu tempo, formas mais
            saudáveis de lidar com a vida.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              href={whatsappLink(whatsappMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              withWhatsappIcon
            >
              Agende a sua sessão
            </Button>
            <Button href="#abordagem" variant="secondary">
              Conhecer minha abordagem
            </Button>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-6 text-sm text-ink-soft">
            <div>
              <dt className="inline font-semibold text-ink">Formação: </dt>
              <dd className="inline">Psicologia — Unifor</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-ink">Modalidades: </dt>
              <dd className="inline">Presencial e online</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          style={{ y }}
          className="order-1 mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl shadow-soft-lg lg:order-2 lg:max-w-none"
        >
          <Image
            src={withBasePath(images.hero.src)}
            alt={images.hero.alt}
            width={1707}
            height={2380}
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </Container>
    </section>
  );
}
