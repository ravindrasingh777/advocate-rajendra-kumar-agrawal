// "use client";

// const commitments = [
//   {
//     icon: "⚖️",
//     title: "न्याय और समानता",
//     desc: "Ensuring equal opportunities and fair justice for every advocate.",
//   },
//   {
//     icon: "🛡️",
//     title: "गरिमा और सम्मान",
//     desc: "Maintaining dignity and integrity within the legal community.",
//   },
//   {
//     icon: "📊",
//     title: "पारदर्शी व्यवस्था",
//     desc: "Creating a transparent and accountable administrative system.",
//   },
//   {
//     icon: "🎓",
//     title: "कानूनी शिक्षा",
//     desc: "Encouraging continuous learning through workshops and training.",
//   },
//   {
//     icon: "🤝",
//     title: "एकता और सहयोग",
//     desc: "Promoting unity, collaboration, and strong professional bonds.",
//   },
//   {
//     icon: "🚀",
//     title: "आधुनिक सुधार",
//     desc: "Using modern technology to strengthen the legal ecosystem.",
//   },
// ];

// export default function CommitmentsSection() {
//   return (
//     <section id="vision" style={styles.section}>
//       <div style={styles.container}>
//         {/* Title */}
//         <div style={styles.titleBlock}>
//           <h2 style={styles.title}>हमारा संकल्प</h2>
//           <p style={styles.subtitle}>— Our Vision for Advocates</p>
//         </div>

//         {/* Cards */}
//         <div style={styles.grid}>
//           {commitments.map((item, idx) => (
//             <div
//               key={idx}
//               style={styles.card}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-8px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 12px 30px rgba(0,0,0,0.12)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)";
//               }}
//             >
//               {/* Icon */}
//               <div style={styles.iconWrap}>{item.icon}</div>

//               {/* Title */}
//               <h3 style={styles.cardTitle}>{item.title}</h3>

//               {/* Description */}
//               <p style={styles.cardDesc}>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// const styles = {
//   section: {
//     background: "linear-gradient(to bottom, #faf7f2, #ffffff)",
//     padding: "60px 20px",
//   },

//   container: {
//     maxWidth: "1100px",
//     margin: "0 auto",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "40px",
//   },

//   titleBlock: {
//     textAlign: "center",
//   },

//   title: {
//     fontSize: "clamp(22px, 3vw, 32px)",
//     fontWeight: "800",
//     color: "#1a1a1a",
//     marginBottom: "6px",
//   },

//   subtitle: {
//     fontSize: "14px",
//     color: "#0B3C5D",
//     fontWeight: "600",
//   },

//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//     gap: "20px",
//     width: "100%",
//   },

//   card: {
//     background: "#ffffff",
//     border: "1px solid #eee3d8",
//     borderRadius: "18px",
//     padding: "24px 20px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
//   },

//   iconWrap: {
//     width: "48px",
//     height: "48px",
//     borderRadius: "12px",
//     background: "#fff0f0",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "20px",
//     marginBottom: "8px",
//   },

//   cardTitle: {
//     fontSize: "18px",
//     fontWeight: "700",
//     color: "#1a1a1a",
//   },

//   cardDesc: {
//     fontSize: "14px",
//     color: "#666",
//     lineHeight: "1.6",
//   },
// };

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
    <section id="vision" style={styles.section}>
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
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.15)";
                e.currentTarget.style.border = "1px solid rgba(11,60,93,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.08)";
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.2)";
              }}
            >
              {/* Glow background */}
              <div style={styles.glow}></div>

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
    background: "linear-gradient(135deg, #fdf8f3, #f3f7ff, #ffffff)",
    padding: "70px 20px",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "50px",
  },

  titleBlock: {
    textAlign: "center",
  },

  title: {
    fontSize: "clamp(24px, 3vw, 34px)",
    fontWeight: "800",
    color: "#0B3C5D",
  },

  subtitle: {
    fontSize: "14px",
    color: "#8b5e3c",
    fontWeight: "600",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
    width: "100%",
  },

  card: {
    position: "relative",
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "28px 22px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    transition: "all 0.35s ease",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    overflow: "hidden",
  },

  glow: {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background:
      "radial-gradient(circle, rgba(11,60,93,0.15) 0%, transparent 60%)",
    opacity: 0,
    transition: "0.4s",
  },

  iconWrap: {
    width: "55px",
    height: "55px",
    borderRadius: "14px",
    background: "linear-gradient(135deg,#0B3C5D,#1c6ea4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    color: "#fff",
    boxShadow: "0 6px 16px rgba(11,60,93,0.3)",
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#0B3C5D",
  },

  cardDesc: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.6",
  },
};
