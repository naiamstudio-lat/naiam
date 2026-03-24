export default function AboutSection() {
  return (
    <section
      style={{
        padding: "72px 32px",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <p
          style={{
            fontSize: "clamp(1.05rem, 2.2vw, 1.28rem)",
            color: "#2d2d2d",
            lineHeight: 1.65,
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          <strong style={{ fontWeight: 600, fontStyle: "italic" }}>
            No somos una consultora tradicional.
          </strong>{" "}
          Trabajamos con vos para probar ideas rápido, aprender del mercado y
          tomar mejores decisiones.
        </p>
      </div>
    </section>
  );
}
