export default function Navbar() {
  const links = [
    { label: "Inicio", href: "#", active: true },
    { label: "Qué hacemos", href: "#que-hacemos" },
    { label: "Cómo trabajamos", href: "#como-trabajamos" },
    { label: "Glosario", href: "/startup-glossary" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(238,246,246,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(44,181,160,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 36px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          {/* SVG logo – stylised leaf/wave */}
          <svg
            width="40"
            height="42"
            viewBox="0 0 40 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3C20 3 7 9 7 21C7 30 13 37 20 39C27 37 33 30 33 21C33 9 20 3 20 3Z"
              fill="#1a8a7d"
              opacity="0.15"
            />
            <path
              d="M20 7C20 7 26 11 28 19C30 27 25 34 20 37"
              stroke="#1a8a7d"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M20 7C20 7 14 11 12 19C10 27 15 34 20 37"
              stroke="#2a3a5c"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
            <ellipse cx="20" cy="17" rx="2.5" ry="2" fill="#1a8a7d" opacity="0.6" />
          </svg>
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#2a3a5c",
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            NAVAN STUDIO
          </span>
        </a>

        {/* Nav links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 30,
            listStyle: "none",
          }}
        >
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  fontSize: 14,
                  fontWeight: link.active ? 600 : 400,
                  color: "#2a3a5c",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  opacity: link.active ? 1 : 0.75,
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
            backgroundColor: "#1a8a7d",
            color: "#fff",
            padding: "9px 22px",
            borderRadius: 50,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
            whiteSpace: "nowrap",
            letterSpacing: "0.01em",
          }}
        >
          Hablar con nosotros
        </a>
      </div>
    </nav>
  );
}
