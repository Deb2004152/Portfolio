import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useSkillAnimate = () =>{
  
  useGSAP( ()=>{
  gsap.fromTo(".SkillAnimation",
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
      trigger: ".SkillAnimation",
      scroller:"body",
      // markers: true,
      start:"top 70%",
      scrub:5
  },
}
   
  )
  })

}