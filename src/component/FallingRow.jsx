import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const FallingRow = ({ onComplete }) => {
  const columns = 8;
  const fullText = 'Welcome';

  const [revealed, setRevealed] = useState(Array(fullText.length).fill(''));

  const columnsRef = useRef([]);
  const lettersRef = useRef([]);
  columnsRef.current = [];
  lettersRef.current = [];

  const addToColumnsRef = (el) => {
    if (el && !columnsRef.current.includes(el)) {
      columnsRef.current.push(el);
    }
  };

  const addToLettersRef = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  const randomChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return chars[Math.floor(Math.random() * chars.length)];
  };

  
useEffect(() => {
  fullText.split('').forEach((char, idx) => {
    const delay = idx * 100; // delay antar huruf (100ms per huruf)

    setTimeout(() => {
      let iterations = 0;
      const maxIterations = 10 + Math.floor(Math.random() * 10);
      const interval = setInterval(() => {
        setRevealed((prev) => {
          const updated = [...prev];
          updated[idx] = iterations >= maxIterations ? char : randomChar();
          return updated;
        });

        iterations++;
        if (iterations > maxIterations) clearInterval(interval);
      }, 50);
    }, delay); // ⬅️ delay baru di sini
  });

 
  const totalDelay = fullText.length * 100 + 1500; // pastikan cukup jeda
  const timeout = setTimeout(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.to(lettersRef.current, {
      y: '40vh',
      duration: 0.4,
      opacity: 0, 
      ease: 'power2.in',
      stagger: 0.05,
    }, 0);

    tl.to(columnsRef.current, {
      y: '40vh',
      duration: 0.4,
      opacity: 0, 
      ease: 'power2.in',
      stagger: 0.1,
    }, 0.1);
  }, totalDelay);

  return () => clearTimeout(timeout);
}, [onComplete]);


  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black overflow-hidden z-50">
      {/* Kolom oranye sejak awal */}
      <div className="absolute top-0 left-0 w-full h-full flex z-0">
        {Array.from({ length: columns }).map((_, i) => (
          <div
            key={i}
            ref={addToColumnsRef}
            className="flex-1 bg-[#6c2716]"
            style={{
              height: '100vh',
            }}
          />
        ))}
      </div>


      <div className="absolute z-10 flex space-x-2 text-7xl font-bold tracking-widest text-white">
        {revealed.map((char, i) => (
          <div
            key={i}
            ref={addToLettersRef}
            className="inline-block"
            style={{
              willChange: 'transform',
            }}
          >
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FallingRow;
