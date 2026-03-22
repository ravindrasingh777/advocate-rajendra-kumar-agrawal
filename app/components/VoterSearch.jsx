"use client";
import { useState } from "react";
import data from "@/public/voter_list_2026_structured.json";

export default function VoterSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  const allVoters = data.sections.flatMap((s) => s.records);

  const handleSearch = () => {
    if (!query.trim()) return;

    const filtered = allVoters.filter(
      (voter) =>
        voter.name_as_on_roll.toLowerCase().includes(query.toLowerCase()) ||
        voter.roll_number.toLowerCase().includes(query.toLowerCase()),
    );

    setResults(filtered);
    setVisibleCount(10); // reset on new search
    setSearched(true);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Title */}
        <h2 style={styles.title}>मतदाता सूची में अपना नाम खोजें</h2>

        {/* Search */}
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="नाम या नामांकन संख्या दर्ज करें..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            style={styles.input}
          />
          <button onClick={handleSearch} style={styles.searchBtn}>
            🔍 खोजें
          </button>
        </div>

        {/* Result Count */}
        {searched && (
          <p style={styles.resultCount}>
            🔎 कुल परिणाम:{" "}
            <span style={styles.highlight}>{results.length}</span>
          </p>
        )}

        {/* No Result */}
        {searched && results.length === 0 && (
          <p style={styles.resultText}>❌ आपका नाम सूची में नहीं मिला</p>
        )}

        {/* Cards */}
        {results.length > 0 && (
          <>
            <div style={styles.resultsWrapper}>
              {results.slice(0, visibleCount).map((voter, index) => (
                <div
                  key={index}
                  style={styles.card}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, styles.cardHover)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, styles.card)
                  }
                >
                  {/* Name */}
                  <h3 style={styles.cardTitle}>{voter.name_as_on_roll}</h3>

                  {/* Details */}
                  <div style={styles.cardGrid}>
                    <p>
                      <span style={styles.label}>Enrollment:</span>{" "}
                      {voter.roll_number}
                    </p>

                    <p>
                      <span style={styles.label}>Electoral No:</span>{" "}
                      {voter.electoral_number}
                    </p>

                    <p style={styles.cardFull}>
                      <span style={styles.label}>Bar:</span>{" "}
                      {voter.bar_association}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < results.length && (
              <button
                onClick={() => setVisibleCount((prev) => prev + 10)}
                style={styles.loadMoreBtn}
              >
                Load More ⬇️
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#f8f5f0",
    padding: "3rem 1.5rem",
    borderBottom: "1px solid #e0d8cc",
  },

  container: {
    maxWidth: "720px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    alignItems: "center",
  },

  title: {
    fontSize: "1.6rem",
    fontWeight: "800",
    color: "#1a1a1a",
    textAlign: "center",
  },

  searchBox: {
    display: "flex",
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    border: "1.5px solid #ddd",
  },

  input: {
    flex: 1,
    padding: "0.85rem 1.2rem",
    border: "none",
    outline: "none",
    fontSize: "0.95rem",
    background: "#fff",
  },

  searchBtn: {
    background: "#8B0000",
    color: "#fff",
    border: "none",
    padding: "0.85rem 1.5rem",
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
  },

  resultCount: {
    width: "100%",
    fontSize: "0.9rem",
    color: "#555",
  },

  highlight: {
    color: "#8B0000",
    fontWeight: "700",
  },

  resultText: {
    fontSize: "0.9rem",
    color: "#777",
  },

  resultsWrapper: {
    width: "100%",
    display: "grid",
    gap: "1rem",
    marginTop: "0.5rem",
  },

  card: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "1rem 1.2rem",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    border: "1px solid #eee",
    transition: "all 0.25s ease",
  },

  cardHover: {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  },

  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#222",
    marginBottom: "0.4rem",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.4rem 0.8rem",
    fontSize: "0.85rem",
    color: "#555",
  },

  cardFull: {
    gridColumn: "1 / -1",
  },

  label: {
    fontWeight: "600",
    color: "#000",
  },

  loadMoreBtn: {
    marginTop: "1rem",
    padding: "0.7rem 1.5rem",
    background: "#8B0000",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.9rem",
  },
};
