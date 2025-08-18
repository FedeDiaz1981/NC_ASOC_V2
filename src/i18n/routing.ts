// src/i18n/routing.ts
export type Locale = "es" | "en";

/** Devuelve el href localizado. */
export function lnk(lang: Locale, href: string): string {
  if (!href) return "#";
  // URLs absolutas no se tocan
  if (/^https?:\/\//i.test(href)) return href;

  // Normaliza y evita duplicar prefijos /en o /es
  const clean = href.startsWith("/") ? href : `/${href}`;
  if (/^\/(en|es)(\/|$)/i.test(clean)) return clean;

  return lang === "es" ? clean : `/en${clean}`;
}
