import { useHomeAnimate,useScrollAnimate } from "./Animations/HomeAnimation"


export default function App() {
  useHomeAnimate();
  useScrollAnimate();
  const TechName = ["Frontend Developer","|","React","Animations","|","Animations","|","UI Engineering"]

  return (
    <>
      <div id="Home" className='h-screen w-full bg-[rgb(247,245,243)] '>
          <div className="w-[89vw] h-[41vw] ml-[5vw]">

             <p  className="HomeAnimation inline-block text-blue-500 pt-[10vw] pb-[2vw] text-[1.3vw]">DEB SARKAR</p>

             <h1 className="HomeAnimation text-[5vw] font-extrabold">I build thoughtful,</h1>

             <h2 className="HomeAnimation text-[5vw] font-extrabold">interactive web experiences.</h2>

             <div className="flex gap-[1vw] font-light text-[1.5vw] mt-[1vw]">
               {  TechName.map( (TechName,i)=>(
                <p className="HomeAnimation" key={i}>{TechName}</p>
               ))
                }
             </div>

              <div className="flex gap-[2vw] pt-[2vw] text-center">
                <div className="HomeAnimation h-[4vw] w-[10vw] pt-[1vw] rounded-[2vw] text-[1.2vw] text-white bg-[rgb(78,142,245)]">
                    <p>View Projects</p>
                </div>

                <div className="HomeAnimation h-[4vw] w-[10vw] pt-[1vw] rounded-[2vw] text-[1.2vw] border-[0.1vw] border-black">
                     <p>Get in Touch</p>
                </div>
              </div>
          </div>



          <div className="ScrollAnimation text-center text-[1vw]">
            <p>SCROLL</p>
            <p>⌵</p>
          </div>
      </div>
    </>
  )
}

