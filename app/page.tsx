import React from "react"
import FirstExplainer from "./components/pages/FirstExplainer"
import LandingPage from "./components/pages/LandingPage"
import SecondExplainer from "./components/pages/SecondExplainer"

const Page = () => {
  return (
    <>
      <section>
        <LandingPage />
      </section>
      <section className="bg-[#F1F1F1]">
        <FirstExplainer />
      </section>
      <section className="bg-[#F1F1F1]">
        <SecondExplainer />
      </section>
    </>
  )
}

export default Page
