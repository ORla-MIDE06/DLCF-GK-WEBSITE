import { useEffect, useState } from 'react'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMicrophoneAlt, FaInfoCircle } from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { TbBuildingChurch } from "react-icons/tb";
import { PiHandsPrayingBold } from "react-icons/pi";
import { BiSolidBible } from "react-icons/bi";


function App() {
  const navItems = [
    { label: "Home", icon: <TbBuildingChurch /> },
    { label: "About", icon: <FaInfoCircle /> },
    { label: "Services", icon: <PiHandsPrayingBold /> },
    { label: "Sermons", icon: <BiSolidBible /> },
    { label: "Podcasts", icon: <FaMicrophoneAlt /> },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);


  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);


  return (
    <div className="App" style={{ overflowX: 'hidden' }}>

      {/* Background Wrapper */}
      <section className="bg-[url('/images/dlcf-bg.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-99  w-full h-[800px] lg:w-full lg:h-[820px]  md:h-[706px] ">
        <div className="cov bg-black/50 min-h-screen flex flex-col justify-between ">

          <nav className="flex  md:flex-col lg:flex-row justify-between items-center px-2 md:px-3 lg:px-8 py-4 gap-4 bg-transparent">

            {/* Logo */}
            <div className=" items-center gap-2 w-full md:w-auto justify-start  hidden  lg:flex">
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
              <span className="text-lg md:text-base lg:text-lg font-semibold text-white">
                DLCF GK
              </span>
            </div>


            {/* Mobile Menu */}
            <button
              className=" flex lg:hidden text-white text-2xl  justify-srart items-center p-2 rounded-full bg-[#404178] hover:bg-[#575992] transition duration-300  {`
              absolute  top-4 left-2 z-50 text-white text-2xl p-2 rounded-full transition duration-300
              ${isMenuOpen ? 'text-[#404178]' : 'bg-[#404178] hover:bg-[#575992]'}
              `}"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>

            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-black/30 z-30 opacity-100 transition-opacity duration-300"
                onClick={() => setIsMenuOpen(false)}
              />
            )}

            <div
              className={`
              fixed top-0 left-0 h-[706px] w-[250px] bg-white shadow-lg z-40 transform
              transition-transform duration-300 ease-in-out
              ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
              `}
            >
              <ul className="relative top-[80px] flex flex-col justify-start items-center h-full gap-4 px-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      onClick={() => {
                        setActiveIndex(index);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 text-lg font-medium 
                      border transition duration-300 p-2 rounded-[5px] w-[120px]
                         ${activeIndex === index
                          ? 'bg-[#404178] text-white'
                          : 'text-[#404178] hover:text-[#575992] border-transparent hover:border-[#404178] hover:shadow-md'}
                      `}
                    >
                      <span className="text-xl lg:hidden">{item.icon}</span>
                      {item.label}
                    </a>
                  </li>
                ))}

              </ul>
            </div>


            {/*Desktop Nav Links */}
            <ul className=" hidden lg:flex  flex-wrap justify-center items-center gap-2  md:gap-3 lg:gap-4 border border-[#C8C5D0] rounded-full px-2 py-1 md:px-3 md:py-2 text-sm text-white shadow-sm backdrop-blur-md">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className=" px-3 py-1 hover:text-[#F0ECF4] transition rounded-full font-sm text-xs md:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Auth Buttons */}
            <div className="flex lg:items-center self-end gap-2  md:gap-3 lg:gap-4 justify-end w-full md:w-auto">
              <button className="text-xs md:text-sm underline text-white">Sign in</button>

              <button className="text-xs md:text-sm text-[#404178] w-[115px] md:w-[130px] lg:w-[135px] h-[36px] md:h-[38px] lg:h-[40px] flex items-center justify-around gap-2 p-2 rounded-full border border-[#C8C5D0] bg-[#F0ECF4] shadow-[inset_0px_-5px_11.4px_#737370]">
                Sign Up
                <FaArrowRight className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 p-1.5 rounded-[18px] bg-[#F0ECF4] shadow-[0px_3px_6.4px_-2px_#00000040]" />
              </button>
            </div>

          </nav>





          {/* Hero */}
          <section className="text-center justify-center text-white px-4 lg:px-0 mt-10 lg:mt-16 space-y-6">
            <h2 className="bg-[#EBD3E3] text-[#A3409B] px-4 py-1 rounded-full text-xs sm:text-sm inline-block font-medium">
              Raising a Generation of Righteous Leaders.
            </h2>
            <h1 className="  lg:flex-row  items-center  text-[30px] lg:text-[48px] font-outfit font-semibold  leading-snug ">
              Home of Saintly <span className="text-[#E1E0FF]"> Intellectuals!
                <img src="/images/icon9.svg" className=" relative lg:left-[685px] lg:top-[-10px] left-[90px] md:left-[380px] " />
              </span>
            </h1>
            <p className="text-[#FFFFFF] max-w-xl mx-auto text-[16px] lg:text-base">
              Here God is our Father, Heaven is our goal, the Holy Spirit is our comforter, the Bible is our compass.
            </p>
            <div className="flex  sm:flex-row justify-center ml-[30px] items-center gap-4 pt-4">
              <button className="bg-[#F0ECF4] text-[#404178] p-[10px] w-[135px] h-[40] rounded-[50px] border-[1px] border-[#C8C5D0] shadow-[inset_0px_-5px_11.4px_0px_#737373,_0px_2px_5.8px_0px_#00000040] text-sm font-semibold flex justify-around items-center gap-[10px]">
                Join Us
                <FaArrowRight className="w-[32px] h-[31px] p-[8px] rounded-[18px] bg-[#F0ECF4] shadow-[0px_3px_6.4px_-2px_#00000040]" />
              </button>
              <button className="bg-[#575992] text-white p-[10px]  w-[135px] h-[40]  rounded-[50px] border-[1px] border-[#C8C5D0] shadow-[inset_0px_-5px_11.4px_0px_#323353,_0px_2px_5.8px_0px_#00000040] text-sm font-semibold flex justify-around items-center  gap-[10px]">
                Know Us
                <FaArrowRight className="w-[32px] h-[31px] p-[8px] rounded-[18px] bg-[#575992] shadow-[0px_3px_6.4px_-2px_#00000040]" />
              </button>
            </div>
          </section>

          {/* Cards Section */}
          <section className="flex justify-center w-full lg:h-[898px] md:h-[860px]">
            <div class="mt-16 mb-[40px] lg:flex-row justify-center items-start gap-6 px-4 lg:px-0">
              <div className="relative  flex space-x-4.5 w-[30.68px]  h-[20.26px]  lg:top-[-20px] md:top-[-19px] top-[90px] lg:right-[145px] md:right-[150px] right-[200px] z-20">
                <img src="/images/icon3.svg" className="relative  top-[4px] left-[148px]  rotate-[97.24deg] " />
                <img src="/images/icon2.svg" className=" relative  top-[-26px] left-[125px] rotate-[3.24deg] " />
                <img src="/images/icon1.svg" className=" relative h-[12px] top-[-28px]  left-[110.68px] rotate-[83.24deg]" />
              </div>



              <div className='relative xl:flex lg:flex md:flex '>
                <div class="relative  lg:w-[174px] md:w-[150px] w-[105px]  lg:h-[244px] md:h-[190px] h-[148.25px] rounded-[10px] border-[1px] border-[#F0ECF4]  md:top-[-18px]  top-[80px] lg:left-[4px] md:left-[5px] right-[48px] overflow-hidden transform lg:rotate-[14.24deg] md:rotate-[14.24deg] rotate-[14.24deg] z-10 mx-auto">

                  <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,transparent_0%,rgba(0,0,0,0.9)_100%)]"></div>


                  <img src="/images/choir.jpg" alt="Choir Ministration" class="absolute inset-0 w-full h-full object-cover  mix-blend-overlay  " />

                  <div className="absolute leading-relaxed  bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className=" font-caveat text-[21px]  drop-shadow-md">Choir ministration</h3>
                    <p class="text-[10px] drop-shadow-sm leading-none tracking-wide">Soulfull singspirations to bring the glory of God upon his people!</p>
                  </div>
                </div>


                <div class="relative  lg:w-[174px] md:w-[150px] w-[105px]  lg:h-[244px] md:h-[190px] h-[148.25px] border-[1px] rounded-[10px] border-[#F0ECF4] overflow-hidden shadow-lg transform lg:rotate-[0deg] md:rotate-[0deg] rotate-[-14.24deg] 
               md:top-[-2px] top-[-130px] lg:left-[18px] md:left-[15px] left-[60px] z-0 mx-auto">


                  <div class="absolute inset-0 z-0 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,transparent_0%,rgba(0,0,0,1)_100%)]"></div>

                  <img src="/images/pastor.jpg" alt="Pastor’s Message" class=" inset-0 w-full h-full object-cover mix-blend-overlay" />

                  <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 class="font-caveat text-[21px] drop-shadow-md">The word</h3>
                    <p class="text-[10px] drop-shadow-sm leading-none tracking-wide">Inspiring words right from the throne of grace</p>
                  </div>
                </div>


                <div class="relative lg:w-[174px] md:w-[150px] w-[105px]  lg:h-[244px] md:h-[190px] h-[148.25px] rounded-[10px] border-[1px] border-[#F0ECF4]  md:top-[-18px] top-[-80px] right-[-18px] lg:left-[30px] md:left-[25px] overflow-hidden shadow-lg transform rotate-[-14.24deg] lg:rotate-[-14.24deg] md:rotate-[-14.24deg] z-10 mx-auto">

                  <div class="absolute inset-0 z-0 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,transparent_0%,rgba(0,0,0,1)_100%)]"></div>

                  <img src="/images/prayers.jpg" alt="Prayers" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />

                  <div class="absolute bottom-3 left-0 right-0 p-2 text-white">
                    <h3 class="font-caveat text-[21px] drop-shadow-md">Prayers</h3>
                    <p class="text-[10px] drop-shadow-sm leading-none tracking-wide">Communion with the Father. A time of asking, receving and worship in the presence of YHWH!.</p>
                  </div>
                </div>
              </div>

              <div className="relative  w-[30px] h-[70px]  lg:top-[-240px] md:top-[-180px] top-[-20px]  lg:left-[590px] md:left-[520px] left-[89px] flex space-x-2 z-20 md:rotate-[0deg] lg:rotate-[0deg] rotate-[60deg] ">
                <img src="/images/icon4.svg" className="relative w-4 top-[-110px] right-[96px]" />
                <img src="/images/icon5.svg" className="relative  w-9 h-9 top-[-78px]
                  right-[86px]" />
                <img src="/images/icon6.svg" className=" relative w-8 h-5 top-[-40px] right-[116px]" />
              </div>


            </div>

          </section>

        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative flex flex-col  items-center bg-[#F0ECF4] lg:w-full lg:h-[764px]  md:w-full md:h-[840px] md:space-y-[60px] w-full h-auto md:px-[5px]  p-10">

        <div className="   lg:top-[50px]  text-center justify-center  z-50">
          <h2 className="text-[32px] font-outfit   font-semibold text-black leading-tight ">
            Here, success is our <br />
            <span className="text-[#575992] font-extrabold ">birthright!</span>
          </h2>

          <p className="text-gray-600 mt-4 text-base md:text-lg">
            We don’t talk anyhow over here, all we say are <br></br> with obvious evidence
          </p>

        </div>

        <div>
          <img src="/images/icon7.svg" className="relative flex top-[-20px]  lg:top-[-110px]  justify-center z-0" />
        </div>

        <div className=" relative top-[-70px] lg:top-[-450px] md:top-[-400px] flex flex-col lg:flex-row px-[10px] md:flex-col gap-[39px] ">
          <div className=" overflow-hidden rounded-[20px]  lg:w-[566px] lg:h-[347px] w-[360px] md:w-[450px] h-[260px]  self-end order-2 ">
            <img src="/images/pray.jpg" alt="Congregation" className="w-full h-full " />
          </div>

          <div className="bg-[#E4E1E9] rounded-[20px] shadow-md px-6 md:px-8 py-[6px] lg:w-[566px] lg:h-[347px] w-[360px] md:w-[450px] h-[266px]  text-left space-y-[70px] self-start  backdrop-blur-[4px]">
            <p className="uppercase text-sm text-black font-semibold">Our Mission</p>
            <div className="flex flex-col items-baseline">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700">
                Holiness is our watch<br />
                <span className="text-[#575992]">word!</span>
              </h3>
              <p className=" text-black text-sm  md:text-base font-outfit  ">
                We believe in Christ and his power to transform men into people they never thought they could ever be in life!
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="px-4 py-8 h-[804px] lg:h-[] md:h-[600px]  bg-[#FFFFFF]">
        <div className=" relative top-[10px] grid grid-cols-1 md:grid-cols-2 lg:justify-between space-y-[80px] ">
          {/* Column 1 */}
          <div className="col-1 space-y-[16px] text-center">
            <h3 className="text-[32px]  lg:text-[48px] font-outfit font-semibold">
              Holiness is our watch <br /><span className="text-[#404178]">word!</span>
            </h3>
            <p className="text-gray-700">
              We don’t talk anyhow over here, all we say are with <br /> obvious evidence
            </p>
          </div>

          {/* Column 2 */}
          <div className=" space-y-2  flex flex-col justify-center items-center lg:grid md:grid-cols-2 lg:gap-[61px] gap-[32px] ">
            <div className="flex gap-[10px] lg:flex-col lg:w-full w-[305px] items-start lg:text-start lg:space-y-[32px] ">
              <div className="lg:text-[32px]   rounded-[10px] p-[10px] bg-[#E1E0FF]">😇</div>
              <div className=" space-y-[16px]">
                <h4 className="lg:text-lg text-[16px]font-outfit font-semibold">Home of purity</h4>
                <p className="text-[#777680] text-[16px] font-outfit-normal">
                  the purity of the spirit is with me all day long. Never let Satan tell you bullshit
                </p>
              </div>
            </div>


            <div className="flex gap-[10px] lg:flex-col  lg:w-full w-[305px] space-y-[32px] items-start">
              <div className="lg:text-[32px]  rounded-[10px] p-[10px] bg-[#E1E0FF]">🔥</div>
              <div className=" space-y-[16px]">
                <h4 className="lg:text-lg text-[16px] font-semibold">Home of prayer</h4>
                <p className="text-gray-600">
                  the purity of the spirit is with me all day long. Never let Satan tell you bullshit
                </p>
              </div>
            </div>

            <div className="flex gap-[10px] lg:flex-col  lg:w-full w-[305px] space-y-[32px] items-start">
              <div className="lg:text-[32px]  rounded-[10px] p-[10px] bg-[#E1E0FF]">🗣️</div>
              <div className=" space-y-[16px]">
                <h4 className="lg:text-lg text-[16px] font-outfit font-semibold">Home of truth</h4>
                <p className="text-gray-600">
                  the purity of the spirit is with me all day long. Never let Satan tell you bullshit
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-[100vw] top-[-500px]">
            <img src="/images/icon8.svg " alt="Icon 8" />
          </div>
        </div>
      </section>





      {/* Call to Action */}
      <section className="bg-[#F0ECF4] h-[588px] px-[18px] ">
        <div className="max-w-[1280px] mx-auto h-full lg:flex items-center  lg:justify-between md:flex md:justify-center space-y-[20px]">

          {/* Left Column */}
          <div className="max-w-[500px] space-y-[24px] text-center lg:text-start">
            <p className="text-[#777680] text-[16px] font-semibold uppercase ">Join us today!</p>

            <h2 className="text-[32px] lg:text-[40px] md:text-[48px] font-bold leading-tight text-[#0F0F0F] text-center lg:text-start ">
              Your spiritual welfare is our concern…
            </h2>

            <div className="flex justify-center lg:justify-start items-center gap-4  ">
              <button className="bg-[#575992] text-white p-[10px]  w-[135px] h-[40]  rounded-[50px] border-[1px] border-[#C8C5D0] shadow-[inset_0px_-5px_11.4px_0px_#323353,_0px_2px_5.8px_0px_#00000040] text-sm font-semibold flex justify-around items-center  gap-[10px] ">
                Know Us
                <FaArrowRight className="w-[32px] h-[31px] p-[8px] rounded-[18px] bg-[#575992] shadow-[0px_3px_6.4px_-2px_#00000040]" />
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 max-w-[600px]">
            <img
              src="/images/choir2.jpg"
              alt="Choir"
              className="w-full h-[270px] rounded-[12px] object-cover"
            />
            <p className="text-[#777680] text-[14px] leading-[150%]">
              We believe in Christ and his power to transform men into people they never thought they could ever be in life
            </p>
          </div>

        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-[#E5E5E5] pt-10 pb-6 px-4 text-center">
        {/* Top Section */}
        <div className="flex flex-col items-center space-y-4">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="Logo" className="w-[60px] h-[60px]" />
            <span className="font-medium text-[16px] md:text-[17px] text-[#0F0F0F]">
              Deeper Life Campus Fellowship Gidankwano
            </span>
          </div>

          {/* Description */}
          <p className="text-[#777680] max-w-[600px] text-[14px] leading-[24px]">
            In DLCF, God is our Father, Jesus is our message, the Holy Spirit is our Comforter,
            the Bible is our compass, Holiness is our Watchword, Success is our Birth-right,
            and Heaven is the Goal
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-2">
            <a href="#" className="text-[#555] hover:text-[#333] text-[18px]">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#555] hover:text-[#333] text-[18px]">
              <FaYoutube />
            </a>
            <a href="#" className="text-[#555] hover:text-[#333] text-[18px]">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#555] hover:text-[#333] text-[18px]">
              <FaInstagram />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 font-medium text-[15px] text-[#0F0F0F] underline">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Sermons</a>
            <a href="#">Podcasts</a>
          </div>
        </div>


      </footer>
      {/* Bottom Copyright */}
      <p className="flex justify-center items-center   text-center h-[50px] text-sm text-[#0F0F0F] border-[1px] border-[#C8C5D0]  mt-10">
        All rights reserved 2025
      </p>
    </div>
  )
}

export default App
