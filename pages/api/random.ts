import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    await serverAuth(req);

    const moviecount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * moviecount);

    const randomMovie = await prismadb.movie.findMany({
      take: 1, //this will use to take certain mount of number
      skip: randomIndex, //this will use to skip certai data to the 'skip' Index...

      // where: {
      //   title: "Your Name",
      // },
    });

    return res.status(200).json(randomMovie[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
