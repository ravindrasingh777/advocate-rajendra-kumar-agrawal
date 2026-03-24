"use client";
import { useRouter } from "next/navigation";
import TypingText from "../landing/typingText";
import { useState } from "react";

const navLinks = [
  { name: "होम", id: "home" },
  { name: "परिचय", id: "about" },
  { name: "संकल्प", id: "vision" },
  { name: "संघर्ष", id: "hardwork" },
  { name: "गैलरी", route: "/gallery" },
  { name: "संपर्क", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  return (
    <nav id="nav" style={styles.nav}>
      <div style={styles.container}>
        {/* Brand */}
        <div style={styles.brand}>
          {/* <span style={styles.brandName}>Adv. Rajendra Kumar Agrawal</span> */}
          <TypingText />
          <span style={styles.brandTag}>BCR 2026</span>
        </div>

        {/* Desktop Nav */}
        <ul style={styles.navLinks} className="desktopNav">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() =>
                  link.route ? router.push(link.route) : handleScroll(link.id)
                }
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
          maxHeight: menuOpen ? "350px" : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() =>
              link.route ? router.push(link.route) : handleScroll(link.id)
            }
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
    borderBottom: "2px solid #0B3C5D",
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
    color: "#0B3C5D",
  },
  brandTag: {
    fontSize: "0.9rem",
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
    color: "#0B3C5D",
    fontSize: "0.9rem",
    fontWeight: 700,
  },

  ctaBtn: {
    background: "#0B3C5D",
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
    background: "#0B3C5D",
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
    color: "#0B3C5D",
  },

  mobileBtn: {
    width: "100%",
    margin: "0.8rem 0",
    background: "#0B3C5D",
    color: "#fff",
    border: "none",
    padding: "0.7rem",
    borderRadius: "6px",
  },
};
