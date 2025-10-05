import React from "react";

/** Power “O” to match the card: grey ring, white line, transparent middle */
export default function Logo({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Renova Electric logo">
      <circle cx="32" cy="32" r="24" fill="none" stroke="var(--ringGrey)" strokeWidth="8" />
      <line x1="32" y1="24" x2="32" y2="40" stroke="var(--ringGrey)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
