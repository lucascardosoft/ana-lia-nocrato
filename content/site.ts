// Fonte única de verdade para o conteúdo do site.
// Todo dado factual (CRP, formação, endereço, contato, depoimentos, FAQ)
// foi extraído verbatim ou quase-verbatim de analiapsicologa.com.
// Textos editoriais novos (problems, howItWorks intros) não fazem
// promessas de resultado/cura, em conformidade com o código de ética do CFP.

export const professional = {
  fullName: "Ana Lia Aguiar Nocrato",
  displayName: "Ana Lia Nocrato",
  shortName: "Ana Lia",
  crp: "CRP 11/18220",
  role: "Psicóloga Clínica",
};

export const contact = {
  whatsappNumber: "5585988503111",
  whatsappDisplay: "(85) 98850-3111",
  instagramHandle: "@analia.psi",
  instagramUrl: "https://www.instagram.com/analia.psi/",
  address: {
    line1: "Rua Gilberto Studart, 55",
    line2: "Cocó – Duets Office Towers",
    city: "Fortaleza",
    state: "CE",
    full: "Rua Gilberto Studart, 55, Cocó – Duets Office Towers, Fortaleza/CE",
    mapsEmbedQuery: "Rua+Gilberto+Studart,+55,+Cocó,+Fortaleza+-+CE",
    mapsLinkQuery: "Rua Gilberto Studart, 55, Cocó, Fortaleza - CE",
  },
};

export function whatsappLink(context: string) {
  return `https://api.whatsapp.com/send?phone=${contact.whatsappNumber}&text=${encodeURIComponent(
    context
  )}`;
}

export const whatsappMessages = {
  hero: "Olá! Vim pelo site e gostaria de agendar uma sessão.",
  howItWorks: "Olá! Vi como funciona o atendimento no site e gostaria de dar o primeiro passo.",
  testimonials: "Olá! Vi os depoimentos no site e gostaria de agendar uma sessão.",
  finalCta: "Olá! Gostaria de agendar minha sessão com a Ana Lia.",
  fab: "Olá! Venho do site e gostaria de mais informações sobre os atendimentos.",
  modalities: "Olá! Gostaria de saber mais sobre o atendimento presencial e online.",
};

export type Specialty = {
  icon: "Wind" | "HeartHandshake" | "Sparkles" | "Flower2" | "Target" | "Baby";
  title: string;
  description: string;
};

export const specialties: Specialty[] = [
  {
    icon: "Wind",
    title: "Ansiedade",
    description:
      "Estratégias para lidar com o medo e a insegurança excessiva sobre o futuro, compreendendo seus pensamentos e emoções.",
  },
  {
    icon: "HeartHandshake",
    title: "Relacionamentos",
    description:
      "Vínculos afetivos, amorosos, familiares ou de amizade: comunicação mais assertiva e formas mais saudáveis de lidar com conflitos.",
  },
  {
    icon: "Sparkles",
    title: "Autoestima",
    description:
      "Compreensão das próprias emoções e limites, fortalecendo o reconhecimento de si e a segurança nas decisões.",
  },
  {
    icon: "Flower2",
    title: "Sexualidade e saúde da mulher",
    description:
      "Autoestima, identidade, imagem corporal e as diversas formas de expressão do desejo, com formação em sexologia clínica.",
  },
  {
    icon: "Target",
    title: "Autocobrança e perfeccionismo",
    description:
      "Compreensão dos próprios limites e exigências, com metas mais realistas e uma relação mais leve com o próprio desempenho.",
  },
  {
    icon: "Baby",
    title: "Maternidade",
    description:
      "Um espaço para acolher as transformações, dúvidas e sentimentos que atravessam a experiência da maternidade.",
  },
];

export const problems = {
  eyebrow: "Talvez você esteja passando por...",
  title: "Se algo disso soa familiar, você não precisa lidar com isso sozinha",
  items: [
    "A ansiedade parece acompanhar o seu dia a dia.",
    "Você se cobra o tempo todo e sente que precisa dar conta de tudo.",
    "Dizer \"não\" é difícil, e você costuma priorizar as necessidades dos outros.",
    "Você duvida de si mesma e busca constantemente a validação das pessoas ao seu redor.",
    "Seus relacionamentos despertam insegurança, medo de desagradar ou dificuldade em colocar limites.",
    "Você sente que nunca é suficiente, mesmo quando faz o seu melhor.",
  ],
};

