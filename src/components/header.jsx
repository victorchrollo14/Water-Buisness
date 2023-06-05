import logo from "../assets/logo.png";
import { MenuBar } from "./svg";

export const Header = () => {
  return (
    <header className=" px-3 py-1 flex flex-row bg-white justify-between items-center shadow-md z-10 fixed top-0 w-screen">
      <div className="logo ">
        <img src={logo} alt="" className="w-24 sm:w-28 md:w-36"/>
      </div>
      <nav>
        <MenuBar />
      </nav>
    </header>
  );
};
