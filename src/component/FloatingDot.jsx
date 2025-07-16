import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const SPEED_FALL = 5;
const SPEED_DOWN = 5;
const SPEED_UP = 5;

const generateDot = (isInitial = false) => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const size = 2 + Math.random() * 2;

  if (isInitial) {
    const distance = 100 - top;
    const duration = distance / SPEED_FALL;

    return { top, left, size, duration, isInitial: true };
  } else {
    const riseAmount = getRandomInt(10, 40);
    const fallDistance = 100 - top + riseAmount;
    const duration = (riseAmount / SPEED_UP) + (fallDistance / SPEED_DOWN);

    return { top, left, size, duration, riseAmount, isInitial: false };
  }
};

const FloatingDot = () => {
  const [dot, setDot] = useState(generateDot(true));
  const dotRef = useRef();

  useEffect(() => {
    const el = dotRef.current;

    if (!el) return;

    const duration = dot.duration;
    let tl = gsap.timeline({
      onComplete: () => {
        // Setelah selesai, respawn dot baru
        const newDot = generateDot(false);
        setDot(newDot);
      },
    });

    if (dot.isInitial) {
      gsap.set(el, {
        y: 0,
        opacity: 0.8,
        top: `${dot.top}%`,
        left: `${dot.left}%`,
      });

      tl.to(el, {
        y: '30vh',
        opacity: 0,
        duration,
        ease: 'linear',
      });
    } else {
      const rise = dot.riseAmount;

      gsap.set(el, {
        y: 0,
        opacity: 0.5,
        top: `${dot.top}%`,
        left: `${dot.left}%`,
      });

      tl.to(el, {
        y: `-${rise}vh`,
        opacity: 0.8,
        duration: rise / SPEED_UP,
        ease: 'sine.out',
      })
        .to(el, {
          y: `30vh`,
          opacity: 0,
          duration: (100 - dot.top + rise) / SPEED_DOWN,
          ease: 'sine.in',
        });
    }

    return () => tl.kill(); // cleanup GSAP timeline
  }, [dot]);

  return (
    <div
      ref={dotRef}
      className="absolute rounded-full bg-white opacity-60"
      style={{
        top: `${dot.top}%`,
        left: `${dot.left}%`,
        width: `${dot.size}px`,
        height: `${dot.size}px`,
      }}
    />
  );
};

export default FloatingDot;
