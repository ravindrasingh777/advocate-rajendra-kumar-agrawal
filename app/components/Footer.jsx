// components/Footer.jsx

const footerLinks = ["होम", "परिचय", "संकल्प", "गैलरी", "संपर्क"];

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand */}
        <div style={styles.brand}>
          <span style={styles.brandName}>Adv. Rajendra Kumar Agrawal</span>
          <span style={styles.brandSub}>
            Bar Council of Rajasthan — Member 2026
          </span>
        </div>

        {/* Nav */}
        <nav style={styles.nav}>
          {footerLinks.map((link) => (
            <a key={link} href="#" style={styles.link}>
              {link}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div style={styles.copy}>
          © 2026 Adv. Rajendra Kumar Agrawal | BCR 2026. सर्वाधिकार सुरक्षित।
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#111",
    color: "#aaa",
    padding: "1.8rem 1.5rem",
    borderTop: "3px solid #0B3C5D",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    textAlign: "center",
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
  },
  brandName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#fff",
  },
  brandSub: {
    fontSize: "0.72rem",
    color: "#C9A84C",
    letterSpacing: "0.05em",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "#888",
    fontSize: "0.82rem",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    transition: "color 0.2s",
  },
  copy: {
    fontSize: "0.72rem",
    color: "#555",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
  },
};
