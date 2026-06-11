import React from "react";
import { IMAGES } from "../config/images.js";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Card from "../components/Card.jsx";

export default function Reviews() {
  const items = [
    { icon: "👪", title: "Parent Review", text: "“We saw improvement in focus and confidence. The environment is safe and supportive.”" },
    { icon: "🏅", title: "Progress Note", text: "“Small consistent steps created big changes in coordination and social interaction.”" },
    { icon: "🤝", title: "Volunteer Review", text: "“Meaningful work with a warm team. Truly inspiring to see progress.”" },
  ];

  return (
    <div className="container" style={{ padding: "34px 0" }}>
      <Reveal>
        <SectionHeader kicker="Testimonials" title="Reviews & Success Stories" subtitle="Add real testimonials anytime (admin panel later)." />
      </Reveal>

      <div className="grid2" style={{ marginBottom: 16 }}>
        <Reveal>
          <div className="card" style={{ padding: 16 }}>
            <img src={IMAGES.home_program} alt="Group moment" loading="lazy" decoding="async" style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,.10)" }} />
            <div className="muted small" style={{ marginTop: 10 }}>Real moments from SAHAAS sessions and celebrations.</div>
          </div>
        </Reveal>
        <Reveal>
          <div className="card" style={{ padding: 16 }}>
            <div className="h3">What people say</div>
            <p className="muted" style={{ marginTop: 10 }}>
              Testimonials build trust for parents and donors. You can add real reviews here and on the home page.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="grid3">
        {items.map((r) => (
          <Reveal key={r.title}>
            <Card icon={r.icon} title={r.title} text={r.text} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
