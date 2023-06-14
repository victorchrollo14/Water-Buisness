import React from "react";
import logo from "../assets/logo.png";

let linksClass = "text-sm ml-6 list-disc hover:text-green";

export const Footer = () => {
  return (
    <footer className="footer bg-blue-700 min-h-60 p-2 text-white flex flex-col justify-around md:flex-row">
      <div className="logo m-5">
        <img src={logo} alt="Logo" className="w-28 h-auto" />
        <p className="max-w-sm text-sm mt-3 font-mono">
          we supply clean healthy drinking water Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Optio quaerat inventore similique illum{" "}
        </p>
      </div>

      <ul className="site-map m-5 [&>li]:w-fit">
        <li>
          <h1 className="font-mono font-bold text-green">Site Map</h1>
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
      <ul className="ph-nums text-white font-sans m-5 [&>li]:w-fit">
        <li className="font-mono font-bold text-green">PHONE</li>
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
