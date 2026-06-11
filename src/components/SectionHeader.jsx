import React from "react";

export default function SectionHeader({ kicker, title, subtitle, align = "left" }) {
  return (
    <div style={{ textAlign: align, marginBottom: 16 }}>
      {kicker ? <div className="kicker">{kicker}</div> : null}
      <div className="h2">{title}</div>
      {subtitle ? <p className="muted" style={{ margin: "8px 0 0" }}>{subtitle}</p> : null}
    </div>
  );
}
