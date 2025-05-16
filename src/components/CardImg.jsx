import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import images from './../constants/images';



gsap.registerPlugin(ScrollTrigger);
const CardImg = ({img}) => {

      useGSAP(() => {
        gsap.set("#image-frame", {
          clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
          borderRadius: "0% 0% 40% 10%",
        });
        gsap.from("#image-frame", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          borderRadius: "0% 0% 0% 0%",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: "#image-frame",
            start: "center center",
            end: "bottom center",
            scrub: true,
          },
        });
      });
  return (
<>
    <div className="rounded-lg">
        <img className="object-cover w-full h-auto rounded-lg" src={img} alt="description" />
    </div>
</>
  )
}

export default CardImg