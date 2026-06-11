import React, { useMemo, useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import { IMAGES } from "../config/images";

const CATEGORIES = [
  "All",
  "Sports activities",
  "Program",
  "Team",
  "Sports",
  "Social group session",
  "Achievement",
];

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [popupImg, setPopupImg] = useState(null);

  const items = useMemo(
    () => [
      { src: IMAGES.sport_activity_1, title: "Community Sports", cat: "Sports activities" },
      { src: IMAGES.sport_activity_2, title: "Community Sports", cat: "Sports activities" },
      { src: IMAGES.sport_activity_3, title: "Community Sports", cat: "Sports activities" },
      { src: IMAGES.sport_activity_4, title: "Community Sports", cat: "Sports activities" },
      { src: IMAGES.sport_activity_5, title: "Community Sports", cat: "Sports activities" },
      { src: IMAGES.sport_activity_6, title: "Community Sports", cat: "Sports activities" },
      { src: IMAGES.sport_activity_7, title: "Community Sports", cat: "Sports activities" },
      { src: IMAGES.sport_activity_8, title: "Community Sports", cat: "Sports activities" },
      { src: IMAGES.sport_activity_9, title: "Community Sports", cat: "Sports activities" },

      { src: IMAGES.Program_1, title: "Program Launch", cat: "Program" },
      { src: IMAGES.Program_2, title: "Program Launch", cat: "Program" },
      { src: IMAGES.Program_3, title: "Program Launch", cat: "Program" },
      { src: IMAGES.Program_4, title: "Program Launch", cat: "Program" },
      { src: IMAGES.Program_5, title: "Program Launch", cat: "Program" },
      { src: IMAGES.Program_6, title: "Program Launch", cat: "Program" },
      { src: IMAGES.Program_7, title: "Program Launch", cat: "Program" },
      { src: IMAGES.Program_8, title: "Program Launch", cat: "Program" },
      { src: IMAGES.Program_9, title: "Program Launch", cat: "Program" },


      { src: IMAGES.Team_1, title: "Team Building", cat: "Team" },
      { src: IMAGES.Team_2, title: "Team Building", cat: "Team" },
      { src: IMAGES.Team_3, title: "Team Building", cat: "Team" },
      { src: IMAGES.Team_4, title: "Team Building", cat: "Team" },
      { src: IMAGES.Team_5, title: "Team Building", cat: "Team" },
      { src: IMAGES.Team_6, title: "Team Building", cat: "Team" },
      { src: IMAGES.Team_7, title: "Team Building", cat: "Team" },
      { src: IMAGES.Team_8, title: "Team Building", cat: "Team" },
      { src: IMAGES.Team_9, title: "Team Building", cat: "Team" },

      { src: IMAGES.sport_1, title: "Sports Festival", cat: "Sports" },
      { src: IMAGES.sport_2, title: "Sports Festival", cat: "Sports" },
      { src: IMAGES.sport_3, title: "Sports Festival", cat: "Sports" },
      { src: IMAGES.sport_4, title: "Sports Festival", cat: "Sports" },
      { src: IMAGES.sport_5, title: "Sports Festival", cat: "Sports" },
      { src: IMAGES.sport_6, title: "Sports Festival", cat: "Sports" },
      { src: IMAGES.sport_7, title: "Sports Festival", cat: "Sports" },
      { src: IMAGES.sport_8, title: "Sports Festival", cat: "Sports" },
      { src: IMAGES.sport_9, title: "Sports Festival", cat: "Sports" },

      { src: IMAGES.sga_1, title: "Group Session", cat: "Social group session" },
      { src: IMAGES.sga_2, title: "Group Session", cat: "Social group session" },
      { src: IMAGES.sga_3, title: "Group Session", cat: "Social group session" },
      { src: IMAGES.sga_4, title: "Group Session", cat: "Social group session" },
      { src: IMAGES.sga_5, title: "Group Session", cat: "Social group session" },
      { src: IMAGES.sga_6, title: "Group Session", cat: "Social group session" },
      { src: IMAGES.sga_7, title: "Group Session", cat: "Social group session" },
      { src: IMAGES.sga_8, title: "Group Session", cat: "Social group session" },
      { src: IMAGES.sga_9, title: "Group Session", cat: "Social group session" },

      { src: IMAGES.achiv_1, title: "Award Moment", cat: "Achievement" },
      { src: IMAGES.achiv_2, title: "Award Moment", cat: "Achievement" },
      { src: IMAGES.achiv_3, title: "Award Moment", cat: "Achievement" },
      { src: IMAGES.achiv_4, title: "Award Moment", cat: "Achievement" },
      { src: IMAGES.achiv_5, title: "Award Moment", cat: "Achievement" },
      { src: IMAGES.achiv_6, title: "Award Moment", cat: "Achievement" },
      { src: IMAGES.achiv_7, title: "Award Moment", cat: "Achievement" },
      { src: IMAGES.achiv_8, title: "Award Moment", cat: "Achievement" },
      { src: IMAGES.achiv_9, title: "Award Moment", cat: "Achievement" },

    ],
    []
  );

  const filtered =
    cat === "All" ? items : items.filter((i) => i.cat === cat);

  return (
    <div className="container" style={{ padding: "34px 0" }}>
      <Reveal>
        <SectionHeader
          kicker="Gallery"
          title="Photos & Moments"
          subtitle="Training, awards, events and special activities."
        />
      </Reveal>

      {/* Category Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 20,
        }}
      >
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={c === cat ? "btn btnPrimary" : "btn"}
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div style={styles.grid}>
        {filtered.map((it, index) => (
          <Reveal key={`${it.cat}-${index}`}>
            <div style={styles.item}>
              <div style={styles.imgWrap}>
                <img
                  src={it.src}
                  alt={it.title}
                  style={styles.img}
                  loading="lazy"
                  decoding="async"
                  onMouseEnter={() => setPopupImg(it.src)}
                  onMouseLeave={() => setPopupImg(null)}
                />
              </div>

              <div style={styles.caption}>
                <div style={{ fontWeight: 900 }}>{it.title}</div>
                <div className="muted small">{it.cat}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Popup Preview */}
      {popupImg && (
        <div style={styles.popupOverlay}>
          <img src={popupImg} alt="popup" style={styles.popupImg} loading="lazy" decoding="async" />
        </div>
      )}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18,
  },

  item: {
    height: 350,
    borderRadius: 18,
    overflow: "hidden",
    background: "#111827",
    display: "flex",
    flexDirection: "column",
    transition: "0.3s",
    cursor: "pointer",
  },

  imgWrap: {
    flex: 1,
    overflow: "hidden",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
    transition: "0.3s",
  },

  caption: {
    padding: 12,
    flexShrink: 0,
  },

  popupOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    pointerEvents: "none",
  },

  popupImg: {
    width: "80vw",
    height: "80vh",
    objectFit: "contain",
    borderRadius: 20,
    boxShadow: "0 0 40px rgba(0,0,0,0.5)",
    background: "#000",
    padding: 10,
  },
};