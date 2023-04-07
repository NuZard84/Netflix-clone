import { useRouter } from "next/router";
import useMovieId from "@/hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovieId(movieId as string);

  return (
    <div className="w-screen h-screen bg-black">
      <nav className="fixed z-10 flex-row items-center w-full gap-8 p-4 bg-black bg-opacity-70">
        <AiOutlineArrowLeft size={25} className="text-white cursor-pointer" onClick={() => router.push('/')} />
        <p className="font-bold text-white text-1xl md:text-3xl"> <span className="mr-1 font-light" >Watching:</span>{data?.title}</p>
      </nav>
      <video src={data?.videoUrl} autoPlay controls className="w-full h-full"></video>
    </div>
  );
};

export default Watch;
