import ASCIIText from "./ASCIIText";
import CurvedLoop from "./CurvedLoop";
import FuzzyText from "./FuzzyText";
import SplashCursor from "./SplashCursor";
import Img from "./assets/img.webp"; // Adjust the path as necessary

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="relative min-h-screen bg-black bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${Img})`,
        }}
      >
        <div className="text-blue-500">
          <span className="justify-center flex items-center pt-8">
            <FuzzyText baseIntensity={0.01} enableHover={false}>
              משרד החוץ
            </FuzzyText>
          </span>
          <span className="">
           
          </span>
          <CurvedLoop
            marqueeText="ברוכים הבאים לשירותים מנוהלים"
            direction="right"
            curveAmount={350}
            speed={2}
            interactive={false}
            className="font-bold text-[6rem] tracking-[5px] uppercase leading-none"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
