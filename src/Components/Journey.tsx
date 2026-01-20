import { useJournayAnimate } from "../Animations/JourneyAnimation"

import { useSelector } from "react-redux";
import type { RootState } from "../Store";

export default function Journey() {

  const theme = useSelector((state :RootState)=>state.theme.value);

  useJournayAnimate();

  return (
  
    <>
      <div className={` w-full h-[80vw] ${theme==="light"?"bg-[rgb(247,245,243)]":"bg-[rgb(11,17,32)]"} `}>
        <h1 className={` JourneyAnimation text-center font-extralight font-sans pt-[5vw] text-[2vw] pb-[2.5vw] ${theme==="light"?"text-black":"text-amber-200"}`}>My Programming Journey</h1>
        
        <div className=" h-[16vw] w-full flex flex-col ">
          
           <div className={` absolute ml-[35vw] mt-[7.4vw] h-[0.1vw] w-[14vw] flex ${theme==="light"?"bg-[rgb(198,198,198)]":"bg-[rgb(90,98,140)]"}`}>
            <div className={` absolute size-[8vw]  rounded-[4vw] border-[0.15vw] -translate-y-[4vw] -translate-x-[8vw] ${theme==="light"?"border-[rgb(198,198,198)]":"border-[rgb(90,98,140)]"}`}><p className={` pl-[1.2vw] mt-[1.2vw] text-[1.4vw]  font-bold font-sans ${theme==="light"?"text-[rgb(111,111,111)]":"text-gray-400"}`}>2 years</p></div>
            <div className={` absolute size-[8vw]  rounded-[4vw] border-[0.15vw] -translate-y-[4vw] -translate-x-[8.5vw] Ring ${theme==="light"?"border-black":"border-gray-100"}`}><p className={` mt-[3vw] font-extrabold text-[2vw] ml-[1.8vw] font-sans ${theme==="light"?"text-black":"text-gray-200"}`}>2021</p></div>
           </div>
           <div className={` self-center h-[7vw] w-[0.2vw] flex ${theme==="light"?"bg-[rgb(198,198,198)]":"bg-[rgb(90,98,140)]"}`}>
             <h1 className={` JourneyAnimation absolute pl-[3vw] text-[1.4vw] font-bold mt-[2vw] ${theme==="light"?"text-black":"text-gray-100"}`}>Basic programming Languages</h1>
              <div className={` JourneyAnimation font-sans text-[1vw] absolute mt-[5vw] ml-[3vw] h-[8vw] w-[30vw] ${theme==="light"?"text-black":"text-gray-400"}`}><p>Started my coding journey with c,c++ solving small and medium type problems and enjoying the world of coding and logic builing.</p></div> 
           </div>
           <div className={` self-center size-[1.2vw] border-[0.2vw] rounded-[2vw] ${theme==="light"?"border-[rgb(198,198,198)]":"border-[rgb(90,98,140)]"}`}></div>
           <div className={` self-center h-[8vw] w-[0.2vw] ${theme==="light"?"bg-[rgb(198,198,198)]":"bg-[rgb(90,98,140)]"} `}></div>

        </div>

        <div className=" h-[16vw] w-full flex flex-col">

           <div className={` h-[7vw] w-[49.6vw] border-[0.2vw] border-t-0 border-b-0 border-l-0 ${theme==="light"?"border-[rgb(198,198,198)]":"border-[rgb(90,98,140)]"} `}>
             <h1 className={` JourneyAnimation justify-self-end pr-[3vw] text-[1.4vw] font-bold mt-[2vw] ${theme==="light"?"text-black":"text-gray-100"}`}>Frontend Development</h1>
             <div className={` JourneyAnimation mr-[3vw] justify-self-end font-sans text-[1vw] absolute mt-[1.5vw] ml-[3vw] h-[8vw] w-[32vw] ${theme==="light"?"text-black":"text-gray-400"} `}><p className="text-right">Started my frontend journey with HTML, CSS, and JavaScript, building responsive layouts, adding interactivity, and understanding core web fundamentals through hands-on projects.</p></div> 
           </div>
           <div className={` self-center size-[1.2vw] rounded-[1vw] border-[0.2vw] ${theme==="light"?"border-[rgb(198,198,198)]":"border-[rgb(90,98,140)]"} `}>
            <div className={` absolute ml-[1vw] mt-[0.3vw] h-[0.1vw] w-[14vw] flex ${theme==="light"?"bg-[rgb(198,198,198)]":"bg-[rgb(90,98,140)]"} `}>
              <div className={` absolute size-[8vw]  rounded-[4vw] border-[0.15vw] -translate-y-[3.5vw] translate-x-[14vw] ${theme==="light"?"border-[rgb(198,198,198)]":"border-[rgb(90,98,140)]"} `}><p className={` pl-[2vw] mt-[1.2vw] text-[1.4vw] font-bold font-sans ${theme==="light"?"text-[rgb(111,111,111)]":"text-gray-400"} `}>1 year</p></div>
              <div className={` absolute size-[8vw]  rounded-[4vw] border-[0.15vw] -translate-y-[3.5vw] translate-x-[14.5vw] ${theme==="light"?"border-black":"border-gray-100"} `}><p className={` mt-[3vw] font-extrabold text-[2vw] ml-[1.4vw] font-sans ${theme==="light"?"text-black":"text-gray-200"} `}>2023</p></div>
            </div>
           </div>
           <div className={` h-[8vw] w-[49.6vw] border-[0.2vw] border-t-0 border-b-0 border-l-0 ${theme==="light"?"border-[rgb(198,198,198)]":"border-[rgb(90,98,140)]"} `}>

           </div>
        </div>

        <div className=" h-[16vw] w-full flex flex-col ">

           <div className={` absolute ml-[35vw] mt-[7.4vw] h-[0.1vw] w-[14vw] flex ${theme==="light"?"bg-[rgb(198,198,198)]":"bg-[rgb(90,98,140)]"}`}>
            <div className={` absolute size-[8vw]  rounded-[4vw] border-[0.15vw] -translate-y-[4vw] -translate-x-[8vw]  ${theme==="light"?"border-[rgb(198,198,198)]":"border-[rgb(90,98,140)] "} `}><p className={` pl-[1.5vw] mt-[1.2vw] text-[1.4vw] font-bold font-sans ${theme==="light"?"text-[rgb(111,111,111)]":"text-gray-400"} `}>1 year</p></div>
            <div className={` absolute size-[8vw]  rounded-[4vw] border-[0.15vw] -translate-y-[4vw] -translate-x-[8.5vw] ${theme==="light"?"border-black":"border-gray-100"} `}><p className={` mt-[3vw] font-extrabold text-[2vw] ml-[1.8vw] font-sans ${theme==="light"?"text-black":"text-gray-200"}`}>2024</p></div>
           </div>
           <div className={` self-center h-[7vw] w-[0.2vw]  flex ${theme==="light"?"bg-[rgb(198,198,198)]":"bg-[rgb(90,98,140)]"}`}>
             <h1 className={` JourneyAnimation absolute pl-[3vw] text-[1.4vw] font-bold mt-[2vw] ${theme==="light"?"text-black":"text-gray-100"} `}>React Js & Redux-Toolkit</h1>
              <div className={` JourneyAnimation font-sans text-[1vw] absolute mt-[5vw] ml-[3vw] h-[8vw] w-[30vw] ${theme==="light"?"text-black":"text-gray-400"}`}><p>Elevated my frontend journey with React and Redux Toolkit, building scalable applications, managing global state efficiently, and mastering predictable state management.</p></div> 
           </div>
           <div className={` self-center size-[1.2vw]  border-[0.2vw] rounded-[2vw] ${theme==="light"?"border-[rgb(198,198,198)]":"border-[rgb(90,98,140)]"} `}></div>
           <div className={` self-center h-[8vw] w-[0.2vw] ${theme==="light"?"bg-[rgb(198,198,198)]":"bg-[rgb(90,98,140)]"} `}></div>

        </div>

       <div className=" h-[16vw] w-full flex flex-col">

           <div className={` h-[7vw] w-[49.6vw]  border-[0.2vw] border-t-0 border-b-0 border-l-0 ${theme==="light"?"border-[rgb(198,198,198)]":"border-[rgb(90,98,140)]"} `}>
             <h1 className={` JourneyAnimation justify-self-end pr-[3vw] text-[1.4vw] font-bold mt-[2vw] ${theme==="light"?"text-black":"text-gray-100"} `}>Backend Development</h1>
             <div className={` JourneyAnimation mr-[3vw] justify-self-end font-sans text-[1vw] absolute mt-[1.5vw]  ml-[3vw] h-[8vw] w-[32vw] ${theme==="light"?"text-black":"text-gray-400"}`}><p className="text-right">Started my backend development journey with Node.js and Express, building RESTful APIs, handling SQL and MongoDB databases, and understanding server-side data flow and authentication.</p></div> 
           </div>
           <div className={` self-center size-[1.2vw] rounded-[1vw] border-[0.2vw] ${theme==="light"?"border-[rgb(198,198,198)]":"border-[rgb(90,98,140)]"}`}>
            <div className={` absolute ml-[1vw] mt-[0.3vw] h-[0.1vw] w-[14vw]  flex  ${theme==="light"?"bg-[rgb(198,198,198)]":"bg-[rgb(90,98,140)]"}`}>
              <div className={` absolute size-[8vw]  rounded-[4vw] border-[0.15vw] -translate-y-[3.5vw] translate-x-[14vw] ${theme==="light"?"border-[rgb(198,198,198)]":"border-[rgb(90,98,140)]"} `}><p className={` pl-[2vw] mt-[1.2vw] text-[1.4vw] font-bold font-sans ${theme==="light"?"text-[rgb(111,111,111)]":"text-gray-400"} `}>1 year</p></div>
              <div className={` absolute size-[8vw]  rounded-[4vw] border-[0.15vw] -translate-y-[3.5vw] translate-x-[14.5vw] ${theme==="light"?"border-black":"border-gray-100"}`}><p className={` mt-[3vw] font-extrabold text-[2vw] ml-[1.4vw] font-sans ${theme==="light"?"text-black":"text-gray-200"} `}>2025</p></div>
            </div>
           </div>
           
           <div className={` h-[8vw] w-[49.6vw] border-[0.2vw] border-t-0 border-b-0 border-l-0 ${theme==="light"?"border-[rgb(198,198,198)]":"border-[rgb(90,98,140)]"}  `}>

           </div>
        </div>

      </div>
    </>
  )
}
