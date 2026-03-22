"use client";

const commitments = [
  {
    icon: "⚖️",
    title: "न्याय और समानता",
    desc: "Ensuring equal opportunities and fair justice for every advocate.",
  },
  {
    icon: "🛡️",
    title: "गरिमा और सम्मान",
    desc: "Maintaining dignity and integrity within the legal community.",
  },
  {
    icon: "📊",
    title: "पारदर्शी व्यवस्था",
    desc: "Creating a transparent and accountable administrative system.",
  },
  {
    icon: "🎓",
    title: "कानूनी शिक्षा",
    desc: "Encouraging continuous learning through workshops and training.",
  },
  {
    icon: "🤝",
    title: "एकता और सहयोग",
    desc: "Promoting unity, collaboration, and strong professional bonds.",
  },
  {
    icon: "🚀",
    title: "आधुनिक सुधार",
    desc: "Using modern technology to strengthen the legal ecosystem.",
  },
];

export default function CommitmentsSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Title */}
        <div style={styles.titleBlock}>
          <h2 style={styles.title}>हमारा संकल्प</h2>
          <p style={styles.subtitle}>— Our Vision for Advocates</p>
        </div>

        {/* Cards */}
        <div style={styles.grid}>
          {commitments.map((item, idx) => (
            <div
              key={idx}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)";
              }}
            >
              {/* Icon */}
              <div style={styles.iconWrap}>{item.icon}</div>

              {/* Title */}
              <h3 style={styles.cardTitle}>{item.title}</h3>

              {/* Description */}
              <p style={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "linear-gradient(to bottom, #faf7f2, #ffffff)",
    padding: "60px 20px",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  },

  titleBlock: {
    textAlign: "center",
  },

  title: {
    fontSize: "clamp(22px, 3vw, 32px)",
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: "6px",
  },

  subtitle: {
    fontSize: "14px",
    color: "#8B0000",
    fontWeight: "600",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    width: "100%",
  },

  card: {
    background: "#ffffff",
    border: "1px solid #eee3d8",
    borderRadius: "18px",
    padding: "24px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  },

  iconWrap: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background: "#fff0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    marginBottom: "8px",
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1a1a1a",
  },

  cardDesc: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.6",
  },
};
