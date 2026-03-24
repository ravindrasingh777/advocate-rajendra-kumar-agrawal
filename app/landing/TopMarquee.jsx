"use client";

export default function TopMarquee() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.marquee}>
        <div style={styles.track}>
          {/* Repeat content 2 times for seamless loop */}
          <span style={styles.text}>
           ⚖️ Bar Council Election 2026 — सदस्य पद
          </span>

          <span style={styles.text}>
           ⚖️ Bar Council Election 2026 — सदस्य पद
          </span>

          <span style={styles.text}>
           ⚖️ Bar Council Election 2026 — सदस्य पद
          </span>

          <span style={styles.text}>
           ⚖️ Bar Council Election 2026 — सदस्य पद
          </span>

          <span style={styles.text}>
            ⚖️ Bar Council Election 2026 — सदस्य पद
          </span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    overflow: "hidden",
    background: "#d9f99d", // light green
    borderBottom: "1px solid #c4e67a",
  },

  marquee: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    position: "relative",
  },

  track: {
    display: "inline-flex",
    gap: "3rem",
    animation: "scroll 20s linear infinite",
  },

  text: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#1a1a1a",
  },
};