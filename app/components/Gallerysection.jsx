"use client";

import { useEffect, useState } from "react";
import gallery1 from "@/public/gallery1.jpeg";
import gallery2 from "@/public/gallery2.jpeg";

const galleryItems = [
  {
    id: 1,
    type: "video",
    src: "/vedeo.mp4", // ✅ public folder
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

export default function GallerySection() {
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
    <section style={styles.section}>
      <div style={styles.container}>
        {/* GRID */}
        <div style={isMobile ? styles.gridMobile : styles.gridDesktop}>
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                ...styles.card,
                ...(isMobile ? {} : index === 0 ? styles.bigCard : {}),
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
                  src={item.src.src} // ✅ fix for next image import
                  alt=""
                  style={styles.media}
                />
              )}

              {/* OVERLAY */}
              <div style={styles.overlay}>
                <h4 style={styles.cardTitle}>{item.title}</h4>
                {item.desc && <p style={styles.cardDesc}>{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#1a1a1a",
    padding: "3rem 1.5rem",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  // ✅ MOBILE (1 card per row)
  gridMobile: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
  },

  // ✅ DESKTOP (your layout)
  gridDesktop: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridAutoRows: "180px",
    gap: "1rem",
  },

  card: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
    transition: "all 0.3s ease",
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
    display: "block",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "1rem",
    background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
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
};
