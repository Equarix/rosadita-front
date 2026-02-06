"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "@/utils/cx";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function HeaderLinks({ vertical = false }) {
  const pathname = usePathname();

  return (
    <nav
      className={cx(
        "flex gap-4 font-semibold",
        vertical ? "flex-col text-base" : "items-center text-lg",
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
