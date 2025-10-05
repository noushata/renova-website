import React from "react";
import { Link, NavLink } from "react-router-dom";

function LogoO({ size = "1em" }) {
  return (
    <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:size,height:size,lineHeight:0,verticalAlign:"-0.08em",margin:"0 .06em"}} aria-hidden>
      <svg viewBox="0 0 64 64" width="100%" height="100%">
        <circle cx="32" cy="32" r="24" fill="none" stroke="var(--ringGrey)" strokeWidth="8" />
        <line x1="32" y1="24" x2="32" y2="40" stroke="var(--ringGrey)" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </span>
  );
}


export default function NavBar() {
  const css = `
    .nav {
      position: sticky; top: 0; z-index: 50;
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--stroke);
      background: color-mix(in hsl, #000 70%, transparent);
    }
    .nav-inner {
      max-width: 1100px; margin: 0 auto; padding: 10px 16px;
      display: flex; align-items: center; justify-content: space-between; gap: 12px;
    }

    .brand { text-decoration: none; }
    .wordmark {
      font-weight: 900; letter-spacing: 2px; font-size: 18px;
      display:flex; align-items:center; gap:0;
    }
    .ren { color: var(--brand); }
    .va { color: var(--brand); margin-left: .04em; }
    .corp {
      color: #b8b8b8; letter-spacing: .45em; font-size: 11.5px;
      text-transform: uppercase; margin-left: 12px;
    }

    .links { display: flex; gap: 8px; }
    .link {
      text-decoration: none; padding: 10px 12px; border-radius: 12px;
      border: 1px solid transparent; font-weight: 700; color: #dcdcdc;
    }
    .link.active, .link:hover {
      border-color: var(--stroke);
      background: linear-gradient(180deg, var(--btnTop), var(--btnBot));
      color: #fff;
    }
  `;

  return (
    <header className="nav">
      <style>{css}</style>
      <div className="nav-inner">
        <Link className="brand" to="/" aria-label="Renova Electric">
          <div className="wordmark">
            <span className="ren">REN</span>
            <LogoO size="1.1em" />
            <span className="va">VA</span>
            <span className="corp">E L E C T R I C&nbsp; C O R P.</span>
          </div>
        </Link>

        <nav className="links">
          <NavLink className={({isActive}) => "link" + (isActive ? " active" : "")} to="/">Home</NavLink>
          <NavLink className={({isActive}) => "link" + (isActive ? " active" : "")} to="/projects">Projects</NavLink>
          <NavLink className={({isActive}) => "link" + (isActive ? " active" : "")} to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
