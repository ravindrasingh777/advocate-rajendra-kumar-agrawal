"use client";
import React, { useRef, useState, useEffect } from "react";
import heroImage from "@/public/instaDp.jpeg";
import carouselImage1 from "@/public/carousel1.jpeg";
import carouselImage2 from "@/public/carousel2.jpeg";
import carouselImage3 from "@/public/carousel3.jpeg";
import carouselImage4 from "@/public/carousel4.jpeg";
import carouselImage5 from "@/public/carousel5.jpeg";

import Image from "next/image";

const carouselItems = [
  {
    id: 1,
    image: carouselImage1,
    link: "https://www.instagram.com/p/DU6A6uGD_0D/",
  },
  {
    id: 2,
    image: carouselImage2,
    link: "https://www.instagram.com/p/DV5yDqRjwDQ/",
  },
  {
    id: 3,
    image: carouselImage3,
    link: "https://www.instagram.com/p/DVpuGF_E_AF/",
  },
  {
    id: 4,
    image: carouselImage4,
    link: "https://www.instagram.com/p/DVoT2-9j902/",
  },
  {
    id: 5,
    image: carouselImage5,
    link: "https://www.instagram.com/p/DU8u0sJElbD/",
  },
];

export default function InstagramCarousel() {
  const scrollRef = useRef(null);

  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // ✅ check scroll position
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setIsStart(el.scrollLeft <= 0);
    setIsEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 5);
  };

  // ✅ attach scroll listener
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();

    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  // ✅ scroll function with stop
  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    if (dir === "left" && isStart) return;
    if (dir === "right" && isEnd) return;

    el.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  const styles = {
    container: {
      width: "100%",
      padding: "20px",
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      flexWrap: "wrap",
      gap: "10px",
    },

    profile: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },

    avatar: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      objectFit: "cover",
    },

    followBtn: {
      background: "linear-gradient(135deg, #0095f6, #0073e6)",
      color: "#fff",
      border: "none",
      padding: "8px 18px",
      borderRadius: "20px",
      cursor: "pointer",
      fontWeight: "600",
    },

    carouselWrapper: {
      position: "relative",
    },

    carousel: {
      display: "flex",
      gap: "16px",
      overflowX: "auto",
      scrollBehavior: "smooth",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },

    card: {
      minWidth: "240px",
      height: "300px",
      borderRadius: "16px",
      overflow: "hidden",
      cursor: "pointer",
      flexShrink: 0,
      position: "relative",
      transition: "0.3s",
    },

    image: {
      objectFit: "contain",
    },

    arrow: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: "#fff",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      zIndex: 2,
      border: "none",
    },

    left: { left: "-10px" },
    right: { right: "-10px" },
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.profile}>
          <img src={heroImage.src} style={styles.avatar} />
          <div>
            <strong style={{ fontSize: "13px" }}>adv.rajendra_agrawal22</strong>
            <div style={{ fontSize: "13px", color: "#666" }}>
              216 posts · 32K followers · 2771 following
            </div>
          </div>
        </div>

        <button style={styles.followBtn}>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.instagram.com/adv.rajendra_agrawal22"
            target="_blank"
          >
            Follow
          </a>
        </button>
      </div>

      {/* CAROUSEL */}
      <div style={styles.carouselWrapper}>
        {/* LEFT */}
        <button
          disabled={isStart}
          style={{
            ...styles.arrow,
            ...styles.left,
            opacity: isStart ? 0.3 : 1,
            cursor: isStart ? "not-allowed" : "pointer",
          }}
          onClick={() => scroll("left")}
        >
          ◀
        </button>

        {/* ITEMS */}
        <div style={styles.carousel} ref={scrollRef}>
          {carouselItems.map((item) => (
            <div
              key={item.id}
              style={styles.card}
              onClick={() => window.open(item.link, "_blank")}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Image src={item.image} alt="" fill style={styles.image} />
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <button
          disabled={isEnd}
          style={{
            ...styles.arrow,
            ...styles.right,
            opacity: isEnd ? 0.3 : 1,
            cursor: isEnd ? "not-allowed" : "pointer",
          }}
          onClick={() => scroll("right")}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
