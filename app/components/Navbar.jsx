"use client";
import { useState } from "react";

const navLinks = [
  { name: "होम", id: "home" },
  { name: "परिचय", id: "about" },
  { name: "संकल्प", id: "vision" },
  { name: "गैलरी", id: "gallery" },
  { name: "संपर्क", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 Scroll Function
  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80; // 👈 apne navbar ki approx height

      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        window.pageYOffset + elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Brand */}
        <div style={styles.brand}>
          <span style={styles.brandName}>Adv. Rajendra Kumar Agrawal</span>
          <span style={styles.brandTag}>BCR 2026</span>
        </div>

        {/* Desktop Nav */}
        <ul style={styles.navLinks} className="desktopNav">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                style={styles.navLink}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button style={styles.ctaBtn} className="desktopNav">
          वोट दें →
        </button>

        {/* Hamburger */}
        <button
          style={styles.hamburger}
          className="mobileOnly"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span style={styles.bar} />
          <span style={styles.bar} />
          <span style={styles.bar} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        style={{
          ...styles.mobileMenu,
          maxHeight: menuOpen ? "300px" : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.id)}
            style={styles.mobileLink}
          >
            {link.name}
          </button>
        ))}

        <button style={styles.mobileBtn}>वोट दें →</button>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktopNav {
            display: none !important;
          }
          .mobileOnly {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobileOnly {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "#f8f6f3",
    borderBottom: "2px solid #8B0000",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0.9rem 1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    display: "flex",
    flexDirection: "column",
  },
  brandName: {
    fontWeight: 700,
    fontSize: "1rem",
    color: "#8B0000",
  },
  brandTag: {
    fontSize: "0.65rem",
    color: "#C9A84C",
    fontWeight: 600,
  },

  navLinks: {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#333",
    fontSize: "0.9rem",
    fontWeight: 500,
  },

  ctaBtn: {
    background: "#8B0000",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    cursor: "pointer",
  },

  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "4px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  bar: {
    width: "22px",
    height: "2px",
    background: "#8B0000",
  },

  mobileMenu: {
    overflow: "hidden",
    transition: "all 0.3s ease",
    background: "#fff",
    borderTop: "1px solid #eee",
    padding: "0 1.2rem",
  },
  mobileLink: {
    display: "block",
    padding: "0.8rem 0",
    borderBottom: "1px solid #eee",
    background: "none",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "1rem",
  },

  mobileBtn: {
    width: "100%",
    margin: "0.8rem 0",
    background: "#8B0000",
    color: "#fff",
    border: "none",
    padding: "0.7rem",
    borderRadius: "6px",
  },
};
