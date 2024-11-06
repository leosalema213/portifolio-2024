import Lottie from "lottie-react";
import animationData from "../../assets/animation1.json";
import animationData2 from "../../assets/animation2.json";

import "./hero.css";

export const Hero = () => {
  return (
    <section className="h-[100dvh] bg-zinc-900 flex justify-center items-center px-[30px] md:px-10 lg:px-0">
      <div className="max-w-[1240px] justify-center  flex flex-col-reverse md:flex-row">
        <div className="flex flex-col justify-center items-center md:w-[60%]">
          <div className="text-white">
            <h2 className="text-[20px] md:text-[40px]">Olá eu sou, </h2>

            <h2 className="text-[32px] md:text-[60px]">Leonardo Patrick </h2>

            <h2 className="text-[26px] md:text-[40px]">Front-end developer </h2>
          </div>
        </div>
        <div className="animations">
          <div className="animation">
            <Lottie animationData={animationData} />
          </div>
          <div className="animation2">
            <Lottie animationData={animationData2} />
          </div>
        </div>
      </div>
    </section>
  );
};
