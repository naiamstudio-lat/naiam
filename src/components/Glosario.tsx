"use client";

import { useState } from "react";

const terms = [
  {
    term: "MVP (Minimum Viable Product)",
    definition:
      "Versión mínima de un producto con las funcionalidades esenciales para salir al mercado, obtener feedback real y validar hipótesis con la menor inversión posible.",
  },
  {
    term: "Product-Market Fit",
    definition:
      "El momento en que tu producto satisface una necesidad real del mercado. Se evidencia cuando los usuarios vuelven, recomiendan y pagan por tu solución.",
  },
  {
    term: "Lean Startup",
    definition:
      "Metodología que propone construir-medir-aprender en ciclos cortos, priorizando la experimentación rápida sobre la planificación extensa.",
  },
  {
    term: "Pitch Deck",
    definition:
      "Presentación concisa (10-15 slides) que comunica tu propuesta de valor, modelo de negocio y oportunidad de inversión a potenciales inversores o socios.",
  },
  {
    term: "Lean Canvas",
    definition:
      "Herramienta visual de una página para mapear tu modelo de negocio: problema, solución, métricas clave, ventaja competitiva y canales.",
  },
  {
    term: "Burn Rate",
    definition:
      "Velocidad a la que una startup gasta su capital antes de generar ingresos positivos. Se expresa generalmente como gasto mensual neto.",
  },
  {
    term: "Runway",
    definition:
      "Tiempo (en meses) que le queda a tu startup antes de quedarse sin dinero, calculado dividiendo el capital disponible entre el burn rate.",
  },
  {
    term: "Bootstrapping",
    definition:
      "Financiar el crecimiento de tu startup con recursos propios o ingresos del negocio, sin inversión externa. Implica mayor control pero crecimiento más lento.",
  },
  {
    term: "Pivot",
    definition:
      "Cambio estratégico en el modelo de negocio, producto o mercado objetivo basado en aprendizajes obtenidos. No es un fracaso, es una iteración informada.",
  },
  {
    term: "Go-to-Market (GTM)",
    definition:
      "Estrategia que define cómo vas a llevar tu producto al mercado: canales de adquisición, pricing, mensajes clave y plan de lanzamiento.",
  },
  {
    term: "CAC (Costo de Adquisición de Cliente)",
    definition:
      "Cuánto te cuesta adquirir un nuevo cliente. Se calcula dividiendo el gasto total en marketing y ventas entre el número de clientes nuevos obtenidos.",
  },
  {
    term: "LTV (Lifetime Value)",
    definition:
      "Valor total que un cliente genera durante toda su relación con tu producto. La relación LTV/CAC debe ser mayor a 3 para un negocio saludable.",
  },
  {
    term: "Venture Capital",
    definition:
      "Fondos de inversión que financian startups de alto potencial a cambio de participación accionaria. Usualmente invierten en rondas (Seed, Series A, B, etc.).",
  },
  {
    term: "Churn Rate",
    definition:
      "Porcentaje de clientes que dejan de usar tu producto en un período determinado. Es una métrica crítica para modelos de suscripción y SaaS.",
  },
  {
    term: "Tracción",
    definition:
      "Evidencia cuantificable de que tu producto está ganando adopción en el mercado: usuarios activos, ingresos recurrentes, crecimiento mensual sostenido.",
  },
];

export default function Glosario() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTerms = terms.filter(
    (t) =>
      t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      id="glosario"
      style={{
        padding: "88px 32px",
        backgroundColor: "#eef6f6",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
            Recursos
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
            Glosario para Startups
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
            Los términos clave que todo fundador debería conocer. Buscá cualquier concepto para entenderlo en lenguaje
            simple.
          </p>
        </div>

        {/* Search bar */}
        <div style={{ marginBottom: 28, position: "relative" }}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          >
            <circle cx="8" cy="8" r="5.5" stroke="#8aaba6" strokeWidth="1.5" />
            <path d="M12 12l4 4" stroke="#8aaba6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Buscar término..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "13px 16px 13px 44px",
              borderRadius: 12,
              border: "1.5px solid #c8ddd9",
              backgroundColor: "#fff",
              fontSize: 15,
              color: "#2a2a2a",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#1a8a7d";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#c8ddd9";
            }}
          />
        </div>

        {/* Accordion list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {filteredTerms.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.term}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  border: isOpen ? "1.5px solid #1a8a7d" : "1.5px solid #dce9e6",
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: isOpen ? "#1a8a7d" : "#3a1a5e",
                      transition: "color 0.2s",
                    }}
                  >
                    {item.term}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    style={{
                      transition: "transform 0.25s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      flexShrink: 0,
                      marginLeft: 12,
                    }}
                  >
                    <path
                      d="M5 7l4 4 4-4"
                      stroke={isOpen ? "#1a8a7d" : "#8a8a8a"}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease, padding 0.3s ease",
                    padding: isOpen ? "0 20px 16px" : "0 20px 0",
                  }}
                >
                  <p
                    style={{
                      fontSize: 14.5,
                      color: "#4a4a4a",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.definition}
                  </p>
                </div>
              </div>
            );
          })}
          {filteredTerms.length === 0 && (
            <p
              style={{
                textAlign: "center",
                color: "#8a8a8a",
                fontSize: 15,
                padding: "32px 0",
              }}
            >
              No se encontraron términos para &ldquo;{searchQuery}&rdquo;
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
