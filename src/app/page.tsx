import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#eef6f6" }}>
      <Navbar />
      <Hero />
      <AboutSection />
    </main>
  );
}
