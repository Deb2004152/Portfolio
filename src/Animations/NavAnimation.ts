import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

// Navbar entrance animation
export const useNavAnimate = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".NavAnimation",
      {
        y: 25,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
      }
    );
  });
};


export const scrollToSection = (id: string) => {
  gsap.to(window, {
    duration: 1.25,
    scrollTo: `#${id}`,
    ease: "power3.out",
  });
};
