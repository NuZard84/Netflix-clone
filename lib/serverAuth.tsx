import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismadb from "./prismadb";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    throw new Error("Not Signed in !");
  }

  const cuurentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!cuurentUser) {
    throw new Error("Not signed in !");
  }

  return { cuurentUser };
};

export default serverAuth;
