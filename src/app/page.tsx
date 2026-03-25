import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import QueHacemos from "@/components/QueHacemos";
import ComoTrabajamos from "@/components/ComoTrabajamos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#eef6f6" }}>
      <Navbar />
      <Hero />
      <AboutSection />
      <QueHacemos />
      <ComoTrabajamos />

      {/* CTA to glossary */}
      <section
        style={{
          padding: "64px 32px",
          backgroundColor: "#eef6f6",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            backgroundColor: "#fff",
            border: "1.5px solid #d8ebe8",
            borderRadius: 20,
            padding: "40px 32px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: 12,
              fontWeight: 600,
              color: "#1a8a7d",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 10,
            }}
          >
            Recursos
          </span>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
              fontWeight: 800,
              color: "#3a1a5e",
              lineHeight: 1.25,
              marginBottom: 12,
            }}
          >
            Glosario para Startups
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#4a4a4a",
              lineHeight: 1.6,
              marginBottom: 24,
              maxWidth: 440,
              margin: "0 auto 24px",
            }}
          >
            +50 conceptos clave organizados por etapa. Desde Research hasta
            Lanzamiento, todo lo que necesitás saber como fundador.
          </p>
          <a
            href="/startup-glossary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#1a8a7d",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 50,
              fontSize: 14.5,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Explorar glosario
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4l4 4-4 4"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
