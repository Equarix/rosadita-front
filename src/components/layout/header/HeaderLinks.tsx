"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import cx from "@/utils/cx";

export function HeaderLinks({ vertical = false }) {
  const pathname = usePathname();
  const t = useTranslations("common.header.nav");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/proyectos", label: t("projects") },
    { href: "/servicios", label: t("services") },
    { href: "/blog", label: t("blog") },
    { href: "/contacto", label: t("contact") },
  ] as const;

  return (
    <nav
      className={cx(
        "gap-4 font-semibold",
        vertical ? "flex flex-col text-base" : "hidden lg:flex items-center text-lg",
      )}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cx(
            "hover:text-blue-500 transition-colors",
            pathname === link.href && "text-blue-500",
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

