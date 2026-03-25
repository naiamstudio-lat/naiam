'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Inicio');

  const links = [
    { label: "Inicio", href: "#", id: "inicio" },
    { label: "Qué hacemos", href: "#que-hacemos", id: "que-hacemos" },
    { label: "Cómo trabajamos", href: "#como-trabajamos", id: "como-trabajamos" },
    { label: "Glosario", href: "/startup-glossary", id: "glosario" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.filter(link => link.id !== 'glosario');
      
      for (let section of sections) {
        const element = document.querySelector(section.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.label);
            return;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('Inicio');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isGlosaryPage = pathname === '/startup-glossary';

  useEffect(() => {
    if (isGlosaryPage) {
      setActiveSection('Glosario');
    }
  }, [isGlosaryPage]);

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
          padding: "0 20px",
          minHeight: 64,
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
          <img
            src="/Naiam Icon _ White.png"
            alt="Naiam Icon"
            style={{
              width: 40,
              height: 40,
            }}
          />
          <span
            style={{
              fontSize: "clamp(10px, 2vw, 11.5px)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#2a3a5c",
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            NAIAM STUDIO
          </span>
        </a>

        {/* Desktop Nav links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 30,
            listStyle: "none",
            media: "(max-width: 768px)",
          }}
          className="hidden md:flex"
        >
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  fontSize: 14,
                  fontWeight: activeSection === link.label ? 700 : 400,
                  color: "#2a3a5c",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  opacity: activeSection === link.label ? 1 : 0.75,
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Desktop CTA button */}
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
              transition: "background-color 0.2s",
            }}
            className="hidden md:inline-block"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#15706a")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a8a7d")}
          >
            Hablar con nosotros
          </a>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <div
              style={{
                width: 24,
                height: 2.5,
                backgroundColor: "#2a3a5c",
                borderRadius: 1,
                transition: "all 0.3s",
                transform: isMenuOpen ? "rotate(45deg) translateY(10px)" : "none",
              }}
            />
            <div
              style={{
                width: 24,
                height: 2.5,
                backgroundColor: "#2a3a5c",
                borderRadius: 1,
                transition: "all 0.3s",
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                width: 24,
                height: 2.5,
                backgroundColor: "#2a3a5c",
                borderRadius: 1,
                transition: "all 0.3s",
                transform: isMenuOpen ? "rotate(-45deg) translateY(-10px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            backgroundColor: "#fff",
            borderTop: "1px solid rgba(44,181,160,0.08)",
            padding: "16px 20px",
            animation: "slideDown 0.3s ease-out",
          }}
          className="md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                padding: "12px 0",
                fontSize: 14,
                fontWeight: activeSection === link.label ? 700 : 400,
                color: "#2a3a5c",
                textDecoration: "none",
                borderBottom: "1px solid rgba(44,181,160,0.08)",
                opacity: activeSection === link.label ? 1 : 0.75,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMenuOpen(false)}
            style={{
              padding: "12px 0",
              backgroundColor: "#1a8a7d",
              color: "#fff",
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 8,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#15706a")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a8a7d")}
          >
            Hablar con nosotros
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden {
            display: none !important;
          }
          .md\\:flex {
            display: flex;
          }
          .md\\:inline-block {
            display: inline-block;
          }
          .md\\:hidden {
            display: block;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
