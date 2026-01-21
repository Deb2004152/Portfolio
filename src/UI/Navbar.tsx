import { Moon, Sun } from "lucide-react";
import type { RootState } from "../Store";
import { switchTheme } from "../Features/ThemeSlice";
import { useNavAnimate, scrollToSection } from "../Animations/NavAnimation";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {

  useNavAnimate();

  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className={`w-full ${theme === "light" ? "bg-white text-[rgb(18,18,47)]" : "bg-[rgb(3,7,18)] text-gray-200"} 
                      h-[4.25vw] fixed flex justify-between pt-[1.2vw] pl-[5vw] pr-[5vw] text-[1.1vw] z-50`}>

        <div className="text-[1.5vw] font-bold flex justify-between gap-[2vw]">
          <p>Mr. Deb</p>
          <div onClick={()=>window.open("Resume.pdf","_blank")}className={` text-[1.2vw] pl-[0.2vw] pt-[0.2vw]  rounded-[2vw] size-[2.3vw] cursor-pointer ${theme==="light"?"bg-amber-200 text-black ":"bg-sky-200 text-black "}`}><p>CV</p></div>
        </div>
        
        <div className={`flex gap-[2vw] ${theme === "light" ? "text-red-800" : "text-gray-200"} cursor-pointer`}>

        <div className="flex gap-[2vw]">

           <p
              onClick={() => scrollToSection("home")}
              className={`NavAnimation cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
           >
             Home
           </p>

            <p
              onClick={() => scrollToSection("about")}
              className={`NavAnimation cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
            >
            About
            </p>

            <p
              onClick={() => scrollToSection("skills")}
              className={`NavAnimation cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
            >
            Skills
            </p>

            <p
             onClick={() => scrollToSection("projects")}
             className={`NavAnimation cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
            >
            Projects
            </p>

            <p
             onClick={() => scrollToSection("journey")}
             className={`NavAnimation cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
            >
            Journey
            </p>

            <p
             onClick={() => scrollToSection("contact")}
             className={`NavAnimation cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
             >
            Contact
            </p>

          </div>


          <button
            className="size-[1.6vw] text-center rounded-[1vw]"
            onClick={() => dispatch(switchTheme())}
          >
            {theme === "light" ? (
              <Moon className="NavAnimation size-[1.6vw]" />
            ) : (
              <Sun className="NavAnimation size-[1.6vw]" />
            )}
          </button>

        </div>
      </div>
    </>
  );
}
