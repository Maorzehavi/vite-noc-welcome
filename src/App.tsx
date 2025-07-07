import CurvedLoop from "./CurvedLoop";
import FuzzyText from "./FuzzyText";
import SplashCursor from "./SplashCursor";
import Img from "./assets/img.webp"; // Adjust the path as necessary

function App() {
  return (
    <div className="relative h-screen overflow-hidden cursor-none">
      <SplashCursor />
      

      <div
        // className="relative h-screen bg-black bg-cover bg-center flex items-center justify-center"
        className="bg-center h-screen bg-cover "
        style={{
          backgroundImage: `url(${Img})`,
        }}
      >
        <div className="text-blue-500">
          <span className="justify-center flex items-center pt-12 text-[#B7F6FF">
            <FuzzyText baseIntensity={0.01} enableHover={false}>
              משרד החוץ
            </FuzzyText>
          </span>
          <span className="pb-8 ">
            <CurvedLoop
              marqueeText="ברוכים הבאים לשירותים מנוהלים"
              direction="right"
              curveAmount={370}
              speed={3}
            interactive={false}
            className=" text-[6rem] tracking-[5px] uppercase leading-none text-[#B7F6FF "
            />
            </span>
        </div>
      </div>
    </div>
  );
}

export default App;
