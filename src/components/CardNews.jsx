import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

import { CiShare2 } from 'react-icons/ci';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFillPenFill } from 'react-icons/bs';
import ModalDot from './ModalDot';
import { useState } from 'react';

export default function CardNews({
  name,
  topic,
  headline,
  description,
  views,
  imgsrc,
  bgimg,
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
    <div className="mt-[19rem] m-0 p-0 md:mt-0  md:ml-24 w-full md:top-0 md:w-[5/12] md:w-6/12 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 ">
      <div>
        <img src={bgimg} className="w-full m-0" alt="" />
      </div>
      <div className="flex flex-col p-6">
        <p className="my-1 font-semibold text-xl">{topic}</p>
        <div className="flex font-semibold justify-between mt-3 text-xl md:text-3xl ">
          <p>{headline}</p>
          <button
            onClick={toggleModal}
            className={`h-10 ${dotCSS} flex items-center`}
          >
            <HiOutlineDotsHorizontal size={30} />
          </button>
        </div>
        {dotModal && <ModalDot />}
        <p className="text-xl mt-3  text-[#5C5C5C]">{description}</p>
        <div className="flex justify-between mt-6 items-center">
          <div className="flex gap-x-3 items-center">
            <div className="overflow-hidden">
              <img className="rounded-full w-16" src={imgsrc} alt="" />
            </div>

            <p className="font-semibold text-2xl">{name}</p>
          </div>

          <div className="flex gap-x-12 items-center text-2xl">
            <div className="flex  items-center gap-x-3">
              <AiOutlineEye />
              <p>{views}k Views</p>
            </div>
            <div className="bg-gray-200 p-2 rounded-md">
              <CiShare2 className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
