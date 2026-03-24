export default function AboutSection() {
  return (
    <section
      style={{
        padding: "80px 32px",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <p
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
            color: "#1a2340",
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          No somos una consultora tradicional. Trabajamos con vos para probar ideas rápido, aprender del mercado y tomar
          mejores decisiones.
        </p>
      </div>
    </section>
  );
}
