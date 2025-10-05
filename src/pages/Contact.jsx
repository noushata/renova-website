import React from "react";

export default function Contact() {
  const css = `
    .page { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 22px; }
    @media (max-width: 960px){ .page { grid-template-columns: 1fr; } }

    .card, .panel {
      border: 1px solid var(--stroke); border-radius: 22px; background: color-mix(in hsl, #0b0b0b 92%, transparent);
      box-shadow: var(--shadow); backdrop-filter: blur(10px);
    }

    .hdr {
      padding: 26px 26px 20px; border-bottom:1px solid var(--stroke);
      background:
        radial-gradient(900px 380px at -20% -80%, rgba(196,59,50,.28), transparent 60%),
        linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
    }
    .title { font-size: 28px; font-weight: 900; letter-spacing:.6px; }
    .subtitle { color: var(--muted); margin-top: 6px; }

    .body { padding: 18px; display:grid; gap: 14px; }

    .row {
      display:grid; grid-template-columns: 42px 1fr auto; gap:12px; align-items:center;
      padding:12px; border:1px solid var(--stroke); border-radius:14px;
      background: linear-gradient(180deg, var(--btnTop), var(--btnBot));
    }
    .lbl { font-size:12px; letter-spacing:.08em; color:var(--muted); text-transform:uppercase; }
    .val a { color:#fff; text-decoration:none; font-weight:800; }
    .val { font-size:15px; color:#e9e9e9; }
    .act {
      display:inline-flex; align-items:center; gap:8px; padding:10px 12px; border-radius:10px;
      border:1px solid var(--stroke); background: color-mix(in hsl, #0a0a0a 85%, transparent);
      font-weight:800; text-decoration:none; color:#fff;
    }
    .grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; margin-top:6px; }
    @media (max-width: 560px){ .grid { grid-template-columns: 1fr; } }

    .cta {
      display:flex; align-items:center; justify-content:center; gap:10px;
      padding: 14px 16px; border-radius: 14px; border: 1px solid var(--stroke);
      background: linear-gradient(180deg, var(--btnTop), var(--btnBot)); font-weight: 900; text-decoration: none; color:#fff;
    }

    .panelHdr { padding: 22px 22px 12px; border-bottom: 1px solid var(--stroke); }
    .panelBody { padding: 18px; }
    form { display:grid; gap: 12px; }
    label { font-size: 12px; color: var(--muted); letter-spacing: .04em; }
    input, textarea {
      width:100%; padding:12px 14px; border-radius:12px; border:1px solid var(--stroke); background:#0c0c0c; color:#eaeaea;
    }
    textarea { min-height: 120px; resize: vertical; }
    .submit {
      display:inline-flex; align-items:center; justify-content:center; gap:10px;
      padding:12px 16px; border-radius:14px; border:1px solid var(--stroke);
      background: linear-gradient(180deg, var(--btnTop), var(--btnBot)); color:#fff; font-weight:900;
    }

    .ic { width:22px; height:22px; opacity:.9; color:#e1e1e1; }
    .dot { width: 8px; height: 8px; border-radius: 999px; background: var(--brand); }
  `;

  return (
    <>
      <style>{css}</style>

      <div className="page">
        {/* LEFT: Contact Information */}
        <section className="card">
          <header className="hdr">
            <div className="title">Contact</div>
            <div className="subtitle">Prefer to reach out directly?</div>
          </header>

          <div className="body">
            {/* Phone */}
            <div className="row">
              <svg className="ic" viewBox="0 0 24 24" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.89.3 1.76.53 2.6a2 2 0 0 1-.45 1.92L9 10a16 16 0 0 0 5 5l.76-1.18a2 2 0 0 1 1.92-.45c.84.23 1.71.41 2.6.53A2 2 0 0 1 22 16.92z" fill="currentColor"/></svg>
              <div className="val">
                <div className="lbl">Phone</div>
                <a href="tel:+16472629102">(647) 262-9102</a>
              </div>
              <a className="act" href="tel:+16472629102"><span className="dot" /> Call</a>
            </div>

            {/* Email */}
            <div className="row">
              <svg className="ic" viewBox="0 0 24 24" aria-hidden><path d="M4 4h16a2 2 0 0 1 2 2v1l-10 6L2 7V6a2 2 0 0 1 2-2zm18 6.2V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.8l10 6 10-6z" fill="currentColor"/></svg>
              <div className="val">
                <div className="lbl">Email</div>
                <a href="mailto:renovacontractor@yahoo.ca">renovacontractor@yahoo.ca</a>
              </div>
              <a className="act" href="mailto:renovacontractor@yahoo.ca"><span className="dot" /> Email</a>
            </div>

            {/* Address */}
            <div className="row">
              <svg className="ic" viewBox="0 0 24 24" aria-hidden><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5z" fill="currentColor"/></svg>
              <div className="val">
                <div className="lbl">Address</div>
                <div>63 Summitcrest Dr., Richmond Hill, Ontario, L4S 1A8</div>
              </div>
              <a
                className="act"
                href="https://maps.apple.com/?address=63%20Summitcrest%20Dr,%20Richmond%20Hill,%20Ontario%20L4S%201A8"
                target="_blank" rel="noreferrer"
              >
                <span className="dot" /> Maps
              </a>
            </div>

            {/* Big CTAs */}
            <div className="grid">
              <a className="cta" href="tel:+16472629102"><span className="dot" /> Call Now</a>
              <a className="cta" href="mailto:renovacontractor@yahoo.ca"><span className="dot" /> Email Us</a>
              <a
                className="cta"
                href="https://maps.apple.com/?address=63%20Summitcrest%20Dr,%20Richmond%20Hill,%20Ontario%20L4S%201A8"
                target="_blank" rel="noreferrer"
              >
                <span className="dot" /> Open in Maps
              </a>
            </div>
          </div>
        </section>

        {/* RIGHT: Quote form (Netlify) */}
        <section className="panel">
          <div className="panelHdr">
            <div style={{fontSize: 22, fontWeight: 900}}>Request a Quote</div>
            <div style={{color: 'var(--muted)'}}>We’ll reply within 1 business day.</div>
          </div>
          <div className="panelBody">
            <form name="quote" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
              <input type="hidden" name="form-name" value="quote" />
              <p style={{display:"none"}}>
                <label>Don’t fill this out: <input name="bot-field" /></label>
              </p>

              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" required />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" required />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div>
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" required />
              </div>

              <button className="submit" type="submit">
                <span>Send Request</span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
