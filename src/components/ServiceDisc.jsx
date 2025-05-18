import { gsap } from "gsap";
import { useEffect } from "react";
import images from "../constants/images";
import TextAnimation from "./title/TextAnimation";

const ServiceDisc = () => {
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
  ];

  return (
    <section id="gallery" className="py-16 overflow-hidden bg-secondary gallery">
      <div className="container">
        <div className="row">
          <div className="flex flex-col col-12">
            <div className="md:my-[10rem] text-white w-full bg-rfed-400  gallery-caption">
              <TextAnimation
                textContent={`We build bridges between China and Africa, offering a diverse range of products tailored to meet various needs.\nWhether it’s cutting-edge electronics, luxurious beauty products, or innovative agricultural machinery,\nwe meticulously source items to ensure quality and reliability.`}
              />
            </div>

            <div className="gallery-wrapper image-scroll-wrapper">
              {galleryImages.map((img, index) => (
                <div className="gallery-item" key={index}>
                  <img src={img} loading="lazy" alt={`Gallery  ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ServiceDisc;
