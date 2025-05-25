import "locomotive-scroll/dist/locomotive-scroll.css";
import "./styles/gallery.css";
import { ImagesGallery, Navbar } from "../components";

const Gallery = () => {


  // useEffect(() => {
  //   // Initialize Locomotive Scroll
  //   scrollInstance.current = new LocomotiveScroll({
  //     el: containerRef.current,
  //     direction: "horizontal",
  //     smooth: true,
  //     lerp: 0.05,
  //     tablet: { smooth: true },
  //     smartphone: { smooth: true },
  //   });

  //   // Get all images
  //   const images = containerRef.current.querySelectorAll(".image");

  //   // Show images with animation
  //   const showImages = () => {
  //     gsap.to(images, {
  //       opacity: 0.8,
  //       scale: 1,
  //       x: 0,
  //       y: 0,
  //       // filter: "grayscale(1)",
  //       filter: "none",
  //       duration: 1,
  //       stagger: 0.05,
  //       ease: "power2.out",
  //     });
  //   };

  //   // Hide images with animation
  //   const hideImages = () => {
  //     gsap.to(images, {
  //       opacity: 0,
  //       scale: 0.8,
  //       duration: 1,
  //       ease: "power2.in",
  //     });
  //   };

  //   // Click handler for images
  //   const handleImageClick = (e) => {
  //     const image = e.target;
  //     gsap.to(image, {
  //       scale: 5,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power2.in",
  //       onComplete: () => {
  //         hideImages();
  //         setTimeout(showImages, 2000);
  //       },
  //     });
  //   };

  //   // Add click event to each image
  //   images.forEach((image) => {
  //     image.addEventListener("click", handleImageClick);
  //   });

  //   // Initial show after 1 second
  //   const showTimeout = setTimeout(showImages, 1000);

  //   // Cleanup
  //   return () => {
  //     clearTimeout(showTimeout);
  //     images.forEach((image) => {
  //       image.removeEventListener("click", handleImageClick);
  //     });
  //     if (scrollInstance.current) {
  //       scrollInstance.current.destroy();
  //     }
  //   };
  // }, []);

  return (
    <>
      <Navbar bg="black" />

      <ImagesGallery />
      {/* <div className="scroll-gallery-container">
  
        <div
          className="scroll-animations-example"
          ref={containerRef}
          data-scroll-container
        >
          <div className="scrollsection" data-scroll-section>
            {[
              {
                size: "normal",
                orientation: "vertical",
                speed: 2,
                id: 1005,
                img: images.article1,
              },
              {
                size: "big",
                orientation: "vertical",
                speed: 1,
                id: 1019,
                img: images.article3,
              },
              {
                size: "small",
                orientation: "horizontal",
                speed: 4,
                id: 1027,
                img: images.article4,
              },
              {
                size: "normal",
                orientation: "vertical",
                speed: 3,
                id: 1028,
                img: images.article7,
              },
              {
                size: "normal",
                orientation: "horizontal",
                speed: 2,
                id: 1041,
                img: images.article10,
              },
              {
                size: "big",
                orientation: "horizontal",
                speed: 4,
                id: 1042,
                img: images.article12,
              },
              {
                size: "small",
                orientation: "vertical",
                speed: 2,
                id: 1049,
                img: images.article14,
              },
              {
                size: "normal",
                orientation: "horizontal",
                speed: 1,
                id: 1056,
                img: images.article15,
              },
              {
                size: "small",
                orientation: "horizontal",
                speed: 3,
                id: 1062,
                img: images.article16,
              },
              {
                size: "big",
                orientation: "vertical",
                speed: 1,
                id: 1068,
                img: images.article17,
              },
              {
                size: "normal",
                orientation: "horizontal",
                speed: 2,
                id: 1069,
                img: images.article18,
              },
              {
                size: "normal",
                orientation: "horizontal",
                speed: 2,
                id: 1089,
                img: images.article19,
              },
              {
                size: "normal",
                orientation: "horizontal",
                speed: 1,
                id: 1072,
                img: images.product13,
              },
              {
                size: "small",
                orientation: "horizontal",
                speed: 4,
                id: 1075,
                img: images.product8,
              },
              {
                size: "big",
                orientation: "vertical",
                speed: 3,
                id: 1081,
                img: images.product7,
              },
              {
                size: "normal",
                orientation: "horizontal",
                speed: 2,
                id: 111,
                img: images.product14,
              },
              {
                size: "small",
                orientation: "horizontal",
                speed: 4,
                id: 129,
                img: images.product11,
              },
              {
                size: "big",
                orientation: "vertical",
                speed: 2,
                id: 137,
                img: images.product23,
              },
              {
                size: "normal",
                orientation: "horizontal",
                speed: 1,
                id: 141,
                img: images.product3,
              },
              {
                size: "normal",
                orientation: "vertical",
                speed: 1,
                id: 147,
                img: images.product7,
              },
              {
                size: "small",
                orientation: "horizontal",
                speed: 3,
                id: 145,
                img: images.product3,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`item -${item.size} ${
                  item.orientation === "horizontal" ? "-horizontal" : ""
                }`}
                data-scroll
                data-scroll-speed={item.speed}
              >
                <img
                  className="image"
                  src={item.img}
                  alt={`Gallery item ${index}`}
                  loading="lazy"
                />
       
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Gallery;
