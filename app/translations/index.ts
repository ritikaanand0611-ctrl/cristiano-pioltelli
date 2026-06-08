import type { Lang } from "@/app/context/LanguageContext";

const translations = {
  en: {
    nav: {
      clothing:    "CLOTHING",
      lookbook:    "LOOKBOOK",
      accessories: "ACCESSORIES",
    },
    ourStory: {
      eyebrow:  "The Founder",
      headline: "Cristiano Pioltelli: Redefining modern Italian tailoring.",
      body1:    "Founded on a singular vision, Cristiano Pioltelli bridges the gap between traditional craftsmanship and contemporary, pastoral silhouettes. Every piece is a testament to the quiet luxury of mindful design and uncompromising quality.",
      body2:    "Based in Pavia, Italy, the atelier draws from the region's rich textile heritage — slow fashion rooted in place, season, and intention.",
      cta:      "Discover the Atelier",
      caption:  "Cristiano Pioltelli — Founder & Head Designer · Pavia, Italy",
    },
    newArrivals: {
      heading: "New Arrivals",
      viewAll: "View All",
    },
    collections: {
      eyebrow:  "Collections",
      heading:  "Shop by Category",
      tiles: [
        { label: "Outerwear",   caption: "Layered with intention" },
        { label: "Knitwear",    caption: "Warmth, redefined"       },
        { label: "Accessories", caption: "The finishing note"      },
      ],
    },
    footer: {
      tagline:   "Modern silhouettes rooted in artisanal heritage. Based in Pavia, Italy.",
      copyright: "© 2025 Cristiano Pioltelli. All rights reserved.",
      columns: [
        {
          heading: "Shop",
          links: ["New Arrivals", "Outerwear", "Knitwear", "Dresses", "Accessories"],
        },
        {
          heading: "Help",
          links: ["Sizing Guide", "Shipping & Returns", "Contact Us", "Stockists", "Privacy Policy"],
        },
        {
          heading: "Atelier",
          links: ["Our Story", "Craftsmanship", "Sustainability", "Press", "Careers"],
        },
      ],
    },
  },

  it: {
    nav: {
      clothing:    "ABBIGLIAMENTO",
      lookbook:    "LOOKBOOK",
      accessories: "ACCESSORI",
    },
    ourStory: {
      eyebrow:  "Il Fondatore",
      headline: "Cristiano Pioltelli: Ridefinire la sartoria italiana moderna.",
      body1:    "Fondato su una visione singolare, Cristiano Pioltelli colma il divario tra l'artigianato tradizionale e le silhouette contemporanee e pastorali. Ogni pezzo è una testimonianza del lusso silenzioso del design consapevole e della qualità senza compromessi.",
      body2:    "Con sede a Pavia, l'atelier attinge al ricco patrimonio tessile della regione — una moda lenta radicata nel luogo, nella stagione e nell'intenzione.",
      cta:      "Scopri l'Atelier",
      caption:  "Cristiano Pioltelli — Fondatore e Direttore Creativo · Pavia, Italia",
    },
    newArrivals: {
      heading: "Nuovi Arrivi",
      viewAll: "Vedi Tutto",
    },
    collections: {
      eyebrow:  "Collezioni",
      heading:  "Acquista per Categoria",
      tiles: [
        { label: "Capispalla", caption: "Stratificato con intenzione" },
        { label: "Maglieria",  caption: "Calore, ridefinito"          },
        { label: "Accessori",  caption: "La nota finale"              },
      ],
    },
    footer: {
      tagline:   "Silhouette moderne radicate nel patrimonio artigianale. Con sede a Pavia, Italia.",
      copyright: "© 2025 Cristiano Pioltelli. Tutti i diritti riservati.",
      columns: [
        {
          heading: "Negozio",
          links: ["Nuovi Arrivi", "Capispalla", "Maglieria", "Abiti", "Accessori"],
        },
        {
          heading: "Assistenza",
          links: ["Guida alle Taglie", "Spedizioni e Resi", "Contattaci", "Rivenditori", "Informativa Privacy"],
        },
        {
          heading: "Atelier",
          links: ["La Nostra Storia", "Artigianalità", "Sostenibilità", "Stampa", "Carriere"],
        },
      ],
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return translations[lang];
}
