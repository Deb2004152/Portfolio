import type { RootState } from "../Store";
import { useNavAnimate, scrollToSection } from "../Animations/NavAnimation";
import { useSelector, useDispatch } from "react-redux";
import { LogOut, X } from "lucide-react";
import { closeSidebar } from "../Features/SidebarSlice";

export default function Sidebar() {

  useNavAnimate();

  const theme = useSelector((state: RootState) => state.theme.value);
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    dispatch(closeSidebar());
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => dispatch(closeSidebar())}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 h-full w-[65vw] shadow-2xl transition-transform duration-300 ease-in-out transform lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}
                       ${theme === "light" ? "bg-white text-red-800" : "bg-[rgb(28,35,58)] text-gray-200"} 
                       flex flex-col gap-[6vw] px-[8vw] pt-[15vw] text-[5vw] font-bold`}>

           <div className="flex justify-end w-full mb-[2vw]">
             <X className="size-[8vw] cursor-pointer" onClick={() => dispatch(closeSidebar())} />
           </div>

           <p
              onClick={() => handleNavClick("home")}
              className={`cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
           >
             Home
           </p>

            <p
              onClick={() => handleNavClick("about")}
              className={`cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
            >
            About
            </p>

            <p
              onClick={() => handleNavClick("skills")}
              className={`cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
            >
            Skills
            </p>

            <p
             onClick={() => handleNavClick("projects")}
             className={`cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
            >
            Projects
            </p>

            <p
             onClick={() => handleNavClick("journey")}
             className={`cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
            >
            Journey
            </p>

            <p
             onClick={() => handleNavClick("contact")}
             className={`cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}
             >
            Contact
            </p>

            <div className="mt-auto pb-[10vw]">
               <LogOut className={`size-[6vw] cursor-pointer ${theme === "light" ? "hover:text-[rgb(37,99,235)]" : "hover:text-amber-200"}`}/>
            </div>
      </div>
    </>
  );
}
