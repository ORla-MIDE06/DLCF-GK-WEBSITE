// import { useState } from 'react'
import React from 'react'

function App() {


  return (
    <div className="App" >

      {/* Background Wrapper */}
      <section className="bg-[url('/images/dlcf-bg.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-97">

        {/* Navbar */}
        <nav className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-4 gap-4 bg-transparent">

          {/* Logo */}
          <div className="flex items-center gap-2 w-full lg:w-auto justify-start lg:justify-start">
            <img src="/images/logo.svg" alt="Logo" className="h-10 w-10" />
            <span className="text-lg font-semibold text-[#262626]">DLCF GK</span>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 border border-[#C8C5D0] rounded-full px-4 py-2 text-sm text-[#262626] shadow-sm backdrop-blur-md">
            {["Home", "About", "Services", "Sermons", "Podcasts"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="px-3 py-1 hover:text-[#F0ECF4] transition hover:border-[.5px] rounded-full font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2 sm:gap-4 justify-center lg:justify-end">
            <button className="text-sm underline text-[#262626]">Sign in</button>
            <button className="flex items-center gap-2 bg-[#C8C5D0] text-black px-4 py-2 rounded-full shadow text-sm">
              Sign Up
              <span className="text-lg">→</span>
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="text-center text-white px-4 lg:px-0 mt-10 lg:mt-16 space-y-6">
          <h2 className="bg-[#EBD3E3] text-[#A3409B] px-4 py-1 rounded-full text-xs sm:text-sm inline-block font-medium">
            Raising a Generation of Righteous Leaders.
          </h2>
          <h1 className="text-sm sm:text-base lg:text-xl font-bold leading-snug">
            Home of <span className="text-[#E1E0FF]">Saintly Intellectuals!</span>
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto text-sm lg:text-base">
            Here God is our Father, Heaven is our goal, the Holy Spirit is our comforter, the Bible is our compass.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button className="bg-white text-[#5F469E] px-6 py-3 rounded-full shadow text-sm font-semibold flex items-center gap-2">
              Join Us <span className="text-lg">→</span>
            </button>
            <button className="bg-[#5F469E] text-white px-6 py-3 rounded-full shadow text-sm font-semibold flex items-center gap-2">
              Know Us <span className="text-lg">→</span>
            </button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mt-16 flex flex-col lg:flex-row justify-center gap-6 px-4 lg:px-0">
          {[
            { title: "Choir Ministration", desc: "Soulful songs/spirations to bring the glory of God upon his people", img: "/choir.jpg", rotate: "-10deg" },
            { title: "Pastor’s Message", desc: "Inspiring words right from the throne of grace", img: "/pastor.jpg", rotate: "0deg" },
            { title: "Prayers", desc: "Communion with the Father: A time of asking, receiving and worship in reverence", img: "/prayers.jpg", rotate: "10deg" },
          ].map(({ title, desc, img, rotate }, idx) => (
            <div key={idx} className="bg-black bg-opacity-60 rounded-2xl overflow-hidden shadow-lg w-full max-w-[250px] mx-auto">
              <img src={img} alt={title} className={`w-full h-[180px] object-cover`} style={{ transform: `rotate(${rotate}) translateY(-1.5rem)` }} />
              <div className="text-white p-4 text-left">
                <h3 className="font-semibold italic">{title}</h3>
                <p className="text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </section>
      </section>

      {/* Mission Statement */}
      <section className="bg-[#F4EFFA] py-16 px-4 md:px-12">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
            Here, success is our <br />
            <span className="text-[#5F469E] font-extrabold">birthright!</span>
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            We don’t talk anyhow over here, all we say are with obvious evidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto items-center">
          <div className="overflow-hidden rounded-2xl shadow-md h-[300px] sm:h-[400px]">
            <img src="/path-to-your-image.jpg" alt="Congregation" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white rounded-2xl shadow-md px-6 md:px-8 py-8 md:py-10 text-left space-y-4">
            <p className="uppercase text-sm text-[#5F469E] font-semibold">Our Mission</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-700">
              Holiness is our watch<br />
              <span className="text-[#5F469E]">word!</span>
            </h3>
            <p className="text-black text-sm md:text-base font-medium">
              We believe in Christ and his power to transform men into people they never thought they could ever be in life!
            </p>
          </div>
        </div>
      </section>





      {/* Features Section */}
      <section>
        <div>
          <div>
            <h3>Holiness is our watch <span>word!</span></h3>
            <p>We believe in Christ and His power to transform men</p>
          </div>
          <div>
            <div>
              <h4>  Home of purity</h4>
              <p>Never let Satan tell you otherwise.</p>
            </div>
            <div>
              <h4>🔥 Home of prayer</h4>
              <p>We pray all day long. Power flows here.</p>
            </div>
            <div>
              <h4> Home of truth</h4>
              <p>The spirit of truth is here all day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <h2>Your spiritual welfare is our concern…</h2>
        <button>Join us</button>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <div>
            <img src="/logo.svg" alt="Logo" />
            <span>Deeper Life Campus Fellowship GidanKwano</span>
          </div>
          <p>
            God is our Father, Jesus is our message, the Holy Spirit is our Comforter,
            the Bible is our Compass, Holiness is our Watchword, Success is our Birthright,
            and Heaven is the Goal
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
