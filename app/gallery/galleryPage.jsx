"use client";

import gallery1 from "@/public/gallery1.jpeg";
import gallery2 from "@/public/gallery16.jpeg";
import gallery3 from "@/public/gallery3.jpeg";
import gallery4 from "@/public/gallery4.jpeg";
import gallery5 from "@/public/gallery5.jpeg";
import gallery6 from "@/public/gallery6.jpeg";
import gallery7 from "@/public/gallery7.jpeg";
import gallery8 from "@/public/gallery8.jpeg";
import gallery9 from "@/public/gallery9.jpeg";
import gallery10 from "@/public/gallery10.jpeg";
import gallery11 from "@/public/gallery11.jpeg";
import gallery12 from "@/public/gallery12.jpeg";
import gallery13 from "@/public/gallery13.jpeg";
import gallery14 from "@/public/gallery14.jpeg";
import gallery15 from "@/public/gallery15.jpeg";
import Link from "next/link";

const images = [
  { id: 1, src: gallery1 },
  { id: 2, src: gallery2 },
  { id: 3, src: gallery3 },
  { id: 4, src: gallery4 },
  { id: 5, src: gallery5 },
  { id: 6, src: gallery6 },
  { id: 7, src: gallery7 },
  { id: 8, src: gallery8 },
  { id: 9, src: gallery9 },
  { id: 10, src: gallery10 },
  { id: 11, src: gallery11 },
  { id: 12, src: gallery12 },
  { id: 13, src: gallery13 },
  { id: 14, src: gallery14 },
  { id: 15, src: gallery15 },
];

export default function GalleryPage() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* 🔥 TITLE */}
        <h2 style={styles.title}>Gallery</h2>

        {/* 🔥 GRID */}
        <div style={styles.grid} className="grid">
          {images.map((img) => (
            <div
              key={img.id}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={img.src.src}
                alt="gallery"
                style={styles.image}
              />
            </div>
          ))}
        </div>

        <div style={{width:"100%", marginTop:"2rem", display:"flex",alignItems:"center", justifyContent:"center"}}>
          <button style={{padding:"5px",border:"2px solid #0B3C5D", borderRadius:"10px"}}>
            <Link style={{color:"#0B3C5D", textDecoration:"none", padding:"1rem"}} href="/">Back</Link>
          </button>
        </div>
      </div>

      {/* 🔥 RESPONSIVE MEDIA QUERY */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    background: "#f5f5f5",
    padding: "3rem 1.2rem",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  title: {
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#0B3C5D",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
  },

  // 🔥 GRID
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 💻 desktop
    gap: "1rem",
  },

  // 🔥 CARD
  card: {
    borderRadius: "10px",
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  // 🔥 IMAGE
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    aspectRatio: "4/3", // ✅ medium size (perfect for mobile)
    display: "block",
  },
};