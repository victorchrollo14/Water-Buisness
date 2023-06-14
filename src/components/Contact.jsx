import React from "react";
import map from "../assets/maps.png";
import { Form } from "./Form";

export const Contact = () => {
  return (
    <section id="Contact" className="contact-us-section flex flex-col items-center p-5 ">
      <h1 className="font-mono font-semibold p-8 text-lg sm:text-2xl lg:text-3xl">Get In Touch</h1>
      <div className="contact-body flex flex-col justify-center  gap-5 md:flex-row ">
        <div className="directions flex  flex-col bg-lightest-blue px-7 pt-5 pb-5 rounded-md shadow-xl border">
          <h2 className="text-base pb-4 text-inherit">Get Direction</h2>
          <img
            src={map}
            alt="Google map location image"
            className=" rounded-md  w-70vw h-auto max-w-sm md:w-72"
          />
        </div>
        <Form />
      </div>
    </section>
  );
};
