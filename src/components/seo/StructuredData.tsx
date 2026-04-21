import Script from "next/script";

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Equarix",
    url: "https://equarix.vercel.app",
    logo: "https://equarix.vercel.app/favicon.ico",
    description:
      "Equarix es una agencia de desarrollo de software especializada en soluciones digitales innovadoras, desarrollo de software, diseño web y transformación digital.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+51977834606",
      contactType: "customer service",
      email: "equarix@outlook.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/equarix", // Ajustar URLs reales
      "https://twitter.com/equarix",
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Equarix",
    url: "https://equarix.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://equarix.vercel.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="structured-data-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="structured-data-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
