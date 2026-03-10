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
                      xs:h-[10rem] lg:h-[4.4rem] fixed flex justify-between xs:pt-[2.6rem] lg:pt-[1.2vw] pl-[5vw] pr-[5vw] text-[1.1vw] z-50`}>

        <div className="xs:text-[4rem] lg:text-[1.5vw] font-bold flex justify-between xs:gap-[3rem] lg:gap-[2vw]">
          <p>Mr. Deb</p>
          <div onClick={()=>window.open("/Resume.pdf","_blank")}className={`xs:text-[3rem] lg:text-[1.2vw] xs:pl-[5px] lg:pl-[0.2vw] xs:pt-[3px] lg:pt-[0.2vw]  rounded-[100%] xs:size-[5rem] lg:size-[2.3vw] cursor-pointer ${theme==="light"?"bg-amber-200 text-black ":"bg-sky-300 text-black "}`}><p>CV</p></div>
        </div>
        
        <div className={`flex gap-[2vw] ${theme === "light" ? "text-red-800" : "text-gray-200"} cursor-pointer`}>

        <div className="flex gap-[2vw]">

           <p
              onClick={() => scrollToSection("home")}
              className={`NavAnimation xs:hidden lg:block cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
           >
             Home
           </p>

            <p
              onClick={() => scrollToSection("about")}
              className={`NavAnimation xs:hidden lg:block cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
            >
            About
            </p>

            <p
              onClick={() => scrollToSection("skills")}
              className={`NavAnimation xs:hidden lg:block cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
            >
            Skills
            </p>

            <p
             onClick={() => scrollToSection("projects")}
             className={`NavAnimation  xs:hidden lg:block cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
            >
            Projects
            </p>

            <p
             onClick={() => scrollToSection("journey")}
             className={`NavAnimation  xs:hidden lg:block cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
            >
            Journey
            </p>

            <p
             onClick={() => scrollToSection("contact")}
             className={`NavAnimation  xs:hidden lg:block cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
             >
            Contact
            </p>

          </div>


          <button
            className="size-[2rem] xs:size-[4.5rem] lg:size-[1.5rem] text-center rounded-full"
            onClick={() => dispatch(switchTheme())}
          >
            {theme === "light" ? (
              <Moon className="NavAnimation size-full" />
            ) : (
              <Sun className="NavAnimation size-full" />
            )}
          </button>

        </div>
      </div>
    </>
  );
}
