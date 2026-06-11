import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { IMAGES } from "../config/images";

const items = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/achievements", label: "Achievements" },
  { to: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const colors = {
    wrapBg: isDark ? "rgba(11,18,32,.68)" : "rgba(248,250,252,.88)",
    borderBottom: isDark
      ? "1px solid rgba(255,255,255,.10)"
      : "1px solid rgba(15,23,42,.10)",
    text: isDark ? "rgba(234,240,255,.95)" : "#0f172a",
    muted: isDark ? "rgba(234,240,255,.62)" : "rgba(15,23,42,.58)",
    link: isDark ? "rgba(234,240,255,.80)" : "rgba(15,23,42,.72)",
    linkActiveBg: isDark ? "rgba(78,165,255,.14)" : "rgba(59,130,246,.12)",
    linkActiveBorder: isDark
      ? "1px solid rgba(78,165,255,.28)"
      : "1px solid rgba(59,130,246,.24)",
    mobileBg: isDark ? "rgba(11,18,32,.96)" : "rgba(255,255,255,.98)",
    mobileBorder: isDark
      ? "1px solid rgba(255,255,255,.12)"
      : "1px solid rgba(15,23,42,.10)",
    btnBg: isDark ? "rgba(255,255,255,.06)" : "rgba(15,23,42,.04)",
    btnBorder: isDark
      ? "1px solid rgba(255,255,255,.10)"
      : "1px solid rgba(15,23,42,.10)",
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 920) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      style={{
        ...styles.wrap,
        background: colors.wrapBg,
        borderBottom: colors.borderBottom,
      }}
    >
      <div className="container" style={styles.inner}>
        <Link to="/" style={styles.brand} onClick={() => setOpen(false)}>
          <img
            src={IMAGES.logo}
            alt="SAHAAS logo"
            style={{
              ...styles.logo,
              border: isDark
                ? "1px solid rgba(53,197,40,.14)"
                : "1px solid rgba(15,23,42,.10)",
            }}
            loading="lazy"
            decoding="async"
          />

          <div>
            <div style={{ ...styles.owner, color: colors.muted }}>
              Satish Kharade
            </div>

            <div style={{ ...styles.title, color: colors.text }}>
              SAHAAS FOUNDATION
            </div>

            <div className="muted small" style={{ ...styles.subTagline, color: colors.muted }}>
              Breaking barriers · Building strength
            </div>
          </div>
        </Link>

        <button
          className="btn btnGhost"
          style={{
            ...styles.toggle,
            color: colors.text,
            background: colors.btnBg,
            border: colors.btnBorder,
          }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav
          style={{
            ...styles.nav,
            ...(open ? { ...styles.navOpen, background: colors.mobileBg, border: colors.mobileBorder } : {}),
          }}
        >
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                ...styles.link,
                color: colors.link,
                ...(isActive
                  ? {
                      ...styles.active,
                      background: colors.linkActiveBg,
                      border: colors.linkActiveBorder,
                      color: colors.text,
                    }
                  : {}),
              })}
            >
              {it.label}
            </NavLink>
          ))}

          <button
            className="btn btnGhost"
            onClick={toggleTheme}
            style={{
              ...styles.themeBtn,
              color: colors.text,
              background: colors.btnBg,
              border: colors.btnBorder,
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <Link
            to="/appointment"
            className="btn btnPrimary"
            onClick={() => setOpen(false)}
          >
            Appointment / Admission
          </Link>
        </nav>
      </div>

      <style>{`
        @media (max-width: 920px) {
          header button[aria-label="Toggle menu"] {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
          }

          header nav {
            display: none !important;
          }

          header nav[style*="flex-direction: column"] {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

const styles = {
  wrap: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(12px)",
  },

  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: "12px 0",
    position: "relative",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 15,
    objectFit: "cover",
  },

  owner: {
    fontSize: "0.6rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: 2,
    fontWeight: 800,
  },

  title: {
    fontWeight: 900,
    letterSpacing: ".3px",
    lineHeight: 1.1,
  },

  subTagline: {
    fontSize: "0.80rem",
    marginTop: 1,
  },

  toggle: {
    display: "none",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  themeBtn: {
    padding: "10px 12px",
    borderRadius: 999,
    fontSize: "1.1rem",
  },

  link: {
    padding: "10px 12px",
    borderRadius: 999,
    border: "1px solid transparent",
    fontWeight: 800,
    transition: "all .25s ease",
  },

  active: {
    fontWeight: 900,
  },

  navOpen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    position: "absolute",
    right: 0,
    top: 62,
    width: "min(520px, 94vw)",
    padding: 12,
    borderRadius: 16,
    boxShadow: "0 20px 50px rgba(0,0,0,.22)",
    gap: 10,
  },
};