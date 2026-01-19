import { Mail,MoveUpRight,Linkedin,Github,Copyright } from "lucide-react"
import ContactCard from "../UI/ContactCard"

import { useContactAnimate } from "../Animations/ContactAnimation"

export default function Contact() {
  useContactAnimate();
  return (
    <>
      <div className='h-[72vw] w-full bg-[rgb(242,240,237)] pt-[8vw]'>
         <div className="w-full  h-[38vw]  text-center ">
            <p className="ContactAnimation text-blue-700 font-light font-sans text-[1.5vw] ">GET  IN  TOUCH</p>
            <h1 className="ContactAnimation text-[4.5vw] font-bold">Let's create something</h1>
            <h1 className="ContactAnimation text-[4.5vw] font-bold mb-[2vw]">meaningful together</h1>
            <p className="ContactAnimation text-[1.2vw] font-light text-[rgb(105,104,104)]">I'm always open to discussing new projects, creative ideas, or opportunities to be part</p>
            <p className="ContactAnimation text-[1.2vw] font-light text-[rgb(105,104,104)]">of something great.</p>

            <ContactCard />

            <div className="justify-center flex gap-[3vw]  text-[1.2vw] text-[rgb(105,104,104)] mt-[1.5vw] ">

              <div className=" ContactAnimation flex gap-[1vw] ">
                <div><Mail className="size-[1.4vw]" /></div>
                <p className="hover:text-blue-800 cursor-pointer ">sdeb71182@gmail.com</p>
                <div><MoveUpRight className="size-[1.4vw]" /></div>
              </div>

              <div className=" ContactAnimation flex gap-[1vw]">
                <div className="flex "><Github className="size-[1.4vw]" /></div>
                <p className="hover:text-blue-800 cursor-pointer">@debsarkar</p>
                <div><MoveUpRight className="size-[1.4vw]" /></div>
              </div>

              <div className="ContactAnimation flex gap-[1vw]">
                <div className="flex "><Linkedin className="size-[1.4vw]" /></div>
                <p className="hover:text-blue-800 cursor-pointer">Deb Sarkar</p>
                <div><MoveUpRight className="size-[1.4vw]" /></div>
              </div>
            </div>
            <br />
            <hr/> 

            <div className=" ContactAnimation flex justify-between font-extralight text-[1vw] text-[rgb(145,102,102)] ml-[8vw] mr-[8vw] mt-[2vw]">
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

