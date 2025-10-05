// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

/** Inline “O” logo used inside RENOVA
 *  size: CSS unit (default 1em)
 *  offset: vertical nudge in em (+ down, - up) for perfect baseline alignment
 */
function LogoO({ size = "1em", offset = 0 }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        lineHeight: 0,
        verticalAlign: "baseline",
        transform: `translateY(${offset}em)`,
        // tighten kerning so it feels like a real letter
        marginLeft: "-0.04em",
        marginRight: "-0.02em",
      }}
      aria-hidden
    >
      <svg viewBox="0 0 64 64" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <circle cx="32" cy="32" r="24" fill="none" stroke="var(--ringGrey)" strokeWidth="8" />
        <line x1="32" y1="24" x2="32" y2="40" stroke="var(--ringGrey)" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function Home() {
  const css = `
    .hero {
      display:grid;
      grid-template-columns: 1.1fr 0px 0.9fr; /* left / divider / right */
      gap: 0;
      border:1px solid var(--stroke);
      border-radius: var(--radius);
      background: color-mix(in hsl, #0b0b0b 92%, transparent);
      box-shadow: var(--shadow);
      overflow:hidden;
    }
    @media (max-width: 900px){ .hero { grid-template-columns: 1fr; } .divider { display:none; } }

    .left {
      padding: clamp(40px, 7vw, 80px) clamp(20px, 4vw, 56px);
      display:grid; align-content:center; gap: 14px;
      background:
        radial-gradient(1000px 500px at -15% -35%, rgba(196,59,50,.28), transparent 60%),
        radial-gradient(800px 400px at 120% -40%, rgba(255,255,255,.08), transparent 55%);
    }

    /* Brand lockup */
    .brandRow { display:flex; align-items:flex-end; gap: 0; }
    .renova {
      font-weight: 900;
      font-size: clamp(44px, 7vw, 72px);
      letter-spacing: 2px;
      color: var(--brand);
      display:flex; align-items: baseline; gap:0;
      line-height: 1; /* keep cap-height tidy */
    }
    .corp {
      color: #b8b8b8; letter-spacing: .45em; font-size: 13px;
      text-transform: uppercase; margin-top: 6px;
    }

    .pitch {
      max-width: 680px; color: #c7c7c7; line-height: 1.6; font-size: clamp(16px,2.2vw,18px);
      margin-top: 8px;
    }

    .ctaRow { display:flex; flex-wrap:wrap; gap:12px; margin-top: 16px; }
    .btn {
      display:inline-flex; align-items:center; gap:10px;
      padding: 14px 20px; border-radius: 14px; border: 1px solid var(--stroke);
      background: linear-gradient(180deg, var(--btnTop), var(--btnBot)); color: #fff; font-weight: 800; text-decoration: none;
      transition: transform .12s ease, border-color .12s ease, box-shadow .12s ease;
    }
    .btn:hover {
      transform: translateY(-3px);
      border-color: color-mix(in hsl, var(--brand) 40%, var(--stroke));
      box-shadow: 0 10px 24px rgba(0,0,0,.25);
    }
    .btn .dot { width: 8px; height: 8px; border-radius: 999px; background: var(--brand); }

    .divider {
      width: 1px; background: linear-gradient(180deg, transparent, #8c8c8c 18%, #8c8c8c 82%, transparent);
      margin: 20px 0;
    }

    .right {
      padding: clamp(28px, 6vw, 56px);
      display:grid; gap: 14px; align-content:center;
    }
    .rightTitle { font-size: 22px; font-weight: 900; letter-spacing:.5px; color: #d8d8d8; }
    .line { height:1px; background: var(--stroke); margin: 4px 0 6px; }
    .list { display:grid; gap:10px; color:#bdbdbd; }
    .tag {
      display:inline-block; padding: 8px 12px; border-radius: 999px; border:1px solid var(--stroke);
      background: rgba(255,255,255,0.04); margin-right: 8px; margin-bottom: 8px; font-size: 12.5px; color:#d6d6d6;
    }

    .section { margin-top: 56px; text-align:center; }
    .title { font-size: 26px; font-weight: 900; letter-spacing:.5px; }
    .lead { color:#a8a8a8; max-width: 740px; margin: 8px auto 0; }
  `;

  return (
    <>
      <style>{css}</style>

      <section className="hero card">
        {/* Left: wordmark with inline O (precise baseline alignment) */}
        <div className="left">
          <div className="brandRow">
            <div>
              <div className="renova">
                <span>REN</span>
                {/* Slightly larger than 1em; nudge down to sit on the text baseline */}
                <LogoO size="1.06em" offset={0.08} />
                <span style={{ marginLeft: ".03em" }}>VA</span>
              </div>
              <div className="corp">E L E C T R I C  C O R P.</div>
            </div>
          </div>

          <p className="pitch">
            Licensed, insured, and detail-driven. RENOVA Electric delivers reliable power systems for
            residential, commercial, and industrial projects across the GTA — built on precision and safety.
          </p>

          <div className="ctaRow">
            <Link className="btn" to="/projects"><span className="dot" /> View Projects</Link>
            <Link className="btn" to="/contact"><span className="dot" /> Request a Quote</Link>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="divider" />

        {/* Right: services highlight */}
        <div className="right">
          <div className="rightTitle">Services</div>
          <div className="line" />
          <div className="list">
            <div>
              <span className="tag">Panel Upgrades</span>
              <span className="tag">Lighting Design</span>
              <span className="tag">EV Chargers</span>
            </div>
            <div>
              <span className="tag">Retail & Office Fit-Outs</span>
              <span className="tag">Industrial Retrofits</span>
              <span className="tag">Troubleshooting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Short about strip */}
      <section className="section">
        <div className="title" style={{color:"#dcdcdc"}}>Built to Code. Built to Last.</div>
        <p className="lead">
          ESA-compliant installations, clean workmanship, and transparent communication from quote to final inspection.
        </p>
      </section>
    </>
  );
}
