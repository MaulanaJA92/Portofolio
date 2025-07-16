import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeSection = ({ direction = 'left', children }) => {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    const xStart = direction === 'left' ? '-100vw' : '100vw';


    gsap.fromTo(
      el,
      { opacity: 0, x: xStart },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 100%',
          end: 'top 20%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, [direction]);

  return (
  <div
    ref={sectionRef}
    className="my-32 p-10 bg-[#6c2716] text-white rounded-lg shadow-lg w-full flex justify-start"
  >
    {children}
  </div>
);

};

export default FadeSection;
