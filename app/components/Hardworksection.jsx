"use client";

import { useEffect, useState } from "react";
import gallery1 from "@/public/gallery5.jpeg";
import gallery2 from "@/public/gallery1.jpeg";

const galleryItems = [
  {
    id: 1,
    type: "video",
    src: "/vedeo.mp4",
    title: "न्याय के लिए आंदोलन",
    desc: "अधिवक्ता समाज के अधिकारों के लिए संघर्ष",
  },
  {
    id: 2,
    type: "image",
    src: gallery1,
    title: "साथियों के साथ",
  },
  {
    id: 3,
    type: "image",
    src: gallery2,
    title: "सड़क पर संघर्ष",
  },
];

const quotes = [
  "वो अदालत में भी लड़े, सड़क पर भी लड़े — यही असली अधिवक्ता होते हैं।",
];

export default function HardworkSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="hardwork" style={styles.section}>
      <div style={styles.container}>
        {/* 🔥 HEADER */}
        <div style={styles.header}>
          <div style={styles.tagBadge}>
            अधिवक्ता राजेन्द्र कुमार अग्रवाल
          </div>
          <h2 style={styles.title}>जनहित में संघर्ष</h2>
          <p style={styles.subtitle}>
            अधिवक्ताओं के अधिकारों के लिए प्रतिबद्ध — हर मंच पर, हर मोड़ पर
          </p>
        </div>

        {/* 🔥 GRID */}
        <div style={isMobile ? styles.gridMobile : styles.gridDesktop}>
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                ...styles.card,
                ...(isMobile
                  ? {}
                  : index === 0
                  ? styles.bigCard
                  : styles.smallCard),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* MEDIA */}
              {item.type === "video" ? (
                <video src={item.src} controls style={styles.media} />
              ) : (
                <img
                  src={item.src.src}
                  alt=""
                  style={styles.media}
                />
              )}

              {/* OVERLAY */}
              <div style={styles.overlay}>
                <h4 style={styles.cardTitle}>{item.title}</h4>
                {item.desc && (
                  <p style={styles.cardDesc}>{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 QUOTE SECTION */}
        <div style={styles.quoteBanner}>
          <span style={styles.quoteIcon}>"</span>
          <p style={styles.quoteText}>{quotes[0]}</p>
          <span style={styles.quoteAttr}>
            — अधिवक्ता राजेन्द्र कुमार अग्रवाल
          </span>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#1a1a1a",
    padding: "3.5rem 1.5rem",
    color: "#fff",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center",
  },

  // 🔥 HEADER
  header: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.6rem",
  },

  tagBadge: {
    background: "#C9A84C",
    color: "#1a1a1a",
    borderRadius: "20px",
    padding: "0.25rem 1rem",
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
  },

  title: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: 800,
  },

  subtitle: {
    color: "#aaa",
    fontSize: "0.85rem",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    textAlign: "center",
    maxWidth: "500px",
  },

  // ✅ MOBILE
  gridMobile: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
    width: "100%",
  },

  // ✅ DESKTOP
  gridDesktop: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridAutoRows: "180px",
    gap: "1rem",
    width: "100%",
  },

  card: {
  position: "relative",
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",
  boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
  transition: "all 0.3s ease",
  height: "220px", // ✅ ADD THIS (mobile friendly)
},

  bigCard: {
    gridColumn: "1 / span 8",
    gridRow: "1 / span 2",
  },

  smallCard: {
    gridColumn: "span 4",
    gridRow: "span 1",
  },

  media: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "1rem",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
  },

  cardTitle: {
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#FFD369",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
  },

  cardDesc: {
    fontSize: "0.75rem",
    color: "#ddd",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
  },

  // 🔥 QUOTE
  quoteBanner: {
    background: "#2a2a2a",
    border: "1px solid #333",
    borderLeft: "4px solid #C9A84C",
    borderRadius: "10px",
    padding: "1.2rem 1.5rem",
    maxWidth: "700px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },

  quoteIcon: {
    fontSize: "2.5rem",
    color: "#C9A84C",
    fontFamily: "Georgia, serif",
  },

  quoteText: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    fontSize: "0.92rem",
    color: "#ddd",
    lineHeight: 1.7,
    fontStyle: "italic",
  },

  quoteAttr: {
    fontSize: "0.75rem",
    color: "#C9A84C",
    fontWeight: 600,
    fontFamily: "'Noto Sans Devanagari', sans-serif",
  },
};