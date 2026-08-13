/**
 * Configuração central do site TMJL Marketing Local.
 * Atualize a URL de produção antes do deploy.
 */

// URL base do site em produção. Altere aqui e em astro.config.mjs ao publicar.
export const SITE_URL = "https://tmjlmarketinglocal.vercel.app";

export const siteConfig = {
  name: "TMJL Marketing Local",
  tagline: "Google Meu Negócio no Rio de Janeiro",
  url: SITE_URL,
  locale: "pt_BR",
  language: "pt-BR",
  defaultTitle: "TMJL Marketing Local — Google Meu Negócio no Rio de Janeiro",
  defaultDescription:
    "Criação e otimização de perfis no Google Meu Negócio para ranqueamento orgânico, reputação e geração real de clientes no Rio de Janeiro.",
  keywords: [
    "Google Meu Negócio",
    "SEO local",
    "marketing local",
    "Rio de Janeiro",
    "otimização de perfil",
    "fotos 360°",
    "tour virtual",
    "Google Maps",
    "reputação online",
    "avaliações Google"
  ],
  contact: {
    phone: "(21) 96548-3234",
    phoneRaw: "+5521965483234",
    whatsapp: "5521965483234",
    whatsappLink: "https://wa.me/5521965483234",
    email: "jeffersonlourencoseo@gmail.com",
    address:
      "Av. Vicente de Carvalho, 909 - sala 2105 - Vila da Penha, Rio de Janeiro - RJ, 21210-000",
    streetAddress: "Av. Vicente de Carvalho, 909 - sala 2105",
    locality: "Rio de Janeiro",
    region: "RJ",
    postalCode: "21210-000",
    country: "BR"
  },
  social: {
    whatsapp: "https://wa.me/5521965483234",
    email: "mailto:jeffersonlourencoseo@gmail.com"
  },
  og: {
    image: "/og-image.jpg",
    type: "website" as const
  },
  brand: {
    logo: "/logo-transparent.png",
    favicon: "/favicon.svg"
  }
};

/** Schema.org LocalBusiness JSON-LD. */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.defaultDescription,
  url: siteConfig.url,
  telephone: siteConfig.contact.phoneRaw,
  email: siteConfig.contact.email,
  image: `${siteConfig.url}${siteConfig.brand.logo}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.streetAddress,
    addressLocality: siteConfig.contact.locality,
    addressRegion: siteConfig.contact.region,
    postalCode: siteConfig.contact.postalCode,
    addressCountry: siteConfig.contact.country
  },
  sameAs: [siteConfig.social.whatsapp],
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Rio de Janeiro",
    containedInPlace: {
      "@type": "State",
      name: "Rio de Janeiro",
      containedInPlace: {
        "@type": "Country",
        name: "Brasil"
      }
    }
  }
};

export default siteConfig;
