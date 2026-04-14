'use client';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2a3a5c",
        color: "#fff",
        padding: "64px 32px 32px",
        marginTop: 80,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Footer content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand section */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <img
                src="/Naiam Icon _ White.png"
                alt="Naiam Icon"
                style={{
                  width: 32,
                  height: 32,
                }}
              />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Naiam Studio
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                opacity: 0.8,
                marginBottom: 16,
              }}
            >
              Validamos ideas de producto acompañando a emprendedores y startups en sus primeros pasos.
            </p>
          </div>

          {/* Links section */}
          <div>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 20,
                opacity: 0.9,
              }}
            >
              Navegación
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 14,
                    opacity: 0.8,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#que-hacemos"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 14,
                    opacity: 0.8,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                >
                  Qué hacemos
                </a>
              </li>
              <li>
                <a
                  href="#como-trabajamos"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 14,
                    opacity: 0.8,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                >
                  Cómo trabajamos
                </a>
              </li>
              <li>
                <a
                  href="/startup-glossary"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 14,
                    opacity: 0.8,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                >
                  Glosario
                </a>
              </li>
            </ul>
          </div>

          {/* CTA section */}
          <div>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 20,
                opacity: 0.9,
              }}
            >
              Contacto
            </h4>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                opacity: 0.8,
                marginBottom: 16,
              }}
            >
              ¿Tienes una idea que validar? Hablemos.
            </p>
            <a
              href="https://wa.me/5493517873780"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#1a8a7d",
                color: "#fff",
                padding: "9px 22px",
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#15706a")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a8a7d")}
            >
              Hablar con nosotros
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: 32,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <p
            style={{
              fontSize: 12,
              opacity: 0.6,
              margin: 0,
            }}
          >
            © 2026 Naiam Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
