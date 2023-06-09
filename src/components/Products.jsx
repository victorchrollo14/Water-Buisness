import React from "react";
import prod1 from "../assets/Mineral-can-transformed.jpeg";
import prod2 from "../assets/bisleri-product.png";
import { Curve, Line } from "./svg";

function Products() {
  const data = [
    {
      id: crypto.randomUUID(),
      price: "₹30",
      name: "Mineral Water Bottle",
      cap: "25 litre can",
      img: prod1,
    },
    {
      id: crypto.randomUUID(),
      price: "₹90",
      name: "Bisleri Water Bottle",
      cap: "25 litre can",
      img: prod2,
    },
  ];

  return (
    <section
      id="Product"
      className="product-section bg-lightest-blue p-10 sm:py-20  "
    >
      <div className="heading flex  flex-col justify-center items-center pb-5 sm:pb-20">
        <h1 className="text-center mb-3 text-base font-semibold font-mono  md:text-2xl ">
          We Deliver Best Quality <br /> Water Pack
        </h1>
        <Curve />
      </div>

      <ul className="product-list  flex flex-col items-center justify-center gap-8 sm:flex-row ">
        {data.map(({ id, price, name, cap, img }) => {
          return (
            <li
              key={id}
              className="flex flex-col p-8 md:pb-12 border rounded-xl shadow-2xl bg-white max-w-sm sm:max-w-lg"
            >
              <img src={img} alt="Product image" />

              <div className="more-info flex flex-col items-center">
                <Line />
                <h3 className="mt-6 text-xs font-mono text-slate-600">{cap}</h3>
                <h1 className="font-sans font-medium text-sm sm:text-clampHead">
                  {name}
                </h1>
                <h3 className="text-sm text-tblue mt-2">{price}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Products;
