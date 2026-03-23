// components/ContactSection.jsx

import { FacebookIcon, InstagramIcon } from "lucide-react";

const contactCards = [
  {
    icon: "📍",
    titleHi: "पता / Address",
    lines: [
      "Hotel Reeve Inn, Near Session Court Gate No. 4",
      " Kabir Marg, Banipark",
      "Jaipur, Rajasthan",
    ],
  },
  {
    icon: "📞",
    titleHi: "फोन / Phone",
    lines: ["9257061112", "9829061112"],
    social: true,
  },
  {
    icon: "🗳️",
    titleHi: "चुनाव / Election",
    lines: [
      "Bar Council of Rajasthan",
      "Member Election 2025–26",
      "Vote: Adv. Rajendra Kumar Agrawal",
    ],
  },
];

export default function ContactSection() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        {/* Title */}
        <div style={styles.titleBlock}>
          <h2 style={styles.title}>संपर्क करें</h2>
          <span style={styles.titleEn}>— Get in Touch</span>
        </div>

        {/* Cards */}
        <div style={styles.grid}>
          {contactCards.map((card, idx) => (
            <div key={idx} style={styles.card} className="card-hover">
              <div style={styles.icon}>{card.icon}</div>

              <h3 style={styles.cardTitle}>{card.titleHi}</h3>

              <div style={styles.divider}></div>

              <div style={styles.lineBlock}>
                {card.lines.map((line, i) => (
                  <p key={i} style={styles.line}>
                    {line}
                  </p>
                ))}
              </div>

              {card.social && (
                <div style={styles.socialRow}>
                  <a href="https://www.facebook.com/people/Rajendra-Kumar-Agrawal/61584317660811/" style={styles.socialBtn}>
                    <FacebookIcon/>
                  </a>
                  <a href="https://www.instagram.com/adv.rajendra_agrawal22?igsh=MTN1dXdseHI2bHFoNw%3D%3D&utm_source=qr" style={styles.socialBtn}>
                    <InstagramIcon/>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={styles.cta}>
          <p style={styles.ctaText}>🗳️ आपका एक वोट, न्याय की नई दिशा!</p>
        </div>
      </div>

      {/* Hover Effect */}
      <style>
        {`
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
        }
        `}
      </style>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 1.5rem",
    background: "#fafafa",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  titleBlock: {
    textAlign: "center",
    marginBottom: "2.5rem",
  },

  title: {
    fontSize: "2rem",
    fontWeight: "800",
  },

  titleEn: {
    color: "#8B0000",
    fontSize: "0.9rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
  },

  card: {
    background: "#f8f5f0",
    borderRadius: "12px",
    padding: "1.8rem 1.5rem",
    textAlign: "center",
    border: "1px solid #eee",
    transition: "0.3s",
  },

  icon: {
    fontSize: "1.8rem",
    marginBottom: "0.8rem",
  },

  cardTitle: {
    fontWeight: "700",
    marginBottom: "0.5rem",
  },

  divider: {
    width: "40px",
    height: "3px",
    background: "#8B0000",
    margin: "0.5rem auto 1rem",
    borderRadius: "10px",
  },

  lineBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
  },

  line: {
    fontSize: "0.9rem",
    color: "#555",
  },

  socialRow: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    marginTop: "0.8rem",
  },

  socialBtn: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "#8B0000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  },

  cta: {
    marginTop: "2.5rem",
    textAlign: "center",
    background: "#8B0000",
    color: "#fff",
    padding: "1.5rem",
    borderRadius: "10px",
  },

  ctaText: {
    fontWeight: "700",
  },
};
