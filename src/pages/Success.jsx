import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  const css = `
    .cardS {
      padding: 28px; max-width: 720px; margin: 0 auto;
      text-align: center; border:1px solid var(--stroke); border-radius: 22px;
      background: color-mix(in hsl, #0b0b0b 92%, transparent); box-shadow: var(--shadow);
    }
    .title { font-size: 28px; font-weight: 900; letter-spacing:.6px; color:#f0f0f0; }
    .muted { color: var(--muted); margin: 10px 0 18px; }
    .btn {
      display:inline-flex; gap:10px; align-items:center; justify-content:center;
      padding:12px 16px; border-radius:14px; border:1px solid var(--stroke);
      background: linear-gradient(180deg, var(--btnTop), var(--btnBot)); color:#fff; font-weight:900;
      text-decoration: none;
    }
  `;
  return (
    <>
      <style>{css}</style>
      <section className="cardS">
        <div className="title">Thanks! 🎉</div>
        <div className="muted">Your message was sent. We'll be in touch shortly.</div>
        <Link className="btn" to="/">Back to Home</Link>
      </section>
    </>
  );
}
