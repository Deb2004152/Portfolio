import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useProjectAnimate = () => {

  useGSAP(() => {

    gsap.utils.toArray<HTMLElement>(".ProjectAnimation").forEach((el) => {
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
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            scroller: "body",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

  });

};
