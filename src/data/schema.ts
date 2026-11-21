import { site, fullAddress } from './config';

const U = site.url;
export const ids = {
  org: `${U}/#empresa`,
  person: `${U}/#jefferson`,
  website: `${U}/#site`,
};

export const orgNode = {
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': ids.org,
  name: site.name,
  alternateName: 'TMJL',
  description: site.description,
  url: `${U}/`,
  logo: `${U}/img/logo-tmjl.webp`,
  image: `${U}/og-image.jpg`,
  telephone: site.contact.phoneRaw,
  email: site.contact.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.contact.street,
    addressLocality: site.contact.city,
    addressRegion: site.contact.region,
    postalCode: site.contact.postalCode,
    addressCountry: site.contact.country,
  },
  areaServed: [
    { '@type': 'City', name: 'Rio de Janeiro' },
    { '@type': 'State', name: 'Rio de Janeiro' },
    { '@type': 'Country', name: 'Brasil' },
  ],
  founder: { '@id': ids.person },
  employee: { '@id': ids.person },
  knowsAbout: ['Google Meu Negócio', 'Perfil da Empresa no Google', 'SEO local', 'Google Maps', 'Fotos 360°', 'Tour virtual', 'Street View', 'Criação de sites'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Criação e otimização de Google Meu Negócio', url: `${U}/google-meu-negocio/` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fotos 360° e tour virtual no Google', url: `${U}/fotos-360/` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Criação de sites com SEO local', url: `${U}/criacao-de-sites/` } },
    ],
  },
  sameAs: site.sameAs,
};

export const personNode = {
  '@type': 'Person',
  '@id': ids.person,
  name: site.person,
  jobTitle: 'Especialista em Google Meu Negócio e SEO local',
  image: `${U}/img/jefferson-lourenco.jpg`,
  worksFor: { '@id': ids.org },
  url: `${U}/`,
  address: { '@type': 'PostalAddress', addressLocality: site.contact.city, addressRegion: site.contact.region, addressCountry: 'BR' },
};

export const websiteNode = {
  '@type': 'WebSite',
  '@id': ids.website,
  url: `${U}/`,
  name: site.name,
  inLanguage: site.lang,
  publisher: { '@id': ids.org },
};

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Início', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${U}${it.path}`,
    })),
  };
}

export function faqNode(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function serviceNode(name: string, path: string, description: string) {
  return {
    '@type': 'Service',
    '@id': `${U}${path}#servico`,
    name,
    description,
    url: `${U}${path}`,
    provider: { '@id': ids.org },
    areaServed: { '@type': 'City', name: 'Rio de Janeiro' },
  };
}

export { fullAddress };
