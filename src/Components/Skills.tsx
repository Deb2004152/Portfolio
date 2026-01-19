import SkillCard from "../UI/SkillCard";
import { useSkillAnimate } from "../Animations/SkillsAnimation";

import { useSelector } from "react-redux";
import type { RootState } from "../Store";

import html from "../Images/HTML.png";
import css from "../Images/css-1.png";
import js from "../Images/js.png";
import react from "../Images/react-1.png";
import c from "../Images/c.png";
import cpp from "../Images/cpp.png";
import node from "../Images/nodejs.png";
import express from "../Images/expressjs.png";
import sql from "../Images/mysql.png";
import mongodb from "../Images/mongodb-1.png";
import redux from "../Images/rtk.png"
import py from "../Images/py.png"

import python from "../Images/python.png"
import Mongodb from "../Images/mongodb.png"
import mysql from "../Images/sql.png"
import expressjs from "../Images/express.png";
import nodejs from "../Images/node.png"
import reactjs from "../Images/react.png"
import javascript from "../Images/javascript.png"
import Clanguage from "../Images/Clanguage.png"
import Css from "../Images/Css.png"
import Html from "../Images/html-1.png"
import Redux from "../Images/redux.png"
import Cpp from "../Images/c++.png"


export default function Skills() {

  const theme = useSelector((state :RootState)=>state.theme.value);

  useSkillAnimate();
  return (
    <>
      <div className={` h-screen w-full pt-[6vw] ${theme==="light"?"bg-[rgb(247,245,243)]":"bg-[rgb(11,17,32)]"} `}>
         <p className={` SkillAnimation ml-[5vw] text-[2vw] font-sans font-extralight ${theme==="light"?"text-red-600":"text-sky-400"}`}>Technical skills</p>
         <h1 className={` SkillAnimation ml-[5vw] text-[3vw] font-extrabold mt-[1vw] ${theme==="light"?"text-black":"text-gray-200"} `}>Tools & technologies I work with</h1>
         <div className="flex justify-between mt-[2vw] ml-[5vw] mr-[5vw]">
         <SkillCard/>
         </div>
         <p className={` SkillAnimation ml-[5vw] mt-[1vw] text-[2vw] font-sans font-extralight ${theme==="light" ? "text-yellow-600" : "text-amber-200"} `}>Tech Arsenal</p>
         <div className="flex justify-items-start text-[rgb(125,125,125)] text-[1.1vw] gap-[1.2vw] mt-[1.5vw] ml-[5vw]">
           <div className={` SkillAnimation  cursor-pointer h-[2.5vw] w-[6vw] pt-[0.1vw]  border-[0.1vw]  rounded-[1vw] flex justify-between pl-[0.2vw] ${theme==="light"?"hover:border-blue-400 bg-[rgb(251,250,249)] border-gray-300 text-black":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} `}><div className="size-[1.8vw] bg-center bg-cover " style={{ backgroundImage: `url(${theme==="light" ? html:Html})` }}></div><p className="mt-[0.3vw] mr-[0.8vw]">Html</p></div>
           <div className={` SkillAnimation  cursor-pointer h-[2.5vw] w-[6vw] pt-[0.1vw]  border-[0.1vw]  rounded-[1vw] flex justify-between pl-[0.2vw] ${theme==="light"?"hover:border-blue-400 bg-[rgb(251,250,249)] border-gray-300 text-black":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} `}><div className="size-[1.8vw] bg-center bg-cover " style={{ backgroundImage: `url(${theme==="light" ? css:Css})` }}></div><p className="mt-[0.3vw] mr-[1.2vw]">CSS</p></div>
           <div className={` SkillAnimation  cursor-pointer h-[2.5vw] w-[5vw] pt-[0.2vw]  border-[0.1vw]  rounded-[1vw] flex justify-between pl-[0.2vw] ${theme==="light"?"hover:border-blue-400 bg-[rgb(251,250,249)] border-gray-300 text-black":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} `}><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${theme==="light" ? js:javascript})` }}></div><p className="mt-[0.2vw] mr-[1vw]">JS</p></div>
           <div className={` SkillAnimation  cursor-pointer h-[2.5vw] w-[7vw] pt-[0.2vw]  border-[0.1vw]  rounded-[1vw] flex justify-between pl-[0.2vw] ${theme==="light"?"hover:border-blue-400 bg-[rgb(251,250,249)] border-gray-300 text-black":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} `}><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${theme==="light" ? react:reactjs})` }}></div><p className="mt-[0.2vw] mr-[0.5vw]">React Js</p></div>
           <div className={` SkillAnimation  cursor-pointer h-[2.5vw] w-[7vw] pt-[0.2vw]  border-[0.1vw]  rounded-[1vw] flex justify-between pl-[0.2vw] ${theme==="light"?"hover:border-blue-400 bg-[rgb(251,250,249)] border-gray-300 text-black":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} `}><div className="size-[1.8vw] bg-center bg-cover " style={{ backgroundImage: `url(${theme==="light" ? redux:Redux})` }}></div><p className="mt-[0.2vw] mr-[0.8vw]">Redux</p></div>
           <div className={` SkillAnimation  cursor-pointer h-[2.5vw] w-[7vw] pt-[0.2vw]  border-[0.1vw]  rounded-[1vw] flex justify-between pl-[0.2vw] ${theme==="light"?"hover:border-blue-400 bg-[rgb(251,250,249)] border-gray-300 text-black":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} `}><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${theme==="light" ? node:nodejs})` }}></div><p className="mt-[0.2vw] mr-[0.4vw]">Node js</p></div>
           <div className={` SkillAnimation  cursor-pointer h-[2.5vw] w-[8vw] pt-[0.2vw]  border-[0.1vw]  rounded-[1vw] flex justify-between pl-[0.2vw] ${theme==="light"?"hover:border-blue-400 bg-[rgb(251,250,249)] border-gray-300 text-black":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} `}><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${theme==="light" ? express:expressjs})` }}></div><p className="mt-[0.2vw] mr-[0.4vw]">Express js</p></div>
           <div className={` SkillAnimation  cursor-pointer h-[2.5vw] w-[8vw] pt-[0.2vw]  border-[0.1vw]  rounded-[1vw] flex justify-between pl-[0.2vw] ${theme==="light"?"hover:border-blue-400 bg-[rgb(251,250,249)] border-gray-300 text-black":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} `}><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${theme==="light" ? mongodb:Mongodb})` }}></div><p className="mt-[0.2vw] mr-[0.7vw]">Mongodb</p></div>
           <div className={` SkillAnimation  cursor-pointer h-[2.5vw] w-[7vw] pt-[0.2vw]  border-[0.1vw]  rounded-[1vw] flex justify-between pl-[0.2vw] ${theme==="light"?"hover:border-blue-400 bg-[rgb(251,250,249)] border-gray-300 text-black":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} `}><div className="size-[2.1vw] bg-center bg-cover " style={{ backgroundImage: `url(${theme==="light" ? sql:mysql})` }}></div><p className="mt-[0.2vw] mr-[0.4vw]">MySQL</p></div>
           <div className={` SkillAnimation  cursor-pointer h-[2.5vw] w-[4vw] pt-[0.2vw]  border-[0.1vw]  rounded-[1vw] flex justify-between pl-[0.2vw] ${theme==="light"?"hover:border-blue-400 bg-[rgb(251,250,249)] border-gray-300 text-black":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} `}><div className="size-[1.8vw] bg-center bg-cover " style={{ backgroundImage: `url(${theme==="light" ? c:Clanguage})` }}></div><p className="mt-[0.2vw] mr-[0.8vw]">C</p></div>
           <div className={` SkillAnimation  cursor-pointer h-[2.5vw] w-[5vw] pt-[0.2vw]  border-[0.1vw]  rounded-[1vw] flex justify-between pl-[0.2vw] ${theme==="light"?"hover:border-blue-400 bg-[rgb(251,250,249)] border-gray-300 text-black":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} `}><div className="size-[1.8vw] bg-center bg-cover " style={{ backgroundImage: `url(${theme==="light" ? cpp:Cpp})` }}></div><p className="mt-[0.2vw] mr-[0.3vw]">C++</p></div>
           <div className={` SkillAnimation  cursor-pointer h-[2.5vw] w-[7vw] pt-[0.2vw]  border-[0.1vw]  rounded-[1vw] flex justify-between pl-[0.2vw] ${theme==="light"?"hover:border-blue-400 bg-[rgb(251,250,249)] border-gray-300 text-black":"bg-[rgb(24,33,56)] border-[rgb(42,52,75)] text-gray-300 hover:border-amber-200"} `}><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${theme==="light" ? py:python}) ` }}></div><p className="mt-[0.2vw] mr-[0.8vw]">Python</p></div>
         </div>
      </div>
    </>
  )
}

