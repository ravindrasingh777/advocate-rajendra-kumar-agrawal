// components/AboutSection.jsx

import aboutImage from "@/public/aboutus.jpeg";

const bioPoints = [
  "Advocate at Rajasthan High Court, Jaipur  ",
  "Candidate for Member, Bar Council of Rajasthan 2026 ",
  "Dedicated to upholding the dignity and traditions of the legal fraternity  ",
  "Actively working for the rights, welfare, and unity of advocates  ",
  "A strong and fearless voice on every issue concerning the Bar Council ",
  "Committed to transparency, growth, and modernization of legal systems ",
  "Standing firmly with advocates — in court and beyond ",
];

export default function AboutSection() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* Left: Poster card */}
        <div style={styles.left}>
          <img
            src={aboutImage.src}
            alt="Election Banner"
            style={styles.image}
          />
        </div>

        {/* Right: Bio */}
        <div style={styles.right}>
          <div style={styles.sectionTag}>परिचय</div>
          <h2 style={styles.heading}>
            अधिवक्ता राजेन्द्र कुमार अग्रवाल — एक परिचय
          </h2>

          <ul style={styles.bioList}>
            {bioPoints.map((point, idx) => (
              <li key={idx} style={styles.bioItem}>
                <span style={styles.bioCheck}>✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Quote */}
          <blockquote style={styles.quote}>
            <p style={styles.quoteText}>
              अधिवक्ताओं को चेन से नहीं बाँधा जा सकता। अपनी आवाज़ उठाना हमारा हक
              भी है, कर्तव्य भी है।
            </p>
            <cite style={styles.quoteAuthor}>
              — Adv. Rajendra Kumar Agrawal
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#f8f5f0",
    padding: "clamp(2rem, 5vw, 3.5rem) 1.2rem",
    borderBottom: "1px solid #e0d8cc",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr", // ✅ mobile default
    gap: "2rem",
    alignItems: "center",
  },

  left: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    maxWidth: "320px",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
    objectFit: "cover",
  },

  right: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },

  sectionTag: {
    background: "#fff0f0",
    border: "1px solid #0B3C5D",
    color: "#0B3C5D",
    borderRadius: "20px",
    padding: "0.25rem 0.9rem",
    fontSize: "0.7rem",
    fontWeight: 700,
    width: "fit-content",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
  },

  heading: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    fontSize: "clamp(1.2rem, 4vw, 1.7rem)", // ✅ responsive text
    fontWeight: 800,
    color: "#1a1a1a",
    lineHeight: 1.4,
  },

  bioList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },

  bioItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.6rem",
    fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
    color: "#444",
    lineHeight: 1.5,
  },

  bioCheck: {
    color: "#0B3C5D",
    fontWeight: 700,
    fontSize: "0.9rem",
    flexShrink: 0,
    marginTop: "0.15rem",
  },

  quote: {
    background: "#fff",
    border: "1.5px solid #e0d8cc",
    borderLeft: "4px solid #0B3C5D",
    borderRadius: "10px",
    padding: "1rem 1.2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
  },

  quoteText: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)",
    color: "#333",
    lineHeight: 1.6,
    fontStyle: "italic",
  },

  quoteAuthor: {
    fontSize: "0.75rem",
    color: "#0B3C5D",
    fontWeight: 600,
  },
};
