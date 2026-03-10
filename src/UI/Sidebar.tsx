
import type { RootState } from "../Store";
import { useNavAnimate, scrollToSection } from "../Animations/NavAnimation";
import { useSelector } from "react-redux";
import { LogOut } from "lucide-react";
export default function Sidebar() {

  useNavAnimate();

  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <>
      <div className={`cursor-pointer h-full w-[12vw] ${theme === "light" ? "bg-white text-red-800" : "bg-[rgb(28,35,58)] text-gray-200"} 
                       invisible flex flex-col gap-[1.5vw] px-[1vw] pt-[2vw] justify-self-end fixed  text-[1.1vw] z-50`}>

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

            <div>
            <LogOut className={`mt-[23vw] NavAnimation cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}/>
            </div>
      </div>
    </>
  );
}
