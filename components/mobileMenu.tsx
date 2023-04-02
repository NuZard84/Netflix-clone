import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  return (
    <>
      {visible && (
        <div className="absolute left-0 flex-col w-56 py-5 bg-black border-2 border-gray-800 top-8">
          <div className="flex-col gap-4 fex">
            <div className="px-3 text-center text-white hover:underline">
              Home
            </div>
            <div className="px-3 text-center text-white hover:underline">
              Series
            </div>
            <div className="px-3 text-center text-white hover:underline">
              Film
            </div>
            <div className="px-3 text-center text-white hover:underline">
              New & Popular
            </div>
            <div className="px-3 text-center text-white hover:underline">
              My List
            </div>
            <div className="px-3 text-center text-white hover:underline">
              Browse by Language
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
