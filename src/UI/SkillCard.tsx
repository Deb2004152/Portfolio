import { useSkillAnimate } from "../Animations/SkillsAnimation";

import { useSelector } from "react-redux";
import type { RootState } from "../Store";

export default function SkillCard() {

     const theme = useSelector((state :RootState)=>state.theme.value);

     useSkillAnimate();

     const Languages =["C","C++","Java Script","Type Script","Python"];
     const Frontend =["HTML","CSS","Tailwind CSS","React JS","Redux Toolkit"];
     const Backend =["Node JS","Express JS","My SQL","MongoDB"];
     const Animation =["Framer Motion","GSAP","ScrollTrigger","SVG Animation"];
     const VC =["Git","Github","VS Code"];
  return (
    <>
      <div className={`  cursor-pointer SkillAnimation flex text-[1.1vw] flex-col gap-[1.2vw] pt-[0.8vw]  pl-[2vw] h-[20vw] w-[16vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-gray-300 text-[rgb(125,125,125)] hover:border-blue-400 ":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} border-[0.1vw]  rounded-[1vw] `}>
           <h1 className={` text-[1.4vw] font-semibold mt-[0.2vw] ${theme==="light"?"text-blue-500":"text-sky-400"} `}>Languages</h1>
           {  Languages.map( (Languages,i)=> (
              <p key={i}>{Languages}</p>
           ))
           }
      </div>

      <div className={`  cursor-pointer SkillAnimation flex text-[1.1vw] flex-col gap-[1.2vw] pt-[0.8vw]  pl-[2vw] h-[20vw] w-[16vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-gray-300 text-[rgb(125,125,125)] hover:border-blue-400":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} border-[0.1vw]  rounded-[1vw] `}>
           <h1 className={` text-[1.4vw] font-semibold mt-[0.2vw] ${theme==="light"?"text-blue-500":"text-sky-400"} `}>Frontend</h1>
         {  Frontend.map( (Frontend,i)=> (
              <p key={i}>{Frontend}</p>
           ))
           }
      </div>

      <div className={`  cursor-pointer SkillAnimation flex text-[1.1vw] flex-col gap-[1.2vw] pt-[0.8vw]  pl-[2vw] h-[20vw] w-[16vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-gray-300 text-[rgb(125,125,125)] hover:border-blue-400":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} border-[0.1vw] rounded-[1vw] `}>
           <h1 className={` text-[1.4vw] font-semibold mt-[0.2vw] ${theme==="light"?"text-blue-500":"text-emerald-400"} `}>Backend</h1>
         {  Backend.map( (Backend,i)=> (
              <p key={i}>{Backend}</p>
           ))
           }   

      </div>

      <div className={`  cursor-pointer SkillAnimation flex text-[1.1vw] flex-col gap-[1.2vw] pt-[0.8vw]  pl-[2vw] h-[20vw] w-[16vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-gray-300 text-[rgb(125,125,125)] hover:border-blue-400":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} border-[0.1vw] rounded-[1vw] `}>
           <h1 className={` text-[1.4vw] font-semibold mt-[0.2vw] ${theme==="light"?"text-blue-500":"text-violet-400"} `}>UI Animation</h1>
         {  Animation.map( (Animation,i)=> (
              <p key={i}>{Animation}</p>
           ))
           }    
    
      </div>

      <div className={` cursor-pointer SkillAnimation flex text-[1.1vw] flex-col gap-[1.2vw] pt-[0.8vw]  pl-[2vw] h-[20vw] w-[16vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-gray-300 text-[rgb(125,125,125)] hover:border-blue-400":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} border-[0.1vw] rounded-[1vw] `}>
           <h1 className={` text-[1.4vw]  font-semibold mt-[0.2vw] ${theme==="light"?"text-blue-500":"text-amber-200"} `}>Version Control </h1>
         {  VC.map( (VC,i)=> (
              <p key={i}>{VC}</p>
           ))
           }  
     </div>
    </>
  )
}
