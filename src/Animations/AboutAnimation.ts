import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useAboutAnimate = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".AboutAnimation",
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
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".AboutAnimation",
          scroller: "body",
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
};
