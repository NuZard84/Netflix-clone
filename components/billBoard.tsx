import React, { useState } from "react";
import { VscMute, VscUnmute } from "react-icons/vsc";
import useBillboard from "@/hooks/useBillboard";

const BillBoard = () => {
  const { data } = useBillboard();
  const [Mute, setMute] = useState(true);
  console.log(data);
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
      <button onClick={handleMute} className="absolute top-[91%] ml-5 p-2 opacity-50 text-xl rounded-md bg-white g-white hover:opacity-30 transition duration-300">{Mute ? <VscMute /> : <VscUnmute />}</button>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="h-full text-white text-1x1 md:text-5xl w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default BillBoard;
