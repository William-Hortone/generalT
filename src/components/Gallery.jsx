import React, { useEffect } from "react";
// import "./gallery.css";
import { gsap } from "gsap";

const Gallery = () => {
  useEffect(() => {
    // Gallery animations
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
    "https://cdn.cosmos.so/3be2e4e2-4ba8-47c2-9bd7-6b09cc6b82e3?format=jpeg",
    "https://cdn.cosmos.so/91da03b4-8f72-40bd-9531-ce101ecb9508?format=jpeg",
    "https://cdn.cosmos.so/9dbf17e4-d4fa-4095-98dd-d6527d4bb53a?format=jpeg",
    "https://cdn.cosmos.so/bed49b37-4a4a-4cec-ac80-86f5d2edbb8d?format=jpeg",
    "https://cdn.cosmos.so/031178f7-7078-4866-9de3-c80062188a2b?format=jpeg",
  ];

  return (
    <section id="gallery" className="gallery">
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
            <div className="gallery-caption">
              <p>
                When the mind becomes a labyrinth of anxious thoughts, art
                offers a thread to follow. The act of creation becomes rebellion
                against internal chaos—each finished piece a victory over the
                voices that whisper you cannot. Through repetitive artistic
                practice—the mixing of colors, the careful composition, the
                patient observation—we create rhythm where there was discord.
                This rhythm becomes a meditation, and within this meditation, we
                uncover parts of ourselves previously obscured by noise. Art
                does not remove our struggles but transforms them into something
                we can hold, examine, and eventually release.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
