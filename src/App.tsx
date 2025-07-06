import React from "react";
import LetterGlitch from "./LetterGlitch";
import SplashCursor from "./SplashCursor";

function App() {
  return (
    <div className="relative min-h-screen">
      <SplashCursor/>
      {/* Glitch background */}
      <div className="fixed inset-0 -z-10">
        <LetterGlitch
          glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
          glitchSpeed={100}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      
    </div>
  );
}

export default App;
