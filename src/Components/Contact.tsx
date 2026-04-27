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
      <div className={` min-h-screen h-auto lg:h-[72vw] w-full pt-[20vw] lg:pt-[6vw] pb-[20vw] lg:pb-0 ${theme==="light"?"bg-[rgb(242,240,237)]":"bg-[rgb(17,24,45)]"} `}>
         <div className="w-full h-auto lg:h-[38vw] text-center px-[5vw] lg:px-0">
            <p className={` ContactAnimation font-light font-sans text-[5vw] lg:text-[1.5vw] mb-[2vw] lg:mb-0 ${theme==="light"?"text-blue-700":"text-sky-400"}`}>GET IN TOUCH</p>
            <h1 className={` ContactAnimation text-[10vw] lg:text-[4.5vw] font-bold leading-tight lg:leading-normal ${theme==="light"?"text-black":"text-gray-200"} `}>Let's create something</h1>
            <h1 className={` ContactAnimation text-[10vw] lg:text-[4.5vw] font-bold mb-[6vw] lg:mb-[2vw] leading-tight lg:leading-normal ${theme==="light"?"text-black":"text-gray-200"} `}>meaningful together</h1>
            <p  className={` ContactAnimation text-[4vw] lg:text-[1.2vw] font-light ${theme==="light"?"text-[rgb(105,104,104)]":"text-gray-400"}`}>I'm always open to discussing new projects, creative ideas, or opportunities to be part</p>
            <p  className={` ContactAnimation text-[4vw] lg:text-[1.2vw] font-light ${theme==="light"?"text-[rgb(105,104,104)]":"text-gray-400"}`}>of something great.</p>

            <ContactCard />

            <div className={` justify-center flex flex-col lg:flex-row items-center gap-[6vw] lg:gap-[3vw] text-[4vw] lg:text-[1.2vw] mt-[10vw] lg:mt-[1.5vw] ${theme==="light"?"text-[rgb(105,104,104)]":"text-gray-400"}`}>

              <div className=" ContactAnimation flex gap-[2vw] lg:gap-[1vw] items-center">
                <div><Mail className="size-[5vw] lg:size-[1.4vw]" /></div>
                <p onClick={()=>window.open("https://mail.google.com/mail/u/0/#sent?compose=CllgCJlFDFNWNfDlzZwTxJDQRqhCXgxSxBMDGvMVSNKlJFBfgQHWSfsxNHmjdDsGvdMzBbnnRzL")}className={`  cursor-pointer ${theme==="light"?"hover:text-blue-800 text-[rgb(105,104,104)] ":"hover:text-sky-400"}`}>sdeb71182@gmail.com</p>
                <div><MoveUpRight className="size-[5vw] lg:size-[1.4vw]" /></div>
              </div>

              <div className=" ContactAnimation flex gap-[2vw] lg:gap-[1vw] items-center">
                <div className="flex "><Github className="size-[5vw] lg:size-[1.4vw]" /></div>
                <p onClick={()=>{window.open("https://github.com/Deb2004152")}} className={` cursor-pointer ${theme==="light"?"hover:text-blue-800 text-[rgb(105,104,104)] ":"hover:text-sky-400"}`}>@debsarkar</p>
                <div><MoveUpRight className="size-[5vw] lg:size-[1.4vw]" /></div>
              </div>

              <div className="ContactAnimation flex gap-[2vw] lg:gap-[1vw] items-center">
                <div className="flex "><Linkedin className="size-[5vw] lg:size-[1.4vw]" /></div>
                <p onClick={()=>window.open("https://www.linkedin.com/in/deb-sarkar-7b6ab8306/")}className={` cursor-pointer ${theme==="light"?"hover:text-blue-800 text-[rgb(105,104,104)] ":"hover:text-sky-400"}`}>Deb Sarkar</p>
                <div><MoveUpRight className="size-[5vw] lg:size-[1.4vw]" /></div>
              </div>
            </div>
            <br />
            <hr className={` ${theme==="light"?"text-black":"text-gray-500"}`}/> 

            <div className={` ContactAnimation flex flex-col lg:flex-row justify-between items-center gap-[4vw] lg:gap-0 font-extralight text-[3vw] lg:text-[1vw] mt-[10vw] lg:mt-[3vw] pb-[10vw] lg:pb-0 ${theme==="light"?"text-[rgb(145,102,102)]":"text-gray-400"} `}>
              <div className="flex items-center gap-[1vw] lg:gap-[0.4vw]">
                <div><Copyright className="size-[4vw] lg:size-[1vw]"/></div>
                <p>2026 Deb Sarkar. All rights reserved.</p>
              </div>
                
              <div className=" ContactAnimation flex items-center gap-[2vw] lg:gap-[0.3vw] ">
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

