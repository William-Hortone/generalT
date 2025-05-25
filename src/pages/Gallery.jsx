import "locomotive-scroll/dist/locomotive-scroll.css";
import "./styles/gallery.css";
import { ImagesGallery, Navbar } from "../components";

const Gallery = () => {

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
