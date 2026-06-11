import React, { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", style = {}, once = true }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShow(false);
          }
        });
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={`reveal ${show ? "show" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}
