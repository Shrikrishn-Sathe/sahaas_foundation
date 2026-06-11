import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import { IMAGES } from "../config/images.js";
import Reveal from "../components/Reveal.jsx";

export default function Achievements() {
  const [openImage, setOpenImage] = useState(null);

  const achievementImages = [
    {
      img: IMAGES.achi_news,
      title: "Media Coverage Highlight",
      desc: "Featured article on local news platform."
    },
    {
      img: IMAGES.achi_marathon,
      title: "Marathon medals & Recognition",
      desc: "achievements in local marathon events."
    },
  ];

  const milestones = [
    { year: "2023", title: "Khelo India Achievement", text: "Coaches achieved 3rd position at Khelo India. Add year-wise milestones and photos." },
    { year: "2024", title: "Student Progress", text: "Improved physical strength, confidence and social interaction across sessions." },
    { year: "2025", title: "Media Coverage", text: "Featured in local media and community platforms (add links if available)." },
  ];

  return (
    <div className="container" style={{ padding: "34px 0" }}>
      <Reveal>
        <SectionHeader kicker="Achievements" title="Awards • Improvements • Media Coverage" subtitle="Milestones year-wise with evidence and highlights." />
      </Reveal>

      {/* 🔹 Achievement Image Grid */}
      <div className="grid2" style={{ marginBottom: 24 }}>
        {achievementImages.map((item, index) => (
          <Reveal key={index}>
            <div className="card" style={{ padding: 16 }}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: 260,
                  objectFit: "cover",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,.10)"
                }}
              />

              <div className="h3" style={{ marginTop: 12 }}>{item.title}</div>
              <div className="muted small">{item.desc}</div>

              {/* 🔥 OPEN BUTTON */}
              <button
                onClick={() => setOpenImage(item.img)}
                style={{
                  marginTop: 12,
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  background: "#4cc9f0",
                  color: "#000",
                  fontWeight: 600
                }}
              >
                Open
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      {/* 🔹 Milestones Section */}
      <div className="grid2">
        <Reveal>
          <div className="card" style={{ padding: 16 }}>
            <div className="h3">Year-wise Milestones</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
              {milestones.map((m) => (
                <div key={m.year} style={{ display: "grid", gridTemplateColumns: "86px 1fr", gap: 12 }}>
                  <div className="badge" style={{ justifyContent: "center" }}>{m.year}</div>
                  <div>
                    <div style={{ fontWeight: 900 }}>{m.title}</div>
                    <div className="muted small" style={{ marginTop: 6 }}>{m.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* 🔥 FULL IMAGE MODAL */}
      {openImage && (
        <div
          onClick={() => setOpenImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999
          }}
        >
          <img
            src={openImage}
            alt="Full View"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: 12
            }}
          />

          {/* ❌ CLOSE BUTTON */}
          <button
            onClick={() => setOpenImage(null)}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              fontSize: 22,
              background: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 36,
              height: 36,
              cursor: "pointer"
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
