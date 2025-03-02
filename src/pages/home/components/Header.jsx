import { useState } from "react";
import { useNavigate } from "react-router";
import "./src/style.css";
import profileImg from "./src/assets/profile.png";
import logo from "../../../assets/logo.png";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="header-background h-14 py-1.5 px-5 text-white flex justify-between text-[10px] items-stretch 
      md:text-xl md:h-[94px] md:font-lg"
    >
      <div className="grid grid-cols-4 self-center">
        <div className="mr-3 md:mr-16">
          <img src={logo} className="h-[18px] md:h-[40px]" />
        </div>
        <div className="self-center w-fit">Series</div>
        <div className="self-center w-fit">Film</div>
        <div className="self-center w-fit">Daftar Saya</div>
      </div>
      <div className="relative flex">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="focus:outline-none"
        >
          <img
            src={profileImg}
            className="self-center rounded-full size-5 md:size-10"
            alt="Profile"
          />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-9 md:mt-20 w-32 bg-white text-black rounded-md shadow-lg overflow-hidden">
            <button
              className="block w-full px-4 py-2 text-left hover:bg-gray-200"
              onClick={() => navigate("login")}
            >
              Keluar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
