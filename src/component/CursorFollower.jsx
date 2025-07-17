import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorFollower = () => {
  const dotRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      gsap.set(dotRef.current, { x, y });
      gsap.to(trailRef.current, {
        x,
        y,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleHoverEnter = () => {
      gsap.to(trailRef.current, {
        scale: 1.8,
        backgroundColor: "rgba(255, 255, 255, 1)",
        duration: 0.3,
      });
      gsap.to(dotRef.current, {
        backgroundColor: "#000",
        duration: 0.3,
      });
    };
        const handleMouseDown = () => {
      gsap.to(trailRef.current, {
        scale: 1.8,
        backgroundColor: "rgba(255, 255, 255, 1)",
        duration: 0.3,
      });
      gsap.to(dotRef.current, {
        backgroundColor: "#000",
        duration: 0.3,
      });
    };

    const handleHoverLeave = () => {
      gsap.to(trailRef.current, {
        scale: 1,
        backgroundColor: "rgba(255,255,255,0.2)",
        duration: 0.3,
      });
      gsap.to(dotRef.current, {
        backgroundColor: "#fff",
        duration: 0.3,
      });
    };
      const handleMouseUp = () => {
      gsap.to(trailRef.current, {
        scale: 1,
        backgroundColor: "rgba(255,255,255,0.2)",
        duration: 0.3,
      });
      gsap.to(dotRef.current, {
        backgroundColor: "#fff",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);


    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", handleHoverEnter);
      btn.addEventListener("mouseleave", handleHoverLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      buttons.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleHoverEnter);
        btn.removeEventListener("mouseleave", handleHoverLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-500 mix-blend-difference"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "rgba(255,255,255,0.2)",
          borderRadius: "50%",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-501"
        style={{
          width: "6px",
          height: "6px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default CursorFollower;
