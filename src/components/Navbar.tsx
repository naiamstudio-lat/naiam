export default function Navbar() {
  const links = [
    { label: "Inicio", href: "#", active: true },
    { label: "Qué hacemos", href: "#que-hacemos" },
    { label: "Cómo trabajamos", href: "#como-trabajamos" },
    { label: "Para quién es", href: "#para-quien" },
    { label: "Quiénes somos", href: "#quienes-somos" },
    { label: "Casos", href: "#casos" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(240, 248, 248, 0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(44,181,160,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          {/* SVG logo – stylised wave/shell similar to the image */}
          <svg width="46" height="48" viewBox="0 0 46 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23 4C23 4 8 10 8 24C8 34 15 42 23 44C31 42 38 34 38 24C38 10 23 4 23 4Z"
              fill="#2cb5a0"
              opacity="0.18"
            />
            <path
              d="M23 8C23 8 30 13 32 22C34 31 29 39 23 42"
              stroke="#2cb5a0"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M23 8C23 8 16 13 14 22C12 31 17 39 23 42"
              stroke="#1a2340"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M20 18 Q23 14 26 18 Q23 22 20 18Z"
              fill="#2cb5a0"
              opacity="0.7"
            />
          </svg>
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#1a2340",
                textTransform: "uppercase",
                lineHeight: 1.1,
              }}
            >
              NAVAN STUDIO
            </div>
          </div>
        </a>

        {/* Nav links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            listStyle: "none",
          }}
        >
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  fontSize: 14.5,
                  fontWeight: link.active ? 600 : 400,
                  color: link.active ? "#1a2340" : "#3b4a6b",
                  textDecoration: link.active ? "underline" : "none",
                  textDecorationColor: "#2cb5a0",
                  textUnderlineOffset: 4,
                  textDecorationThickness: 2,
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="#contacto"
          style={{
            backgroundColor: "#2cb5a0",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 50,
            fontSize: 14.5,
            fontWeight: 600,
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "background-color 0.2s",
            boxShadow: "0 2px 12px rgba(44,181,160,0.25)",
          }}
        >
          Hablar con nosotros
        </a>
      </div>
    </nav>
  );
}
