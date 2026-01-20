import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useJournayAnimate = () => {

  useGSAP(() => {

    gsap.utils.toArray<HTMLElement>(".JourneyAnimation").forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 50,
          scale: 0.95,
          autoAlpha: 0,
        },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            scroller: "body",
            start: "top 85%",    
            end: "bottom 40%",  
            toggleActions: "play none none reverse",
          },
        }
      );
    });

  });

};
