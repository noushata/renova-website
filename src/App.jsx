import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Success from "./pages/Success.jsx";

export default function App() {
  const css = `
    :root,
    :root[data-theme="dark"],
    :root[data-theme="light"] {
      --bg: #0a0a0a;              /* near-black */
      --card: rgba(255,255,255,0.04);
      --stroke: rgba(255,255,255,0.14);
      --text: #e2e2e2;            /* light grey text */
      --muted: #a6a6a6;           /* medium grey */
      --brand: #c43b32;           /* RENOVA red from card */
      --brandDim: #962a24;
      --shadow: 0 14px 40px rgba(0,0,0,0.45);
      --radius: 22px;
      --btnTop: rgba(255,255,255,0.06);
      --btnBot: rgba(255,255,255,0.02);
      --ringGrey: #bfbfbf;        /* grey ring for O */
      --white: #ffffff;
    }

    * { box-sizing: border-box; }
    html, body, #root { height: 100%; }
    body {
      margin: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      color: var(--text);
      background:
        radial-gradient(1200px 600px at 10% -10%, rgba(150,42,36,.18), transparent 60%),
        linear-gradient(180deg, #000, #0a0a0a 40%, #0a0a0a 70%, #000);
      background-attachment: fixed;
    }
    a { color: inherit; }

    .container { max-width: 1100px; margin: 0 auto; padding: 28px 20px 60px; }

    .card {
      background: var(--card);
      border: 1px solid var(--stroke);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      backdrop-filter: blur(10px);
    }

    footer { text-align: center; color: #9a9a9a; margin: 32px 0 8px; font-size: 12.5px; }
  `;

  return (
    <>
      <style>{css}</style>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
      <footer>© {new Date().getFullYear()} Renova Electric Corp.</footer>
    </>
  );
}
