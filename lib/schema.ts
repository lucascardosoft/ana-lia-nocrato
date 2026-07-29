import { professional, contact, faq } from "@/content/site";

const SITE_URL = "https://analiapsicologa.com";

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#psicologa`,
    name: professional.displayName,
    legalName: professional.fullName,
    description:
      "Psicoterapia individual e de casal, presencial em Fortaleza/CE e online, com foco em ansiedade, relacionamentos, autoestima e saúde mental da mulher.",
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-ana-lia.jpg`,
    priceRange: "$$",
    telephone: `+${contact.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      addressCountry: "BR",
    },
    areaServed: "Fortaleza, CE",
    sameAs: [contact.instagramUrl],
    founder: {
      "@type": "Person",
      name: professional.fullName,
      jobTitle: professional.role,
      identifier: professional.crp,
    },
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
