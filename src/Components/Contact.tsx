import { Mail,MoveUpRight,Linkedin,Github,Copyright } from "lucide-react"
import ContactCard from "../UI/ContactCard"

import { useContactAnimate } from "../Animations/ContactAnimation"
import { useSelector } from "react-redux";
import type { RootState } from "../Store";

export default function Contact() {

  const theme = useSelector((state :RootState)=>state.theme.value);

  useContactAnimate();
  return (
    <>
      <div className={` h-[72vw] w-full pt-[6vw] ${theme==="light"?"bg-[rgb(242,240,237)]":"bg-[rgb(17,24,45)]"} `}>
         <div className="w-full  h-[38vw]  text-center ">
            <p className={` ContactAnimation  font-light font-sans text-[1.5vw] ${theme==="light"?"text-blue-700":"text-sky-400"}`}>GET  IN  TOUCH</p>
            <h1 className={` ContactAnimation text-[4.5vw] font-bold ${theme==="light"?"text-black":"text-gray-200"} `}>Let's create something</h1>
            <h1 className={` ContactAnimation text-[4.5vw] font-bold mb-[2vw] ${theme==="light"?"text-black":"text-gray-200"} `}>meaningful together</h1>
            <p  className={` ContactAnimation text-[1.2vw] font-light  ${theme==="light"?"text-[rgb(105,104,104)]":"text-gray-400"}`}>I'm always open to discussing new projects, creative ideas, or opportunities to be part</p>
            <p  className={` ContactAnimation text-[1.2vw] font-light  ${theme==="light"?"text-[rgb(105,104,104)]":"text-gray-400"}`}>of something great.</p>

            <ContactCard />

            <div className={` justify-center flex gap-[3vw]  text-[1.2vw]  mt-[1.5vw] ${theme==="light"?"text-[rgb(105,104,104)]":"text-gray-400"}`}>

              <div className=" ContactAnimation flex gap-[1vw] ">
                <div><Mail className="size-[1.4vw]" /></div>
                <p className={`  cursor-pointer ${theme==="light"?"hover:text-blue-800 text-[rgb(105,104,104)] ":"hover:text-sky-400"}`}>sdeb71182@gmail.com</p>
                <div><MoveUpRight className="size-[1.4vw]" /></div>
              </div>

              <div className=" ContactAnimation flex gap-[1vw]">
                <div className="flex "><Github className="size-[1.4vw]" /></div>
                <p className={` cursor-pointer ${theme==="light"?"hover:text-blue-800 text-[rgb(105,104,104)] ":"hover:text-sky-400"}`}>@debsarkar</p>
                <div><MoveUpRight className="size-[1.4vw]" /></div>
              </div>

              <div className="ContactAnimation flex gap-[1vw]">
                <div className="flex "><Linkedin className="size-[1.4vw]" /></div>
                <p className={` cursor-pointer ${theme==="light"?"hover:text-blue-800 text-[rgb(105,104,104)] ":"hover:text-sky-400"}`}>Deb Sarkar</p>
                <div><MoveUpRight className="size-[1.4vw]" /></div>
              </div>
            </div>
            <br />
            <hr className={` ${theme==="light"?"text-black":"text-gray-500"}`}/> 

            <div className={` ContactAnimation flex justify-between font-extralight text-[1vw]  ml-[8vw] mr-[8vw] mt-[3vw] ${theme==="light"?"text-[rgb(145,102,102)]":"text-gray-400"} `}>
              <div className="flex gap-[0.4vw]">
                <div className="mt-[0.2vw]"><Copyright className="size-[1vw]"/></div>
                <p>2026 Deb Sarkar. All rights reserved.</p>
              </div>
                
              <div className=" ContactAnimation flex gap-[0.3vw] ">
                <p>Build With</p>
                <p className="text-[rgb(212,175,55)] ">React</p>

                <p className="text-[rgb(169,169,169)] ">Typescript</p>

                <p className="text-[rgb(132,122,221)] "> GSAP</p>
              </div>
            </div>
         </div>

      </div>
    </>
  )
}

