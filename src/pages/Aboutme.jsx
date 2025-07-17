import React from "react";
import LogoCarousel from "../component/LogoCarousel";
import FadeSection from "../component/FadesSetion";

const Aboutme = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-start justify-between px-10">
      <div className="w-full bg-black text-center py-6">
        <h1 className="text-4xl font-bold text-cyan-400">ABOUT ME</h1>
      </div>

      <div className="w-full flex items-start justify-between h-10/12">
        <FadeSection direction="left">
          <div className="text-right">
            <h2 className="text-2xl font-bold">Dari Kanan</h2>
            <p>Konten ini masuk dari kanan.</p>
          </div>
        </FadeSection>

        <FadeSection direction="right">
          <div className="text-right">
            <h2 className="text-2xl font-bold">Dari Kanan</h2>
            <p>Konten ini masuk dari kanan.</p>
          </div>
        </FadeSection>
      </div>

      <LogoCarousel />
    </div>
  );
};

export default Aboutme;
