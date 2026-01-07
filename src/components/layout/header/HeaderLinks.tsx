"use client";

import cx from "@/utils/cx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/proyectos",
    label: "Proyectos",
  },
  {
    href: "/servicios",
    label: "Servicios",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contacto",
    label: "Contacto",
  },
];

export default function HeaderLinks() {
  const pathName = usePathname();
  return (
    <nav className="flex items-center gap-4 text-lg">
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={cx(
            "hover:text-blue-500 transition-colors font-semibold",
            pathName === link.href && "text-blue-500"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
