//import type { Dictionary, Locale } from "./index"; // este archivo mismo exporta los tipos
import esRaw from "./es";
import enRaw from "./en";

// Validamos que cada default export satisface Dictionary:
// @ts-ignore
export const es = esRaw as Dictionary;
// @ts-ignore
export const en = enRaw as Dictionary;

export const dictionaries: Record<Locale, Dictionary> = { es, en };

export type Locale = "es" | "en";

export type Person = {
  name: string;
  role: string;
  photo: string;
  tagline?: string;
};

export type ServiceItem = {
  key: string;
  title: string;
  href: string;
};

export type Member = {
  name: string;
  role: string;
  photo: string;   // usar /images/... en `public/` o import si está en src
  tagline?: string;
};

export type AboutDict = {
  bandTitle: string;
  headline: string;
  introHtml: string; // HTML corto y seguro
  ctaText?: string;
  ctaHref?: string;
  members: Member[];
};

// Tipos para "Pedir turno"
export type TurnCard = {
  key: string;          // id estable (ej: 'virtual' | 'office' | 'company')
  title: string;        // título visible
  desc: string;         // descripción corta
  duration?: string;    // ej: "1 h"
  price?: string;       // ej: "$ 45.000" o "Prices vary"
  href?: string;        // ruta sin prefijo de idioma (usa lnk(lang, href))
  img?: string;         // ruta pública a la imagen
};

export type TurnsDict = {
  heading: string;      // "Pedir turno" / "Book an Appointment"
  subheading?: string;  // texto bajo el título
  bookNow: string;      // etiqueta del botón
  cards: TurnCard[];    // lista de opciones
};

export type Dictionary = {
  turns: TurnsDict; 
  common: {
    brand: string;
    nav: {
      home: string;
      services: string;
      turns: string;
      contact: string;
      about: string;
    };
    cta: { contact: string };
  };

  home: {
    hero: {
      pretitle: string;
      title: string;
      motto1: string;
      motto2: string;
    };
  };

  services: {
    [x: string]: string;
    footer1: string;
    footer2: string;
    subtitle: any;
    heading_general: string;
    heading_special: string;
    // @ts-ignore
    general: ReadonlyArray<ServiceItem>;
    // @ts-ignore
    special: ReadonlyArray<ServiceItem>;
  };

  contact: {
    leftTitle: string;
    rightTitle: string;
    leftDescription: string;
    click: string;
    businessHours: string;
    viaWhatsApp: string;
    officeAddress: string;
    bookOnline: string;
    bookOnlineDesc: string;
    bookMe: string;
    urlAppointments: string;

    formLead: string;
    labels: {
      name: string; lastname: string; email: string; phone: string; message: string;
    };
    newsletter: string;
    terms: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    networkError: string;
    
  };

  about: {
    bandTitle: string;
    headline: string;
    introHtml: string;
    ctaText: string;
    ctaHref: string;
    members: ReadonlyArray<Person>;
  };

 
  
};

