import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    const { cuurentUser } = await serverAuth(req);

    const favoritedMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: cuurentUser?.favoriteIds,
        }
      }
    });

    return res.status(200).json(favoritedMovies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}

// import { NextApiResponse, NextApiRequest } from "next";

// import prismadb from "@/libs/prismadb";
// import serverAuth from "@/libs/serverAuth";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       const { cuurentUser } = await serverAuth(req);

//       const favoriteMovies = await prismadb.user.findMany({
//         where: {
//           id: {
//             in: cuurentUser?.favoriteIds, //give all ovie which are relate to cuurent user > favoritelist id
//           },
//         },
//       });

//       return res.status(200).json(favoriteMovies);
//     } catch (error) {
//       console.log(error);
//       return res.status(405).end();
//     }
//   }

//   return res.status(500).end();
// }


