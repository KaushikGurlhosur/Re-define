import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLOading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;

  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-xl bg-blue-75">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center rounded-[30%_70%_70%_30%/30%_30%_70%_70%] scale-50 opacity-0 transition-all duration-500 ease-in-out hover:rounded-xl hover:scale-100 hover:opacity-100">
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                autoPlay
                loop
                muted
                className="size-64 origin-center rounded-[30%_70%_70%_30%/30%_30%_70%_70%] hover:rounded-xl scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            id="next-video"
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoad}
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          />

          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex,
            )}
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoad}
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>ming
        </h1>

        <div className="z-40 absolute left-0 top-0 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              <b className="opacity-60">redefine</b>
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
