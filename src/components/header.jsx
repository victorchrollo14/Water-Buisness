import logo from "../assets/logo.png";
import { MenuBar, WhatsApp } from "./svg";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const isTablet = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <header className="header px-3 py-1 flex flex-row bg-white justify-between items-center shadow-md sticky top-0 w-screen">
      <div className="logo ">
        <img src={logo} alt="" className="w-24 sm:w-28 md:w-36 lg:w-40" />
      </div>
      {isTablet ? (
        <NavBarRow />
      ) : (
        <nav className="flex gap-2">
          <a href="https://wa.me/919620300513">
            <WhatsApp />
          </a>
          <MenuBar />
        </nav>
      )}
    </header>
  );
};

const NavBarRow = () => {
  return (
    <nav className="flex items-center gap-5 font-mono px-5">
      <a href="#Home">Home</a>
      <a href="#About">About </a>
      <a href="#Contact" id="Contact">
        Contact
      </a>
      <a href="https://wa.me/919620300513">
        <button className="bg-light-green p-2 rounded-3xl text-sm w-28 border border-green-500">
          Whatsapp
        </button>
      </a>
    </nav>
  );
};
