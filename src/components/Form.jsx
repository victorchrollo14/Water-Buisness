import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <>
      <div className="form-section bg-lightest-blue flex flex-col p-5 rounded-lg shadow-xl w-full md:h-fit">
        <h2 className="mb-3 ">Send Us a Message</h2>
        <form action="" className="flex flex-col  gap-2 items-center relative h-60 md:w-96 ">
          <input
            type="text"
            value={name}
            placeholder="Name"
            className="border w-full h-10 p-4 rounded-lg placeholder:font-thin bg-transparent border-solid border-black placeholder:text-black"
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="border w-full h-10 p-4 rounded-lg placeholder:font-thin bg-transparent border-solid border-black placeholder:text-black"
          />
          <textarea
            name="Message"
            id="message"
            cols="20"
            rows="3"
            value={message}
            placeholder="Message"
            className="border w-full px-4 py-2 rounded-lg placeholder:font-thin bg-transparent border-solid border-black placeholder:text-black "
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="items-end border-black border w-28 h-10 font-thin  bg-green absolute bottom-0 right-0"
          />
        </form>
      </div>
    </>
  );
};
