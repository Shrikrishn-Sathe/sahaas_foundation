import React from "react";
import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import { IMAGES } from "../config/images.js";

// fallback if GitHub fails
const DEFAULT_TEAM = {
  Founder: 1,
  Coaches: 10,
  Volunteers: 40,
  "Special Educators": 8,
  Mentors: 5,
  "Support Staff": 4
};

export default function About() {
  const [teamData, setTeamData] = useState(DEFAULT_TEAM);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/satishkharadesahaasfoundation/sahaas-content/main/saahas-team.json?t=${Date.now()}`,
      { cache: "no-store" } // ⬅️ IMPORTANT (prevents caching)
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setTeamData(data);
      })
      .catch(() => {
        setTeamData(DEFAULT_TEAM);
      });
  }, []);




  return (
    <div className="container" style={{ padding: "34px 0" }}>
      <Reveal>
        <SectionHeader
          kicker="About us"
          title="Who We Are"
          subtitle="A foundation dedicated to supporting children with Autism, Down Syndrome, Cerebral Palsy and other special needs."
        />
      </Reveal>

      <div className="grid2">
        <Reveal>
          <div className="card" style={{ padding: 16, overflow: "hidden", height: '100%' }}>
            <img
              src={IMAGES.about_Sir_image}
              alt="Satish Kharade"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '550px',       /* Set a fixed height that fits your design */
                objectFit: 'fill',    /* This ensures the face isn't stretched */
                objectPosition: 'top', /* Focuses the crop on the head and shoulders */
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,.10)"
              }}
            />
            <div className="h3 " style={{ marginTop: 15, textAlign: 'center' }}>Satish Kharade</div>
            <p className="muted">
              SAHAAS Foundation offers home-based and
              nearby-location training for students,
              ensuring convenience and reducing the burden of travel
              and transportation for parents.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card" style={{ padding: '24px', lineHeight: '1.6' }}>
            {/* Section 1: About */}
            <div className="h3" style={{ color: 'var(--primary-color)', marginBottom: '12px' }}>
              Our Approach
            </div>
            <p style={{ marginBottom: '20px' }}>
              <strong>SAHAAS FOUNDATION</strong> is dedicated to empowering children with autism and special needs through structured physical fitness, life skills training, and social development.
            </p>

            {/* Section 2: Focus Areas with Bullets */}
            <div className="h4" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Our Focus Areas</div>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: 'rgba(255,255,255,0.8)' }}>
              <li><strong>Physical Fitness:</strong> Functional training and movement.</li>
              <li><strong>Life Skills:</strong> Independence and daily living discipline.</li>
              <li><strong>Social Growth:</strong> Outdoor visits and community activities.</li>
              <li><strong>Accessibility:</strong> Home-based and nearby training for convenience.</li>
            </ul>

            {/* Section 3: Vision & Mission */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "10px",   // ⬅️ reduced
                marginTop: "12px"       // ⬅️ reduced
              }}
            >
              <div>
                <div className="h5" style={{ fontWeight: "bold" }}>
                  Our Vision
                </div>
                <p className="large muted">
                  To create an inclusive society where special needs children live healthy,
                  confident lives.
                </p>
              </div>

              <div>
                <div className="h5" style={{ fontWeight: "bold" }}>
                  Our Mission
                </div>
                <p className="large muted">
                  Empowering children through fitness and life skills—completely free of cost.
                </p>
              </div>
            </div>

            <hr
              className="hr"
              style={{
                margin: "12px 0",   // ⬅️ reduced from 24px
                opacity: "0.1"
              }}
            />

            {/* Section 4: Impact */}
            <div className="h3" style={{ marginBottom: "4px" }}>
              Our Impact
            </div>
            <p className="muted" style={{ fontSize: "1.1rem", marginTop: "4px" }}>
              Worked with <strong>500+ students</strong> and built a supportive community of families.
            </p>

          </div>
        </Reveal>
      </div>

      <div className="sectionAlt" style={{ marginTop: 28, padding: 28, borderRadius: 18 }}>
        <Reveal>
          <SectionHeader
            kicker="Team"
            title="Our Team"
            subtitle="Founder • Coaches • Volunteers • Special Educators • Mentors"
          />



          <div className="grid3" style={{ marginTop: 14 }}>
            {Object.keys(teamData).map((role) => (
              <div key={role} className="card" style={{ padding: 16 }}>
                <div className="badge">Role</div>

                <div className="h3" style={{ marginTop: 10 }}>
                  {role}
                </div>

                <div className="muted small">
                  {teamData[role]}
                  {role !== "Founder" && "+"} active members
                </div>
              </div>
            ))}
          </div>

        </Reveal>
      </div>

    </div>
  );
}
