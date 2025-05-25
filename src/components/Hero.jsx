import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

import VideoPreview from "./VideoPreview";
import images from "../constants/images";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const totalVideos = 3;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 768;
      setIsSmallScreen(isSmall);
      if (isSmall) setLoading(false); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Updated loading logic with fallback
  useEffect(() => {
    if (!isSmallScreen && loadedVideos >= totalVideos) {
      setLoading(false);
    }

    const fallbackTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(fallbackTimeout);
  }, [loadedVideos, isSmallScreen]);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative w-screen overflow-hidden h-dvh">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 w-screen overflow-hidden rounded-lg h-dvh bg-blue-75"
      >
        {isSmallScreen ? (
          <img
            src={images.hero}
            alt="Hero Mobile"
            className="object-cover w-full h-full"
          />
        ) : (
          <div>
            <div className="absolute z-50 overflow-hidden rounded-lg cursor-pointer mask-clip-path absolute-center size-64">
              <VideoPreview>
                <div
                  onClick={handleMiniVdClick}
                  className="transition-all duration-500 ease-in origin-center scale-50 opacity-0 hover:scale-100 hover:opacity-100"
                >
                  <video
                    ref={nextVdRef}
                    src={getVideoSrc((currentIndex % totalVideos) + 1)}
                    loop
                    muted
                    id="current-video"
                    className="object-cover object-center origin-center scale-150 size-64"
                    onLoadedData={handleVideoLoad}
                  />
                </div>
              </VideoPreview>
            </div>

            <video
              ref={nextVdRef}
              src={getVideoSrc(currentIndex)}
              loop
              muted
              id="next-video"
              className="absolute z-20 invisible object-cover object-center absolute-center size-64"
              onLoadedData={handleVideoLoad}
            />
            <video
              src={getVideoSrc(
                currentIndex === totalVideos - 1 ? 1 : currentIndex
              )}
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 object-cover object-center size-full"
              onLoadedData={handleVideoLoad}
            />
          </div>
        )}

        <h1 className="absolute z-40 text-blue-75 special-font hero-heading bottom-5 right-5">
          ko<b>u</b>ta
        </h1>

        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="px-5 mt-24 sm:px-10">
            <h1 className="text-blue-100 special-font hero-heading">
              Gener<b>a</b>l
            </h1>
            <h2 className="mb-5 text-blue-100 max-w-64 special-font hero-heading-second">
              Techniques and trade
            </h2>
          </div>
        </div>
      </div>

      <h1 className="absolute text-black special-font hero-heading bottom-5 right-5">
        ko<b>u</b>ta
      </h1>
    </div>
  );
};

export default Hero;
