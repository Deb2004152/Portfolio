import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useHomeAnimate = () =>{
  
  useGSAP( ()=>{
  gsap.fromTo(".HomeAnimation",
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

export const useScrollAnimate = () =>{


  useGSAP( ()=>{
  gsap.fromTo(".ScrollAnimation",
    {
      y:25,
      autoAlpha:1,
     
    },
    {
      y:0,
      autoAlpha:1,
      duration:1.5,
      ease: "power1.out",
      repeat: -1,
      yoyo: true,
      color:"red"
    }
  )
  })

}





