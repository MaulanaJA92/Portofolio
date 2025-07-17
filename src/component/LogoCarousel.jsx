import React, { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import { gsap } from "gsap";

// Daftar teknologi dan warnanya
const techIcons = [
  { icon: <FaReact />, name: "React", color: "text-cyan-400" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
  { icon: <FaDocker />, name: "Docker", color: "text-blue-400" },
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaGitAlt />, name: "Git", color: "text-red-500" },
];

const HorizontalLogoCarousel = ({ move = "left", speed = 20 }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);
  const [shouldLoop, setShouldLoop] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const checkOverflow = () => {
      const isOverflowing = track.scrollWidth > container.offsetWidth;
      setShouldLoop(isOverflowing);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !shouldLoop) return;

    const totalWidth = track.scrollWidth / 2;
    const direction = move === "left" ? -1 : 1;

    tweenRef.current = gsap.to(track, {
      x: direction * totalWidth * -1,
      duration: speed,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const raw = parseFloat(x);
          return direction === -1
            ? raw % totalWidth
            : ((raw % totalWidth) + totalWidth) % totalWidth;
        }),
      },
    });

    return () => tweenRef.current?.kill();
  }, [move, speed, shouldLoop]);

  const iconsToRender = shouldLoop ? [...techIcons, ...techIcons] : techIcons;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black p-0 select-none"
    >
      <div
        ref={trackRef}
        className={`flex gap-8 whitespace-nowrap will-change-transform ${
          shouldLoop ? "" : "justify-center"
        }`}
      >
        {iconsToRender.map((tech, index) => (
          <div
            key={index}
            className="min-w-[100px] h-[100px] flex flex-col items-center justify-center text-white pointer-events-none"
          >
            <div className={`text-5xl ${tech.color}`}>{tech.icon}</div>
            <span className="mt-2 text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalLogoCarousel;
