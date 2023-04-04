import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import Navbar from '@/components/navbar'
import BillBoard from "@/components/billBoard";
import MovieLists from "@/components/movieList";
import useMovielist from "@/hooks/useMovielist";


async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: { destination: "/auth", permanent: false },
    };
  }
  return {
    props: {},
  };
}

function Home() {

  const { data : movies} = useMovielist()
  
  return (
    <>
     <Navbar />
     <BillBoard />
     <div className="pb-40">
      <MovieLists title="Trending Now" data={movies}  />
     </div>
    </>
  );
}

export { getServerSideProps };
export default Home;
