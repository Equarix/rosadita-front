import TimeLine from "@/components/ui/time-line/TimeLine";

const data = [
  {
    icon: "LuAccessibility",
    color: "RED",
    title: "01. Descubrimiento",
    description:
      "Escuchamos tus necesidades y objetivos de negocio. Realizamos una investigación profunda del mercado y usuarios para sentar las bases estratégicas del proyecto.",
    position: "RIGHT",
  },
  {
    icon: "LuAccessibility",
    color: "RED",
    title: "02. Diseño (UI/UX)",
    description:
      "Creamos experiencias memorables. Diseñamos prototipos de alta fidelidad centrados en el usuario, asegurando que la interfaz sea intuitiva, estética y funcional.",
    position: "LEFT",
  },
  {
    icon: "LuAccessibility",
    color: "RED",
    title: "01. Descubrimiento",
    description:
      "Escuchamos tus necesidades y objetivos de negocio. Realizamos una investigación profunda del mercado y usuarios para sentar las bases estratégicas del proyecto.",
    position: "RIGHT",
  },
  {
    icon: "LuAccessibility",
    color: "RED",
    title: "02. Diseño (UI/UX)",
    description:
      "Creamos experiencias memorables. Diseñamos prototipos de alta fidelidad centrados en el usuario, asegurando que la interfaz sea intuitiva, estética y funcional.",
    position: "LEFT",
  },
];

export default function page() {
  return (
    <div>
      <TimeLine items={data} />
    </div>
  );
}
