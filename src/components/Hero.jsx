import bgImage from "../assets/hero-bg.jpg";
import CallButton from "./Buttons";

export const Hero = () => {
  return (
    <section className="hero-section p-5 mt-11 flex justify-center items-center">
      <div className="content h-full text-center max-w-md sm:max-w-xl md:max-w-2xl flex flex-col items-center justify-center">
        <h1 className="text-white  font-sans text-3xl font-bold drop-shadow-xl sm:text-4xl  md:text-5xl">
          Always want safe and good water for healthy life
        </h1>
        <h3 className="sub-heading mt-1 font-mono text-sm text-slate-50 px-2 ">
          We supply clean mineral water.Call us now or message us on WhatsApp to
          get water delivered to your doorstep
        </h3>
        <CallButton />
      </div>
    </section>
  );
};

console.log(bgImage);
