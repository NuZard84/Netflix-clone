import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";
import prismadb from "@/libs/prismadb";

export default async function(req:NextApiRequest, res:NextApiResponse){

    if(req.method !== 'GET'){
        return res.status(405).end()
    }
    
    try {
        await serverAuth(req);

        const {movieId} = req.query
        
        if(typeof movieId !== 'string'){
            throw new Error ('there is no movieID or invalid request')
        }

        const movie = await prismadb.movie.findUnique({
            where : {
                id: movieId
            }
        })
       
        if(!movie) {
            throw new Error ('invalid request !!')
        }

        return res.status(200).json(movie)
        

    } catch (error) {
        console.log(error);
        return res.status(500).end()
    }

}