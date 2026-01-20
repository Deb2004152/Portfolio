import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useContactAnimate = () => {

  useGSAP(() => {

    gsap.utils.toArray<HTMLElement>(".ContactAnimation").forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 10,           
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            scroller: "body",
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

  });

};
