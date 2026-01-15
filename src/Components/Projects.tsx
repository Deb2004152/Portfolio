import netflix from "../Images/netflix.png"
import game from "../Images/game.png"
import  weather from "../Images/weather.png"
import comment from "../Images/comment.png"

export default function Projects() {
  return (
    <>
      <div className=" h-[80vw] w-full bg-[rgb(242,240,237)]">
         <h1 className="pt-[4.7vw] font-sans text-[2vw] font-light ml-[14.5vw] text-blue-800 ">My Projects</h1>
         <p className=" font-extrabold text-[rgb(33,33,33)] text-[2.5vw] ml-[14.5vw] mt-[1vw] mb-[1vw]">Projects that showcase my Work</p>

         <div className="pt-[0.6vw] items-center flex flex-col gap-[2.5vw] ">


            <div className="pt-[1.5vw] pr-[1vw] pl-[1vw] flex justify-between h-[14vw] w-[70vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 ">
              <div className="flex flex-col gap-[1vw] h-[11vw] w-[40vw]  ">
                <h1 className=" font-bold text-[2vw]">Netflix Clone</h1>
                <p className="text-[rgb(111,111,111)] text-[1.1vw]">Full-featured Netflix clone showcasing dynamic content loading responsive layouts smooth navigation and modern user interface components</p>
                <div className="w-full h-[4vw]  flex gap-[1vw] text-[1.2vw] ">
                  <div className="h-[2.2vw] w-[6vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">React</div>
                  <div className="h-[2.2vw] w-[8vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">Tailwind</div>
                  <div className="h-[2.2vw] w-[4vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">js</div>
                </div>
              </div>
              <div className=" h-[11vw] w-[20vw]  rounded-[1vw] bg-cover bg-center" style={{ backgroundImage: `url(${netflix})` }}></div>
            </div>

            <div className="pt-[1.5vw] pr-[1vw] pl-[1vw] flex justify-between h-[14vw] w-[70vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 ">
              <div className="flex flex-col gap-[1vw]  h-[11vw] w-[40vw] ">
                <h1 className=" font-bold text-[2vw]">Weather Application</h1>
                <p className="text-[rgb(111,111,111)] text-[1.1vw]">Real-time weather data visualization with location-based forecasts and clean intuitive user interface.</p>
                <div className="w-full h-[4vw]  flex gap-[1vw] text-[1.2vw] ">
                  <div className="h-[2.2vw] w-[6vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">React</div>
                  <div className="h-[2.2vw] w-[8vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">Tailwind</div>
                  <div className="h-[2.2vw] w-[8vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">Fetch API</div>
                </div>
              </div>
              <div className=" h-[11vw] w-[20vw]  rounded-[1vw] bg-cover bg-center" style={{ backgroundImage: `url(${weather})` }}></div>
            </div>

           
           


            <div className="pt-[1.5vw] pr-[1vw] pl-[1vw] flex justify-between h-[14vw] w-[70vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 ">
              <div className="flex flex-col gap-[1vw]  h-[11vw] w-[40vw]  ">
                <h1 className=" font-bold text-[2vw]">Interactive Games</h1>
                <p className="text-[rgb(111,111,111)] text-[1.1vw]">Collection of classic interactive games including Tic Tac Toe and Calculator with smooth animations.</p>
                <div className="w-full h-[4vw]  flex gap-[1vw] text-[1.2vw] ">
                  <div className="h-[2.2vw] w-[6vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">HTML</div>
                  <div className="h-[2.2vw] w-[4vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">CSS</div>
                  <div className="h-[2.2vw] w-[4vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">js</div>
                </div>                
              </div>
              <div className=" h-[11vw] w-[20vw]  rounded-[1vw] bg-cover bg-center" style={{ backgroundImage: `url(${game})` }}></div>
            </div>

            <div className="pt-[1.5vw] pr-[1vw] pl-[1vw] flex justify-between h-[14vw] w-[70vw] bg-[rgb(251,250,249)] border-[0.1vw] border-gray-300 ">
              <div className="flex flex-col gap-[1.2vw]  h-[11vw] w-[40vw] ">
                <h1 className="t font-bold text-[2vw]">Blog Application</h1>
                <p className="text-[rgb(111,111,111)] text-[1.1vw]">A modern blog application enabling users to create edit publish and manage posts securely with authentication responsive design and comments</p>
                <div className="w-full h-[4vw]  flex gap-[1vw] text-[1.2vw] ">
                  <div className="h-[2.2vw] w-[6vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">React</div>
                  <div className="h-[2.2vw] w-[8vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">Tailwind</div>
                  <div className="h-[2.2vw] w-[8vw] bg-[rgb(235,230,224)] text-center rounded-[2vw] font-bold">Fetch API</div>                  
                </div>                 
              </div>
              <div className=" h-[11vw] w-[20vw]  rounded-[1vw] bg-cover bg-center" style={{ backgroundImage: `url(${comment})` }}></div>
            </div>

         </div>

      </div>
    </>
  )
}
