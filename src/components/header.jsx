import logo from "../assets/logo.png";
import { MenuBar } from "./svg";

export const Header = () => {
  return (
    <header className=" px-3 py-1 flex flex-row justify-between items-center shadow-md fixed top-0 w-screen">
      <div className="logo ">
        <img src={logo} alt="" width={"100px"} height={"80px"} />
      </div>
      <nav>
        <MenuBar />
      </nav>
    </header>
  );
};
