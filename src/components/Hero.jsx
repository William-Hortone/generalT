import { gsap } from "gsap";
import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    gsap.to(".hero-image", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.5,
      ease: "blurEase",
    });

    gsap.to(".about-text", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "verticalEase",
    });
  }, []);
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="row row-svg">
          <div className="col-12">
            <div className="svg-container">
              {/* <svg
                width="100%"
                height="auto"
                viewBox="0 0 113 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="var(--offblack)">
                  <path d="m98.9088 18v-17.159973h13.0082v3.528003h-8.688v3.048h7.488v3.52797h-7.488v3.528h8.832v3.528z" />
                  <path d="m87.9181 18-5.712-17.159973h4.728l3.24 12.023973h.048l3.264-12.023973h4.56l-5.568 17.159973z" />
                  <path d="m77.0988 18v-17.159973h4.32v17.159973z" />
                  <path d="m66.7308 18v-13.63197h-4.992v-3.528003h14.28v3.528003h-4.968v13.63197z" />
                  <path d="m46.8616 18 6.528-17.159973h4.344l6.576 17.159973h-4.728l-1.104-3.576h-5.88l-1.104 3.576zm6.72-6.864h3.936l-1.944-6.33597h-.048z" />
                  <path d="m33.7431 18v-17.159973h13.008v3.528003h-8.688v3.048h7.488v3.52797h-7.488v3.528h8.832v3.528z" />
                  <path d="m17.9397 18v-17.159973h8.088c3.816 0 6.12 1.776003 6.12 4.896003 0 2.4-1.344 3.816-3.48 4.29597v.048c4.296.744 2.736 7.392 3.72 7.68v.24h-4.488c-.84-.72.72-5.976-2.952-5.976h-2.688v5.976zm4.32-9.50397h2.928c1.728 0 2.64-.624 2.64-2.064s-.912-2.064-2.64-2.064h-2.928z" />
                  <path d="m8.99145 18.384c-5.448 0-8.208003-3.792-8.208003-8.90401 0-5.256 2.904003-9.023996 8.328003-9.023996 4.67995 0 7.17595 2.783996 7.58395 6.767996h-4.416c-.312-1.872-1.08-3.24-3.35995-3.24-2.856 0-3.72 2.208-3.72 5.424 0 3.24001.864 5.44801 3.72 5.44801 2.30395 0 3.07195-1.368 3.35995-3.288h4.416c-.384 3.936-2.976 6.816-7.70395 6.816z" />
                </g>
              </svg> */}

              <svg
                width="100%"
                height="auto"
                viewBox="0 0 200 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="0"
                  y="35"
                  fill="#444"
                  fontWeight="900"
                  fontSize="40"
                  fontFamily="'PP Neue Montreal', sans-serif"
                >
                  GENERAL
                </text>
              </svg>

              <svg
                width="100%"
                height="60"
                viewBox="0 0 100 20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMaxYMid meet"
              >
                <text
                  x="100%"
                  y="15"
                  textAnchor="end"
                  fill="#444"
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="'PP Neue Montreal', sans-serif"
                  letterSpacing="1"
                >
                  Techniques and trade kouta
                </text>
              </svg>

              <div className="svg-texture-overlay"></div>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-5 hero-left">
            <div className="hero-image">
              <img
                src="https://cdn.cosmos.so/2200c8e1-2901-4fdb-806c-a2596b3e9c49?format=jpeg"
                alt="Portrait"
              />
              <div className="texture-overlay"></div>
            </div>
          </div>
          <div className="col-3 "></div>
          <div className="col-4 hero-right">
            <p className="about-text">
              I am a visual artist exploring the intersection of mental
              landscapes and creative expression. Creating art as a therapeutic
              journey, my work embodies the transformation of internal chaos
              into external beauty. Through deliberate practice and intuitive
              creation, I find that art provides structure in times of
              uncertainty and offers a rare clarity when thoughts become
              overwhelming. Each piece becomes both mirror and window—reflecting
              inner states while allowing glimpses into possible futures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
