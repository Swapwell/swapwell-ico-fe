import Image from "next/image"
import React from "react"

const LandingBanner = () => {
  return (
    <>
      <div className="mt-[3rem] pt-[8rem] LandingBG pb-[1rem]">
        <div className="max-w-7xl mx-auto text-left text-center  ">
          <Image
            src={"/Cam2.png"}
            height={50}
            width={200}
            alt="coin"
            className="mx-auto h-fit w-fit"
          />
          <h1 className="text-5xl md:text-7xl lg:text-9xl  font-black text-transparent bg-clip-text bg-gradient-to-r from-[#108B05] to-[#218518] LandingH1 pb-4">
            The Swipe <span className="block LandingH1">Of A Finger</span>
          </h1>
          <h2 className="text-center text-md md:text-xl xl:text-2xl mt-[1rem] font-semibold px-[1rem]">
            BeInSwipe's app creates an effortless trading experience, just for
            you.
          </h2>
        </div>
        <div className="pt-5 space-x-2 mx-auto text-center relative my-[3rem]">
          <button className="font-semibold p-[20px] text-xl rounded-xl text-white rounded-xl bg-gradient-to-r from-[#59FFD7] to-[#157B74] h-[1rem] hover:scale-105 translate animation ease-in-out">
            <div className="my-[-15px]">BUY COIN</div>
          </button>
          <button className="font-semibold  p-[20px] text-xl rounded-xl bg-gradient-to-r from-[#FFFFFF] to-[#BFDBC1] border-[3px] h-[1rem] border-[#64AA59] hover:scale-105 translate animation ease-in-out">
            <div className="my-[-15px] text-[#64AA59]">HOW TO BUY</div>
          </button>
        </div>
      </div>
    </>
  )
}

export default LandingBanner
