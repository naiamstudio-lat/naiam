export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: 60,
        paddingBottom: 0,
        textAlign: "center",
        backgroundColor: "#f0f8f8",
      }}
    >
      {/* ── Background organic wave shapes ── */}

      {/* Left side cloud-wave */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "35%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 500 700"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* outer light wave */}
        <path
          d="M0,0 L0,700 C30,680 80,640 100,580 C130,500 70,440 90,360 C110,280 160,260 140,180 C120,100 80,60 120,0 Z"
          fill="#daf0ee"
        />
        {/* inner darker wave */}
        <path
          d="M0,0 L0,700 C20,660 60,600 70,530 C85,450 40,400 55,320 C70,240 110,220 95,150 C80,80 50,40 80,0 Z"
          fill="#c8eae6"
          opacity="0.6"
        />
      </svg>

      {/* Right side cloud-wave */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "30%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 400 700"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M400,0 L400,700 C370,660 330,600 310,520 C290,440 340,380 320,300 C300,220 260,200 280,120 C300,40 350,20 320,0 Z"
          fill="#daf0ee"
        />
        <path
          d="M400,0 L400,700 C380,640 350,560 340,480 C325,400 370,350 355,280 C340,210 300,190 320,110 C340,30 370,10 350,0 Z"
          fill="#c8eae6"
          opacity="0.5"
        />
      </svg>

      {/* Bottom wave spanning full width */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 160,
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,120 C180,60 360,30 540,50 C720,70 900,120 1080,100 C1260,80 1380,40 1440,60 L1440,160 L0,160 Z"
          fill="#d5eeec"
          opacity="0.55"
        />
        <path
          d="M0,140 C200,90 400,70 600,90 C800,110 1000,140 1200,120 C1350,105 1420,80 1440,90 L1440,160 L0,160 Z"
          fill="#c8eae6"
          opacity="0.4"
        />
      </svg>

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 780,
          margin: "0 auto",
          padding: "0 32px 48px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.18,
            color: "#2d1a5e",
            marginBottom: 28,
            letterSpacing: "-0.02em",
          }}
        >
          Validamos ideas de producto antes de que inviertas tiempo y dinero en algo que el mercado no necesita.
        </h1>

        <p
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            color: "#3b3b3b",
            lineHeight: 1.6,
            fontWeight: 600,
            maxWidth: 600,
            margin: "0 auto 44px",
          }}
        >
          Acompañamos a emprendedores y startups en sus primeros pasos:
          <br />
          investigación, validación y creación de MVPs funcionales.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          <a
            href="#contacto"
            style={{
              backgroundColor: "#2cb5a0",
              color: "#fff",
              padding: "14px 34px",
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 2px 12px rgba(44,181,160,0.25)",
              display: "inline-block",
            }}
          >
            Hablar con nosotros
          </a>
          <a
            href="#como-trabajamos"
            style={{
              backgroundColor: "transparent",
              color: "#2cb5a0",
              padding: "13px 30px",
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              border: "1.5px solid #b8d8d4",
              display: "inline-block",
            }}
          >
            Ver cómo trabajamos
          </a>
        </div>
      </div>

      {/* ── Badge ribbon at bottom of hero ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "rgba(255,255,255,0.55)",
          borderTop: "1px solid rgba(44,181,160,0.15)",
          borderBottom: "1px solid rgba(44,181,160,0.15)",
          backdropFilter: "blur(8px)",
          padding: "14px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {/* Person / check icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="6" r="3.5" stroke="#5a9e94" strokeWidth="1.4" />
          <path
            d="M2.5 16C2.5 13 5 10.5 9 10.5C13 10.5 15.5 13 15.5 16"
            stroke="#5a9e94"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
        <span
          style={{
            fontSize: 13.5,
            color: "#4a7a72",
            fontWeight: 500,
            letterSpacing: "0.01em",
          }}
        >
          Experiencia en desarrollo de MVPs&nbsp;&nbsp;|&nbsp;&nbsp;Investigación
          de producto&nbsp;&nbsp;|&nbsp;&nbsp;Estrategia digital y
          posicionamiento
        </span>
      </div>
    </section>
  );
}
