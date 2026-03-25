import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Glosario from "@/components/Glosario";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Glosario para Startups – Naiam Studio",
  description:
    "Conceptos clave para fundadores organizados por etapa: Research, Validación, Ideación, Financiamiento, Desarrollo y Lanzamiento.",
};

export default function GlosarioPage() {
  return (
    <main>
      <Navbar />
      <Glosario />
      <Footer />
    </main>
  );
}
