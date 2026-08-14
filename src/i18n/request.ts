import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale;
  }


  const files = ["contact", "common"];

  const messagesEntries = await Promise.all(
    files.map(async (file) => {
      try {
        const content = (await import(`./messages/${locale}/${file}.json`))
          .default;
        return [file, content];
      } catch {
        return [file, {}];
      }
    }),
  );

  const messages = Object.fromEntries(messagesEntries);

  return {
    locale,
    messages,
  };
});
