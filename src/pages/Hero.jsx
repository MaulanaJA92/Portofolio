import React from "react";
import FadeSection from "../component/FadesSetion";

export const Hero = () => {
  return (
    <div className="h-[150vh] w-full px-10 flex items-start justify-between">
      <FadeSection direction="left">
        <div className="text-left">
          <h2 className="text-2xl font-bold">Dari Kiri</h2>
          <p>Konten ini masuk dari kiri.</p>
        </div>
      </FadeSection>

      <FadeSection direction="right">
        <div className="text-right">
          <h2 className="text-2xl font-bold">Dari Kanan</h2>
          <p>Konten ini masuk dari kanan.</p>
        </div>
      </FadeSection>
    </div>
  );
};

export default Hero;
