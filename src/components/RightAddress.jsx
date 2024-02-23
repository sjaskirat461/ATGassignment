import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import { MdErrorOutline } from 'react-icons/md';
import { useState } from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import Groups from './Groups';
import jet from '../assests/images/jet.jpg';

function RightAddress({ groupModal }) {
  const [place, setPlace] = useState('Noida, India');
  function changePlace(event) {
    setPlace(event.target.value);
  }

  return (
    <>
      <div className="md:inline hidden absolute xl:top-12 xl:right-36 md:top-8 md:right-20 md:max-w-[200px]  xl:max-w-[300px] ">
        <div>
          <div className="flex justify-between items-center border-b border-black mb-3 pb-3">
            <div className="flex items-center">
              <IoLocationOutline size={30} />
              <input
                type="text"
                value={place}
                onChange={changePlace}
                id="place"
                className="outline-none"
                placeholder="Enter your Location"
              />
            </div>
            <div>
              <label htmlFor="place">
                <MdEdit size={20} />
              </label>
            </div>
          </div>
          <div className="flex gap-x-2">
            <MdErrorOutline size={50} />
            <div>
              Your location will help us serve better and extend a personalised
              experience
            </div>
          </div>
          {groupModal && (
            <div className="flex flex-col mt-16 justify-start items-start w-fill">
              <div className="flex flex-row justify-start items-center w-full">
                <FiThumbsUp />
                &nbsp; RECOMMENDED PLACES
              </div>
              <div className="flex flex-col gap-6 justify-start text-base mt-8 items-stretch">
                <Groups name="Leisure" imgsrc={jet} followed={true} />
                <Groups name="Activism" imgsrc={jet} followed={false} />
                <Groups name="MBA" imgsrc={jet} followed={false} />
                <Groups name="Philosophy" imgsrc={jet} followed={false} />
              </div>
              <button className="text-blue-500 ml-52 mt-10">See More...</button>
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden flex justify-between px-3 text-2xl w-full absolute  top-[16rem] bottom-0">
        <div>
          <p>Posts(368)</p>
        </div>
        <div>
          <button>Filter:All</button>
        </div>
      </div>
    </>
  );
}

export default RightAddress;
