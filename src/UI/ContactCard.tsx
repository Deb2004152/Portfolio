import { useContactAnimate } from "../Animations/ContactAnimation"

import { useSelector } from "react-redux";
import type { RootState } from "../Store";

export default function ContactCard() {

 const theme = useSelector((state :RootState)=>state.theme.value);

 useContactAnimate()
  return (
    <>
      <div className=" mt-[2vw] h-[30vw] w-[70vw]  justify-self-center">
        <h1 className={` ContactAnimation justify-self-center text-[2vw] font-sans font-extralight ${theme==="light"?"text-black":"text-amber-200"}`}>contact Me</h1>

        <div className="mt-[1.2vw] flex  justify-between h-[4vw] w-full ">
           <input type="text" placeholder="Your Name :" className={` ContactAnimation outline-none  h-[4vw] w-[32vw] pl-[1vw]  border-[0.1vw]  ml-[2vw] ${theme==="light"?"bg-white border-[rgb(198,198,198)] text-black":"bg-[rgb(32,38,66)] border-[rgb(60,68,110)] text-white"} `} />
           <input type="text" placeholder="Telephone :" className={` ContactAnimation outline-none  h-[4vw] w-[32vw]  pl-[1vw]  border-[0.1vw]  mr-[2vw] ${theme==="light"?"bg-white border-[rgb(198,198,198)] text-black":"bg-[rgb(32,38,66)] border-[rgb(60,68,110)] text-white"}`}/>
        </div>

        <div className="mt-[1.2vw] flex justify-between h-[4vw] w-full">
           <input type="text" placeholder="Email :" className={` ContactAnimation outline-none  h-[4vw] w-[32vw] pl-[1vw] border-[0.1vw] ml-[2vw] ${theme==="light"?"bg-white border-[rgb(198,198,198)] text-black":"bg-[rgb(32,38,66)] border-[rgb(60,68,110)] text-white"} `} />
           <input type="text" placeholder="Subject :" className={` ContactAnimation outline-none  h-[4vw] w-[32vw] pl-[1vw]  border-[0.1vw] mr-[2vw] ${theme==="light"?"bg-white border-[rgb(198,198,198)] text-black":"bg-[rgb(32,38,66)] border-[rgb(60,68,110)] text-white"} `}/>
        </div>

        <div><input type="text" placeholder="Message :" className={` ContactAnimation outline-none pb-[6vw] pl-[1vw] border-[0.1vw] mt-[1.2vw] h-[10vw] w-[66vw] ${theme==="light"?"bg-white border-[rgb(198,198,198)] text-black":"bg-[rgb(32,38,66)] border-[rgb(60,68,110)] text-white"} `}/></div>

        <div className={` cursor-pointer ContactAnimation  pt-[0.5vw] justify-self-center border-[0.1vw] rounded-[2vw] mt-[1.5vw] text-center h-[3vw] w-[15vw] font-sans font-[1.2vw] ${theme==="light"?"hover:border-blue-400 bg-white text-black border-[rgb(198,198,198)]":"hover:border-amber-200 text-gray-200 border-gray-200"} `}><p>Send Messege</p></div>

      </div>
    </>
  )
}
