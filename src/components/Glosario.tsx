"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

/* ─── Stage definitions ─── */
const STAGES = [
  { id: "research", label: "Research", color: "#1a8a7d" },
  { id: "validacion", label: "Validación", color: "#1f7a70" },
  { id: "ideacion", label: "Ideación", color: "#3a1a5e" },
  { id: "financiamiento", label: "Financiamiento", color: "#4a2a6e" },
  { id: "desarrollo", label: "Desarrollo", color: "#1a8a7d" },
  { id: "lanzamiento", label: "Lanzamiento", color: "#1f7a70" },
] as const;

type StageId = (typeof STAGES)[number]["id"];

interface Term {
  term: string;
  definition: string;
  stages: StageId[];
}

/* ─── Glossary terms ─── */
const terms: Term[] = [
  // ── Research ──
  {
    term: "Market Size",
    definition:
      "Tamaño total del mercado potencial para tu producto o servicio. Se evalúa con métricas como TAM, SAM y SOM para dimensionar la oportunidad real.",
    stages: ["research"],
  },
  {
    term: "TAM / SAM / SOM",
    definition:
      "TAM (Total Addressable Market): mercado total. SAM (Serviceable Addressable Market): segmento al que podés llegar. SOM (Serviceable Obtainable Market): cuota que podés capturar de forma realista.",
    stages: ["research", "financiamiento"],
  },
  {
    term: "Análisis Competitivo",
    definition:
      "Evaluación sistemática de los competidores directos e indirectos: sus fortalezas, debilidades, pricing, posicionamiento y propuesta de valor. Esencial para diferenciarte.",
    stages: ["research", "ideacion"],
  },
  {
    term: "Buyer Persona",
    definition:
      "Representación semificticia de tu cliente ideal basada en datos reales: demografía, comportamiento, motivaciones, pain points y canales donde se encuentra.",
    stages: ["research", "validacion"],
  },
  {
    term: "Jobs To Be Done (JTBD)",
    definition:
      "Framework que analiza qué 'trabajo' está intentando resolver tu cliente cuando contrata un producto. No se enfoca en features sino en el progreso que el usuario busca.",
    stages: ["research", "ideacion"],
  },
  {
    term: "Desk Research",
    definition:
      "Investigación secundaria basada en datos ya existentes: reportes de industria, papers, estadísticas públicas y análisis de mercado de terceros.",
    stages: ["research"],
  },
  {
    term: "Discovery Interview",
    definition:
      "Entrevista cualitativa con usuarios potenciales para entender sus problemas, necesidades y contexto. Se usa en etapas tempranas antes de diseñar soluciones.",
    stages: ["research", "validacion"],
  },

  // ── Validación ──
  {
    term: "MVP (Minimum Viable Product)",
    definition:
      "Versión mínima de un producto con las funcionalidades esenciales para salir al mercado, obtener feedback real y validar hipótesis con la menor inversión posible.",
    stages: ["validacion", "desarrollo"],
  },
  {
    term: "Product-Market Fit",
    definition:
      "El momento en que tu producto satisface una necesidad real del mercado. Se evidencia cuando los usuarios vuelven, recomiendan y pagan por tu solución.",
    stages: ["validacion", "lanzamiento"],
  },
  {
    term: "Lean Startup",
    definition:
      "Metodología que propone construir-medir-aprender en ciclos cortos, priorizando la experimentación rápida sobre la planificación extensa.",
    stages: ["validacion", "desarrollo"],
  },
  {
    term: "Landing Page de Validación",
    definition:
      "Página web diseñada para testear demanda real de un producto antes de construirlo. Captura leads, mide interés y valida si la propuesta de valor conecta con el público.",
    stages: ["validacion"],
  },
  {
    term: "Smoke Test",
    definition:
      "Técnica de validación que simula la existencia de un producto (botón de compra, waitlist, anuncio) para medir la intención real de los usuarios antes de desarrollarlo.",
    stages: ["validacion"],
  },
  {
    term: "Pivot",
    definition:
      "Cambio estratégico en el modelo de negocio, producto o mercado objetivo basado en aprendizajes obtenidos. No es un fracaso, es una iteración informada.",
    stages: ["validacion", "ideacion"],
  },
  {
    term: "Concierge MVP",
    definition:
      "Tipo de MVP donde el fundador entrega el servicio manualmente (sin tecnología) para validar si los clientes realmente quieren la solución antes de automatizarla.",
    stages: ["validacion"],
  },
  {
    term: "Wizard of Oz MVP",
    definition:
      "MVP que parece automatizado desde la perspectiva del usuario, pero detrás opera una persona de forma manual. Permite validar la experiencia sin construir la tecnología.",
    stages: ["validacion"],
  },

  // ── Ideación ──
  {
    term: "Lean Canvas",
    definition:
      "Herramienta visual de una página para mapear tu modelo de negocio: problema, solución, métricas clave, ventaja competitiva y canales.",
    stages: ["ideacion", "financiamiento"],
  },
  {
    term: "Propuesta de Valor",
    definition:
      "Declaración clara de por qué un cliente debería elegir tu producto: qué problema resolvés, para quién y cómo te diferenciás de las alternativas existentes.",
    stages: ["ideacion", "lanzamiento"],
  },
  {
    term: "Design Thinking",
    definition:
      "Metodología centrada en el usuario que combina empatía, ideación y prototipado rápido para resolver problemas complejos de forma creativa e iterativa.",
    stages: ["ideacion"],
  },
  {
    term: "User Story",
    definition:
      "Descripción breve de una funcionalidad desde la perspectiva del usuario: 'Como [tipo de usuario], quiero [acción] para [beneficio]'. Ayuda a priorizar el desarrollo.",
    stages: ["ideacion", "desarrollo"],
  },
  {
    term: "Roadmap de Producto",
    definition:
      "Plan visual que muestra la evolución del producto a lo largo del tiempo: qué features se construyen, en qué orden y por qué. Alinea al equipo y a stakeholders.",
    stages: ["ideacion", "desarrollo"],
  },
  {
    term: "Feature Prioritization",
    definition:
      "Proceso de decidir qué funcionalidades construir primero. Frameworks comunes: RICE (Reach, Impact, Confidence, Effort), MoSCoW, o Impact vs Effort matrix.",
    stages: ["ideacion", "desarrollo"],
  },

  // ── Financiamiento ──
  {
    term: "Pre-Seed",
    definition:
      "Primera ronda de inversión, generalmente entre $25K-$500K. Financia la validación inicial de la idea. Los inversores suelen ser FFF (friends, family, fools) o ángeles tempranos.",
    stages: ["financiamiento"],
  },
  {
    term: "Seed",
    definition:
      "Ronda de inversión para startups que ya tienen tracción inicial, típicamente entre $500K-$3M. Financia el crecimiento del equipo y la búsqueda de product-market fit.",
    stages: ["financiamiento"],
  },
  {
    term: "Series A",
    definition:
      "Ronda de inversión para startups con product-market fit demostrado, usualmente entre $3M-$15M. Se enfoca en escalar el modelo de negocio probado.",
    stages: ["financiamiento"],
  },
  {
    term: "LOI (Letter of Intent)",
    definition:
      "Carta de intención donde un inversor expresa interés formal en invertir. No es vinculante legalmente pero marca el inicio de una negociación seria y due diligence.",
    stages: ["financiamiento"],
  },
  {
    term: "Term Sheet",
    definition:
      "Documento que establece los términos principales de una inversión: valoración, monto, tipo de acciones, derechos de liquidación y gobernanza. Base para el contrato final.",
    stages: ["financiamiento"],
  },
  {
    term: "Venture Capital",
    definition:
      "Fondos de inversión que financian startups de alto potencial a cambio de participación accionaria. Usualmente invierten en rondas (Seed, Series A, B, etc.).",
    stages: ["financiamiento"],
  },
  {
    term: "Angel Investor",
    definition:
      "Persona que invierte su propio capital en startups en etapas tempranas, generalmente a cambio de equity. Suelen aportar también mentoría y red de contactos.",
    stages: ["financiamiento"],
  },
  {
    term: "Pitch Deck",
    definition:
      "Presentación concisa (10-15 slides) que comunica tu propuesta de valor, modelo de negocio y oportunidad de inversión a potenciales inversores o socios.",
    stages: ["financiamiento", "ideacion"],
  },
  {
    term: "Cap Table",
    definition:
      "Tabla de capitalización que muestra la estructura accionaria de la empresa: quién posee qué porcentaje, tipos de acciones, opciones emitidas y dilución.",
    stages: ["financiamiento"],
  },
  {
    term: "Valuation (Pre-money / Post-money)",
    definition:
      "Pre-money: valoración de la empresa antes de recibir inversión. Post-money: valoración después. Si tu pre-money es $4M y recibís $1M, tu post-money es $5M.",
    stages: ["financiamiento"],
  },
  {
    term: "SAFE (Simple Agreement for Future Equity)",
    definition:
      "Instrumento de inversión creado por Y Combinator. El inversor pone dinero ahora y recibe equity en una futura ronda de inversión. Sin intereses ni fecha de vencimiento.",
    stages: ["financiamiento"],
  },
  {
    term: "Convertible Note",
    definition:
      "Deuda que se convierte en equity en la próxima ronda de inversión. Incluye un cap (valoración máxima) y discount (descuento) como incentivo para el inversor temprano.",
    stages: ["financiamiento"],
  },
  {
    term: "Due Diligence",
    definition:
      "Proceso de investigación y auditoría que realiza un inversor antes de cerrar la inversión: análisis financiero, legal, de mercado, equipo y tecnología.",
    stages: ["financiamiento"],
  },
  {
    term: "Burn Rate",
    definition:
      "Velocidad a la que una startup gasta su capital antes de generar ingresos positivos. Se expresa generalmente como gasto mensual neto.",
    stages: ["financiamiento", "desarrollo"],
  },
  {
    term: "Runway",
    definition:
      "Tiempo (en meses) que le queda a tu startup antes de quedarse sin dinero, calculado dividiendo el capital disponible entre el burn rate.",
    stages: ["financiamiento", "desarrollo"],
  },
  {
    term: "Bootstrapping",
    definition:
      "Financiar el crecimiento de tu startup con recursos propios o ingresos del negocio, sin inversión externa. Implica mayor control pero crecimiento más lento.",
    stages: ["financiamiento"],
  },
  {
    term: "Dilución",
    definition:
      "Reducción del porcentaje de propiedad de los accionistas existentes cuando se emiten nuevas acciones (por ejemplo, en una ronda de inversión). Es normal pero hay que gestionarla.",
    stages: ["financiamiento"],
  },

  // ── Desarrollo ──
  {
    term: "Sprint",
    definition:
      "Período corto de trabajo (1-4 semanas) en metodología Agile donde el equipo se enfoca en completar un conjunto definido de tareas. Al final se revisa y se itera.",
    stages: ["desarrollo"],
  },
  {
    term: "Tech Stack",
    definition:
      "Conjunto de tecnologías utilizadas para construir tu producto: lenguajes de programación, frameworks, bases de datos, infraestructura y herramientas de DevOps.",
    stages: ["desarrollo"],
  },
  {
    term: "Technical Debt",
    definition:
      "Costo acumulado de atajos técnicos tomados para avanzar rápido. No es malo per se, pero debe gestionarse: si se ignora, ralentiza el desarrollo futuro.",
    stages: ["desarrollo"],
  },
  {
    term: "CI/CD (Continuous Integration / Continuous Deployment)",
    definition:
      "Práctica de automatizar la integración de código y su despliegue a producción. Permite lanzar features más rápido con menos riesgo de errores.",
    stages: ["desarrollo", "lanzamiento"],
  },
  {
    term: "Scalability",
    definition:
      "Capacidad de tu producto para manejar un aumento significativo de usuarios, datos o transacciones sin degradar el rendimiento ni la experiencia.",
    stages: ["desarrollo", "lanzamiento"],
  },

  // ── Lanzamiento ──
  {
    term: "Go-to-Market (GTM)",
    definition:
      "Estrategia que define cómo vas a llevar tu producto al mercado: canales de adquisición, pricing, mensajes clave y plan de lanzamiento.",
    stages: ["lanzamiento", "ideacion"],
  },
  {
    term: "CAC (Costo de Adquisición de Cliente)",
    definition:
      "Cuánto te cuesta adquirir un nuevo cliente. Se calcula dividiendo el gasto total en marketing y ventas entre el número de clientes nuevos obtenidos.",
    stages: ["lanzamiento", "validacion"],
  },
  {
    term: "LTV (Lifetime Value)",
    definition:
      "Valor total que un cliente genera durante toda su relación con tu producto. La relación LTV/CAC debe ser mayor a 3 para un negocio saludable.",
    stages: ["lanzamiento", "financiamiento"],
  },
  {
    term: "Churn Rate",
    definition:
      "Porcentaje de clientes que dejan de usar tu producto en un período determinado. Es una métrica crítica para modelos de suscripción y SaaS.",
    stages: ["lanzamiento", "validacion"],
  },
  {
    term: "Tracción",
    definition:
      "Evidencia cuantificable de que tu producto está ganando adopción en el mercado: usuarios activos, ingresos recurrentes, crecimiento mensual sostenido.",
    stages: ["lanzamiento", "financiamiento"],
  },
  {
    term: "North Star Metric",
    definition:
      "La métrica principal que mejor refleja el valor que tu producto entrega a los usuarios. Alinea a todo el equipo hacia un mismo objetivo de crecimiento.",
    stages: ["lanzamiento", "desarrollo"],
  },
  {
    term: "Product-Led Growth (PLG)",
    definition:
      "Estrategia donde el producto mismo es el principal motor de adquisición, conversión y expansión. Ejemplos: Slack, Notion, Figma. Opuesto a sales-led growth.",
    stages: ["lanzamiento"],
  },
  {
    term: "Activation Rate",
    definition:
      "Porcentaje de usuarios que completan una acción clave que indica que experimentaron el valor del producto ('aha moment'). Crítico para la retención.",
    stages: ["lanzamiento", "validacion"],
  },
  {
    term: "Cohort Analysis",
    definition:
      "Análisis que agrupa usuarios por la fecha en que se registraron para comparar su comportamiento a lo largo del tiempo. Revela tendencias de retención y engagement.",
    stages: ["lanzamiento"],
  },
  {
    term: "Pricing Strategy",
    definition:
      "Estrategia de definición de precios: freemium, pay-as-you-go, suscripción, tiered pricing. Debe alinearse con el valor percibido y el modelo de negocio.",
    stages: ["lanzamiento", "ideacion"],
  },
];

