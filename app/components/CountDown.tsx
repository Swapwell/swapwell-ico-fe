import React from "react"

const CountDown = () => {
  return (
    <>
      <div className="">
        <div className="bg-white rounded-xl">
          <p className="bg-gradient-to-r from-[#58E780] to-[#108B05] text-transparent bg-clip-text sm:LandingH1 font-black tracking-wide p-1 px-[9px] shadow">
            02
          </p>
        </div>
        <p className=" text-[#5A5A5A] text-xl sm:LandingH1 font-black mt-[1rem] ">
          DAYS
        </p>
      </div>
      :
      <div className="">
        <div className="bg-white rounded-xl">
          <p className="bg-gradient-to-r from-[#58E780] to-[#108B05] text-transparent bg-clip-text sm:LandingH1 font-black tracking-wide p-1 px-[9px] shadow">
            22
          </p>
        </div>
        <p className=" text-[#5A5A5A] text-xl sm:LandingH1 font-black mt-[1rem] ">
          HOURS
        </p>
      </div>
      :
      <div className="">
        <div className="bg-white rounded-xl">
          <p className="bg-gradient-to-r from-[#58E780] to-[#108B05] text-transparent bg-clip-text sm:LandingH1 font-black tracking-wide p-1 px-[9px] shadow">
            12
          </p>
        </div>
        <p className=" text-[#5A5A5A] text-xl sm:LandingH1 font-black mt-[1rem] ">
          MINS
        </p>
      </div>
      :
      <div className="">
        <div className="bg-white rounded-xl">
          <p className="bg-gradient-to-r from-[#58E780] to-[#108B05] text-transparent bg-clip-text sm:LandingH1 font-black tracking-wide p-1 px-[9px] shadow">
            31
          </p>
        </div>
        <p className=" text-[#5A5A5A] text-xl sm:LandingH1 font-black mt-[1rem] ">
          SEC
        </p>
      </div>
    </>
  )
}

export default CountDown
