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
      <div className={` h-[85vw] w-full ${theme==="light"?"bg-[rgb(242,240,237)]":"bg-[rgb(17,24,45)]"}`}>
         <h1 className={` ProjectAnimation pt-[4.7vw] font-sans text-[2vw] font-light ml-[14.5vw] ${theme==="light"?"text-black":"text-sky-300"} `}>My Projects</h1>
         <p className={` ProjectAnimation font-extrabold  text-[2.5vw] ml-[14.5vw] mt-[1vw] mb-[1vw] ${theme==="light"?"text-[rgb(33,33,33)]":"text-gray-200"}`}>Projects that showcase my Work</p>

         <div className="pt-[0.6vw] items-center flex flex-col gap-[2.5vw] ">


            <div className={`  cursor-pointer ProjectAnimation pt-[1.5vw] pr-[1vw] pl-[1vw] flex justify-between h-[14vw] w-[70vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300  hover:border-blue-400 ":"bg-[rgb(32,38,66)] border-[0.1vw] border-[rgb(55,62,100)]  hover:border-red-400 "}`}>
              <div className="flex flex-col gap-[1vw] h-[11vw] w-[40vw]  ">
                <h1 className={` font-bold text-[2vw] ${theme==="light"?"text-black":"text-amber-100"}`}>Netflix Clone</h1>
                <p className={` ${theme==="light"?"text-[rgb(111,111,111)]":"text-gray-400"} text-[1.1vw] `}>Full-featured Netflix clone showcasing dynamic content loading responsive layouts smooth navigation and modern user interface components</p>
                <div className="w-full h-[4vw]  flex gap-[1vw] text-[1.2vw] ">
                  <div className="h-[2.2vw] pt-[0.1vw] w-[6vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">React</div>
                  <div className="h-[2.2vw] pt-[0.1vw] w-[8vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">Tailwind</div>
                  <div className="h-[2.2vw] pt-[0.1vw] w-[4vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">js</div>
                </div>
              </div>
              <div className="group h-[11vw] w-[20vw]  rounded-[1vw] bg-cover bg-center " style={{ backgroundImage: `url(${netflix})` }}>
                <div className="blog relative h-[11vw] rounded-[1vw] w-[20vw] flex justify-center pt-[3.5vw] gap-[2vw] group-hover:bg-black/40 ">
                  <div className="size-[3vw] bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[2vw] invisible group-hover:visible "><Github  className="size-[1.5vw] justify-self-center mt-[0.7vw]"/></div>
                  <div className="size-[3vw] bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[2vw] invisible group-hover:visible "><ExternalLink className="size-[1.5vw] justify-self-center mt-[0.6vw]"/></div>
                </div>
              </div>
            </div>

            <div className={`  cursor-pointer ProjectAnimation pt-[1.5vw] pr-[1vw] pl-[1vw] flex justify-between h-[14vw] w-[70vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300  hover:border-blue-400 ":"bg-[rgb(32,38,66)] border-[0.1vw] border-[rgb(55,62,100)]  hover:border-sky-400 "}`}>
              <div className="flex flex-col gap-[1vw]  h-[11vw] w-[40vw] ">
                <h1 className={` font-bold text-[2vw] ${theme==="light"?"text-black":"text-sky-400"}`}>Weather Application</h1>
                <p className={` ${theme==="light"?"text-[rgb(111,111,111)]":"text-gray-400"} text-[1.1vw] `}>Real-time weather data visualization with location-based forecasts and clean intuitive user interface.</p>
                <div className="w-full h-[4vw]  flex gap-[1vw] text-[1.2vw] ">
                  <div className="h-[2.2vw] pt-[0.1vw] w-[6vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">React</div>
                  <div className="h-[2.2vw] pt-[0.1vw] w-[8vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">Tailwind</div>
                  <div className="h-[2.2vw] pt-[0.1vw] w-[8vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">Fetch API</div>
                </div>
              </div>
              <div className="group h-[11vw] w-[20vw]  rounded-[1vw] bg-cover bg-center " style={{ backgroundImage: `url(${weather})` }}>
                <div className="blog relative h-[11vw] rounded-[1vw] w-[20vw] flex justify-center pt-[3.5vw] gap-[2vw] group-hover:bg-black/40 ">
                  <div className="size-[3vw] bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[2vw] invisible group-hover:visible "><Github  className="size-[1.5vw] justify-self-center mt-[0.7vw]"/></div>
                  <div className="size-[3vw] bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[2vw] invisible group-hover:visible "><ExternalLink className="size-[1.5vw] justify-self-center mt-[0.6vw]"/></div>
                </div>
              </div>
            </div>

           
           


            <div className={`  cursor-pointer ProjectAnimation pt-[1.5vw] pr-[1vw] pl-[1vw] flex justify-between h-[14vw] w-[70vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300  hover:border-blue-400 ":"bg-[rgb(32,38,66)] border-[0.1vw] border-[rgb(55,62,100)]  hover:border-purple-400 "}`}>
              <div className="flex flex-col gap-[1vw]  h-[11vw] w-[40vw]  ">
                <h1 className={` font-bold text-[2vw] ${theme==="light"?"text-black":"text-amber-200"}`}>Interactive Games</h1>
                <p className={` ${theme==="light"?"text-[rgb(111,111,111)]":"text-gray-400"} text-[1.1vw] `}>Collection of classic interactive games including Tic Tac Toe game with smooth animations.</p>
                <div className="w-full h-[4vw]  flex gap-[1vw] text-[1.2vw] ">
                  <div className="h-[2.2vw] pt-[0.1vw] w-[6vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">HTML</div>
                  <div className="h-[2.2vw] pt-[0.1vw] w-[4vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">CSS</div>
                  <div className="h-[2.2vw] pt-[0.1vw] w-[4vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">js</div>
                </div>                
              </div>
              <div className="group h-[11vw] w-[20vw]  rounded-[1vw] bg-cover bg-center " style={{ backgroundImage: `url(${game})` }}>
                <div className="blog relative h-[11vw] rounded-[1vw] w-[20vw] flex justify-center pt-[3.5vw] gap-[2vw] group-hover:bg-black/40 ">
                  <div className="size-[3vw] bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[2vw] invisible group-hover:visible "><Github  className="size-[1.5vw] justify-self-center mt-[0.7vw]"/></div>
                  <div className="size-[3vw] bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[2vw] invisible group-hover:visible "><ExternalLink className="size-[1.5vw] justify-self-center mt-[0.6vw]"/></div>
                </div>
              </div>
            </div>

            <div className={`  cursor-pointer ProjectAnimation pt-[1.5vw] pr-[1vw] pl-[1vw] flex justify-between h-[14vw] w-[70vw] ${theme==="light"?"bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300  hover:border-blue-400 ":"bg-[rgb(32,38,66)] border-[0.1vw] border-[rgb(55,62,100)]  hover:border-blue-400 "}`}>
              <div className="flex flex-col gap-[1.2vw]  h-[11vw] w-[40vw] ">
                <h1 className={` font-bold text-[2vw] ${theme==="light"?"text-black":"text-blue-300"}`}>Blog Application</h1>
                <p className={` ${theme==="light"?"text-[rgb(111,111,111)]":"text-gray-400"} text-[1.1vw] `}>A modern blog application enabling users to create edit publish and manage posts securely with authentication responsive design and comments</p>
                <div className="w-full h-[4vw]  flex gap-[1vw] text-[1.2vw] ">
                  <div className="h-[2.2vw] pt-[0.1vw] w-[6vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">React</div>
                  <div className="h-[2.2vw] pt-[0.1vw] w-[8vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">Tailwind</div>
                  <div className="h-[2.2vw] pt-[0.1vw] w-[8vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">Fetch API</div>                  
                </div>                 
              </div>
              <div className="group  h-[11vw] w-[20vw] rounded-[1vw] bg-cover bg-center" style={{ backgroundImage: `url(${comment})` }}>
                <div className="blog relative h-[11vw] rounded-[1vw] w-[20vw] flex justify-center pt-[3.5vw] gap-[2vw] group-hover:bg-black/60 ">
                  <div className="size-[3vw] bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[2vw] invisible group-hover:visible "><Github  className="size-[1.5vw] justify-self-center mt-[0.7vw]"/></div>
                  <div className="size-[3vw] bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-[2vw] invisible group-hover:visible "><ExternalLink className="size-[1.5vw] justify-self-center mt-[0.6vw]"/></div>
                </div>
                
              </div>
            </div>

         </div>

      </div>
    </>
  )
}
