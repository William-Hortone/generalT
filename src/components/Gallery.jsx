import React, { useEffect } from "react";
import { gsap } from "gsap";
import images from "../constants/images";

const Gallery = () => {
  useEffect(() => {
    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach((item, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: item.parentElement,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          item,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            delay: index * 0.1,
            ease: "verticalEase",
          }
        );
    });

    // Gallery caption animation
    gsap.to(".gallery-caption", {
      scrollTrigger: {
        trigger: ".gallery",
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "blurEase",
    });
  }, []);
  const galleryImages = [
    images.pic2,
    images.pic3,
    images.pic4,
    images.pic5,
    images.pic6,
    // "https://cdn.cosmos.so/91da03b4-8f72-40bd-9531-ce101ecb9508?format=jpeg",
    // "https://cdn.cosmos.so/9dbf17e4-d4fa-4095-98dd-d6527d4bb53a?format=jpeg",
    // "https://cdn.cosmos.so/bed49b37-4a4a-4cec-ac80-86f5d2edbb8d?format=jpeg",
    // "https://cdn.cosmos.so/031178f7-7078-4866-9de3-c80062188a2b?format=jpeg",
  ];

  return (
    <section id="gallery" className="my-16 overflow-hidden gallery">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="gallery-wrapper">
              {galleryImages.map((img, index) => (
                <div className="gallery-item" key={index}>
                  <img src={img} loading="lazy" alt={`Gallery  ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="my-[10rem] mx-auto  gallery-caption">
              <p className="">
                General techniques and trade Kouta is a dynamic enterprise
                dedicated to revolutionizing the trading experience by
                seamlessly connecting China and Africa. We specialize in
                providing superior products and AI-driven solutions tailored to
                meet diverse needs, empowering individuals and businesses to
                thrive in the global marketplace
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
