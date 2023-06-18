import React from "react";
import logo from "../assets/logo-footer.png";

let linksClass = "text-base ml-6 mb-1 list-disc hover:text-green ";

export const Footer = () => {
  return (
    <footer className="footer bg-blue-700 min-h-60 p-2 text-white flex flex-col justify-around md:flex-row">
      <div className="logo m-5">
        <img src={logo} alt="Logo" className="w-40 h-auto" />
        <p className="max-w-sm text-base mt-3 font-mono ml-3">
          we are dedicated to providing you with the highest quality mineral
          water and water filtration solutions. Our mission is to ensure your
          hydration needs are met with excellence and that you have access to
          clean, refreshing water at all times.
        </p>
      </div>

      <ul className="site-map m-5 [&>li]:w-fit ml-8">
        <li>
          <h1 className="font-mono font-bold text-green text-lg h-10">
            Site Map
          </h1>
        </li>
        <li className={linksClass}>
          <a href="#Home">Home</a>
        </li>
        <li className={linksClass}>
          <a href="#Product">Product</a>
        </li>
        <li className={linksClass}>
          <a href="#About">About</a>
        </li>
        <li className={linksClass}>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <ul className="ph-nums text-white font-sans m-5 [&>li]:w-fit ml-8">
        <li className="font-mono font-bold text-green text-lg h-10">PHONE</li>
        <li className={linksClass}>
          <a href="tel:9620300513">9620300513</a>
        </li>
        <li className={linksClass}>
          <a href="tel:9902702486">9902702486</a>
        </li>
      </ul>
    </footer>
  );
};
