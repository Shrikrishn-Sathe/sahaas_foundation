import { IMAGES } from "../config/images";
export default function DonateModal({ onClose }) {
    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button style={styles.closeBtn} onClick={onClose}>
                    ❌
                </button>
                <h2 style={{ color: "#111", marginBottom: "6px" }}>
                    Scan & Donate
                </h2>

                <p style={{ color: "#555", fontSize: "14px" }}>
                    Use any UPI app (PhonePe / GPay / Paytm)
                </p>

                <img src={IMAGES.scanner} alt="UPI QR" loading="lazy" decoding="async" style={styles.qr} />
                <p style={{ fontSize: "12px", color: "#777", marginTop: "8px" }}>
  SATISH KHARADE – SAHAAS FOUNDATION
</p>

            </div>
        </div>
    );
}
const styles = {
    overlay: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999
    },
    modal: {
        background: "#ffffff",
        padding: "28px 24px",
        borderRadius: "16px",
        width: "90%",
        maxWidth: "380px",
        textAlign: "center",
        position: "relative",
        boxShadow: "0 20px 40px rgba(0,0,0,0.25)"
    }
    ,
    closeBtn: {
        position: "absolute",
        top: "12px",
        right: "12px",
        border: "none",
        background: "#f3f3f3",
        borderRadius: "50%",
        width: "32px",
        height: "32px",
        fontSize: "16px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
    ,
    qr: {
        width: "100%",
        maxWidth: "330px",
        height: "auto",
        objectFit: "contain",
        margin: "16px auto 0",
        imageRendering: "crisp-edges",
    }

};
