import type { Product, BlogPost, TimelineItem, NavItem, FooterLink } from '../types';

export const siteConfig = {
  name: 'Brubru Nails',
  tagline: 'Transformando experiência em crescimento para Nail Designers',
  description: 'Ferramentas digitais criadas por quem vive o mercado das unhas há mais de 20 anos. Transforme seu talento em um negócio de sucesso.',
  url: 'https://brubrunails.com.br',
  author: 'Bruna',
  cnpj: '60.510.248/0001-24',
  address: {
    city: 'São José',
    state: 'Santa Catarina',
    full: 'São José - Santa Catarina',
  },
  social: {
    instagram: 'https://instagram.com/brubrunails',
    whatsapp: 'https://wa.me/5548999910336',
    email: 'brukabecker@gmail.com',
    phone: '(48) 99991-0336',
  },
};

export const navItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];

export const products: Product[] = [
  {
    id: 'agenda-lotada',
    name: 'Agenda Lotada Nail',
    description: 'Organize sua agenda e nunca mais perca clientes. Sistema completo para Nail Designers que querem agenda cheia.',
    shortDescription: 'Sistema completo para agenda cheia',
    image: '/images/products/agenda-lotada.svg',
    externalUrl: '#',
    badge: 'Mais Vendido',
    features: [
      'Organização completa da agenda',
      'Controle de clientes',
      'Lembretes automáticos',
      'Gestão de horários',
    ],
  },
  {
    id: '365-posts',
    name: '365 Posts',
    description: '365 ideias de posts para suas redes sociais. Nunca mais fique sem conteúdo para publicar.',
    shortDescription: '365 ideias de posts para redes sociais',
    image: '/images/products/365-posts.svg',
    externalUrl: '#',
    features: [
      '365 ideias prontas',
      'Conteúdo para Stories e Feed',
      'Dicas de engajamento',
      'Calendário editorial',
    ],
  },
  {
    id: 'tabela-perfeita',
    name: 'Tabela Perfeita',
    description: 'Tabela de preços profissional. Saiba exatamente quanto cobrar por cada serviço.',
    shortDescription: 'Tabela de preços profissional',
    image: '/images/products/tabela-perfeita.svg',
    externalUrl: '#',
    features: [
      'Cálculo de custos',
      'Margem de lucro',
      'Preços competitivos',
      'Simulação de cenários',
    ],
  },
  {
    id: 'planner-nail',
    name: 'Planner Nail',
    description: 'Planeje seu mês, semana e dia. Organize sua vida profissional e pessoal.',
    shortDescription: 'Planejamento profissional completo',
    image: '/images/products/planner-nail.svg',
    externalUrl: '#',
    badge: 'Novo',
    features: [
      'Planejamento mensal',
      'Organização semanal',
      'Metas e objetivos',
      'Acompanhamento de resultados',
    ],
  },
];

export const timelineItems: TimelineItem[] = [
  {
    year: '13 anos',
    title: 'Primeira Cliente',
    description: 'Aos 13 anos, Bruna atendeu sua primeira cliente. O amor pelas unhas começou cedo.',
  },
  {
    year: 'Especialização',
    title: 'Aperfeiçoamento',
    description: 'Investiu anos em cursos, técnicas e especializações para se tornar referência.',
  },
  {
    year: 'Centenas',
    title: 'Centenas de Atendimentos',
    description: 'Atendeu centenas de clientes, refinando sua técnica e entendendo o mercado.',
  },
  {
    year: '20 anos',
    title: 'Duas Décadas',
    description: 'Mais de 20 anos de experiência transformados em conhecimento.',
  },
  {
    year: 'Hoje',
    title: 'Brubru Nails',
    description: 'Criou a Brubru Nails para compartilhar tudo que aprendeu com outras Nail Designers.',
  },
];

export const footerLinks: FooterLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/brubrunails', external: true },
  { label: 'WhatsApp', href: 'https://wa.me/5548999910336', external: true },
  { label: 'Email', href: 'mailto:brukabecker@gmail.com' },
  { label: 'Política de Privacidade', href: '/privacidade' },
  { label: 'Termos de Uso', href: '/termos' },
];
