import React from "react";

export default function Card({ title, text, icon, meta }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
        <div>
          <div className="h3" style={{ margin: 0 }}>{title}</div>
          {meta ? <div className="muted small" style={{ marginTop: 6 }}>{meta}</div> : null}
        </div>
        {icon ? <div className="badge">{icon}</div> : null}
      </div>
      <p className="muted" style={{ margin: "10px 0 0" }}>{text}</p>
    </div>
  );
}
