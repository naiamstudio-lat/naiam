import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import QueHacemos from "@/components/QueHacemos";
import ComoTrabajamos from "@/components/ComoTrabajamos";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#eef6f6" }}>
      <Navbar />
      <Hero />
      <AboutSection />
      <QueHacemos />
      <ComoTrabajamos />
    </main>
  );
}