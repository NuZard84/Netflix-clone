import React, { useCallback, useState } from "react";
import { VscMute, VscUnmute } from "react-icons/vsc";
import useBillboard from "@/hooks/useBillboard";
import {AiOutlineInfoCircle} from 'react-icons/ai'
import PlayButton from "./playButton";
import {BsFillPlayFill } from 'react-icons/bs'
import useInfoModel from "@/hooks/useInfoModel";

const BillBoard = () => {
  const { data } = useBillboard();
  const [Mute, setMute] = useState(true);
  const {openModal} =useInfoModel()
  // console.log(data);

  const handleOpenModal = useCallback(() => {
      openModal(data?.id)
  },[openModal,data?.id])
  
  const handleMute = () => {
    setMute((cur) => !cur);
  };
  return (
    <div className="relative h-[56.25vw]">
      <video
        src={data?.videoUrl}
        autoPlay
        muted={Mute}
        loop
        poster={data?.thumbnailUrl}
        className="w-full h-[56.25vw] object-cover brightness-[75%]"
      ></video>
      <button
        onClick={handleMute}
        className="absolute flex flex-row items-center top-[93%] right-0 mr-1 p-1 opacity-50 text-[7px] md:text-[16px] lg:text-[20px] md:mr-3 lg:mr-5 md:p-2 lg:p-2 rounded-md bg-white g-white hover:opacity-30 transition duration-300"
      >
        {Mute ? <VscMute /> : <VscUnmute />}
      </button>
      <div className="absolute top-[44%] lg:top-[62%] md:top-[45%] ml-4 md:ml-16">
        <p className="h-full text-white text-1x1 md:text-5xl w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[70%] md:w-[69%] lg:w-[65%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex flex-row items-center gap-3 mt-2 md:mt-4">
          <PlayButton movieId={data?.id} />
          <button onClick={handleOpenModal} className="flex flex-row items-center w-auto px-2 py-1 text-xs font-semibold text-white transition bg-white rounded-md bg-opacity-30 md:py-2 md:px-4 lg:text-lg hover:bg-opacity-20">
            <AiOutlineInfoCircle className="mr-1 sm:text-xs"/>More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
