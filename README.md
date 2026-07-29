# Ana Lia Nocrato — Psicóloga

Redesign completo do site institucional de Ana Lia Aguiar Nocrato (CRP 11/18220), psicóloga clínica em Fortaleza/CE. Construído do zero com foco em credibilidade, acolhimento e conversão, seguindo o código de ética do CFP (sem promessas de cura ou garantia de resultados).

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4 (design tokens em `app/globals.css`)
- Framer Motion (microinterações, scroll reveal, parallax leve)
- `next/font` (Fraunces + Inter) e `next/image`

## Estrutura

- `content/site.ts` — fonte única de verdade de todo o conteúdo (dados reais: CRP, formação, endereço, depoimentos, FAQ)
- `components/sections/*` — as 14 seções da página (Hero, Especialidades, Como funciona, Depoimentos, FAQ etc.)
- `components/ui/*` — design system (Button, Card, Accordion, Badge, RevealOnScroll...)
- `lib/schema.ts` — JSON-LD (ProfessionalService + FAQPage) para SEO

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
```
