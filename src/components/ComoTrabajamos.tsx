"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  {
    number: "01",
    title: "Research",
    subtitle: "Investigación profunda",
    description:
      "Estudiamos tu mercado, competidores y usuarios potenciales para entender el terreno antes de avanzar.",
    color: "#1a8a7d",
  },
  {
    number: "02",
    title: "Validación",
    subtitle: "Prueba de hipótesis",
    description:
      "Diseñamos experimentos para testear si hay demanda real. Landing pages, entrevistas, encuestas y MVPs de baja fidelidad.",
    color: "#1f7a70",
  },
  {
    number: "03",
    title: "Ideación",
    subtitle: "Definición de producto",
    description:
      "Convertimos los aprendizajes en una propuesta clara: funcionalidades core, roadmap de producto y diseño UX inicial.",
    color: "#3a1a5e",
  },
  {
    number: "04",
    title: "Financiamiento",
    subtitle: "Búsqueda de recursos",
    description:
      "Te ayudamos a preparar tu pitch deck, modelar finanzas y conectar con oportunidades de inversión y grants.",
    color: "#4a2a6e",
  },
  {
    number: "05",
    title: "Desarrollo",
    subtitle: "Construcción del MVP",
    description:
      "Construimos el producto mínimo viable con tecnología adecuada, iterando rápido según el feedback del mercado.",
    color: "#1a8a7d",
  },
  {
    number: "06",
    title: "Lanzamiento",
    subtitle: "Salida al mercado",
    description:
      "Estrategia de go-to-market, métricas de seguimiento y acompañamiento post-lanzamiento para las primeras iteraciones.",
    color: "#1f7a70",
  },
];

function StageCard({
  stage,
  index,
}: {
  stage: (typeof stages)[number];
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 0,
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : `translateX(${isEven ? "-30px" : "30px"})`,
      }}
    >
      {/* Timeline column */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: 60,
          position: "relative",
        }}
      >
        {/* Number circle */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: stage.color,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            fontWeight: 700,
            flexShrink: 0,
            boxShadow: `0 4px 16px ${stage.color}40`,
            transition: `transform 0.3s ease ${index * 0.1}s`,
            transform: visible ? "scale(1)" : "scale(0.5)",
          }}
        >
          {stage.number}
        </div>
        {/* Connector line */}
        {index < stages.length - 1 && (
          <div
            style={{
              width: 2,
              flexGrow: 1,
              minHeight: 40,
              background: `linear-gradient(to bottom, ${stage.color}60, ${stages[index + 1].color}30)`,
              transition: `opacity 0.6s ease ${index * 0.1 + 0.3}s`,
              opacity: visible ? 1 : 0,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          paddingLeft: 20,
          paddingBottom: index < stages.length - 1 ? 32 : 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            marginBottom: 6,
          }}
        >
          <h3
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: stage.color,
              lineHeight: 1.3,
            }}
          >
            {stage.title}
          </h3>
          <span
            style={{
              fontSize: 13,
              color: "#7a7a7a",
              fontWeight: 500,
            }}
          >
            — {stage.subtitle}
          </span>
        </div>
        <p
          style={{
            fontSize: 14.5,
            color: "#4a4a4a",
            lineHeight: 1.65,
            maxWidth: 480,
          }}
        >
          {stage.description}
        </p>
      </div>
    </div>
  );
}

export default function ComoTrabajamos() {
  return (
    <section
      id="como-trabajamos"
      style={{
        padding: "88px 32px",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Heading */}
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
            Cómo trabajamos
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
            6 etapas de acompañamiento
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#4a4a4a",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Un proceso claro y estructurado para transformar tu idea en un producto validado por el mercado.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {stages.map((stage, i) => (
            <StageCard key={stage.number} stage={stage} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
