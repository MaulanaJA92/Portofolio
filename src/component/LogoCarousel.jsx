import React, { useEffect, useRef } from "react";
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

const techIcons = [
  { icon: <FaReact />, name: "React", color: "text-cyan-400" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
  { icon: <FaDocker />, name: "Docker", color: "text-blue-400" },
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaGitAlt />, name: "Git", color: "text-red-500" },
];

const HorizontalLogoCarousel = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const totalWidth = track.scrollWidth / 2; // Karena kita duplikat 2x

    const tween = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black py-10 select-none">
      <div
        ref={trackRef}
        className="flex gap-8 whitespace-nowrap will-change-transform"
        style={{ display: "inline-flex" }}
      >
        {[...techIcons, ...techIcons].map((tech, index) => (
          <div
            key={index}
            className="min-w-[100px] h-[100px] flex flex-col items-center justify-center text-white pointer-events-none"
          >
            <div className={`text-5xl ${tech.color}`}>{tech.icon}</div>
            <span className="mt-2 text-sm text-white">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalLogoCarousel;
