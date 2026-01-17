import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useNavAnimate = () =>{


  useGSAP( ()=>{
  gsap.fromTo(".NavAnimation",
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
    }
  )
  })

}




