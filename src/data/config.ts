/**
 * Configuração central do site. Tudo que muda (domínio, contato, GA4) fica aqui.
 * Ao ligar o domínio próprio: troque SITE_URL aqui e em astro.config.mjs.
 */
export const SITE_URL = 'https://www.jeffersonlourenco.com.br';

export const site = {
  name: 'TMJL Marketing Local',
  shortName: 'TMJL',
  person: 'Jefferson Lourenço',
  url: SITE_URL,
  locale: 'pt_BR',
  lang: 'pt-BR',
  description:
    'Jefferson Lourenço e a TMJL Marketing Local: Google Meu Negócio, criação de sites e fotos 360°, com atendimento 100% remoto.',
  gmnUrl: 'https://maps.app.goo.gl/mrM76t3LSsV8MiGF8', // Perfil da TMJL no Google
  ga4Id: '', // preencher com G-XXXXXXX quando a propriedade GA4 for criada
  contact: {
    phone: '(21) 99775-1577',
    phoneRaw: '+5521997751577',
    whatsapp: '5521997751577',
    email: 'jeffersonlourencoseo@gmail.com',
    street: 'Av. Vicente de Carvalho, 909, sala 2105',
    district: 'Vila da Penha',
    city: 'Rio de Janeiro',
    region: 'RJ',
    postalCode: '21210-000',
    country: 'BR',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Av.+Vicente+de+Carvalho,+909,+Vila+da+Penha,+Rio+de+Janeiro',
  },
  sameAs: ['https://maps.app.goo.gl/mrM76t3LSsV8MiGF8'] as string[], // links do Perfil da Empresa no Google, Instagram etc.
};

export const fullAddress = `${site.contact.street}, ${site.contact.district}, ${site.contact.city} - ${site.contact.region}, ${site.contact.postalCode}`;

/** Monta o link do WhatsApp com a mensagem do contexto do botão. */
export function wa(assunto = 'os serviços da TMJL') {
  const msg = `Olá, Jefferson! Vim pelo site e quero saber mais sobre ${assunto}.`;
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const nav = [
  { href: '/google-meu-negocio/', label: 'Google Meu Negócio' },
  { href: '/criacao-de-sites/', label: 'Sites' },
  { href: '/fotos-360/', label: 'Fotos 360°' },
  { href: '/portfolio/', label: 'Portfólio' },
  { href: '/blog/', label: 'Blog' },
  { href: '/quem-somos/', label: 'Quem somos' },
  { href: '/contato/', label: 'Contato' },
];
