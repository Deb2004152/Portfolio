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
      <div id="Home" className={` h-screen w-full ${theme==="light"?"bg-[rgb(247,245,243)]":"bg-[rgb(11,17,32)]"} `}>
          <div className="w-[89vw] h-[41vw] ml-[5vw]">

             <p  className={` HomeAnimation inline-block ${theme==="light"?"text-blue-500":"text-amber-200"} pt-[10vw] pb-[2vw] text-[1.3vw] `}>DEB SARKAR</p>

             <h1 className={` HomeAnimation text-[5vw] font-extrabold ${theme==="light"?"text-black":"text-gray-200"}`}>I build thoughtful,</h1>

             <h2 className={` HomeAnimation text-[5vw] font-extrabold ${theme==="light"?"text-black":"text-gray-200"}`}>interactive web experiences.</h2>

             <div className={`flex gap-[1vw] font-light text-[1.5vw] mt-[1vw] ${theme==="light"?"text-black":"text-gray-200"} `} >
               {  TechName.map( (TechName,i)=>(
                <p className=" HomeAnimation" key={i}>{TechName}</p>
               ))
                }
             </div>

              <div className="flex gap-[2vw] pt-[2vw] text-center">
                <div onClick={() => scrollToSection("projects")}  className={` ${theme==="light"?"hover:bg-blue-600 text-white bg-[rgb(78,142,245)]":"hover:bg-amber-200 text-black bg-amber-100"} cursor-pointer HomeAnimation h-[4vw] w-[10vw] pt-[1vw] rounded-[2vw] text-[1.2vw]  `}>
                    <p>View Projects</p>
                </div>

                <div onClick={() => scrollToSection("contact")} className={` ${theme==="light"?"text-black border-black":"text-gray-200 border-gray-200 "} cursor-pointer HomeAnimation h-[4vw] w-[10vw] pt-[1vw] rounded-[2vw] text-[1.2vw] border-[0.1vw]  `}>
                     <p>Get in Touch</p>
                </div>
              </div>
          </div>



          <div onClick={() => scrollToSection("about")} className={` cursor-pointer ScrollAnimation text-center text-[1vw] ${theme==="light"?"text-black hover:text-blue-600":"text-amber-100 hover:text-amber-200"}`}>
            <p>SCROLL</p>
            <p>⌵</p>
          </div>
      </div>
    </>
  )
}

