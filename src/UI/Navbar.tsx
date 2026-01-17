import { Sun } from "lucide-react"

import { useNavAnimate} from "../Animations/NavAnimation"


export default function Navbar() {
  useNavAnimate();
  const NavElements=["Home","About","skills","Projects","Journey","contact "]

  return (
    <>
      <div className="w-full bg-white text-[rgb(18,18,47)] h-[5vw] 
                     fixed  flex justify-between pt-[1.6vw] pl-[5vw] pr-[5vw]
                     text-[1.1vw] z-50
                     "
                     >

         <div className="text-[1.5vw] font-bold"><p>Mr. Deb</p></div>

         <div className="flex gap-[2vw] text-red-800 ">

           <div className="flex gap-[2vw]">
            {
             NavElements.map( (NavElements,i)=> (
              <p className="NavAnimation" key={i}>{NavElements}</p>
             ))
            }
           </div>

           <button className="size-[1.6vw] text-center rounded-[1vw]">
            <Sun className="NavAnimation size-[1.6vw]"/>
           </button>


         </div>

      </div>
    </>
  )
}
