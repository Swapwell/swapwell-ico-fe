import Image from "next/image"
import React from "react"

const Phone = () => {
  return (
    <>
      <div className="mockup-phone w-[80%] sm:w-full shadow-xl">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1"></div>
        </div>
      </div>
    </>
  )
}

export default Phone