export type HowItWorksStep = {
  step: string;
  title: string;
  description: string;
};

export const howItWorks: HowItWorksStep[] = [
  {
    step: "01",
    title: "Primeiro contato",
    description:
      "Você me manda uma mensagem pelo WhatsApp contando um pouco do que te motivou a buscar terapia.",
  },
  {
    step: "02",
    title: "Agendamento",
    description:
      "Combinamos juntas o melhor horário e a modalidade: presencial em Fortaleza ou online.",
  },
  {
    step: "03",
    title: "Primeira sessão",
    description:
      "Um espaço para nos conhecermos: você compartilha sua história e alinhamos expectativas para o processo.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    description:
      "Sessões regulares, geralmente semanais no início, para construirmos juntas novas formas de lidar com o que te trouxe até aqui.",
  },
  {
    step: "05",
    title: "Alta",
    description:
      "Com o tempo, o espaçamento entre sessões pode diminuir, passando a ser quinzenal ou mensal, acompanhando seu processo.",
  },
];

export type Benefit = {
  icon: "Wind" | "HeartHandshake" | "Puzzle" | "Sparkles";
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: "Wind",
    title: "Alívio de ansiedade e estresse",
    description:
      "A terapia fornece um espaço para você compreender e criar formas efetivas de lidar com suas preocupações e medos.",
  },
  {
    icon: "HeartHandshake",
    title: "Relacionamentos mais saudáveis",
    description:
      "Construção de um melhor relacionamento com você mesma e com seus pares, desenvolvendo comunicação e novas perspectivas.",
  },
  {
    icon: "Puzzle",
    title: "Resolução de conflitos",
    description:
      "Estratégias e formas de lidar melhor com diversas áreas da vida, criando possibilidades mais saudáveis diante dos conflitos.",
  },
  {
    icon: "Sparkles",
    title: "Autoestima fortalecida",
    description:
      "Compreensão de emoções e pensamentos, com reconhecimento de limites e desejos e mais consciência na tomada de decisões.",
  },
];

export const about = {
  eyebrow: "Sobre mim",
  title: "Um espaço seguro para você se desenvolver",
  paragraphs: [
    "Olá! Me chamo Ana Lia Aguiar Nocrato, sou psicóloga clínica formada pela Universidade de Fortaleza e atendo como psicoterapeuta com foco na saúde mental da mulher, de forma presencial em Fortaleza e também online.",
    "Tenho experiência no atendimento de mulheres no tratamento da ansiedade e na mediação clínica de questões como relacionamentos, autoestima e sexualidade.",
    "Meu olhar clínico se baseia na psicologia sócio-histórico-cultural, na qual possuo formação. Acredito que a psicoterapia é um espaço de construção conjunta de desenvolvimento e potencialidades.",
  ],
  invitation: "Vamos juntas?",
};

export type EducationItem = {
  title: string;
  institution: string;
};

export const education: EducationItem[] = [
  { title: "Graduação em Psicologia", institution: "Universidade de Fortaleza (Unifor)" },
  { title: "Formação Clínica Sócio-Histórico-Cultural", institution: "IPSH" },
  { title: "Formação em Sexologia Clínica e Educacional", institution: "Fasex" },
];

export const approach = {
  eyebrow: "Abordagem terapêutica",
  title: "Psicologia sócio-histórico-cultural",
  paragraphs: [
    "Meu trabalho visa construir, junto com cada paciente, um espaço de desenvolvimento e um ambiente acolhedor e seguro para o compartilhamento de vivências e dificuldades, em que, juntas, construímos formas de lidar com as questões da vida e refletir sobre o que está acontecendo.",
    "Por meio do meu olhar clínico, busco compreender a pessoa em seu contexto social e cultural, levando em conta suas funções psicológicas dentro da própria história de vida.",
    "Serei auxílio e suporte no seu processo, reconhecendo e construindo junto com você seus próprios recursos e habilidades para permitir mudanças positivas e saudáveis na sua vida.",
  ],
};

