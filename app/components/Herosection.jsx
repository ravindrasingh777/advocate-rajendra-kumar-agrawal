"use client";
import heroImage from "@/public/herosection.jpeg";

export default function HeroSection() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* RIGHT → CONTENT */}
        <div style={styles.right}>
          <div style={styles.badge}>
            ⚖️ Bar Council Election 2026 — सदस्य पद
          </div>

          <h1 style={styles.heading}>
            समस्त आदरणीय
            <br />
            अधिवक्ता साथियों से
            <br />
            विनम्र निवेदन
          </h1>

          <p style={styles.body}>
            मैं बार काउंसिल ऑफ राजस्थान के आगामी चुनाव में सदस्य पद हेतु
            प्रत्याशी हूँ। आपसे निवेदन है कि मुझे अपना बहुमूल्य वोट देकर सहयोग
            करें।
          </p>

          {/* INFO CARD */}
          <div style={styles.infoCard}>
            <div>
              <h3 style={styles.infoName}>राजेन्द्र कुमार अग्रवाल</h3>
              <p style={styles.infoSub}>अधिवक्ता, राजस्थान उच्च न्यायालय</p>
              <p style={styles.infoPhone}>📞 9057747296 | 7023023080</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div style={styles.btnRow}>
            <button style={styles.primaryBtn}>
              🔍 अपना नाम मतदाता सूची में खोजें
            </button>
            <button style={styles.outlineBtn}>📞 संपर्क करें</button>
          </div>
        </div>

        {/* LEFT → IMAGE */}
        <div style={styles.left}>
          <img src={heroImage.src} alt="Election Banner" style={styles.image} />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
          }

          .right {
            order: 1; /* ✅ content upar */
            text-align: center;
            align-items: center !important;
          }

          .left {
            order: 2; /* ✅ image niche */
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    background: "linear-gradient(135deg,#fff,#fdf2f2)",
    padding: "2rem 1.5rem",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // ✅ 50-50
    gap: "3rem",
    alignItems: "center",
  },

  left: {
    width: "100%",
    height: "100%",
  },

  image: {
    width: "100%",
    height: "auto", // ✅ fix
    objectFit: "contain", // ✅ full image dikhegi
    borderRadius: "20px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
  },

  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.2rem",
  },

  badge: {
    background: "#8B0000",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    width: "fit-content",
  },

  heading: {
    fontSize: "clamp(1.8rem,4vw,2.8rem)",
    fontWeight: "800",
    lineHeight: "1.3",
  },

  body: {
    color: "#555",
    maxWidth: "500px",
    lineHeight: "1.7",
  },

  infoCard: {
    background: "#fff",
    padding: "1rem",
    borderRadius: "12px",
    borderLeft: "5px solid #8B0000",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    maxWidth: "400px",
  },

  infoName: {
    fontSize: "1.1rem",
    fontWeight: "700",
  },

  infoSub: {
    fontSize: "0.9rem",
    color: "#777",
  },

  infoPhone: {
    fontSize: "0.9rem",
    color: "#8B0000",
    marginTop: "5px",
  },

  btnRow: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "#8B0000",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 6px 20px rgba(139,0,0,0.3)",
  },

  outlineBtn: {
    border: "2px solid #8B0000",
    color: "#8B0000",
    padding: "10px 16px",
    borderRadius: "8px",
    background: "transparent",
    cursor: "pointer",
    fontWeight: "600",
  },
};
