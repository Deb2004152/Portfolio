import { useSkillAnimate } from "../Animations/SkillsAnimation";


export default function SkillCard() {
     useSkillAnimate();

     const Languages =["C","C++","Java Script","Type Script","Python"];
     const Frontend =["HTML","CSS","Tailwind CSS","React JS","Redux Toolkit"];
     const Backend =["Node JS","Express JS","My SQL","MongoDB"];
     const Animation =["Framer Motion","GSAP","ScrollTrigger","SVG Animation"];
     const VC =["Git","Github","VS Code"];
  return (
    <>
      <div className="SkillAnimation flex text-[1.1vw] flex-col gap-[1.2vw] pt-[0.8vw] text-[rgb(125,125,125)] pl-[2vw] h-[20vw] w-[16vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw] ">
           <h1 className=" text-[1.4vw] text-blue-500 font-semibold mt-[0.2vw]">Languages</h1>
           {  Languages.map( (Languages,i)=> (
              <p key={i}>{Languages}</p>
           ))
           }
      </div>

      <div className="SkillAnimation flex text-[1.1vw] flex-col gap-[1.2vw] pt-[0.8vw] text-[rgb(125,125,125)] pl-[2vw] h-[20vw] w-[16vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw] ">
           <h1 className=" text-[1.4vw] text-blue-500 font-semibold mt-[0.2vw]">Frontend</h1>
         {  Frontend.map( (Frontend,i)=> (
              <p key={i}>{Frontend}</p>
           ))
           }
      </div>

      <div className="SkillAnimation flex text-[1.1vw] flex-col gap-[1.2vw] pt-[0.8vw] text-[rgb(125,125,125)] pl-[2vw] h-[20vw] w-[16vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw] ">
           <h1 className=" text-[1.4vw] text-blue-500 font-semibold mt-[0.2vw]">Backend</h1>
         {  Backend.map( (Backend,i)=> (
              <p key={i}>{Backend}</p>
           ))
           }   

      </div>

      <div className="SkillAnimation flex text-[1.1vw] flex-col gap-[1.2vw] pt-[0.8vw] text-[rgb(125,125,125)] pl-[2vw] h-[20vw] w-[16vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw] ">
           <h1 className=" text-[1.4vw] text-blue-500 font-semibold mt-[0.2vw]">UI Animation</h1>
         {  Animation.map( (Animation,i)=> (
              <p key={i}>{Animation}</p>
           ))
           }    
    
      </div>

      <div className="SkillAnimation flex text-[1.1vw] flex-col gap-[1.2vw] pt-[0.8vw] text-[rgb(125,125,125)] pl-[2vw] h-[20vw] w-[16vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw] ">
           <h1 className=" text-[1.4vw] text-blue-500 font-semibold mt-[0.2vw]">Version Control </h1>
         {  VC.map( (VC,i)=> (
              <p key={i}>{VC}</p>
           ))
           }  
     </div>
    </>
  )
}
