import { useProjectAnimate } from "../Animations/ProjectsAnimation"
import { ExternalLink , Github} from "lucide-react"
import netflix from "../Images/netflix.png"
import game from "../Images/game.png"
import  weather from "../Images/weather.png"
import comment from "../Images/comment.png"

import { useSelector } from "react-redux";
import type { RootState } from "../Store";

export default function Projects() {

  const theme = useSelector((state :RootState)=>state.theme.value);

  useProjectAnimate();
  return (
    <>
      <div className={` min-h-screen h-auto w-full pb-[10vw] lg:pb-10 ${theme==="light"?"bg-[rgb(242,240,237)]":"bg-[rgb(17,24,45)]"}`}>
         <h1 className={` ProjectAnimation pt-[12vw] lg:pt-[4.7vw] font-sans text-[8vw] lg:text-[2vw] font-light ml-[5vw] lg:ml-[14.5vw] ${theme==="light"?"text-black":"text-sky-300"} `}>My Projects</h1>
         <p className={` ProjectAnimation font-extrabold text-[6vw] lg:text-[2.5vw] ml-[5vw] lg:ml-[14.5vw] mt-[3vw] lg:mt-[1vw] mb-[5vw] lg:mb-[1vw] ${theme==="light"?"text-[rgb(33,33,33)]":"text-gray-200"}`}>Projects that showcase my Work</p>

         <div className="pt-[0.6vw] items-center flex flex-col gap-[2.5vw] ">


            <div className={`  cursor-pointer ProjectAnimation flex flex-col-reverse lg:flex-row justify-between gap-[5vw] lg:gap-0 pt-[6vw] lg:pt-[1.5vw] px-[4vw] lg:px-0 lg:pr-[1vw] lg:pl-[1vw] h-auto lg:h-[14vw] w-[90vw] lg:w-[70vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300  hover:border-blue-400 ":"bg-[rgb(32,38,66)] border-[0.1vw] border-[rgb(55,62,100)]  hover:border-red-400 "}`}>
              <div className="flex flex-col gap-[3vw] lg:gap-[1vw] h-auto lg:h-[11vw] w-full lg:w-[40vw] mb-[4vw] lg:mb-0  ">
                <h1 className={` font-bold text-[6vw] lg:text-[2vw] ${theme==="light"?"text-black":"text-amber-100"}`}>Netflix Clone</h1>
                <p className={` ${theme==="light"?"text-[rgb(111,111,111)]":"text-gray-400"} text-[3.5vw] lg:text-[1.1vw] `}>Full-featured Netflix clone showcasing dynamic content loading responsive layouts smooth navigation and modern user interface components</p>
                <div className="w-full h-auto lg:h-[4vw] flex flex-wrap gap-[3vw] lg:gap-[1vw] text-[3.5vw] lg:text-[1.2vw] ">
                  <div className="py-[1vw] lg:py-[0.1vw] px-[3vw] lg:px-0 lg:w-[auto] lg:px-[1vw] lg:h-[2.2vw] bg-[rgb(235,230,224)] text-center rounded-[6vw] lg:rounded-[2vw] font-bold">React</div>
                  <div className="py-[1vw] lg:py-[0.1vw] px-[3vw] lg:px-0 lg:w-[auto] lg:px-[1vw] lg:h-[2.2vw] bg-[rgb(235,230,224)] text-center rounded-[6vw] lg:rounded-[2vw] font-bold">Tailwind</div>
                  <div className="py-[1vw] lg:py-[0.1vw] px-[3vw] lg:px-0 lg:w-[auto] lg:px-[1vw] lg:h-[2.2vw] bg-[rgb(235,230,224)] text-center rounded-[6vw] lg:rounded-[2vw] font-bold">js</div>
                </div>
              </div>
              <div className="group h-[50vw] lg:h-[11vw] w-full lg:w-[20vw] rounded-[3vw] lg:rounded-[1vw] bg-cover bg-center " style={{ backgroundImage: `url(${netflix})` }}>
                <div className="blog relative h-full lg:h-[11vw] rounded-[3vw] lg:rounded-[1vw] w-full lg:w-[20vw] flex justify-center items-center gap-[6vw] lg:gap-[2vw] group-hover:bg-black/40 ">
                  <div className="size-[12vw] lg:size-[3vw] flex justify-center items-center bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[6vw] lg:rounded-[2vw] invisible group-hover:visible "><Github onClick={()=> window.open("https://github.com/Deb2004152/Netflix.git")} className="size-[6vw] lg:size-[1.5vw]"/></div>
                  <div className="size-[12vw] lg:size-[3vw] flex justify-center items-center bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[6vw] lg:rounded-[2vw] invisible group-hover:visible "><ExternalLink onClick={() => window.open("https://6970e84dff560a18bbf516c7--bespoke-sunflower-92b6f0.netlify.app/", "_blank", "noopener,noreferrer")} className="size-[6vw] lg:size-[1.5vw]"/></div>
                </div>
              </div>
            </div>

            <div className={`  cursor-pointer ProjectAnimation flex flex-col-reverse lg:flex-row justify-between gap-[5vw] lg:gap-0 pt-[6vw] lg:pt-[1.5vw] px-[4vw] lg:px-0 lg:pr-[1vw] lg:pl-[1vw] h-auto lg:h-[14vw] w-[90vw] lg:w-[70vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300  hover:border-blue-400 ":"bg-[rgb(32,38,66)] border-[0.1vw] border-[rgb(55,62,100)]  hover:border-sky-400 "}`}>
              <div className="flex flex-col gap-[3vw] lg:gap-[1vw] h-auto lg:h-[11vw] w-full lg:w-[40vw] mb-[4vw] lg:mb-0 ">
                <h1 className={` font-bold text-[6vw] lg:text-[2vw] ${theme==="light"?"text-black":"text-sky-400"}`}>Weather Application</h1>
                <p className={` ${theme==="light"?"text-[rgb(111,111,111)]":"text-gray-400"} text-[3.5vw] lg:text-[1.1vw] `}>Real-time weather data visualization with location-based forecasts and clean intuitive user interface.</p>
                <div className="w-full h-auto lg:h-[4vw] flex flex-wrap gap-[3vw] lg:gap-[1vw] text-[3.5vw] lg:text-[1.2vw] ">
                  <div className="py-[1vw] lg:py-[0.1vw] px-[3vw] lg:px-0 lg:w-[auto] lg:px-[1vw] lg:h-[2.2vw] bg-[rgb(235,230,224)] text-center rounded-[6vw] lg:rounded-[2vw] font-bold">React</div>
                  <div className="py-[1vw] lg:py-[0.1vw] px-[3vw] lg:px-0 lg:w-[auto] lg:px-[1vw] lg:h-[2.2vw] bg-[rgb(235,230,224)] text-center rounded-[6vw] lg:rounded-[2vw] font-bold">Tailwind</div>
                  <div className="py-[1vw] lg:py-[0.1vw] px-[3vw] lg:px-0 lg:w-[auto] lg:px-[1vw] lg:h-[2.2vw] bg-[rgb(235,230,224)] text-center rounded-[6vw] lg:rounded-[2vw] font-bold">Fetch API</div>
                </div>
              </div>
              <div className="group h-[50vw] lg:h-[11vw] w-full lg:w-[20vw] rounded-[3vw] lg:rounded-[1vw] bg-cover bg-center " style={{ backgroundImage: `url(${weather})` }}>
                <div className="blog relative h-full lg:h-[11vw] rounded-[3vw] lg:rounded-[1vw] w-full lg:w-[20vw] flex justify-center items-center gap-[6vw] lg:gap-[2vw] group-hover:bg-black/40 ">
                  <div className="size-[12vw] lg:size-[3vw] flex justify-center items-center bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[6vw] lg:rounded-[2vw] invisible group-hover:visible "><Github onClick={()=> window.open("https://github.com/Deb2004152/Weather-Application.git")} className="size-[6vw] lg:size-[1.5vw]"/></div>
                  <div className="size-[12vw] lg:size-[3vw] flex justify-center items-center bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[6vw] lg:rounded-[2vw] invisible group-hover:visible "><ExternalLink onClick={() => window.open("https://roaring-daffodil-71d28b.netlify.app/")} className="size-[6vw] lg:size-[1.5vw]"/></div>
                </div>
              </div>
            </div>

           
           


            <div className={`  cursor-pointer ProjectAnimation flex flex-col-reverse lg:flex-row justify-between gap-[5vw] lg:gap-0 pt-[6vw] lg:pt-[1.5vw] px-[4vw] lg:px-0 lg:pr-[1vw] lg:pl-[1vw] h-auto lg:h-[14vw] w-[90vw] lg:w-[70vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300  hover:border-blue-400 ":"bg-[rgb(32,38,66)] border-[0.1vw] border-[rgb(55,62,100)]  hover:border-purple-400 "}`}>
              <div className="flex flex-col gap-[3vw] lg:gap-[1vw] h-auto lg:h-[11vw] w-full lg:w-[40vw] mb-[4vw] lg:mb-0  ">
                <h1 className={` font-bold text-[6vw] lg:text-[2vw] ${theme==="light"?"text-black":"text-amber-200"}`}>Interactive Games</h1>
                <p className={` ${theme==="light"?"text-[rgb(111,111,111)]":"text-gray-400"} text-[3.5vw] lg:text-[1.1vw] `}>Collection of classic interactive games including Tic Tac Toe game with smooth animations.</p>
                <div className="w-full h-auto lg:h-[4vw] flex flex-wrap gap-[3vw] lg:gap-[1vw] text-[3.5vw] lg:text-[1.2vw] ">
                  <div className="py-[1vw] lg:py-[0.1vw] px-[3vw] lg:px-0 lg:w-[auto] lg:px-[1vw] lg:h-[2.2vw] bg-[rgb(235,230,224)] text-center rounded-[6vw] lg:rounded-[2vw] font-bold">HTML</div>
                  <div className="py-[1vw] lg:py-[0.1vw] px-[3vw] lg:px-0 lg:w-[auto] lg:px-[1vw] lg:h-[2.2vw] bg-[rgb(235,230,224)] text-center rounded-[6vw] lg:rounded-[2vw] font-bold">CSS</div>
                  <div className="py-[1vw] lg:py-[0.1vw] px-[3vw] lg:px-0 lg:w-[auto] lg:px-[1vw] lg:h-[2.2vw] bg-[rgb(235,230,224)] text-center rounded-[6vw] lg:rounded-[2vw] font-bold">js</div>
                </div>                
              </div>
              <div className="group h-[50vw] lg:h-[11vw] w-full lg:w-[20vw] rounded-[3vw] lg:rounded-[1vw] bg-cover bg-center " style={{ backgroundImage: `url(${game})` }}>
                <div className="blog relative h-full lg:h-[11vw] rounded-[3vw] lg:rounded-[1vw] w-full lg:w-[20vw] flex justify-center items-center gap-[6vw] lg:gap-[2vw] group-hover:bg-black/40 ">
                  <div className="size-[12vw] lg:size-[3vw] flex justify-center items-center bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[6vw] lg:rounded-[2vw] invisible group-hover:visible "><Github onClick={()=> window.open("https://github.com/Deb2004152/Tic-Tac-Toe.git")} className="size-[6vw] lg:size-[1.5vw]"/></div>
                  <div className="size-[12vw] lg:size-[3vw] flex justify-center items-center bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[6vw] lg:rounded-[2vw] invisible group-hover:visible "><ExternalLink onClick={() => window.open("https://friendly-basbousa-66a579.netlify.app/")} className="size-[6vw] lg:size-[1.5vw]"/></div>
                </div>
              </div>
            </div>

            <div className={`  cursor-pointer ProjectAnimation flex flex-col-reverse lg:flex-row justify-between gap-[5vw] lg:gap-0 pt-[6vw] lg:pt-[1.5vw] px-[4vw] lg:px-0 lg:pr-[1vw] lg:pl-[1vw] h-auto lg:h-[14vw] w-[90vw] lg:w-[70vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300  hover:border-blue-400 ":"bg-[rgb(32,38,66)] border-[0.1vw] border-[rgb(55,62,100)]  hover:border-blue-400 "}`}>
              <div className="flex flex-col gap-[3vw] lg:gap-[1vw] h-auto lg:h-[11vw] w-full lg:w-[40vw] mb-[4vw] lg:mb-0 ">
                <h1 className={` font-bold text-[6vw] lg:text-[2vw] ${theme==="light"?"text-black":"text-blue-300"}`}>Blog Application</h1>
                <p className={` ${theme==="light"?"text-[rgb(111,111,111)]":"text-gray-400"} text-[3.5vw] lg:text-[1.1vw] `}>A modern blog application enabling users to create edit publish and manage posts securely with authentication responsive design and comments</p>
                <div className="w-full h-auto lg:h-[4vw] flex flex-wrap gap-[3vw] lg:gap-[1vw] text-[3.5vw] lg:text-[1.2vw] ">
                  <div className="py-[1vw] lg:py-[0.1vw] px-[3vw] lg:px-0 lg:w-[auto] lg:px-[1vw] lg:h-[2.2vw] bg-[rgb(235,230,224)] text-center rounded-[6vw] lg:rounded-[2vw] font-bold">React</div>
                  <div className="py-[1vw] lg:py-[0.1vw] px-[3vw] lg:px-0 lg:w-[auto] lg:px-[1vw] lg:h-[2.2vw] bg-[rgb(235,230,224)] text-center rounded-[6vw] lg:rounded-[2vw] font-bold">Tailwind</div>
                  <div className="py-[1vw] lg:py-[0.1vw] px-[3vw] lg:px-0 lg:w-[auto] lg:px-[1vw] lg:h-[2.2vw] bg-[rgb(235,230,224)] text-center rounded-[6vw] lg:rounded-[2vw] font-bold">Fetch API</div>                  
                </div>                 
              </div>
              <div className="group h-[50vw] lg:h-[11vw] w-full lg:w-[20vw] rounded-[3vw] lg:rounded-[1vw] bg-cover bg-center" style={{ backgroundImage: `url(${comment})` }}>
                <div className="blog relative h-full lg:h-[11vw] rounded-[3vw] lg:rounded-[1vw] w-full lg:w-[20vw] flex justify-center items-center gap-[6vw] lg:gap-[2vw] group-hover:bg-black/60 ">
                  <div className="size-[12vw] lg:size-[3vw] flex justify-center items-center bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[6vw] lg:rounded-[2vw] invisible group-hover:visible "><Github onClick={()=> window.open("https://github.com/Deb2004152/Blog-Application.git")} className="size-[6vw] lg:size-[1.5vw]"/></div>
                  <div className="size-[12vw] lg:size-[3vw] flex justify-center items-center bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[6vw] lg:rounded-[2vw] invisible group-hover:visible "><ExternalLink onClick={() => window.open("https://6970e9372856051ca413cc38--radiant-kitten-7ea72e.netlify.app/")}className="size-[6vw] lg:size-[1.5vw]"/></div>
                </div>
                
              </div>
            </div>

         </div>

      </div>
    </>
  )
}
