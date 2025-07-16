import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorFollower = () => {
  const dotRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const dotPos = dotRef.current.getBoundingClientRect();
      const trailPos = trailRef.current.getBoundingClientRect();

      const dx = dotPos.left - trailPos.left;
      const dy = dotPos.top - trailPos.top;
      const distance = Math.hypot(dx, dy);

      gsap.set(dotRef.current, {
        x,
        y,
      });

      gsap.to(trailRef.current, {
        x,
        y,
        duration: 1,
      });
      if (distance < 1) {
        // jika jarak sangat dekat
        gsap.to(trailRef.current, {
          scale: 1.5,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(trailRef.current, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-40"
        style={{
          width: "25px",
          height: "25px",
          backgroundColor: "rgba(255,255,255,0.2)",
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Lingkaran kecil (kursor utama) */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-50"
        style={{
          width: "6px",
          height: "6px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default CursorFollower;
