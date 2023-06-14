import { Button } from "flowbite-react";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="header flex flex-row bg-white justify-between items-center shadow-md sticky top-0 w-screen z-20">
      <Navigation />
    </header>
  );
};
