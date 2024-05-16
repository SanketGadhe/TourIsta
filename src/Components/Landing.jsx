import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "./Carousel";
const Landing = () => {
  return (
    <div className="landing">
      <div className="two block md:flex text-center ">
        <div className="text px-10 py-16">
          <div className="headtext text-4xl font-semibold w-3/4 font-mono text-center">
            "Unlock The History: Scan, Listen & Discover with Tour<span className='text-orange-300'>Ista</span>"
          </div>
          <div className="pl-14 getstart mt-20 flex gap-4 items-center ">
            <NavLink
              to={"/Guide"}
              className={
                "px-4 py-4 bg-[#b3dd62] text-lg font-medium rounded-full text-black "
              }
            >
              Get Started
            </NavLink>
            <div className="users flex gap-2">
              <div className="1 w-12 h-12  rounded-full bg-orange-300"></div>
              <div className="combine flex relative">
                <div className="2  w-12 h-12 absolute left-2 rounded-full bg-pink-300"></div>
                <div className="3 w-12 h-12 absolute  left-8 rounded-full bg-blue-300"></div>
                <div className="4 w-12 h-12 absolute  left-14 rounded-full bg-green-300"></div>
                <div className="5 w-12 h-12 absolute left-20 rounded-full bg-yellow-300"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel text-4xl w-1/2 mr-40 mt-7 ">
          <Carousel
            images={[
              "src/Static/1.jpg",
              "src/Static/2.jpg",
              "src/Static/3.jpg",
            ]}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="circle w-[100%] overflow-hidden z-20 h-[600px]  bg-black
rounded-tl-full rounded-tr-full text-white flex justify-center"
        >
          <div className="center">
            <div className="this">
              <p className="mt-10 text-lg text-center font-medium">PROCESS</p>
              <p className="mt-3 text-2xl  text-center font-semibold">
                How it Works?
              </p>
            </div>
            <div className="procedure flex mt-10 justify-center items-center  h-fit bg-" >
              <div className="step1 text-center flex justify-center items-center">
                <div className="center text-center">
                  <div className="flex justify-center item-center">
                    <div className="circle w-12 h-12 rounded-full flex justify-center items-center text-black text-xl bg-purple-300">
                      1
                    </div>
                  </div>
                  <div className="name text-[#b3dd62]">Go To Virtual Guide</div>
                </div>
              </div>
              <div className="dashed h-2 w-24 border-dashed border-b-2 border-[#b3dd62]"></div>
              <div className="step1 text-center flex justify-center items-center">
                <div className="center text-center">
                  <div className="flex justify-center item-center">
                    <div className="circle w-12 h-12 rounded-full flex justify-center items-center text-black text-xl bg-purple-300">
                      2
                    </div>
                  </div>
                  <div className="name text-[#b3dd62]">Start Scanner</div>
                </div>
              </div>
              <div className="dashed h-2 w-24 border-dashed border-b-2 border-[#b3dd62] flex justify-center items-center"></div>
              <div className="step1 text-center flex justify-center items-center">
                <div className="center text-center">
                  <div className="flex justify-center item-center">
                    <div className="circle w-12 h-12 rounded-full flex justify-center items-center text-black text-xl bg-purple-300">
                      3
                    </div>
                  </div>
                  <div className="name text-[#b3dd62]">Scan QR</div>
                </div>
              </div>
              <div className="dashed h-2 w-24 border-dashed border-b-2 border-[#b3dd62] flex justify-center items-center"></div>
              <div className="step1 text-center flex justify-center items-center">
                <div className="center text-center">
                  <div className="flex justify-center item-center">
                    <div className="circle w-12 h-12 rounded-full flex justify-center items-center text-black text-xl bg-purple-300">
                      4
                    </div>
                  </div>
                  <div className="name text-[#b3dd62]">
                    Get Info About Place
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="frame">
              
          <img src="src/Static/5.png" alt="" /></div>  */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
