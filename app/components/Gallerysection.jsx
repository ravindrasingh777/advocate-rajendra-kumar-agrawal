// components/GallerySection.jsx

const galleryItems = [
  { id: 1, label: "विरोध प्रदर्शन में", emoji: "✊", color: "#8B0000" },
  { id: 2, label: "अधिवक्ता सम्मेलन", emoji: "🎤", color: "#6b0000" },
  { id: 3, label: "जन-जनहित यात्रा", emoji: "🚶", color: "#4a0000" },
  { id: 4, label: "हमारा हक, मिलकर लें", emoji: "✋", color: "#8B0000" },
  { id: 5, label: "न्याय के लिए संघर्ष", emoji: "⚖️", color: "#6b0000" },
  { id: 6, label: "साथियों के साथ", emoji: "🤝", color: "#4a0000" },
];

const quotes = [
  "वो अदालत में भी लड़े, सड़क पर भी लड़े — यही असली अधिवक्ता होते हैं।",
];

export default function GallerySection() {
  return (
    <section id="gallery" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.tagBadge}>अधिवक्ता राजेन्द्र कुमार अग्रवाल</div>
          <h2 style={styles.title}>जनहित में संघर्ष</h2>
          <p style={styles.subtitle}>
            अधिवक्ताओं के अधिकारों के लिए प्रतिबद्ध — हर मंच पर, हर मोड़ पर
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={styles.grid}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              style={{ ...styles.card, background: item.color }}
            >
              <div style={styles.cardEmoji}>{item.emoji}</div>
              <div style={styles.cardOverlay}>
                <span style={styles.cardLabel}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Banner */}
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
    color: "#fff",
  },
  subtitle: {
    color: "#aaa",
    fontSize: "0.85rem",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    textAlign: "center",
    maxWidth: "500px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.75rem",
    width: "100%",
  },
  card: {
    borderRadius: "12px",
    aspectRatio: "4/3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
  },
  cardEmoji: {
    fontSize: "3rem",
    opacity: 0.6,
  },
  cardOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
    padding: "0.8rem 0.6rem 0.6rem",
  },
  cardLabel: {
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "#fff",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
  },
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
    position: "relative",
  },
  quoteIcon: {
    fontSize: "2.5rem",
    color: "#C9A84C",
    lineHeight: 1,
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
