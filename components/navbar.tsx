import NavbarItem from "./navbarItem";
import MobileMenu from "./mobileMenu";
import AccountMenu from "./accountMenu";
import { useRouter } from "next/router";
import { BsChevronDown, BsChevronLeft, BsSearch, BsBell } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";

const TOP_OFFSET = 66;

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [showAccountMenu, setAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const toggleShowMenu = useCallback(() => {
    setShowMenu((cur) => !cur);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setAccountMenu((cur) => !cur);
  }, []);

  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScoll);

    return () => {
      window.removeEventListener("scroll", handleScoll);
    };
  }, []);

  return (
    <nav className="fixed z-40 w-full">
      <div
        className={`flex flex-row items-center px-4 py-6 transition duration-500 md:px-16 ${
          showBackground && "bg-zinc-900 bg-opacity-90" 
        }`}
      >
        <div>
          <img
            onClick={() => {}}
            className="h-4 lg:h-8"
            src="/images/logo.png"
            alt="Logo"
          />
        </div>
        <div className="flex-row hidden ml-8 gap-7 lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          onClick={toggleShowMenu}
          className="relative flex flex-row items-center justify-center gap-1 ml-5 lg:hidden"
        >
          <p className="text-sm text-white">Browse</p>
          <BsChevronDown
            className={`ml-1 text-white transition ${showMenu && "rotate-90"}`}
          />
          <MobileMenu visible={showMenu} />
        </div>
        <div className="flex flex-row items-center ml-auto gap-7">
          <div className="text-white transition duration-500 cursor-pointer hover:text-gray-300">
            <BsSearch />
          </div>
          <div className="text-white transition duration-500 cursor-pointer hover:text-gray-300">
            <BsBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="relative flex flex-row items-center gap-2 cursor-pointer"
          >
            <div className="w-6 h-6 overflow-hidden rounded-md lg:h-9 lg:w-9">
              <img src="/images/default-blue.png" alt="User" />
            </div>
            <div>
              <BsChevronDown
                className={`ml-2 text-white transition ${
                  showAccountMenu && "rotate-90"
                } `}
              />
              <AccountMenu visible={showAccountMenu} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
