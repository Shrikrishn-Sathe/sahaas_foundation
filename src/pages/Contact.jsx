import React, { useState } from "react";
import contactImg from "../assets/contact.png";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function onSubmit(e) {
    e.preventDefault();
    alert("Demo: Contact form submitted. We can connect it to backend/email.");
    setForm({ name: "", phone: "", message: "" });
  }

  return (
    <div className="container" style={{ padding: "34px 0" }}>
      <Reveal>
        <SectionHeader kicker="Contact" title="Contact Us" subtitle="Address • Phone • Email • Map • Contact Form" />
      </Reveal>

      <div className="grid2">
        <Reveal>
          <div className="card" style={{ padding: 16 }}>
            <img src={contactImg} alt="SAHAAS activities" loading="lazy" decoding="async" style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,.10)" }} />
            <div className="h3" style={{ marginTop: 12 }}>Contact Details</div>
            <div className="muted" style={{ marginTop: 8 }}>
              Address: (Add full address)<br />
              Phone: +91-XXXXXXXXXX<br />
              Email: info@sahaasfoundation.org
            </div>

            <div className="card" style={{ marginTop: 14, padding: 14, background: "rgba(0,0,0,.18)" }}>
              <div style={{ fontWeight: 900 }}>Google Map</div>
              <div className="muted small" style={{ marginTop: 6 }}>
                Replace this box with a Google Map iframe embed.
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="card" style={{ padding: 16 }}>
            <div className="h3">Send a Message</div>

            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
              <div>
                <label>Name</label>
                <input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <label>Phone</label>
                <input className="input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
              </div>
              <div>
                <label>Message</label>
                <textarea className="textarea" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>

              <button className="btn btnPrimary btnBlock" type="submit">Submit</button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
