import SkillCard from "../UI/SkillCard";
import { useSkillAnimate } from "../Animations/SkillsAnimation";

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

export default function Skills() {
  useSkillAnimate();
  return (
    <>
      <div className='h-screen w-full bg-[rgb(247,245,243)] pt-[6vw]'>
         <p className="SkillAnimation ml-[5vw] text-[2vw] text-red-600 font-sans font-extralight">Technical skills</p>
         <h1 className="SkillAnimation ml-[5vw] text-[3vw] font-extrabold mt-[1vw]">Tools & technologies I work with</h1>
         <div className="flex justify-between mt-[2vw] ml-[5vw] mr-[5vw]">
         <SkillCard/>
         </div>
         <p className="SkillAnimation ml-[5vw] mt-[1vw] text-[2vw] text-yellow-600 font-sans font-extralight">Tech Arsenal</p>
         <div className="flex justify-items-start text-[rgb(125,125,125)] text-[1.1vw] gap-[1.2vw] mt-[1.5vw] ml-[5vw]">
           <div className="SkillAnimation h-[2.5vw] w-[6vw] pt-[0.2vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw]  flex justify-between pl-[0.2vw]"><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${html})` }}></div><p className="mt-[0.2vw] mr-[0.8vw]">Html</p></div>
           <div className="SkillAnimation h-[2.5vw] w-[6vw] pt-[0.2vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw]  flex justify-between pl-[0.2vw]"><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${css})` }}></div><p className="mt-[0.2vw] mr-[1.2vw]">CSS</p></div>
           <div className="SkillAnimation h-[2.5vw] w-[5vw] pt-[0.2vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw]  flex justify-between pl-[0.2vw]"><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${js})` }}></div><p className="mt-[0.2vw] mr-[1vw]">JS</p></div>
           <div className="SkillAnimation h-[2.5vw] w-[7vw] pt-[0.2vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw]  flex justify-between pl-[0.2vw]"><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${react})` }}></div><p className="mt-[0.2vw] mr-[0.5vw]">React Js</p></div>
           <div className="SkillAnimation h-[2.5vw] w-[7vw] pt-[0.2vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw]  flex justify-between pl-[0.2vw]"><div className="size-[1.8vw] bg-center bg-cover " style={{ backgroundImage: `url(${redux})` }}></div><p className="mt-[0.2vw] mr-[0.8vw]">Redux</p></div>
           <div className="SkillAnimation h-[2.5vw] w-[7vw] pt-[0.2vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw]  flex justify-between pl-[0.2vw]"><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${node})` }}></div><p className="mt-[0.2vw] mr-[0.4vw]">Node js</p></div>
           <div className="SkillAnimation h-[2.5vw] w-[8vw] pt-[0.2vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw]  flex justify-between pl-[0.2vw]"><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${express})` }}></div><p className="mt-[0.2vw] mr-[0.4vw]">Express js</p></div>
           <div className="SkillAnimation h-[2.5vw] w-[8vw] pt-[0.2vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw]  flex justify-between pl-[0.2vw]"><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${mongodb})` }}></div><p className="mt-[0.2vw] mr-[0.7vw]">Mongodb</p></div>
           <div className="SkillAnimation h-[2.5vw] w-[7vw] pt-[0.2vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw]  flex justify-between pl-[0.2vw]"><div className="size-[2.1vw] bg-center bg-cover " style={{ backgroundImage: `url(${sql})` }}></div><p className="mt-[0.2vw] mr-[0.4vw]">MySQL</p></div>
           <div className="SkillAnimation h-[2.5vw] w-[4vw] pt-[0.2vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw]  flex justify-between pl-[0.2vw]"><div className="size-[1.8vw] bg-center bg-cover " style={{ backgroundImage: `url(${c})` }}></div><p className="mt-[0.2vw] mr-[0.8vw]">C</p></div>
           <div className="SkillAnimation h-[2.5vw] w-[5vw] pt-[0.2vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw]  flex justify-between pl-[0.2vw]"><div className="size-[1.8vw] bg-center bg-cover " style={{ backgroundImage: `url(${cpp})` }}></div><p className="mt-[0.2vw] mr-[0.3vw]">C++</p></div>
           <div className="SkillAnimation h-[2.5vw] w-[7vw] pt-[0.2vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 rounded-[1vw]  flex justify-between pl-[0.2vw]"><div className="size-[2vw] bg-center bg-cover " style={{ backgroundImage: `url(${py})` }}></div><p className="mt-[0.2vw] mr-[0.8vw]">Python</p></div>
         </div>
      </div>
    </>
  )
}

