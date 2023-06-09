import React from "react";
import map from "../assets/maps.png";
import { Form } from "./Form";

export const Contact = () => {
  return (
    <section className="contact-us-section flex flex-col items-center p-5">
      <h1 className="font-mono font-semibold p-8">Get In Touch</h1>
      <div className="contact-body flex flex-col gap-5">
        <div className="directions flex items-center flex-col bg-lightest-blue p-7 rounded-md shadow-xl border">
          <h2 className="text-base pb-4">Get Direction</h2>
          <img
            src={map}
            alt="Google map location image"
            className=" rounded-md  w-70vw h-auto max-w-sm "
          />
        </div>
        <Form />
      </div>
    </section>
  );
};
