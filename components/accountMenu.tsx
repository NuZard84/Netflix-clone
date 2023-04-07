import { signOut } from "next-auth/react";
import React from "react";
import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const {data} = useCurrentUser()
  const userName = data?.name.charAt(0).toUpperCase() + data?.name.slice(1)
  
  return (
    <>
      {visible && (
        <div className="absolute right-0 flex flex-col w-56 py-5 bg-black border border-gray-800 top-14">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center w-full gap-3 px-3 group/item ">
              <img
                className="w-8 rounded-md"
                src="/images/default-blue.png"
                alt="user"
              />
              <p className="text-sm text-white group-hover/item:underline">
                {userName}
              </p>
            </div>
            <hr className="h-px my-4 bg-gray-600 border-0" />
            <div
              onClick={() => signOut()}
              className="px-3 text-sm text-center text-white hover:underline"
            >
              Sign out
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountMenu;
