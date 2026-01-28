// Contact Information
export const CONTACT_INFO = {
  whatsapp: '5512991363030',
  phone: '(12) 99136-3030',
  email: 'susileoni@yahoo.com.br',
  address: 'R. Itambé, 661 - Jardim Satélite, São José dos Campos - SP, 12230-660',
  addressShort: 'Rua Itambé, 661 - Jardim Satélite',
  city: 'São José dos Campos',
  state: 'SP',
} as const;

// Social Media Links
export const SOCIAL_MEDIA = {
  instagram: 'https://www.instagram.com/susinutri',
  facebook: 'https://www.facebook.com/share/1Es6XDom4W/',
  linkedin: 'https://br.linkedin.com/in/susi-farias-4296a430',
  youtube: 'https://www.youtube.com/@SusiFariasNutricionistaEsporti',
  google: 'https://share.google/6sKqJG8BLqu4sDV2i',
} as const;

// Google Maps
export const GOOGLE_MAPS = {
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.8197467280556!2d-45.89019!3d-23.20369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4b2b2b2b2b2b%3A0x2b2b2b2b2b2b2b2b!2sR.%20Itamb%C3%A9%2C%20661%20-%20Jardim%20Sat%C3%A9lite%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890',
  mapsLink: 'https://maps.app.goo.gl/fNSc5z9hyMGABQcw8',
  shareLink: 'https://share.google/cQ8qS6UOupk7yHAQP',
} as const;

// WhatsApp Messages
export const WHATSAPP_MESSAGES = {
  floatingButton: 'Oi, vim do seu site e gostaria de mais informações sobre seus serviços!',
  consultaAvulsa: 'Gostaria de agendar uma consulta avulsa. Pode me informar sobre disponibilidade?',
  pacote3m: 'Tenho interesse no pacote de 3 meses. Qual seria o melhor para mim?',
  pacote6m: 'Tenho interesse no pacote de 6 meses. Qual seria o melhor para mim?',
  pacote12m: 'Tenho interesse no pacote de 12 meses. Qual seria o melhor para mim?',
  bioimpedancia: 'Gostaria de fazer uma avaliação de bioimpedância. Como funciona?',
  mounjaro: 'Tenho interesse em informações sobre o programa Mounjaro. Pode me ajudar?',
  nutritionClinical: 'Tenho interesse em nutrição clínica. Qual seria o melhor tratamento para meu caso?',
  nutritionSports: 'Sou atleta e gostaria de conhecer sobre nutrição esportiva. Pode me ajudar?',
  contact: 'Olá! Entrei em contato através do formulário de contato do seu site.',
  florais: 'Tenho interesse em conhecer mais sobre os florais de Minas. Pode me ajudar?',
  suplementacao: 'Gostaria de saber mais sobre suplementação personalizada. Pode me ajudar?',
} as const;

// Navigation Items
export const NAVIGATION_ITEMS = [
  { label: 'Início', href: '/', icon: 'Home' },
  { label: 'Sobre Mim', href: '/about', icon: 'User' },
  { label: 'Nutrição', href: '#', icon: 'Apple', submenu: true },
  { label: 'Mounjaro', href: '/mounjaro', icon: 'Pill' },
  { label: 'Serviços', href: '/services', icon: 'Briefcase' },
  { label: 'Contato', href: '/contact', icon: 'Mail' },
] as const;

// Nutrition Submenu
export const NUTRITION_SUBMENU = [
  { label: 'Nutrição Clínica', href: '/nutrition/clinical' },
  { label: 'Nutrição Esportiva', href: '/nutrition/sports' },
] as const;

// Services
export const SERVICES = [
  {
    id: 'consulta-avulsa',
    title: 'Consulta Avulsa',
    description: 'Consulta individualizada com análise completa de seu histórico nutricional',
    icon: 'Stethoscope',
    message: 'Gostaria de agendar uma consulta avulsa. Pode me informar sobre disponibilidade?',
  },
  {
    id: 'pacotes',
    title: 'Pacotes',
    description: 'Programas personalizados com acompanhamento contínuo',
    icon: 'Package',
    message: 'Tenho interesse em conhecer seus pacotes de nutrição. Qual seria o melhor para mim?',
  },
  {
    id: 'bioimpedancia',
    title: 'Bioimpedância',
    description: 'Avaliação de composição corporal com relatório detalhado',
    icon: 'Activity',
    message: 'Gostaria de fazer uma avaliação de bioimpedância. Como funciona?',
  },
  {
    id: 'florais',
    title: 'Florais de Minas',
    description: 'Complementação natural para seu tratamento nutricional',
    icon: 'Flower2',
    message: 'Tenho interesse em conhecer mais sobre os florais de Minas. Pode me ajudar?',
  },
  {
    id: 'suplementacao',
    title: 'Suplementação',
    description: 'Recomendações personalizadas de suplementos nutricionais',
    icon: 'Pill',
    message: 'Gostaria de saber mais sobre suplementação personalizada. Pode me ajudar?',
  },
] as const;

// Company Info
export const COMPANY_INFO = {
  name: 'Susi Farias',
  title: 'Nutricionista',
  tagline: 'Transformando vidas através da nutrição',
  year: new Date().getFullYear(),
  developedBy: 'Apezato Marketing',
  developedByUrl: 'https://www.apezatomarketing.com.br',
} as const;

// Animation Timings (in ms)
export const ANIMATION_TIMINGS = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 800,
  stagger: 80,
} as const;

// Gallery Images
export const GALLERY_IMAGES = Array.from({ length: 37 }, (_, i) => ({
  id: i + 1,
  src: `/assets/images/foto galeria slide rotativo animado sobre mim (${i + 1}).jpeg`,
  alt: `Galeria Susi Farias ${i + 1}`,
}));

// Featured Images
export const FEATURED_IMAGES = {
  home: '/assets/images/foto inicio.jpeg',
  aboutHighlight: '/assets/images/foto destaque sobre mim.jpeg',
  aboutAchievement: '/assets/images/foto sobre a conquista dela sobre mim.jpeg',
} as const;

// Videos
export const VIDEOS = {
  home: '/assets/videos/video inicio.MOV',
  mounjaro: '/assets/videos/video mounjaro.MOV',
} as const;

// Footer Links
export const FOOTER_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Sobre Mim', href: '/about' },
  { label: 'Nutrição', href: '/nutrition/clinical' },
  { label: 'Mounjaro', href: '/mounjaro' },
  { label: 'Serviços', href: '/services' },
  { label: 'Contato', href: '/contact' },
] as const;

// Policy Links
export const POLICY_LINKS = [
  { label: 'Política de Privacidade', href: '#privacy' },
  { label: 'Termos de Uso', href: '#terms' },
  { label: 'Política de Cookies', href: '#cookies' },
] as const;
