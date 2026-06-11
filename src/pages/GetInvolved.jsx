import React, { useState } from "react";
import upi from "../assets/upi.png";
import poster from "../assets/poster.jpg";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";

export default function GetInvolved() {
  const [vol, setVol] = useState({ name: "", phone: "", interest: "" });

  function onSubmit(e) {
    e.preventDefault();
    alert("Demo: Volunteer form submitted. Backend/email integration can be added next.");
    setVol({ name: "", phone: "", interest: "" });
  }

  return (
    <div className="container" style={{ padding: "34px 0" }}>
      <Reveal>
        <SectionHeader kicker="Get involved" title="Volunteer • Donate • Become a Coach/Mentor" subtitle="Join us to create lasting impact." />
      </Reveal>

      <div className="grid2">
        <Reveal>
          <div className="card" style={{ padding: 16 }}>
            <div className="h3">Volunteer With Us</div>
            <p className="muted small">Fill the form and our team will contact you.</p>

            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
              <div>
                <label>Name</label>
                <input className="input" value={vol.name} onChange={(e) => setVol({ ...vol, name: e.target.value })} required />
              </div>
              <div>
                <label>Phone</label>
                <input className="input" value={vol.phone} onChange={(e) => setVol({ ...vol, phone: e.target.value })} required />
              </div>
              <div>
                <label>Interest</label>
                <input className="input" value={vol.interest} onChange={(e) => setVol({ ...vol, interest: e.target.value })} placeholder="Coaching / Events / Admin support..." />
              </div>

              <button className="btn btnPrimary btnBlock" type="submit">Submit</button>
            </form>

            <hr className="hr" />
            <div className="muted small">
              Transparency statement can be added here (how donations are used).
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="card" style={{ padding: 16 }}>
            <div className="h3">Donate</div>
            <p className="muted small">Scan the UPI QR to donate (demo). Razorpay link can be integrated later.</p>

            <img src={upi} alt="UPI QR code" style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,.10)" }} />

            <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button className="btn btnPrimary" onClick={() => alert("Demo: Add Razorpay redirect here")}>Donate Now</button>
              <button className="btn" onClick={() => navigator.clipboard?.writeText("9921284182@kotak")}>Copy UPI ID</button>
            </div>

            <hr className="hr" />

            <div className="h3">Become a Coach / Mentor</div>
            <p className="muted small">
              Share your profile at <b>info@sahaasfoundation.org</b> (demo). We will reach out for onboarding.
            </p>

            <img src={poster} alt="SAHAAS program poster" style={{ marginTop: 10, borderRadius: 14, border: "1px solid rgba(255,255,255,.10)" }} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
