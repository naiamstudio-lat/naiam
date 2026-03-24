export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: 56,
        paddingBottom: 0,
        textAlign: "center",
        backgroundColor: "#eef6f6",
      }}
    >
      {/* ── Background organic shapes ── */}

      {/* Left organic cloud – large, soft, rising from bottom-left */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: -40,
          width: "42%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 600 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer soft cloud */}
        <path
          d="M-20,800 C-20,800 20,620 60,520 C120,380 30,320 80,220 C130,120 180,100 160,40 C140,-20 100,0 60,0 L-60,0 L-60,800 Z"
          fill="#d6edea"
          opacity="0.7"
        />
        {/* Inner slightly darker layer */}
        <path
          d="M-60,800 C-60,800 0,660 30,560 C70,430 -10,370 30,270 C70,170 120,150 100,80 C80,10 40,0 0,0 L-60,0 L-60,800 Z"
          fill="#c3e4e0"
          opacity="0.55"
        />
      </svg>

      {/* Right organic cloud – smaller, from top-right */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -20,
          right: -30,
          width: "32%",
          height: "90%",
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 500 700"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M560,0 C560,0 500,80 480,180 C450,320 530,370 490,480 C450,590 420,640 460,700 L560,700 L560,0 Z"
          fill="#d6edea"
          opacity="0.65"
        />
        <path
          d="M560,0 C560,0 520,60 510,150 C495,280 550,340 520,440 C490,540 470,600 500,700 L560,700 L560,0 Z"
          fill="#c3e4e0"
          opacity="0.45"
        />
      </svg>

      {/* Bottom wave – gentle hill across full width */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 44,
          left: 0,
          width: "100%",
          height: 120,
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,100 C240,40 480,20 720,50 C960,80 1200,100 1440,60 L1440,120 L0,120 Z"
          fill="#d3ebe8"
          opacity="0.5"
        />
        <path
          d="M0,110 C300,55 600,40 900,70 C1100,90 1300,100 1440,80 L1440,120 L0,120 Z"
          fill="#c5e3df"
          opacity="0.35"
        />
      </svg>

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 760,
          margin: "0 auto",
          padding: "0 32px 52px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 4.8vw, 3.1rem)",
            fontWeight: 800,
            lineHeight: 1.16,
            color: "#3a1a5e",
            marginBottom: 26,
            letterSpacing: "-0.015em",
          }}
        >
          Validamos ideas de producto antes de
          que inviertas tiempo y dinero en algo
          que el mercado no necesita.
        </h1>

        <p
          style={{
            fontSize: "clamp(0.95rem, 1.7vw, 1.08rem)",
            color: "#2a2a2a",
            lineHeight: 1.6,
            fontWeight: 600,
            maxWidth: 580,
            margin: "0 auto 42px",
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
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 0,
          }}
        >
          <a
            href="#contacto"
            style={{
              backgroundColor: "#1a8a7d",
              color: "#fff",
              padding: "13px 32px",
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
              letterSpacing: "0.01em",
            }}
          >
            Hablar con nosotros
          </a>
          <a
            href="#como-trabajamos"
            style={{
              backgroundColor: "transparent",
              color: "#1a8a7d",
              padding: "12px 28px",
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              border: "1.5px solid #b3cfc9",
              display: "inline-block",
              letterSpacing: "0.01em",
            }}
          >
            Ver cómo trabajamos
          </a>
        </div>
      </div>

      {/* ── Badge pill – centrado, no full width ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "16px 32px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            backgroundColor: "rgba(255,255,255,0.5)",
            border: "1px solid #c8ddd9",
            borderRadius: 50,
            padding: "10px 28px",
            backdropFilter: "blur(6px)",
          }}
        >
          {/* Person icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="6" r="3.2" stroke="#6aa89e" strokeWidth="1.3" />
            <path
              d="M3 16C3 13.2 5.2 10.8 9 10.8C12.8 10.8 15 13.2 15 16"
              stroke="#6aa89e"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
          <span
            style={{
              fontSize: 13,
              color: "#5a8a82",
              fontWeight: 500,
              letterSpacing: "0.005em",
            }}
          >
            Experiencia en desarrollo de MVPs&nbsp;&nbsp;|&nbsp;&nbsp;Investigación
            de producto&nbsp;&nbsp;|&nbsp;&nbsp;Estrategia digital y
            posicionamiento
          </span>
        </div>
      </div>
    </section>
  );
}
