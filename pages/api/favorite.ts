import { without } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/libs/serverAuth";
import prismadb from "@/libs/prismadb";
import Email from "next-auth/providers/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { cuurentUser } = await serverAuth(req);
      const { movieId } = req.body;
      console.log("req-body", req.body);
      console.log("movieId", movieId);

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("invalid MovieId !");
      }

      const user = await prismadb.user.update({
        where: {
          email: cuurentUser?.email || "",
        },
        data: {
          favoriteIds: {
            push: movieId,
          },
        },
      });

      return res.status(200).json(user);
    }

    if (req.method === "DELETE") {
      const { cuurentUser } = await serverAuth(req);
      const { movieId } = req.body;

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("invalid MovieId !");
      }

      const updatedFavoriteId = without(cuurentUser.favoriteIds, movieId);

      const updatedFavoriteList = await prismadb.user.update({
        where: {
          email: cuurentUser?.email || "",
        },
        data: {
          favoriteIds: updatedFavoriteId,
        },
      });

      return res.status(200).json(updatedFavoriteList);
    }

    return res.status(405).end();
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
