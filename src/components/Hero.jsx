import bgImage from "../assets/hero-bg.jpg";
import CallButton from "./Buttons";

export const Hero = () => {
  return (
    <section
      id="Home"
      className="hero-section p-5  flex justify-center items-center"
    >
      <div className="content text-center max-w-md sm:max-w-xl md:max-w-2xl xl:max-w-5xl flex flex-col items-center justify-center">
        <h1 className="text-white z-0 font-sans text-3xl font-bold drop-shadow-clan sm:text-4xl  md:text-5xl xl:text-6xl">
          Always want safe and good water for healthy life
        </h1>
        <h3 className="sub-heading mt-1 font-mono text-sm text-slate-50 px-2 xl:text-base md:w-2/3">
          Quench your thirst with our clean mineral water. Call or WhatsApp for
          doorstep delivery.
        </h3>
        <CallButton />
      </div>
    </section>
  );
};

console.log(bgImage);
