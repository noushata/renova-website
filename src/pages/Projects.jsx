// src/pages/Projects.jsx
import React, { useEffect, useMemo, useState } from "react";

// Fallback demo data (used if projects.json is missing)
const FALLBACK = [
  {
    id: "rh-home",
    name: "Custom Home – Richmond Hill",
    type: "Residential",
    year: 2024,
    meta: "Panel upgrade • Lighting • EV charger",
    location: "Richmond Hill, ON",
    summary:
      "Full electrical for a custom 2-storey build: 200A service upgrade, layered lighting plan, EV charger, and rough-in for future solar.",
    images: [gradient("Residential")]
  }
];

function gradient(text) {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 750'>
      <defs><linearGradient id='g' x1='0' x2='1'>
        <stop offset='0' stop-color='rgba(196,59,50,.65)'/>
        <stop offset='1' stop-color='rgba(196,59,50,.25)'/>
      </linearGradient></defs>
      <rect width='1200' height='750' fill='url(#g)'/>
      <g font-family='system-ui,-apple-system,Segoe UI,Roboto' fill='#fff' text-anchor='middle'>
        <text x='600' y='395' font-size='64' font-weight='800' opacity='.95'>${text}</text>
      </g>
    </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

export default function Projects() {
  const [all, setAll] = useState(FALLBACK);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("year-desc");
  const [active, setActive] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  // Load projects.json at runtime (served from /public)
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/projects.json", { cache: "no-store" });
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        const cleaned = (data.projects || []).map(p => ({
          ...p,
          images: (p.images && p.images.length ? p.images : [gradient(p.type || "Project")])
        }));
        setAll(cleaned.length ? cleaned : FALLBACK);
      } catch {
        setAll(FALLBACK);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const projects = useMemo(() => {
    let list = all.slice();
    if (type !== "All") list = list.filter((p) => p.type === type);
    if (q.trim()) {
      const n = q.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(n) ||
          (p.meta || "").toLowerCase().includes(n) ||
          (p.summary || "").toLowerCase().includes(n) ||
          (p.location || "").toLowerCase().includes(n)
      );
    }
    list.sort((a, b) => {
      if (sort === "year-desc") return (b.year || 0) - (a.year || 0);
      if (sort === "year-asc") return (a.year || 0) - (b.year || 0);
      return (a.name || "").localeCompare(b.name || "");
    });
    return list;
  }, [all, q, type, sort]);

  const css = `
    .head { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:16px; }
    .title { font-size:28px; font-weight:900; letter-spacing:.6px; color:#e6e6e6; }
    .toolbar { display:flex; flex-wrap:wrap; align-items:center; gap:10px; }

    .chip { display:inline-flex; align-items:center; gap:8px; padding:8px 12px;
      border-radius:999px; border:1px solid var(--stroke);
      background: linear-gradient(180deg, var(--btnTop), var(--btnBot));
      cursor:pointer; user-select:none; font-weight:700; font-size:13px; color:#eee; }
    .chip.active { outline: 2px solid color-mix(in hsl, var(--brand) 60%, transparent); }

    .search, .select { appearance:none; border:1px solid var(--stroke); background:#0c0c0c;
      color:var(--text); padding:10px 12px; border-radius:12px; }

    .grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:16px; margin-top:14px; }
    @media (max-width: 900px){ .grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 560px){ .grid { grid-template-columns: 1fr; } }

    .card { position:relative; overflow:hidden; border-radius:18px; border:1px solid var(--stroke);
      background: color-mix(in hsl, #0b0b0b 92%, transparent); box-shadow: var(--shadow);
      transition: transform .18s ease, border-color .18s ease; cursor: pointer; }
    .card:hover { transform: translateY(-3px) scale(1.01); border-color: color-mix(in hsl, var(--brand) 45%, var(--stroke)); }

    .thumb { aspect-ratio: 16/11; width:100%; object-fit:cover; display:block; }
    .type { position:absolute; top:10px; left:10px; padding:8px 10px; border-radius:999px;
      background: color-mix(in hsl, var(--brand) 65%, #000 35%); color:#fff; font-weight:800; font-size:12px; border:1px solid rgba(255,255,255,.22); }
    .cap { position:absolute; left:10px; bottom:10px; right:10px; background: color-mix(in hsl, #000 80%, transparent);
      color:#fff; border-radius:12px; padding:10px 12px; display:grid; gap:4px; border:1px solid rgba(255,255,255,.15); }
    .name { font-weight:900; letter-spacing:.2px; }
    .meta { font-size:13px; opacity:.9; }

    .overlay { position:fixed; inset:0; background: rgba(0,0,0,0.55); display:grid; place-items:center; z-index:60; }
    .modal { width:min(900px, 92vw); max-height:86vh; overflow:auto; background:#0a0a0a; border-radius:20px; border:1px solid var(--stroke); box-shadow:var(--shadow); }
    .mhead { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:16px; border-bottom:1px solid var(--stroke); position:sticky; top:0; background:#0a0a0a; }
    .mtitle { font-weight:900; font-size:20px; }
    .mclose { border:1px solid var(--stroke); border-radius:10px; padding:8px 12px; background: linear-gradient(180deg, var(--btnTop), var(--btnBot)); cursor:pointer; color:#fff; font-weight:900; }

    .mbody { padding: 16px; display:grid; gap:14px; }
    .gallery { position:relative; border:1px solid var(--stroke); border-radius:14px; overflow:hidden; }
    .gimg { width:100%; height:360px; object-fit:cover; display:block; }
    @media (max-width: 560px){ .gimg { height:260px; } }
    .gprev, .gnext { position:absolute; top:50%; transform: translateY(-50%); border:1px solid var(--stroke);
      border-radius:999px; padding:10px 12px; background: linear-gradient(180deg, var(--btnTop), var(--btnBot)); cursor:pointer; color:#fff; font-weight:900; }
    .gprev { left:10px; } .gnext { right:10px; }
    .gcount { position:absolute; right:12px; bottom:10px; padding:6px 10px; border-radius:999px; background: color-mix(in hsl, #0a0a0a 85%, transparent); border:1px solid var(--stroke); font-size:12px; color:#ddd; }

    .pillRow { display:flex; gap:8px; flex-wrap:wrap; }
    .pill { border:1px solid var(--stroke); border-radius:999px; padding:6px 10px; font-size:12px; background: linear-gradient(180deg, var(--btnTop), var(--btnBot)); }
    .info { color: var(--muted); }
  `;

  const open = (p) => { setActive(p); setImgIndex(0); };
  const close = () => setActive(null);
  const showPrev = (e) => { e.stopPropagation(); setImgIndex((i) => (i === 0 ? active.images.length - 1 : i - 1)); };
  const showNext = (e) => { e.stopPropagation(); setImgIndex((i) => (i === active.images.length - 1 ? 0 : i + 1)); };

  return (
    <>
      <style>{css}</style>

      <div className="head">
        <div className="title">Projects {loading ? "…" : ""}</div>
        <div className="toolbar">
          {["All", "Residential", "Commercial", "Industrial"].map((t) => (
            <button key={t} className={"chip" + (type === t ? " active" : "")} onClick={() => setType(t)}>{t}</button>
          ))}
          <input className="search" placeholder="Search…" value={q} onChange={(e) => setQ(e.target.value)} />
          <select className="select" value={sort} onChange={(e) => setSort(e.target.value)} title="Sort">
            <option value="year-desc">Newest first</option>
            <option value="year-asc">Oldest first</option>
            <option value="name-asc">Name A–Z</option>
          </select>
        </div>
      </div>

      <div className="grid">
        {projects.map((p) => (
          <article key={p.id} className="card" onClick={() => open(p)} aria-label={`Open ${p.name}`}>
            <img className="thumb" src={p.images[0]} alt="" />
            {p.type && <div className="type">{p.type}</div>}
            <div className="cap">
              <div className="name">{p.name}</div>
              {p.meta && <div className="meta">{p.meta}</div>}
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div className="overlay" onClick={close}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="mhead">
              <div className="mtitle">{active.name}</div>
              <button className="mclose" onClick={close}>Close</button>
            </div>
            <div className="mbody">
              <div className="gallery">
                <img className="gimg" src={active.images[imgIndex]} alt="" />
                {active.images.length > 1 && (
                  <>
                    <button className="gprev" onClick={showPrev} aria-label="Previous">‹</button>
                    <button className="gnext" onClick={showNext} aria-label="Next">›</button>
                    <div className="gcount">{imgIndex + 1} / {active.images.length}</div>
                  </>
                )}
              </div>
              <div className="pillRow">
                {active.type && <div className="pill">{active.type}</div>}
                {active.year && <div className="pill">{active.year}</div>}
                {active.location && <div className="pill">{active.location}</div>}
              </div>
              {active.summary && <p className="info">{active.summary}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
