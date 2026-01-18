import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useProjectAnimate = () =>{
  
  useGSAP( ()=>{
  gsap.fromTo(".ProjectAnimation",
    {
      y:25,
      autoAlpha:0,
     
    },
    {
      y:0,
      autoAlpha:1,
      duration:1,
      ease: "power3.out",
      stagger:0.12,
      scrollTrigger: {
      trigger: ".ProjectAnimation",
      scroller:"body",
      // markers: true,
      start:"top 70%",
      scrub:5
  },
    }
  )
  })

}

