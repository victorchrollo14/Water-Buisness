import React from "react";

function CallButton() {
  return (
    <a href="tel:9620300513">
      <button className=" box-content text-white mt-3 px-3 w-24 h-10 bg-light-black md:w-28 border-1 border-white rounded-3xl">
        Call us now
      </button>
    </a>
  );
}

export default CallButton;