/* ─── Helpers ─── */
function getStageColor(id: StageId): string {
  return STAGES.find((s) => s.id === id)?.color ?? "#1a8a7d";
}

function getStageLabel(id: StageId): string {
  return STAGES.find((s) => s.id === id)?.label ?? id;
}

/* ─── Component ─── */
export default function Glosario() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStage, setActiveStage] = useState<StageId | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  /* Ctrl+K shortcut */
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      searchRef.current?.focus();
      searchRef.current?.select();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  /* Filter logic */
  const filteredTerms = terms.filter((t) => {
    const matchesSearch =
      searchQuery === "" ||
      t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStage = activeStage === null || t.stages.includes(activeStage);
    return matchesSearch && matchesStage;
  });

  /* Count terms per stage */
  const stageCounts: Record<string, number> = {};
  for (const s of STAGES) {
    stageCounts[s.id] = terms.filter((t) => t.stages.includes(s.id)).length;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eef6f6",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #dce9e6",
          padding: "32px 32px 0",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* Back link */}
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13.5,
              color: "#1a8a7d",
              fontWeight: 500,
              textDecoration: "none",
              marginBottom: 24,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 4l-4 4 4 4" stroke="#1a8a7d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver al inicio
          </Link>

          <div style={{ textAlign: "center", paddingBottom: 28 }}>
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 600,
                color: "#1a8a7d",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                marginBottom: 10,
              }}
            >
              Recursos para fundadores
            </span>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 800,
                color: "#3a1a5e",
                lineHeight: 1.15,
                marginBottom: 14,
              }}
            >
              Glosario para Startups
            </h1>
            <p
              style={{
                fontSize: 16,
                color: "#4a4a4a",
                maxWidth: 540,
                margin: "0 auto 24px",
                lineHeight: 1.6,
              }}
            >
              {terms.length} conceptos clave organizados por etapa. Buscá cualquier término para entenderlo en lenguaje
              simple.
            </p>

            {/* Search bar */}
            <div
              style={{
                maxWidth: 520,
                margin: "0 auto",
                position: "relative",
              }}
            >
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
                ref={searchRef}
                type="text"
                placeholder="Buscar término..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 90px 14px 44px",
                  borderRadius: 12,
                  border: "1.5px solid #c8ddd9",
                  backgroundColor: "#f8fbfb",
                  fontSize: 15,
                  color: "#2a2a2a",
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#1a8a7d";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(26,138,125,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#c8ddd9";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              {/* Keyboard shortcut badge */}
              <div
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  pointerEvents: "none",
                }}
              >
                <kbd
                  style={{
                    fontSize: 11,
                    fontFamily: "inherit",
                    color: "#8aaba6",
                    backgroundColor: "#eef4f3",
                    border: "1px solid #c8ddd9",
                    borderRadius: 5,
                    padding: "2px 6px",
                    lineHeight: 1.4,
                  }}
                >
                  Ctrl
                </kbd>
                <kbd
                  style={{
                    fontSize: 11,
                    fontFamily: "inherit",
                    color: "#8aaba6",
                    backgroundColor: "#eef4f3",
                    border: "1px solid #c8ddd9",
                    borderRadius: 5,
                    padding: "2px 6px",
                    lineHeight: 1.4,
                  }}
                >
                  K
                </kbd>
              </div>
            </div>
          </div>

          {/* Stage filter tabs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              overflowX: "auto",
              paddingBottom: 0,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {/* "Todos" button */}
            <button
              onClick={() => setActiveStage(null)}
              style={{
                padding: "8px 18px",
                borderRadius: 50,
                fontSize: 13,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                backgroundColor: activeStage === null ? "#3a1a5e" : "#f0f0f0",
                color: activeStage === null ? "#fff" : "#5a5a5a",
                whiteSpace: "nowrap",
              }}
            >
              Todos ({terms.length})
            </button>
            {STAGES.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 50,
                  fontSize: 13,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  backgroundColor: activeStage === stage.id ? stage.color : "#f0f0f0",
                  color: activeStage === stage.id ? "#fff" : "#5a5a5a",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {stage.label}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    backgroundColor:
                      activeStage === stage.id ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.08)",
                    borderRadius: 50,
                    padding: "1px 7px",
                    lineHeight: 1.5,
                  }}
                >
                  {stageCounts[stage.id]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Results */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 32px 80px" }}>
        {/* Result count */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <p style={{ fontSize: 14, color: "#7a7a7a", fontWeight: 500 }}>
            {filteredTerms.length} {filteredTerms.length === 1 ? "resultado" : "resultados"}
            {activeStage && (
              <span>
                {" "}
                en{" "}
                <strong style={{ color: getStageColor(activeStage) }}>
                  {getStageLabel(activeStage)}
                </strong>
              </span>
            )}
            {searchQuery && (
              <span>
                {" "}
                para &ldquo;<em>{searchQuery}</em>&rdquo;
              </span>
            )}
          </p>
          {(activeStage || searchQuery) && (
            <button
              onClick={() => {
                setActiveStage(null);
                setSearchQuery("");
              }}
              style={{
                fontSize: 13,
                color: "#1a8a7d",
                fontWeight: 500,
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {filteredTerms.map((item, i) => {
              const isOpen = openIndexes.includes(i);
            return (
              <div
                key={item.term}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 14,
                  border: isOpen ? "1.5px solid #1a8a7d" : "1.5px solid #dce9e6",
                  overflow: "hidden",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  boxShadow: isOpen ? "0 4px 20px rgba(26,138,125,0.08)" : "none",
                }}
              >
                <button
                    onClick={() => {
                      setOpenIndexes((prev) =>
                        isOpen ? prev.filter((idx) => idx !== i) : [...prev, i]
                      );
                    }}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
                    <span
                      style={{
                        fontSize: 15.5,
                        fontWeight: 600,
                        color: isOpen ? "#1a8a7d" : "#3a1a5e",
                        transition: "color 0.2s",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.term}
                    </span>
                    {/* Stage tags inline */}
                    <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
                      {item.stages.map((stageId) => (
                        <span
                          key={stageId}
                          style={{
                            fontSize: 10.5,
                            fontWeight: 600,
                            color: getStageColor(stageId),
                            backgroundColor: `${getStageColor(stageId)}14`,
                            border: `1px solid ${getStageColor(stageId)}30`,
                            borderRadius: 50,
                            padding: "2px 10px",
                            whiteSpace: "nowrap",
                            lineHeight: 1.6,
                          }}
                        >
                          {getStageLabel(stageId)}
                        </span>
                      ))}
                    </div>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    style={{
                      transition: "transform 0.25s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      flexShrink: 0,
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
                    maxHeight: isOpen ? 220 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <div style={{ padding: "0 20px 18px" }}>
                    <p
                      style={{
                        fontSize: 14.5,
                        color: "#4a4a4a",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.definition}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {filteredTerms.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "56px 20px",
                color: "#8a8a8a",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                style={{ marginBottom: 16, opacity: 0.5 }}
              >
                <circle cx="18" cy="18" r="12" stroke="#8aaba6" strokeWidth="2" />
                <path d="M27 27l8 8" stroke="#8aaba6" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p style={{ fontSize: 15, fontWeight: 500 }}>
                No se encontraron términos
              </p>
              <p style={{ fontSize: 13.5, marginTop: 6 }}>
                Probá ajustando el filtro de etapa o la búsqueda
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
