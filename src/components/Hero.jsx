import React from 'react';
import BackgroundPhoto from '../assests/images/Rectangle 2.png';
import './Hero.css';
import { FaArrowLeft } from 'react-icons/fa6';
function Hero(props) {
  return (
    <>
      <div className="w-full mt-20 relative bg-cover">
        <div className="w-full absolute h-full z-[50] top-0 left-0 bgclass bg-cover"></div>

        <img
          src={BackgroundPhoto}
          className="w-full grayscale-[5%] z-[40] hidden md:block"
          alt=""
        />
        <div className=" md:block absolute hidden  bgr  left-[14.375rem] top-[22.375rem]  leading-[46px] z-[51] ">
          <p className="text-4xl  text-white font-bold ">
            Computer Engineering
          </p>
          <p className=" text-white font-bold ">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
      <div className="md:hidden absolute flex md:flex-row flex-col  text-white ">
        <div className="w-full absolute h-10/12 z-[50] top-0 left-0  border-b-red-400 bgclass"></div>
        <img
          src={BackgroundPhoto}
          className="block md:hidden w-full grayscale-[5%] z-[40] w-full  h-[15rem]"
          alt=""
        />
        <div className="md:block w-full px-1 flex justify-between absolute bgr   top-[0.6rem]  leading-[24px] z-[51]">
          <div className="text-xl  text-white text-4xl font-bold mt-12">
            <FaArrowLeft />
          </div>
          <div className="bg-black border-2 pr-1 border-white mt-12">
            <button className="ml-2 " onClick={() => props.setShowModal(true)}>
              Join Group
            </button>
          </div>
        </div>
        {/* <div ><button onClick={() => props.setShowModal(true)}
         className='bg-black border-4 border-white p-1 '>Join Group</button></div>
        </div> */}
        <div className=" md:block  relative   left-[2rem] top-[11rem]  leading-[24px] z-[51] ">
          <p className="text-xl  text-white font-bold ">Computer Engineering</p>
          <p className=" text-white font-bold ">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
