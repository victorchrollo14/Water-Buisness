import blob from "../assets/newBlob-transformed.png";
import { DotDesign } from "./svg";

export const About = () => {
  return (
    <section className="about-section flex justify-center sm:block py-10 px-12 md:px-24 lg:px-28 xl:px-36 xl:py-20">
      <div className="wrapper-child max-w-sm sm:max-w-none flex flex-col-reverse gap-3 sm:flex-row justify-between ">
        <div className="description  sm:w-30vw">
          <h1 className="font-mono font-bold text-xl  mb-2 leading-none sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
            We Always want safe and Healthy water for Healthy life
          </h1>
          <p className="des font-sans text-sm text-slate-800 sm:text-xs lg:text-base">
            Drinking clean water will keep your body hydrated and properly
            functioning. The quality of the water your drink is as important as
            the quantity. When the correct water filters are used at home, you
            will enjoy quality water for drinking and cooking.
          </p>
        </div>
        <div className="images-display ">
          <img src={blob} alt="" className="w-full h-auto max-w-lg sm:w-35vw" />
        </div>
      </div>
    </section>
  );
};
