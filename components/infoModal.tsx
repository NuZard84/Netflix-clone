import React, { useCallback, useState, useEffect, useRef, use } from "react";
import useMovieId from "@/hooks/useMovie";
import useInfoModel from "@/hooks/useInfoModel";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./playButton";
import FavoriteButton from "./favoriteButton";
import { handleClientScriptLoad } from "next/script";

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const ref = useRef(null);

  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useInfoModel();
  const { data = {} } = useMovieId(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      console.log("visible", visible);
      if (
        isVisible &&
        ref?.current &&
        !(ref.current as HTMLElement).contains(e.target as Node)
      ) {
        // console.log('Clicked outside');
        onClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose, isVisible]);

  const handleClose = useCallback(() => {
    setIsVisible((cur) => !cur);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto transition duration-300 bg-black bg-opacity-70">
      <div className="relative w-auto max-w-3xl mx-auto overflow-auto rounded-md">
        <div
          ref={ref}
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative sm:h-15 md:h-96 lg:h-96">
            <video
              className="w-full h-full object-cover brightness-[60%]"
              autoPlay
              muted
              loop
              src={data?.videoUrl}
              poster={data?.thumbnailUrl}
            ></video>
            <div
              onClick={handleClose}
              className="absolute flex items-center justify-center w-10 h-10 bg-black rounded-full cursor-pointer top-3 right-3 bg-opacity-70"
            >
              <AiOutlineClose className="text-white" size={20} />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="h-full mb-8 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {data?.title}
              </p>
              <div className="flex flex-row items-center gap-4">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>
          <div className="lg:px-12 lg:py-8 sm:px-10 sm:py-6">
            <p className="mb-1 font-semibold text-green-400">New</p>
            <p className="text-white mb-1text-lg ">{data?.duration}</p>
            <p className="mb-1 text-lg text-white">{data?.genre}</p>
            <p className="mt-2 text-lg text-white">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
