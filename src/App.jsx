import React, {useState } from 'react';
import SnowBackgroud from './component/Snow';
import FallingRow from './component/FallingRow';
import Hero from './pages/Hero';
import CursorFollower from './component/CursorFollower';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {showSplash && <FallingRow onComplete={handleSplashFinish} />}
      {!showSplash && <><SnowBackgroud/><Hero/><CursorFollower/></>}
    </div>
  );
}

export default App;
