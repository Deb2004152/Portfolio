import { useContactAnimate } from "../Animations/ContactAnimation"

export default function ContactCard() {
 useContactAnimate()
  return (
    <>
      <div className=" mt-[2vw] h-[30vw] w-[70vw]  justify-self-center">
        <h1 className=" ContactAnimation justify-self-center text-[2vw] font-sans font-extralight">contact Me</h1>

        <div className="mt-[1.2vw] flex  justify-between h-[4vw] w-full ">
           <input type="text" placeholder="Your Name :" className="ContactAnimation outline-none border-[rgb(198,198,198)] h-[4vw] w-[32vw] pl-[1vw]  border-[0.1vw]  ml-[2vw] bg-white" />
           <input type="text" placeholder="Telephone :"className="ContactAnimation outline-none border-[rgb(198,198,198)] h-[4vw] w-[32vw]  pl-[1vw]  border-[0.1vw]  mr-[2vw] bg-white"/>
        </div>

        <div className="mt-[1.2vw] flex justify-between h-[4vw] w-full">
           <input type="text" placeholder="Email :" className="ContactAnimation outline-none border-[rgb(198,198,198)] h-[4vw] w-[32vw] pl-[1vw] border-[0.1vw] ml-[2vw] bg-white" />
           <input type="text" placeholder="Subject :" className="ContactAnimation outline-none border-[rgb(198,198,198)] h-[4vw] w-[32vw] pl-[1vw]  border-[0.1vw] mr-[2vw] bg-white"/>
        </div>

        <div><input type="text" placeholder="Message :" className="ContactAnimation outline-none border-[rgb(198,198,198)]  pb-[6vw] pl-[1vw] border-[0.1vw] mt-[1.2vw] h-[10vw] w-[66vw] bg-white"/></div>

        <div className="hover:border-blue-400 hover:bg-amber-50 cursor-pointer ContactAnimation bg-white border-[rgb(198,198,198)] pt-[0.5vw] justify-self-center border-[0.1vw] rounded-[2vw] mt-[1.5vw] text-center h-[3vw] w-[15vw] font-sans font-[1.2vw]"><p>Send Messege</p></div>

      </div>
    </>
  )
}
