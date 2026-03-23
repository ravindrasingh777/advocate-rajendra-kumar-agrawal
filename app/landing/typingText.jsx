"use client";

import { ReactTyped } from "react-typed";

const styles = {
  brandName: {
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "#0B3C5D",
    margin: "0px",
  },
};

export default function TypingText() {
  return (
    <span style={styles.brandName}>
      <ReactTyped
        strings={["Adv. Rajendra Kumar Agrawal"]}
        typeSpeed={60}
        backSpeed={30}
        loop={true}
      />
    </span>
  );
}
