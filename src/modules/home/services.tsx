import { MdOutlineSecurity, MdWeb } from "react-icons/md";
import { ServiceCardProps } from "./components/ServiceCard";
import { FaCloud, FaMobileScreen } from "react-icons/fa6";
import { RiCodeView } from "react-icons/ri";
import { GoCodescan } from "react-icons/go";
import { ReactNode } from "react";

export interface ServiceItemData {
  key: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export const serviceCards: ServiceItemData[] = [
  {
    key: "web",
    icon: <MdWeb />,
    title: "Desarrollo Web",
    description:
      "Aplicaciones web escalables y modernas adaptadas a su negocio.",
  },
  {
    key: "mobile",
    icon: <FaMobileScreen />,
    title: "Apps Moviles",
    description:
      "Soluciones móviles nativas y multiplataforma para iOS y Android con Flutter y React Native.",
  },
  {
    key: "cloud",
    icon: <FaCloud />,
    title: "Infraestructura en la Nube",
    description:
      "Arquitectura de nube escalable y segura que utiliza AWS y Azure para garantizar que sus aplicaciones estén siempre disponibles.",
  },
  {
    key: "devops",
    icon: <RiCodeView />,
    title: "DevOps & CI/CD",
    description:
      "Canalizaciones automatizadas y contenedorización para optimizar el proceso de desarrollo e implementación.",
  },
  {
    key: "security",
    icon: <MdOutlineSecurity />,
    title: "Ciberseguridad",
    description:
      "Implementando sólidas medidas de seguridad para proteger sus datos y garantizar el cumplimiento de los estándares de la industria.",
  },
  {
    key: "data",
    icon: <GoCodescan />,
    title: "Analisis de Datos",
    description:
      "Transformamos datos sin procesar en información útil mediante paneles de control personalizados y soluciones de inteligencia empresarial.",
  },
];
