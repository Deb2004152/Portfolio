import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useJournayAnimate = () =>{
  
  useGSAP( ()=>{
  gsap.fromTo(".JourneyAnimation",
    {
      y:10,
      autoAlpha:0,
     
    },
    {
      y:0,
      autoAlpha:1,
      duration:1.2,
      ease: "power3.out",
      stagger:0.12,
      scrollTrigger: {
      trigger: ".JourneyAnimation",
      scroller:"body",
      // markers: true,
      start:"top 65%",
      scrub:5
  },
    }
  )
  })

}

