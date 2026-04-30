"use client";
import heroImage from "@/public/newBalletHero3.jpeg.png";
import { Direction } from "radix-ui";

export default function HeroSection() {
  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>
        {/* RIGHT → CONTENT */}
        <div style={styles.right}>
          {/* <div style={styles.badge}>
            ⚖️ Bar Council Election 2026 — सदस्य पद
          </div> */}

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
          {/* <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          > */}
          <div style={styles.infoCard}>
            <div>
              <h3 style={styles.infoName}>राजेन्द्र कुमार अग्रवाल</h3>
              <p style={styles.infoSub}>अधिवक्ता, राजस्थान उच्च न्यायालय</p>
              <p style={styles.infoPhone}>📞 9257061112 | 9829061112</p>
            </div>
            <div
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                // background: "linear-gradient(135deg, #EF4444, #B91C1C)",
                background: "#0B3C5D",
                color: "#fff",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                border: "2px solid rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "8px",
                }}
              >
                <span style={{ fontSize: "10px" }}>BALLOT NO.</span>
                <span style={{ fontSize: "25px" }}>58</span>
              </div>
            </div>
          </div>

          {/* </div> */}

          {/* BUTTONS */}
          <div style={styles.btnRow}>
            <button
              style={styles.primaryBtn}
              onClick={() => {
                const section = document.getElementById("voter-search");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
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
    background: "#0B3C5D",
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
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
    padding: "1rem",
    borderRadius: "12px",
    borderLeft: "5px solid #0B3C5D",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    // maxWidth: "400px",
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
    color: "#0B3C5D",
    marginTop: "5px",
  },

  btnRow: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "#0B3C5D",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 6px 20px rgba(139,0,0,0.3)",
  },

  outlineBtn: {
    border: "2px solid #0B3C5D",
    color: "#0B3C5D",
    padding: "10px 16px",
    borderRadius: "8px",
    background: "transparent",
    cursor: "pointer",
    fontWeight: "600",
  },
};
