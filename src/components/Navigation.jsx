import { Navbar, Button } from "flowbite-react";
import logo from "../assets/logo.png";
import { MenuBar, WhatsApp } from "./svg";
import { useMediaQuery } from "react-responsive";

import React from "react";

export const Navigation = () => {
  const isTablet = useMediaQuery({
    query: "(min-width:600px)",
  });

  return (
    <Navbar className="w-full">
      <Navbar.Brand>
        <img
          src={logo}
          alt="Immanuel Water supply"
          className="w-[20vw] max-w-[146px] min-w-[100px]"
        />
      </Navbar.Brand>
      <div className="header-right flex flex-row gap-3 md:order-2 items-center">
        <a href="https://wa.me/919620300513">
          <Button className="[&>span]:h-8">WhatsApp</Button>
        </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#Home">Home</Navbar.Link>
        <Navbar.Link href="#About">About</Navbar.Link>
        <Navbar.Link href="#Product">Products</Navbar.Link>
        <Navbar.Link href="#Contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
