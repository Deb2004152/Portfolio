import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useContactAnimate = () =>{
  
  useGSAP( ()=>{
  gsap.fromTo(".ContactAnimation",
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
    }
  )
  })

}



