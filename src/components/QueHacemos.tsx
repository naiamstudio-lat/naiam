"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="16" stroke="#1a8a7d" strokeWidth="1.6" />
        <path d="M12 18h12M18 12v12" stroke="#1a8a7d" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="18" cy="18" r="5" stroke="#1a8a7d" strokeWidth="1.2" opacity="0.5" />
      </svg>
    ),
    title: "Investigación de Mercado",
    description:
      "Analizamos el mercado, la competencia y las oportunidades para validar si tu idea tiene potencial real antes de invertir.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="4" width="24" height="28" rx="3" stroke="#1a8a7d" strokeWidth="1.6" />
        <path d="M12 12h12M12 17h8M12 22h10" stroke="#1a8a7d" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M22 22l4 4" stroke="#1a8a7d" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    title: "Pitch Deck",
    description:
      "Creamos presentaciones claras y convincentes para que puedas comunicar tu propuesta de valor a inversores y socios.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="20" rx="3" stroke="#1a8a7d" strokeWidth="1.6" />
        <path d="M4 14h28" stroke="#1a8a7d" strokeWidth="1.4" />
        <circle cx="10" cy="22" r="2" fill="#1a8a7d" opacity="0.4" />
        <path d="M16 20h10M16 24h6" stroke="#1a8a7d" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    title: "Landing Page de Validación",
    description:
      "Diseñamos y construimos landing pages para testear demanda real, capturar leads y medir interés antes del desarrollo completo.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M6 28L14 16L20 22L30 8" stroke="#1a8a7d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="16" r="2.5" fill="#1a8a7d" opacity="0.3" />
        <circle cx="20" cy="22" r="2.5" fill="#1a8a7d" opacity="0.3" />
        <circle cx="30" cy="8" r="2.5" fill="#1a8a7d" opacity="0.3" />
      </svg>
    ),
    title: "Métricas y Analítica",
    description:
      "Definimos KPIs y configuramos herramientas de medición para que tomes decisiones basadas en datos concretos.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="8" y="6" width="20" height="24" rx="4" stroke="#1a8a7d" strokeWidth="1.6" />
        <path d="M14 14h8M14 18h5" stroke="#1a8a7d" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="18" cy="26" r="1.5" fill="#1a8a7d" opacity="0.5" />
      </svg>
    ),
    title: "MVP Funcional",
    description:
      "Desarrollamos un producto mínimo viable con las funcionalidades esenciales para salir al mercado rápido y aprender.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="14" r="6" stroke="#1a8a7d" strokeWidth="1.6" />
        <path d="M8 30c0-5 4-9 10-9s10 4 10 9" stroke="#1a8a7d" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M24 12l4-4M26 16l4 0" stroke="#1a8a7d" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: "Propuesta de Valor",
    description:
      "Te ayudamos a definir y refinar tu propuesta de valor para que conectes con tu público objetivo de forma efectiva.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 6L22 14H32L24 20L27 30L18 24L9 30L12 20L4 14H14Z" stroke="#1a8a7d" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
        <circle cx="18" cy="18" r="4" stroke="#1a8a7d" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    title: "Estrategia de Posicionamiento",
    description:
      "Definimos cómo tu producto se diferencia en el mercado y construimos una narrativa que resuene con tu audiencia.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="10" width="12" height="16" rx="2" stroke="#1a8a7d" strokeWidth="1.4" />
        <rect x="20" y="6" width="12" height="20" rx="2" stroke="#1a8a7d" strokeWidth="1.4" />
        <path d="M16 18h4" stroke="#1a8a7d" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M8 16h4M8 20h4M24 12h4M24 16h4M24 20h4" stroke="#1a8a7d" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: "Modelo de Negocio",
    description:
      "Diseñamos y validamos tu modelo de negocio usando frameworks como Lean Canvas para encontrar la mejor vía de monetización.",
  },
];

function AnimatedCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "32px 28px",
        border: "1px solid #d8ebe8",
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#1a8a7d";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(26,138,125,0.12)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#d8ebe8";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          backgroundColor: "#eef8f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: "#3a1a5e",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 14.5,
          color: "#4a4a4a",
          lineHeight: 1.6,
          fontWeight: 400,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function QueHacemos() {
  return (
    <section
      id="que-hacemos"
      style={{
        padding: "80px 32px",
        backgroundColor: "#eef6f6",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 13,
              fontWeight: 600,
              color: "#1a8a7d",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 12,
            }}
          >
            Qué hacemos
          </span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              fontWeight: 800,
              color: "#3a1a5e",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Todo lo que necesitás para dar los primeros pasos
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#4a4a4a",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Acompañamos cada etapa del camino emprendedor con servicios concretos y orientados a resultados.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {services.map((service, i) => (
            <AnimatedCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
