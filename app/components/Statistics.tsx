import React from "react"

const Statistics = () => {
  return (
    <>
      <div className="mt-[2rem] max-w-4xl w-[80%] mx-auto sm:w-full">
        <div className="bg-white p-[0.5rem] rounded-xl shadow">
          <p className="text-info text-left LandingH1">$20.014 (26.7%)</p>
          <p className="text-info text-right LandingH1">SOFT CAP</p>
          <input
            type="range"
            min="0"
            max="100"
            value="40"
            className="range range-info range-xs"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 ">
          <div className="p-[2rem] bg-white rounded-xl mt-[1rem] shadow">
            <h4 className="text-xl font-semibold">
              Block<span className="block">chain</span>
            </h4>
            <p>Polygon</p>
          </div>
          <div className="p-[2rem] bg-white rounded-xl mt-[1rem] shadow">
            <h4 className="text-xl font-semibold">Token Price</h4>
            <p>$2.11</p>
          </div>
          <div className="p-[2rem] bg-white rounded-xl mt-[1rem] shadow">
            <h4 className="text-xl font-semibold">Start</h4>
            <p>01 April 2023 - 00:00 GMT</p>
          </div>
          <div className="p-[2rem] bg-white rounded-xl mt-[1rem] shadow">
            <h4 className="text-xl font-semibold">End</h4>
            <p>01 April 2023 - 00:00 GMT</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Statistics
