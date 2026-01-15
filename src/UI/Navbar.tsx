
import { Sun } from "lucide-react"
export default function Navbar() {
  return (
  
    <>
      <div className="w-full bg-white text-[rgb(18,18,47)] h-[5vw] 
                     fixed  flex justify-between pt-[1.6vw] pl-[5vw] pr-[5vw]
                     text-[1.1vw] z-1
                     "
                     >

         <div className="text-[1.5vw] font-bold"><p>Mr. Deb</p></div>

         <div className="flex gap-[2vw] text-red-800 ">
           <div>
            <p>Home</p>
           </div>
           <div>
            <p>About</p>
           </div>

           <div>
            <p>Skills</p>
           </div>

           <div>
            <p>Projects</p>
           </div>

           <div>
            <p>Journey</p>
           </div>

           <div>
            <p>Contact</p>
           </div>

           <button className="size-[1.6vw] text-center rounded-[1vw]">
            <Sun className="size-[1.6vw]"/>
           </button>


         </div>

      </div>
    </>
  )
}