export type SessionFormat = {
  title: string;
  duration: string;
  frequency: string;
};

export const sessionFormats: SessionFormat[] = [
  {
    title: "Terapia individual",
    duration: "Sessões de aproximadamente 50 minutos",
    frequency:
      "Inicialmente semanal; posteriormente pode passar a ocorrer a cada 15 dias ou uma vez por mês, no decorrer do processo.",
  },
  {
    title: "Terapia de casal",
    duration: "Sessões de aproximadamente 1h20",
    frequency:
      "Inicialmente semanal; posteriormente, na medida do processo, pode passar a ocorrer a cada 15 dias.",
  },
];

export type Modality = {
  icon: "MapPin" | "Video";
  title: string;
  description: string;
};

export const modalities: Modality[] = [
  {
    icon: "MapPin",
    title: "Presencial",
    description: `Atendimento no consultório em ${contact.address.full}.`,
  },
  {
    icon: "Video",
    title: "Online",
    description:
      "Sessões por videochamada, com a mesma privacidade e cuidado do atendimento presencial, de onde você estiver.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  rating: 5;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Obrigada Lia, você tem me ajudado demais a tornar as coisas mais leves! Acolhimento sem igual!! Atenciosa, prestativa e leve.",
    author: "M.E.",
    rating: 5,
  },
  {
    quote: "Atenciosa, experiente, e um excelente trabalho. Super recomendo.",
    author: "L.D.",
    rating: 5,
  },
  {
    quote: "Maravilhosa!!! Muito doce e gentil, me deixa sempre muito confortável.",
    author: "M.C.",
    rating: 5,
  },
  {
    quote: "Ana é uma ótima profissional, traz muito acolhimento. Me sinto muito bem durante o atendimento!",
    author: "C.G.",
    rating: 5,
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Quanto tempo e frequência dura uma sessão de Terapia Individual?",
    answer:
      "A sessão tem duração em média de 50 minutos a partir do horário agendado. Inicialmente, as sessões de psicoterapia irão precisar ocorrer 1 vez semanalmente, e posteriormente poderão ocorrer de 15 em 15 dias ou 1 vez por mês no decorrer do processo de alta do paciente.",
  },
  {
    question: "Quanto tempo e frequência dura uma sessão de Terapia de Casal?",
    answer:
      "A sessão de terapia de casal tem duração em média de 1h20. Inicialmente as sessões irão precisar ocorrer 1 vez semanalmente, e posteriormente, na medida do processo, poderão ocorrer de 15 em 15 dias.",
  },
  {
    question: "Como ocorre o pagamento e quanto é o valor?",
    answer:
      "O pagamento poderá ser feito através de transferência bancária ou Pix. Me mande uma mensagem pelo Whatsapp para saber sobre o valor do atendimento.",
  },
  {
    question: "Como funciona a confidencialidade nas sessões de psicoterapia?",
    answer:
      "Como psicóloga, sou comprometida em manter o que foi dito na sessão em sigilo, seguindo o código de ética da profissão. As únicas exceções de quebra de sigilo são situações em que há risco de vida.",
  },
  {
    question: "Como posso agendar uma sessão?",
    answer:
      "Para marcarmos uma sessão é só entrar em contato comigo pelo Whatsapp, onde poderei explicar melhor como meus atendimentos funcionam e poderemos combinar um horário adequado para nós duas!",
  },
  {
    question: "Possui convênio ou plano de saúde?",
    answer:
      "Não, os atendimentos são apenas particulares. Mas você pode se informar com o seu plano de saúde sobre a solicitação do reembolso mediante recibo.",
  },
];

export const images = {
  hero: {
    src: "/images/hero-ana-lia.jpg",
    alt: "Ana Lia Nocrato, psicóloga, sorrindo em seu consultório em Fortaleza",
  },
  about1: {
    src: "/images/about-ana-lia-2.jpg",
    alt: "Retrato de Ana Lia Nocrato, psicóloga clínica",
  },
  about2: {
    src: "/images/about-ana-lia-1.jpg",
    alt: "Ana Lia Nocrato em seu ambiente de trabalho",
  },
};
