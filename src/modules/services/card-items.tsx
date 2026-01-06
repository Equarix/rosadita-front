import { CardServicesProps } from "@/components/ui/card-services/CardServices";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import {
  LuChartColumnBig,
  LuChartNoAxesCombined,
  LuCodeXml,
} from "react-icons/lu";
import { MdOutlineCloud, MdPhonelink } from "react-icons/md";
import { RxStack } from "react-icons/rx";

export const cardItems: CardServicesProps[] = [
  {
    icon: <LuCodeXml />,
    title: "Desarrollo Web de Alto Impacto",
    description: [
      `Creamos ecosistemas digitales que combinan un
diseño visual impactante con una arquitectura técnica
robusta. No solo construimos sitios web,
desarrollamos aplicaciones web progresivas (PWA) y
Single Page Applications (SPA) diseñadas para la
velocidad y la conversión.`,
      `Nuestro enfoque "mobile-first" y el cumplimiento
estricto de estándares de accesibilidad garantizan
que tu producto llegue a cada usuario, en cualquier
dispositivo, sin fricción.`,
    ],
    mainColor: "text-blue-700",
    secondaryColor: "bg-blue-100",
    cardFeatures: {
      icon: <RxStack />,
      title: "Características Clave",
      items: [
        {
          title: "Arquitectura Headless",
          description: "Desacople total para máxima flexibilidad de contenido.",
        },
        {
          title: "SEO Técnico Avanzado",
          description: "Optimización Core Web Vitals para ranking superior.",
        },
        {
          title: "Frontend Reactivo",
          description: "React, Vue o Angular para interfaces dinámicas.",
        },
        {
          title: "Integración API",
          description: "Conexión fluida con CRMs, ERPs y pasarelas de pago.",
        },
      ],
    },
  },
  {
    icon: <HiOutlineDevicePhoneMobile />,
    title: "Aplicaciones Móviles Nativas",
    description: [
      `Lleva tu negocio al bolsillo de tus clientes con
aplicaciones móviles que deleitan. Nos
especializamos en crear experiencias fluidas que
aprovechan al máximo el hardware de los dispositivos
modernos.`,
      `Desde el concepto hasta la publicación en App Store
y Google Play, gestionamos todo el ciclo de vida del
producto móvil, asegurando rendimiento nativo y una
UX intuitiva.`,
    ],
    mainColor: "text-purple-700",
    secondaryColor: "bg-purple-100",
    cardFeatures: {
      icon: <MdPhonelink />,
      title: "Tecnologías y Beneficios",
      items: [
        {
          title: "Desarrollo Nativo",
          description:
            "Swift (iOS) y Kotlin (Android) para máximo rendimiento.",
        },
        {
          title: "Multiplataforma",
          description: "React Native y Flutter para reducir tiempo de mercado.",
        },
        {
          title: "Diseño UI/UX",
          description: "Interfaces centradas en el usuario y accesibles.",
        },
        {
          title: "Offline First",
          description:
            "Funcionalidad garantizada incluso sin conexión a internet.",
        },
      ],
    },
  },
  {
    icon: <MdOutlineCloud />,
    title: "Arquitectura Cloud & DevOps",
    description: [
      `Moderniza tu infraestructura y acelera tus ciclos de
entrega. Diseñamos arquitecturas en la nube
resilientes y automatizamos tus operaciones de TI
para que tu equipo pueda centrarse en innovar, no en
apagar fuegos.`,
      `Desde migraciones complejas hasta la
implementación de cultura DevOps, garantizamos
sistemas de alta disponibilidad y seguridad robusta.`,
    ],
    mainColor: "text-sky-700",
    secondaryColor: "bg-sky-100",
    cardFeatures: {
      icon: <MdOutlineCloud />,
      title: "Soluciones de Infraestructura",
      items: [
        {
          title: "Cloud Migration",
          description: "Transición segura a AWS, Azure o Google Cloud.",
        },
        {
          title: "Serverless Computing",
          description: "Arquitecturas basadas en eventos que reducen costos.",
        },
        {
          title: "CI/CD Pipelines",
          description: "Integración y despliegue continuo automatizado.",
        },
        {
          title: "Docker & Kubernetes",
          description: "Orquestación de contenedores a escala empresarial.",
        },
      ],
    },
  },
  {
    icon: <LuChartColumnBig />,
    title: "Inteligencia de Datos e IA",
    description: [
      `Convierte el caos de datos en una ventaja competitiva
clara. Diseñamos pipelines de datos y modelos de
Machine Learning que descubren patrones ocultos y
predicen tendencias futuras.`,
      `Empoderamos a tu organización para tomar
decisiones basadas en evidencia, no en intuición,
mediante visualizaciones claras y potentes.`,
    ],
    mainColor: "text-green-700",
    secondaryColor: "bg-green-100",
    cardFeatures: {
      icon: <LuChartNoAxesCombined />,
      title: "Capacidades Analíticas",
      items: [
        {
          title: "Business Intelligence",
          description: "Dashboards interactivos (PowerBI, Tableau) para KPIs.",
        },
        {
          title: "Machine Learning",
          description: "Modelos predictivos y algoritmos de recomendación.",
        },
        {
          title: "Big Data Pipelines",
          description: "Procesamiento ETL de grandes volúmenes de datos.",
        },
        {
          title: "Data Warehousing",
          description:
            "Almacenamiento centralizado y optimizado para análisis.",
        },
      ],
    },
  },
];
