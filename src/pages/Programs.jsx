import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import Card from "../components/Card.jsx";
import Reveal from "../components/Reveal.jsx";
import { IMAGES } from "../config/images.js";

export default function Programs() {
  const [openImage, setOpenImage] = useState(null);

  const programImages = [
    {
      img: IMAGES.program_Banner_1,
      title: "Holistic Fitness & Therapy",
      desc: "Strength, stability, relaxation, Brain Gym, sensory integration and more."
    },
    {
      img: IMAGES.program_Banner_2,
      title: "Holistic Fitness & Therapy",
      desc: "A balanced program for body, mind, and confidence-building."
    },
    {
      img: IMAGES.program_Banner_3,
      title: "Learning & Growth Program",
      desc: "Helping children develop confidence, creativity, and independence."
    },
    {
      img: IMAGES.program_Banner_4,
      title: "Creative & Wellness Support",
      desc: "Encouraging healthy learning, movement, teamwork, and self-expression."
    },
    {
      img: IMAGES.program_Banner_5,
      title: "Art & Creativity Sessions",
      desc: "Building essential life skills through supportive and engaging activities."
    },
    {
      img: IMAGES.program_Banner_6,
      title: "Achievement Recognition",
      desc: "Training sessions designed to improve coordination, balance and strength."
    },
  ];

  const items = [
    {
      icon: "🧩",
      title: "Special Kids Skill Development",
      meta: "Autism • ADHD • Slow learners support",
      text: "Behaviour, coordination and motor skills with personalized guidance and progress assessment."
    },
    {
      icon: "🏃",
      title: "Sports Coaching",
      meta: "Marathon training • Strength & stamina",
      text: "Fun sports sessions designed for children with special needs, promoting discipline and teamwork."
    },
    {
      icon: "🧠",
      title: "Brain Gym & Cognitive Activities",
      meta: "Focus • Memory • Emotional balance",
      text: "Activities that improve attention, problem-solving and confidence with fun-based learning."
    },
    {
      icon: "🌿",
      title: "Outdoor & Trekking Events",
      meta: "Independence • Courage",
      text: "Outdoor sessions to build resilience, social skills and independence in a safe environment."
    },
    {
      icon: "🤝",
      title: "Community Activities",
      meta: "Cleanliness drives • Awareness programs",
      text: "Social campaigns to build communication, teamwork and belonging."
    },
  ];

  return (
    <div className="container" style={{ padding: "34px 0" }}>
      <Reveal>
        <SectionHeader
          kicker="Programs"
          title="Our Programs"
          subtitle="Our Programs empower children with special needs through personalized care, skill development, and inclusive support that nurtures confidence and independence."
        />
      </Reveal>

      {/* 🔹 Image Grid */}
      <div className="grid2" style={{ marginBottom: 24 }}>
        {programImages.map((item, index) => (
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

      {/* 🔹 Program Cards */}
      <div className="grid3">
        {items.map((p) => (
          <Reveal key={p.title}>
            <Card {...p} />
          </Reveal>
        ))}
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
