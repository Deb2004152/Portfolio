import me from "../Images/me.jpg";
import { useAboutAnimate } from "../Animations/AboutAnimation";

export default function About() {
  useAboutAnimate();
  return (
    <>
      <div className=" h-screen w-full bg-[rgb(242,240,237)]">
         <h1 className="AboutAnimation pt-[4.7vw] font-sans text-[2vw] font-light text-center text-orange-600">About Me</h1>
 
          <div className="flex justify-center pt-[1vw] gap-[7vw]">

              <div className="AboutAnimation cursor-pointer h-[35vw] w-[25vw]  bg-cover bg-center grayscale hover:grayscale-0 " style={{ backgroundImage: `url(${me})` }}></div>

              <div className="h-[35vw] w-[40vw] text-[2.8vw] font-extrabold">
                <h1 className="AboutAnimation">Crafting digital experiences</h1>
                <div className="flex gap-[0.5vw]">
                  <p className="AboutAnimation">With</p>
                  <p className="AboutAnimation text-[rgb(60,131,246)]">precision</p>
                  <p className="AboutAnimation">and</p>
                  <p className="AboutAnimation text-[rgb(43,140,130)]">purpose.</p></div>
                  <div className="text-[1.2vw] text-[rgb(120,102,102)] font-extralight">
                   <p className="AboutAnimation pt-[1.25vw]">I'm a frontend-focused engineering student at BURDWAN UNIVERSITY with a passion for building interfaces that feel as good as they look. My work lives at the intersection of clean code and thoughtful motion design.</p>
                   <p className="AboutAnimation pt-[1.25vw]">My expertise lies in React, TypeScript, and modern CSS — bringing designs to life with smooth animations using GSAP and Framer Motion. I believe great interfaces are invisible, guiding users naturally through their journey.</p>
                   <p className="AboutAnimation pt-[1.25vw]">Currently pursuing my B.E in ECE at UNIVERSITY INSTITUTE OF TECHNOLOGY, I'm constantly exploring new techniques to push the boundaries of what's possible on the web.</p>
                   <p className="AboutAnimation pt-[1.25vw]">When I'm not coding, you'll find me exploring new design systems, experimenting with motion design, or diving deep into the latest frontend technologies.</p>
                  </div> 
               </div>
              
           </div>
           

      </div>
    </>
  )
}
