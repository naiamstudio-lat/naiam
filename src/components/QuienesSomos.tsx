"use client";

export default function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      style={{
        padding: "72px 32px 40px",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(1.3rem, 3vw, 2rem)",
          fontWeight: 800,
          color: "#3a1a5e",
          marginBottom: 36,
        }}
      >
        Quiénes somos
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          justifyContent: "center",
          marginBottom: 32,
        }}
      >
        {/* Ignacio del Corro */}
        <div
          style={{
            background: "#e6f3f1",
            borderRadius: 18,
            padding: 24,
            maxWidth: 320,
            minWidth: 260,
            flex: "1 1 260px",
            boxShadow: "0 2px 12px 0 rgba(44,181,160,0.07)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/Naiam_profile.jpeg"
            alt="Ignacio del Corro"
            style={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: 18,
            }}
          />
          <div style={{ textAlign: "left" }}>
            <span
              style={{
                color: "#1a8a7d",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Ignacio del Corro
            </span>
            <span
              style={{
                color: "#2a3a5c",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              {" "}- Product Specialist
            </span>
            <p
              style={{
                fontSize: 14,
                color: "#2d2d2d",
                margin: "10px 0 0 0",
                lineHeight: 1.5,
              }}
            >
            Combina desarrollo de Productos de Software y experiencia en Startups para crear estrategías orientas a validar ideas en el mercado. Trabaja con metodologías Lean y Product Discovery para reducir el riesgo de construir productos sin demanda real.
            </p>
          </div>
        </div>
        {/* Cepeda Damaris */}
        <div
          style={{
            background: "#e6f3f1",
            borderRadius: 18,
            padding: 24,
            maxWidth: 320,
            minWidth: 260,
            flex: "1 1 260px",
            boxShadow: "0 2px 12px 0 rgba(44,181,160,0.07)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/Dámaris_profile.jpeg"
            alt="Cepeda Damaris"
            style={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: 18,
            }}
          />
          <div style={{ textAlign: "left" }}>
            <span
              style={{
                color: "#1a8a7d",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Cepeda Damaris
            </span>
            <span
              style={{
                color: "#2a3a5c",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              {" "}- Marketing Digital, SEO y UX Writing
            </span>
            <p
              style={{
                fontSize: 14,
                color: "#2d2d2d",
                margin: "10px 0 0 0",
                lineHeight: 1.5,
              }}
            >
              Especialista en estrategia de contenido, posicionamiento y comunicación digital. Ayuda a que los productos encuentren su mercado, su audiencia y sus primeros usuarios.
            </p>
          </div>
        </div>
      </div>
      <p
        style={{
          fontSize: 15,
          color: "#2a3a5c",
          margin: 0,
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Naiam nace de ver muchas buenas ideas que nunca se validan correctamente. Nuestro objetivo es cambiar eso.
      </p>
    </section>
  );
}
