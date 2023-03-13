import React from "react"
import CountDown from "./CountDown"
import Phone from "./Phone"
import Statistics from "./Statistics"

const FirstExplainerContent = () => {
  return (
    <>
      <div className="grid grid-cols-5 text-center pt-[2rem] max-w-4xl mx-auto">
        <p>Show</p>
        <p>Me</p>
        <p>The</p>
        <p>Next</p>
        <p>Future</p>
      </div>
      <div className="text-center md:grid grid-cols-2 mx-auto w-fit my-[7rem] ">
        <div className="w-fit mx-auto text-center content-center hidden sm:inline-block">
          <Phone />
        </div>
        <div className="w-fit mx-auto text-center content-center my-auto max-w-2xl md:pr-[1rem]">
          <div className="text-3xl grid grid-cols-7 bg-gradient-to-r from-[#58E780] space-x- to-[#108B05] text-transparent bg-clip-text lg:text-3xl xl:text-5xl mt-[2rem] md:mt-0 w-[80%] mx-auto sm:w-full">
            <CountDown />
          </div>
          <Statistics />
        </div>
      </div>
      <div className="text-center mt-[5rem] w-[80%] lg:w-[60%] mx-auto p-[2rem] border my-auto border-[14px] b-[#D9D9D9] font-semibold border-l-[#218518] border-r-[#218518] max-w-5xl">
        <p className="text-md md:text-2xl xl:text-4xl">
          BeInSwipe is the UAE's premier and reliable crypto platform. We
          provide a secure and seamless trading experience for all your
          cryptocurrency needs.
        </p>
      </div>
    </>
  )
}

export default FirstExplainerContent
