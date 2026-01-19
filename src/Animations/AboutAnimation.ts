import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useAboutAnimate = () =>{
  
  useGSAP( ()=>{
  gsap.fromTo(".AboutAnimation",
    {
      y:20,
      autoAlpha:0,
     
    },
    {
      y:0,
      autoAlpha:1,
      duration:1.2,
      ease: "power3.out",
      stagger:0.12,
      scrollTrigger: {
      trigger: ".AboutAnimation",
      scroller:"body",
      start:"top 90%",
      scrub:1
  },
    }
  )
  })

}




