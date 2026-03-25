import type { Metadata } from "next";
import Glosario from "@/components/Glosario";

export const metadata: Metadata = {
  title: "Glosario para Startups – Navan Studio",
  description:
    "Conceptos clave para fundadores organizados por etapa: Research, Validación, Ideación, Financiamiento, Desarrollo y Lanzamiento.",
};

export default function GlosarioPage() {
  return <Glosario />;
}
