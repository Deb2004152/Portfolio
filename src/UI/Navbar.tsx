import { Moon, Sun } from "lucide-react"
import type { RootState } from "../Store";
import { switchTheme } from "../Features/ThemeSlice";
import { useNavAnimate} from "../Animations/NavAnimation"
import { useDispatch, useSelector } from "react-redux";


export default function Navbar() {
  useNavAnimate();
  const NavElements=["Home","About","Skills","Projects","Journey","Contact "]
  

  const theme = useSelector((state :RootState)=>state.theme.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className={`w-full ${theme ==="light"? "bg-white text-[rgb(18,18,47)] ":"bg-[rgb(3,7,18)] text-gray-200 "} h-[5vw] 
                     fixed  flex justify-between pt-[1.6vw] pl-[5vw] pr-[5vw]
                     text-[1.1vw] z-50
                     `}
                     >

         <div className="text-[1.5vw] font-bold"><p>Mr. Deb</p></div>

         <div className={`flex gap-[2vw] ${theme ==="light"?"text-red-800":"text-gray-200"} cursor-pointer  `}>

           <div className="flex gap-[2vw]">
            {
             NavElements.map( (NavElements,i)=> (
              <p  className={`NavAnimation ${ theme ==="light"?"hover:text-[rgb(37,99,235)] ":"hover:text-amber-200 "}hover:text-[rgb(37,99,235)] `} key={i}>{NavElements}</p>
             ))
            }
           </div>

           <button className="size-[1.6vw] text-center rounded-[1vw]" onClick={()=>dispatch(switchTheme())}>
            {
              theme ==="light"?(
                 <Moon className="NavAnimation size-[1.6vw]"/>
              ) : (
                 <Sun className="relative bg-invisible NavAnimation size-[1.6vw]"/>
                 
              )
            }
            
           </button>


         </div>

      </div>
    </>
  )
}
