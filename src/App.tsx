import { useHomeAnimate,useScrollAnimate } from "./Animations/HomeAnimation"
import { scrollToSection } from "./Animations/NavAnimation";
import { useSelector } from "react-redux";
import type { RootState } from "../src/Store";

export default function App() {
  useHomeAnimate();
  useScrollAnimate();
  const TechName = ["Frontend Developer","|","React JS","|","Type Script","|","UI Animations"]

  const theme = useSelector((state :RootState)=>state.theme.value);
  return (
    <> 
      <div id="Home" className={` h-screen w-full flex flex-col pt-[10rem] lg:pt-[8rem] px-[5vw] overflow-hidden ${theme==="light"?"bg-[rgb(247,245,243)]":"bg-[rgb(11,17,32)]"} `}>
          <div className="w-full">

             <p  className={` HomeAnimation inline-block ${theme==="light"?"text-blue-500":"text-amber-200"} pt-[10vw] lg:pt-[2vw] pb-[7vw] lg:pb-[2vw] text-[5vw] lg:text-[1.3vw] font-bold tracking-widest `}>DEB SARKAR</p>

             <h1 className={` HomeAnimation leading-tight lg:leading-none text-[12vw] lg:text-[5vw] font-extrabold ${theme==="light"?"text-black":"text-gray-200"} `}>I build thoughtful</h1>

             <h2 className={` HomeAnimation pt-[5vw] lg:pt-[1vw] leading-tight lg:leading-none text-[10vw] lg:text-[5vw] font-extrabold ${theme==="light"?"text-black":"text-gray-200"}`}>interactive web experiences.</h2>

             <div className={`flex flex-wrap gap-[3vw] lg:gap-[1vw] font-light text-[4vw] lg:text-[1.4vw] mt-[10vw] lg:mt-[2vw] ${theme==="light"?"text-black":"text-gray-200"} `} >
               {  TechName.map( (TechName,i)=>(
                <p className=" HomeAnimation" key={i}>{TechName}</p>
               ))
                }
             </div>

              <div className="flex flex-col lg:flex-row gap-[5vw] lg:gap-[2vw] justify-center lg:justify-start pt-[12vw] lg:pt-[4vw] text-center w-full">
                <div onClick={() => scrollToSection("projects")}  className={` ${theme==="light"?"hover:bg-blue-600 text-white bg-[rgb(78,142,245)]":"hover:bg-amber-200 text-black bg-amber-100"} cursor-pointer HomeAnimation flex items-center justify-center h-[15vw] lg:h-[4vw] w-full lg:w-[12vw] rounded-full text-[4.5vw] lg:text-[1.2vw] font-bold `}>
                    <p>View Projects</p>
                </div>

                <div onClick={() => scrollToSection("contact")} className={` ${theme==="light"?"text-black border-black hover:bg-gray-100":"text-gray-200 border-gray-200 hover:bg-[rgb(28,35,58)]"} cursor-pointer HomeAnimation flex items-center justify-center h-[15vw] lg:h-[4vw] w-full lg:w-[12vw] rounded-full text-[4.5vw] lg:text-[1.2vw] border-[0.3vw] lg:border-[0.1vw] font-bold `}>
                     <p>Get in Touch</p>
                </div>
              </div>
          </div>

          <div onClick={() => scrollToSection("about")} className={` cursor-pointer mt-auto pb-[8vw] lg:pb-[2vw] pt-[6vw] lg:pt-0 ScrollAnimation text-center text-[3.5vw] lg:text-[1vw] ${theme==="light"?"text-black hover:text-blue-600":"text-amber-100 hover:text-amber-200"}`}>
            <p className="font-bold tracking-widest">SCROLL</p>
            <p className="text-[6vw] lg:text-[1.5vw]">⌵</p>
          </div>
      </div>
    </>
  )
}

