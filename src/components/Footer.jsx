import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../config/images";
import { FaInstagram } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const colors = {
    wrapBg: isDark ? "rgba(0,0,0,.22)" : "rgba(255,255,255,.92)",
    borderTop: isDark ? "1px solid rgba(255,255,255,.10)" : "1px solid rgba(15,23,42,.10)",
    text: isDark ? "#fff" : "#111827",
    muted: isDark ? "rgba(234,240,255,.70)" : "rgba(17,24,39,.70)",
    softText: isDark ? "rgba(234,240,255,.78)" : "rgba(17,24,39,.78)",
    cardBg: isDark ? "rgba(255,255,255,.05)" : "rgba(15,23,42,.04)",
    cardBorder: isDark ? "1px solid rgba(255,255,255,.08)" : "1px solid rgba(15,23,42,.08)",
    btnBg: isDark ? "rgba(255,255,255,.08)" : "rgba(15,23,42,.05)",
    btnBorder: isDark ? "1px solid rgba(255,255,255,.12)" : "1px solid rgba(15,23,42,.12)",
    iconWrapBg: "linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)",
    instaGradient:
      "linear-gradient(135deg, rgba(131,58,180,.18), rgba(253,29,29,.16), rgba(252,176,69,.16))",
  };

  return (
    <footer style={{ ...styles.wrap, background: colors.wrapBg, borderTop: colors.borderTop }}>
      <div className="container footer-grid">
        {/* Brand Section */}
        <div>
          <div style={styles.brand}>
            <img
              src={IMAGES.logo}
              alt="SAHAAS logo"
              style={styles.logo}
              decoding="async"
            />

            <div>
              <div style={{ ...styles.title, color: colors.text }}>
                SAHAAS FOUNDATION
              </div>

              <div className="muted small" style={{ color: colors.muted }}>
                Breaking barriers, building strength.
              </div>
            </div>
          </div>

          <p className="muted" style={{ marginTop: 12, color: colors.muted }}>
            SAHAAS FOUNDATION supports children with Autism,
            Down Syndrome, Cerebral Palsy and other special needs
            with physical, mental and social development programs.
          </p>

          {/* Social Media */}
          <div style={styles.socialWrap}>
            <a
              href="https://www.instagram.com/sahaasfoundation/"
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.instagramBtn,
                background: colors.instaGradient,
                border: colors.btnBorder,
              }}
            >
              <div style={{ ...styles.instaIconWrap, background: colors.iconWrapBg }}>
                <FaInstagram style={styles.instaIcon} />
              </div>

              <div>
                <div style={{ ...styles.socialTitle, color: colors.text }}>
                  Follow Us on Instagram
                </div>

                <div style={{ ...styles.socialHandle, color: colors.muted }}>
                  @sahaasfoundation
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div style={{ ...styles.head, color: colors.text }}>Quick Links</div>

          <div style={{ ...styles.links, color: colors.softText }}>
            <Link to="/programs" style={{ color: colors.softText }}>
              Programs
            </Link>
            <Link to="/gallery" style={{ color: colors.softText }}>
              Gallery
            </Link>
            <Link to="/achievements" style={{ color: colors.softText }}>
              Achievements
            </Link>
          </div>
        </div>

        {/* Development Team */}
        <div>
          <div style={{ ...styles.head, color: colors.text }}>Development Team</div>

          <div style={styles.creditWrap}>
            <div
              style={{
                ...styles.creditCard,
                background: colors.cardBg,
                border: colors.cardBorder,
              }}
            >
              <span style={{ ...styles.creditLabel, color: colors.muted }}>
                Developed By
              </span>

              <div style={styles.devRow}>
                <span style={{ ...styles.creditName, color: colors.text }}>
                  Sujal Khot
                </span>

                <div style={styles.contactLinks}>
                  <a
                   href="mailto:sujalkhot2479@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...styles.contactBtn,
                      background: colors.btnBg,
                      color: colors.text,
                      border: colors.btnBorder,
                    }}
                  >
                    Email
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sujal-khot-a5a45b360/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...styles.contactBtn,
                      background: colors.btnBg,
                      color: colors.text,
                      border: colors.btnBorder,
                    }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                ...styles.creditCard,
                background: colors.cardBg,
                border: colors.cardBorder,
              }}
            >
              <span style={{ ...styles.creditLabel, color: colors.muted }}>
                Developed By
              </span>

              <div style={styles.devRow}>
                <span style={{ ...styles.creditName, color: colors.text }}>
                  Shrikrishna Sathe
                </span>

                <div style={styles.contactLinks}>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=satheshrikrishna14@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...styles.contactBtn,
                      background: colors.btnBg,
                      color: colors.text,
                      border: colors.btnBorder,
                    }}
                  >
                    Email
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shrikrishna-sathe-600296294/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...styles.contactBtn,
                      background: colors.btnBg,
                      color: colors.text,
                      border: colors.btnBorder,
                    }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                ...styles.creditCard,
                background: colors.cardBg,
                border: colors.cardBorder,
              }}
            >
              <span style={{ ...styles.creditLabel, color: colors.muted }}>
                Guidance & Mentorship
              </span>

              <div style={styles.devRow}>
                <span style={{ ...styles.creditName, color: colors.text }}>
                  Eknath Padekar
                </span>

                <div style={styles.contactLinks}>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=epadekar@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...styles.contactBtn,
                      background: colors.btnBg,
                      color: colors.text,
                      border: colors.btnBorder,
                    }}
                  >
                    Email
                  </a>

                  <a
                    href="https://in.linkedin.com/in/eknath-padekar-72527a159"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...styles.contactBtn,
                      background: colors.btnBg,
                      color: colors.text,
                      border: colors.btnBorder,
                    }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container" style={styles.bottom}>
        <span className="muted small" style={{ color: colors.muted }}>
          © {new Date().getFullYear()} SAHAAS FOUNDATION. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

const styles = {
  wrap: {
    marginTop: 40,
    padding: "34px 0",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1.2fr .8fr 1fr",
    gap: 18,
    alignItems: "start",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  logo: {
    width: 40,
    height: 40,
    borderRadius: 14,
    objectFit: "cover",
    border: "1px solid rgba(255,255,255,.14)",
  },

  title: {
    fontWeight: 900,
  },

  head: {
    fontWeight: 900,
    marginBottom: 12,
  },

  links: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontWeight: 800,
  },

  creditWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  creditCard: {
    padding: "12px 14px",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },

  creditLabel: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: ".4px",
    textTransform: "uppercase",
  },

  creditName: {
    fontSize: 15,
    fontWeight: 800,
  },

  bottom: {
    marginTop: 18,
    paddingTop: 16,
    borderTop: "1px solid rgba(255,255,255,.08)",
  },

  devRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },

  contactLinks: {
    display: "flex",
    gap: 8,
  },

  contactBtn: {
    padding: "5px 10px",
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 700,
    textDecoration: "none",
    transition: ".3s",
  },

  socialWrap: {
    marginTop: 18,
  },

  instagramBtn: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 16px",
    borderRadius: 18,
    textDecoration: "none",
    backdropFilter: "blur(10px)",
    transition: ".3s",
  },

  instaIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 20px rgba(238,42,123,0.35)",
    flexShrink: 0,
  },

  instaIcon: {
    color: "#fff",
    fontSize: 28,
  },

  socialTitle: {
    fontWeight: 800,
    fontSize: 14,
  },

  socialHandle: {
    fontSize: 13,
    marginTop: 2,
  },
};
