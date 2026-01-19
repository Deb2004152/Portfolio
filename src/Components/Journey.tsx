import { useJournayAnimate } from "../Animations/JourneyAnimation"

export default function Journey() {

  useJournayAnimate();

  return (
  
    <>
      <div className="w-full h-[80vw] bg-[rgb(247,245,243)] ">
        <h1 className="JourneyAnimation text-center font-extralight font-sans pt-[5vw] text-[2vw] pb-[2.5vw]">My Programming Journey</h1>
        
        <div className=" h-[16vw] w-full flex flex-col ">
          
           <div className="absolute ml-[35vw] mt-[7.4vw] h-[0.1vw] w-[14vw] bg-[rgb(198,198,198)] flex">
            <div className="absolute size-[8vw]  rounded-[4vw] border-[0.15vw] border-[rgb(198,198,198)] -translate-y-[4vw] -translate-x-[8vw] "><p className="pl-[1.2vw] mt-[1.2vw] text-[1.4vw] text-[rgb(111,111,111)] font-bold font-sans">2 years</p></div>
            <div className="absolute size-[8vw]  rounded-[4vw] border-[0.15vw] -translate-y-[4vw] -translate-x-[8.5vw] Ring"><p className="mt-[3vw] font-extrabold text-[2vw] ml-[1.8vw] font-sans">2021</p></div>
           </div>
           <div className="self-center h-[7vw] w-[0.2vw] bg-[rgb(198,198,198)] flex">
             <h1 className="JourneyAnimation absolute pl-[3vw] text-[1.4vw] font-bold mt-[2vw]">Basic programming Languages</h1>
              <div className="JourneyAnimation font-sans text-[1vw] absolute mt-[5vw] ml-[3vw] h-[8vw] w-[30vw] "><p>Started my coding journey with c,c++ solving small and medium type problems and enjoying the world of coding and logic builing.</p></div> 
           </div>
           <div className="self-center size-[1.2vw] border-[rgb(198,198,198)] border-[0.2vw] rounded-[2vw]"></div>
           <div className="self-center h-[8vw] w-[0.2vw] bg-[rgb(198,198,198)]"></div>

        </div>

        <div className=" h-[16vw] w-full flex flex-col">
           <div className="h-[7vw] w-[49.6vw] border-[0.2vw] border-t-0 border-b-0 border-l-0 border-r-[rgb(198,198,198)] ">
             <h1 className="JourneyAnimation justify-self-end pr-[3vw] text-[1.4vw] font-bold mt-[2vw] ">Frontend Development</h1>
             <div className="JourneyAnimation mr-[3vw] justify-self-end font-sans text-[1vw] absolute mt-[1.5vw] ml-[3vw] h-[8vw] w-[32vw] "><p className="text-right">Started my frontend journey with HTML, CSS, and JavaScript, building responsive layouts, adding interactivity, and understanding core web fundamentals through hands-on projects.</p></div> 
           </div>
           <div className="self-center size-[1.2vw] border-[rgb(1968,198,198)] rounded-[1vw] border-[0.2vw]">
            <div className="absolute ml-[1vw] mt-[0.3vw] h-[0.1vw] w-[14vw] bg-[rgb(198,198,198)] flex">
              <div className="absolute size-[8vw]  rounded-[4vw] border-[0.15vw] border-[rgb(198,198,198)] -translate-y-[3.5vw] translate-x-[14vw]"><p className="pl-[2vw] mt-[1.2vw] text-[1.4vw] text-[rgb(111,111,111)] font-bold font-sans">1 year</p></div>
              <div className="absolute size-[8vw]  rounded-[4vw] border-[0.15vw] -translate-y-[3.5vw] translate-x-[14.5vw]"><p className="mt-[3vw] font-extrabold text-[2vw] ml-[1.4vw] font-sans">2023</p></div>
            </div>
           </div>
           <div className="h-[8vw] w-[49.6vw] border-[0.2vw] border-t-0 border-b-0 border-l-0 border-r-[rgb(198,198,198)]">

           </div>
        </div>

        <div className=" h-[16vw] w-full flex flex-col ">
           <div className="absolute ml-[35vw] mt-[7.4vw] h-[0.1vw] w-[14vw] bg-[rgb(198,198,198)] flex">
            <div className="absolute size-[8vw]  rounded-[4vw] border-[0.15vw] border-[rgb(198,198,198)] -translate-y-[4vw] -translate-x-[8vw]"><p className="pl-[1.5vw] mt-[1.2vw] text-[1.4vw] text-[rgb(111,111,111)] font-bold font-sans">1 year</p></div>
            <div className="absolute size-[8vw]  rounded-[4vw] border-[0.15vw] -translate-y-[4vw] -translate-x-[8.5vw]"><p className="mt-[3vw] font-extrabold text-[2vw] ml-[1.8vw] font-sans">2024</p></div>
           </div>
           <div className="self-center h-[7vw] w-[0.2vw] bg-[rgb(198,198,198)] flex">
             <h1 className="JourneyAnimation absolute pl-[3vw] text-[1.4vw] font-bold mt-[2vw]">React Js & Redux-Toolkit</h1>
              <div className="JourneyAnimation font-sans text-[1vw] absolute mt-[5vw] ml-[3vw] h-[8vw] w-[30vw] "><p>Elevated my frontend journey with React and Redux Toolkit, building scalable applications, managing global state efficiently, and mastering predictable state management.</p></div> 
           </div>
           <div className="self-center size-[1.2vw] border-[rgb(198,198,198)] border-[0.2vw] rounded-[2vw]"></div>
           <div className="self-center h-[8vw] w-[0.2vw] bg-[rgb(198,198,198)]"></div>

        </div>

       <div className=" h-[16vw] w-full flex flex-col">
           <div className="h-[7vw] w-[49.6vw]  border-[0.2vw] border-t-0 border-b-0 border-l-0 border-r-[rgb(198,198,198)] ">
             <h1 className="JourneyAnimation justify-self-end pr-[3vw] text-[1.4vw] font-bold mt-[2vw] ">Backend Development</h1>
             <div className="JourneyAnimation mr-[3vw] justify-self-end font-sans text-[1vw] absolute mt-[1.5vw]  ml-[3vw] h-[8vw] w-[32vw] "><p className="text-right">Started my backend development journey with Node.js and Express, building RESTful APIs, handling SQL and MongoDB databases, and understanding server-side data flow and authentication.</p></div> 
           </div>
           <div className="self-center size-[1.2vw] border-[rgb(1968,198,198)] rounded-[1vw] border-[0.2vw]">
            <div className="absolute ml-[1vw] mt-[0.3vw] h-[0.1vw] w-[14vw] bg-[rgb(198,198,198)] flex">
              <div className="absolute size-[8vw]  rounded-[4vw] border-[0.15vw] border-[rgb(198,198,198)] -translate-y-[3.5vw] translate-x-[14vw]"><p className="pl-[2vw] mt-[1.2vw] text-[1.4vw] text-[rgb(111,111,111)] font-bold font-sans">1 year</p></div>
              <div className="absolute size-[8vw]  rounded-[4vw] border-[0.15vw] -translate-y-[3.5vw] translate-x-[14.5vw]"><p className="mt-[3vw] font-extrabold text-[2vw] ml-[1.4vw] font-sans">2025</p></div>
            </div>
           </div>
           
           <div className="h-[8vw] w-[49.6vw] border-[0.2vw] border-t-0 border-b-0 border-l-0 border-r-[rgb(198,198,198)]">

           </div>
        </div>

      </div>
    </>
  )
}
