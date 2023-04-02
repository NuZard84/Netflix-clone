import NavbarItem from "./navbarItem";
import MobileMenu from "./mobileMenu";
import AccountMenu from "./accountMenu";
import { BsChevronDown, BsChevronLeft, BsSearch, BsBell } from "react-icons/bs";
import { useCallback, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAccountMenu, setAccountMenu] = useState(false);

  const toggleShowMenu = useCallback(() => {
    setShowMenu((cur) => !cur);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setAccountMenu((cur) => !cur);
  }, []);

  return (
    <nav className="fixed z-40 w-full">
      <div className="flex flex-row items-center px-4 py-6 transition duration-500 md:px-16 bg-zinc-900 bg-opacity-90">
        <div>
          <img className="h-4 lg:h-8" src="/images/logo.png" alt="Logo" />
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
          className="relative flex flex-row items-center justify-center gap-2 ml-8 lg:hidden"
        >
          <p className="text-sm text-white">Browse</p>
          <BsChevronDown className="ml-2 text-white transition" />
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
              <BsChevronDown className={`ml-2 text-white transition ${showAccountMenu && 'rotate-90'} `} />
              <AccountMenu visible={showAccountMenu} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
