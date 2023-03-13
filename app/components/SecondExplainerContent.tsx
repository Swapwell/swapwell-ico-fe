import React from "react"
import Image from "next/image"
const SecondExplainerContent = () => {
  return (
    <>
      <div className="CircleBG">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-[20rem] max-w-4xl mx-auto gap-[3rem]">
          <div className="Cardz mx-auto p-3 shadow-xl shadow-gray hover:scale-105">
            <Image src={"Heart.svg"} height={50} width={50} alt="heart" />
            <h4 className="mx-auto LandingH1 text-xl mx-auto text-center font-semibold py-1">
              Purpose not just Profit
            </h4>
            <p className="w-[80%] text-center mx-auto">
              The best investment are ones that also help make the world a
              better place.
            </p>
          </div>
          <div className="my-auto justify-center content-center w-fit mx-auto">
            <Image
              src={"/Cam2.png"}
              height={50}
              width={200}
              alt="heart"
              className="mx-auto"
            />
          </div>
          <div className="Cardz mx-auto p-3 shadow-xl shadow-gray hover:scale-105">
            <Image src={"Heart.svg"} height={50} width={50} alt="heart" />
            <h4 className="mx-auto LandingH1 text-xl mx-auto text-center font-semibold py-1">
              Purpose not just Profit
            </h4>
            <p className="w-[80%] text-center mx-auto">
              The best investment are ones that also help make the world a
              better place.
            </p>
          </div>
          <div className="Cardz mx-auto p-3 shadow-xl shadow-gray hover:scale-105">
            <Image src={"Heart.svg"} height={50} width={50} alt="heart" />
            <h4 className="mx-auto LandingH1 text-xl mx-auto text-center font-semibold py-1">
              Purpose not just Profit
            </h4>
            <p className="w-[80%] text-center mx-auto">
              The best investment are ones that also help make the world a
              better place.
            </p>
          </div>
          <div className="Cardz mx-auto p-3 shadow-xl shadow-gray hover:scale-105">
            <Image src={"Heart.svg"} height={50} width={50} alt="heart" />
            <h4 className="mx-auto LandingH1 text-xl mx-auto text-center font-semibold py-1">
              Purpose not just Profit
            </h4>
            <p className="w-[80%] text-center mx-auto">
              The best investment are ones that also help make the world a
              better place.
            </p>
          </div>
          <div className="Cardz mx-auto p-3 shadow-xl shadow-gray hover:scale-105">
            <Image src={"Heart.svg"} height={50} width={50} alt="heart" />
            <h4 className="mx-auto LandingH1 text-xl mx-auto text-center font-semibold py-1">
              Purpose not just Profit
            </h4>
            <p className="w-[80%] text-center mx-auto">
              The best investment are ones that also help make the world a
              better place.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondExplainerContent
