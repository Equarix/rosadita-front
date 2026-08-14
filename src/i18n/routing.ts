import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": {
      es: "/",
      en: "/",
    },
    "/servicios": {
      es: "/servicios",
      en: "/services",
    },
    "/proyectos": {
      es: "/proyectos",
      en: "/projects",
    },
    "/proyectos/[categorySlug]": {
      es: "/proyectos/[categorySlug]",
      en: "/projects/[categorySlug]",
    },
    "/proyectos/detalle/[slug]": {
      es: "/proyectos/detalle/[slug]",
      en: "/projects/detail/[slug]",
    },
    "/blog": {
      es: "/blog",
      en: "/blog",
    },
    "/blog/[categorySlug]": {
      es: "/blog/[categorySlug]",
      en: "/blog/[categorySlug]",
    },
    "/blog/detalle/[slug]": {
      es: "/blog/detalle/[slug]",
      en: "/blog/detail/[slug]",
    },
    "/contacto": {
      es: "/contacto",
      en: "/contact",
    },
  },
});
