import React, { useState } from "react";
import SnowBackgroud from "./component/Snow";
import FallingRow from "./component/FallingRow";
import Hero from "./pages/HeroSection";
import CursorFollower from "./component/CursorFollower";
import Sidebar from "./component/Sidebar";
import Aboutme from "./pages/Aboutme";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {showSplash && <FallingRow onComplete={handleSplashFinish} />}
      {!showSplash && (
        <>
          <SnowBackgroud />
          <CursorFollower />
          <Sidebar />
          <Hero />
          <Aboutme />
        </>
      )}
    </div>
  );
}

export default App;
