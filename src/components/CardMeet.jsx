import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

import { CiShare2 } from 'react-icons/ci';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFillPenFill } from 'react-icons/bs';
import { useState } from 'react';
import image1 from '../assests/images/Rectangle 5 -2.png';
import Modal from './Modal';
import { MdDateRange } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { HiDotsHorizontal } from 'react-icons/hi';
import ModalDot from './ModalDot';

export default function CardMeet({
  topic,
  position,
  date,
  place,
  operation,
  name,
  views,
  imgsrc,
}) {
  const [dotModal, setDotModal] = useState(false);
  function toggleModal() {
    setDotModal((prevDotModal) => !prevDotModal);
  }

  let dotCSS;
  if (dotModal) {
    dotCSS = 'text-2xl bg-gray-200 p-2 rounded-md';
  } else {
    dotCSS = 'text-2xl p-2 rounded-md';
  }

  return (
    <div className="w-[5/12] md:w-6/12 md:ml-24 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-0 ">
      <div>
        <img src={image1} className="w-full" alt="" />
      </div>
      <div className="flex flex-col p-6">
        <div className="flex mt-2 items-baseline gap-x-2">
          {/* <BsFillPenFill /> */}
          <p>{topic}</p>
        </div>
        <div className="flex font-semibold justify-between mt-3 text-3xl">
          <p className="text-2xl font-semibold mb-4">{position}</p>
          <button
            onClick={toggleModal}
            className={`h-10 ${dotCSS} flex items-center`}
          >
            <HiOutlineDotsHorizontal size={30} />
          </button>
        </div>
        {dotModal && <ModalDot />}
        <div className="flex flex-row  gap-x-4 md:gap-x-36">
          <div className="flex flex-row items-center">
            <MdDateRange /> <p>{date}</p>
          </div>
          <div className="flex flex-row items-center">
            <FaLocationDot /> <p>{place}</p>
          </div>
          {/* <div></div> */}
        </div>
        <p className="text-l font-bold border-2 border-gray-300 rounded-md -z-[1]  p-2 mt-6  flex justify-center items-center text-[#5C5C5C] text-red-600 ">
          {operation}
        </p>
        <div className="flex justify-between mt-6 items-center">
          <div className="flex gap-x-3 items-center">
            <img className="rounded-full w-16" src={imgsrc} alt="" />

            <p className="font-semibold text-2xl">{name}</p>
          </div>

          <div className="flex gap-x-12 items-center text-2xl">
            <div className="flex  items-center gap-x-3">
              <AiOutlineEye />
              <p>{views}k Views</p>
            </div>
            <div className="bg-gray-200 p-2 rounded-md">
              <CiShare2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
