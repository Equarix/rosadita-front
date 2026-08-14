"use client";

import Marquee from "react-fast-marquee";
import { ClientResponse } from "@/interface/component.interface";
import { useTranslations } from "next-intl";

interface ClientMarqueeProps {
  clients: ClientResponse[];
}

export default function ClientMarquee({ clients }: ClientMarqueeProps) {
  const t = useTranslations("home.clients");

  if (!clients || clients.length === 0) return null;

  const activeClients = clients.filter((client) => client.isActive);

  if (activeClients.length === 0) return null;

  return (
    <div className="w-full py-2 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 mb-6">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">
          {t("title")}
        </p>
      </div>
      <Marquee
        gradient={true}
        gradientColor="white"
        speed={40}
        pauseOnHover={true}
        className="flex items-center"
      >
        {activeClients.map((client) => (
          <div
            key={client._id}
            className="flex items-center justify-center mx-10 w-40 h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
          >
            {client.url ? (
              <img
                src={client.url}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <span className="font-bold text-xl text-gray-500 whitespace-nowrap">
                {client.name}
              </span>
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
