import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f0f8f8" }}>
      <Navbar />
      <Hero />
      <AboutSection />
    </main>
  );
}
