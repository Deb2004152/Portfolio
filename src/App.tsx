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

             <p  className={` HomeAnimation inline-block ${theme==="light"?"text-blue-500":"text-amber-200"} xs:pt-[30vw] lg:pt-[10vw] xs:pb-15 lg:pb-[2vw] xs:text-[6vw] lg:text-[1.3vw] `}>DEB SARKAR</p>

             <h1 className={` HomeAnimation  xs:pt-20  xs:leading-[1.2] lg:leading-0 lg:text-[5vw] xs:text-[10rem] font-extrabold ${theme==="light"?"text-black":"text-gray-200"} `}>I build thoughtful</h1>

             <h2 className={` HomeAnimation xs:pt-10 lg:pt-12  lg:text-[5vw] xs:text-[3.7rem] font-extrabold ${theme==="light"?"text-black":"text-gray-200"}`}>interactive web experiences.</h2>

             <div className={`flex gap-[1vw] font-light text-[1rem] xs:text-[1.85rem] lg:text-[1.4rem] xs:mt-40 lg:mt-[1vw] ${theme==="light"?"text-black":"text-gray-200"} `} >
               {  TechName.map( (TechName,i)=>(
                <p className=" HomeAnimation" key={i}>{TechName}</p>
               ))
                }
             </div>

              <div className="flex flex-col lg:flex-row xs:gap-15 lg:gap-4 xs:justify-center lg:justify-start lg-gap-[2vw] xs:pt-25 lg:pt-[4vw] text-center">
                <div onClick={() => scrollToSection("projects")}  className={` ${theme==="light"?"hover:bg-blue-600 text-white bg-[rgb(78,142,245)]":"hover:bg-amber-200 text-black bg-amber-100"} cursor-pointer HomeAnimation xs:h-40 lg:h-[4vw] xs:w-full lg:w-[10vw] xs:pt-10 lg:pt-[1vw] rounded-full xs:text-[3rem] lg:text-[1.2vw]  `}>
                    <p>View Projects</p>
                </div>

                <div onClick={() => scrollToSection("contact")} className={` ${theme==="light"?"text-black border-black":"text-gray-200 border-gray-200 "} cursor-pointer HomeAnimation xs:h-40 lg:h-[4vw] xs:w-full lg:w-[10vw] xs:pt-10 lg:pt-[1vw] rounded-full xs:text-[3rem] lg:text-[1.2vw] border-[0.1vw]  `}>
                     <p>Get in Touch</p>
                </div>
              </div>
          </div>



          <div onClick={() => scrollToSection("about")} className={` cursor-pointer xs:pt-350 lg:pt-0 ScrollAnimation text-center xs:text-[2.25rem] lg:text-[1vw] ${theme==="light"?"text-black hover:text-blue-600":"text-amber-100 hover:text-amber-200"}`}>
            <p>SCROLL</p>
            <p>⌵</p>
          </div>
      </div>
    </>
  )
}

