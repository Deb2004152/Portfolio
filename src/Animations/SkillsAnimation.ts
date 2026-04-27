import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useSkillAnimate = () => {

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".SkillAnimation").forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 40,
          scale: 0.96,
          autoAlpha: 0,
        },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            scroller: "body",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });

};
