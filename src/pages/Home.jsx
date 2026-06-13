import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../config/images.js";
import SectionHeader from "../components/SectionHeader.jsx";
import Card from "../components/Card.jsx";
import Reveal from "../components/Reveal.jsx";
import DonateModal from "../components/DonateModal.jsx";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const colors = {
    pageBg: isDark ? "#0b1220" : "#f8fafc",
    sectionBg: isDark ? "#0f172a" : "#ffffff",
    sectionAltBg: isDark ? "#111827" : "#f1f5f9",
    text: isDark ? "#e5e7eb" : "#0f172a",
    muted: isDark ? "rgba(226,232,240,.82)" : "#475569",
    cardBg: isDark ? "rgba(255,255,255,.05)" : "#ffffff",
    cardBorder: isDark ? "1px solid rgba(255,255,255,.10)" : "1px solid rgba(148,163,184,.20)",
    shadow: isDark ? "0 16px 40px rgba(0,0,0,.24)" : "0 18px 45px rgba(15,23,42,.10)",
    heroOverlay:
      isDark
        ? "linear-gradient(90deg, rgba(11,18,32,.88), rgba(11,18,32,.35))"
        : "linear-gradient(90deg, rgba(15,23,42,.48), rgba(15,23,42,.18))",
  };

  return (
    <>
      {/* Hero */}
      <section style={{ ...styles.hero, background: colors.pageBg }}>
        <img
          src={IMAGES.hero}
          alt="Children activity at SAHAAS"
          style={styles.heroImg}
          decoding="async"
          loading="eager"
        />
        <div style={{ ...styles.heroOverlay, background: colors.heroOverlay }} />
        <div className="container" style={styles.heroContent}>
          <div className="pill">Special Needs • Fitness • Therapy • Sports</div>
          <h1
            className="h1"
            style={{ color: isDark ? "#ffffff" : "#ffffff" }}
          >
            Inspiring Ability. Building Confidence. Changing Lives.
          </h1>

          <p
            className="muted"
            style={{
              maxWidth: 520,
              color: isDark ? "rgba(255,255,255,.88)" : "rgba(255,255,255,.88)",
            }}
          >
            SAHAAS FOUNDATION supports children with Autism, Down Syndrome,
            Cerebral Palsy and other special needs in a safe, supportive and fun
            environment.
          </p>          <div style={{ display: "flex", gap: 20, marginTop: 14, flexWrap: "wrap" }}>
            <Link className="btn btnPrimary" to="/appointment" >
              Join Us
            </Link>
            <Link className="btn" to="/programs" style={{ color: "#ffffff" }}>
              Our Programs
            </Link>
            <button className="btn btnGhost" onClick={() => setOpen(true)} style={{ color: "#ffffff" }}>
              Donate
            </button>

            {open && <DonateModal onClose={() => setOpen(false)} />}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        className="section"
        style={{
          paddingTop: 10,
          background: colors.sectionBg,
          color: colors.text,
        }}
      >
        <div className="container">
          <Reveal>
            <SectionHeader
              kicker="About"
              title="About SAHAAS FOUNDATION"
              subtitle="Helping each child grow stronger physically, mentally and socially."
            />
          </Reveal>

          <div className="grid2">
            <Reveal>
              <div
                className="card"
                style={{
                  ...styles.splitCard,
                  background: colors.cardBg,
                  border: colors.cardBorder,
                  boxShadow: colors.shadow,
                }}
              >
                <img
                  src={IMAGES.about}
                  alt="Founder of SAHAAS FOUNDATION"
                  style={styles.splitImage}
                  decoding="async"
                  loading="lazy"
                />
                <div style={{ ...styles.splitBody, color: colors.text }}>
                  <div className="badge">Founder</div>
                  <div className="h3" style={{ color: colors.text }}>
                    Satish Kharade
                  </div>
                 <p className="muted" style={{ color: colors.muted }}>
  Programs focus on physical development, mental growth and
  confidence through structured exercises and activities.
  <br />
  <br />
  <strong>WhatsApp:</strong>{" "}
  <a href="tel:7057123216">7057123216</a>,{" "}
  <a href="tel:9975674182">9975674182</a>
  <br />
  <strong>Email:</strong>{" "}
  <a href="mailto:khardes2512@gmail.com">
    khardes2512@gmail.com
  </a>
</p>
                  <Link className="btn btnPrimary" to="/about">
                    Know More
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div
                className="card"
                style={{
                  ...styles.splitCard,
                  background: colors.cardBg,
                  border: colors.cardBorder,
                  boxShadow: colors.shadow,
                }}
              >
                <img
                  src={IMAGES.home_program}
                  alt="Founder of SAHAAS FOUNDATION"
                  style={styles.splitImage}
                  decoding="async"
                  loading="lazy"
                />
                <div style={{ ...styles.splitBody, color: colors.text }}>
                  <div className="badge">Programs</div>
                  <div className="h3" style={{ color: colors.text }}>
                    Skill Development & Sports
                  </div>
                  <p className="muted" style={{ color: colors.muted }}>
                    Coordination, balance, strength and fun-based learning to
                    build focus and confidence. Includes functional training,
                    sports activities, group sessions.
                  </p>
                  <Link className="btn" to="/programs">
                    Explore Programs
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section
        className="sectionAlt"
        style={{
          background: colors.sectionAltBg,
          color: colors.text,
        }}
      >
        <div className="container">
          <Reveal>
            <SectionHeader
              kicker="Purpose"
              title="Mission • Vision • Values"
              subtitle="Compassion • Inclusion • Empowerment"
            />
          </Reveal>

          <div className="grid3">
            <Reveal>
              <Card
                icon="🎯"
                title="Mission"
                text="Help each child grow stronger physically, mentally and socially and much more."
              />
            </Reveal>
            <Reveal>
              <Card
                icon="🌟"
                title="Vision"
                text="An inclusive community where every child feels confident."
              />
            </Reveal>
            <Reveal>
              <Card
                icon="🤝"
                title="Values"
                text="Compassion, Inclusion, Safety, Consistency and Growth."
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  hero: { position: "relative", height: "78vh", overflow: "hidden" },
  heroImg: { width: "100%", height: "100%", objectFit: "cover" },
  heroOverlay: {
    position: "absolute",
    inset: 0,
  },
  heroContent: {
    position: "absolute",
    inset: 0,
    paddingTop: "3vh",
  },
  splitCard: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    overflow: "hidden",
    borderRadius: 18,
  },
  splitImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  splitBody: { padding: 16 },
};
