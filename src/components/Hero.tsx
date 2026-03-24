export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "calc(100vh - 68px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 32px 60px",
        textAlign: "center",
      }}
    >
      {/* Organic background blobs */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-left blob */}
        <path
          d="M-80,0 C60,20 140,80 100,180 C60,280 -60,300 -100,380 C-140,460 -40,520 0,600 L-200,600 L-200,0 Z"
          fill="rgba(44,181,160,0.13)"
        />
        <path
          d="M0,60 C80,30 200,60 240,140 C280,220 200,310 160,390 C120,470 80,500 40,560 C0,620 -40,660 -80,680 L-200,700 L-200,0 Z"
          fill="rgba(173,222,218,0.18)"
        />
        {/* Top-right blob */}
        <path
          d="M1540,0 C1400,30 1320,120 1360,220 C1400,320 1500,360 1520,440 C1540,520 1460,580 1480,660 L1640,700 L1640,0 Z"
          fill="rgba(44,181,160,0.10)"
        />
        <path
          d="M1440,0 C1360,40 1280,120 1300,220 C1320,320 1420,370 1400,450 C1380,530 1300,570 1320,650 L1640,700 L1640,0 Z"
          fill="rgba(173,222,218,0.15)"
        />
        {/* Center-bottom subtle wave */}
        <ellipse cx="720" cy="820" rx="680" ry="180" fill="rgba(44,181,160,0.06)" />
      </svg>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            color: "#1a2340",
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          Validamos ideas de producto antes de que inviertas tiempo y dinero en algo que el mercado no necesita.
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "#3b4a6b",
            lineHeight: 1.65,
            marginBottom: 40,
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          Acompañamos a emprendedores y startups en sus primeros pasos: investigación, validación y creación de MVPs
          funcionales.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 36,
          }}
        >
          <a
            href="#contacto"
            style={{
              backgroundColor: "#2cb5a0",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 18px rgba(44,181,160,0.32)",
              transition: "background-color 0.2s, transform 0.15s",
              display: "inline-block",
            }}
          >
            Hablar con nosotros
          </a>
          <a
            href="#como-trabajamos"
            style={{
              backgroundColor: "transparent",
              color: "#1a2340",
              padding: "13px 30px",
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              border: "1.5px solid #c8d6d4",
              transition: "border-color 0.2s",
              display: "inline-block",
            }}
          >
            Ver cómo trabajamos
          </a>
        </div>

        {/* Experience badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            backgroundColor: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(44,181,160,0.2)",
            borderRadius: 50,
            padding: "8px 20px",
            backdropFilter: "blur(6px)",
            boxShadow: "0 2px 12px rgba(44,181,160,0.08)",
          }}
        >
          {/* Small icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7" stroke="#2cb5a0" strokeWidth="1.5" />
            <path d="M5 8.5L7 10.5L11 6" stroke="#2cb5a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 13, color: "#3b4a6b", fontWeight: 500 }}>
            Experiencia en desarrollo de MVPs&nbsp;|&nbsp;Investigación de producto&nbsp;|&nbsp;Estrategia digital y
            posicionamiento
          </span>
        </div>
      </div>
    </section>
  );
}
