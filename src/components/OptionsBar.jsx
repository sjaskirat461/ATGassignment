import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoPersonAddSharp } from 'react-icons/io5';
import { IoMdExit } from 'react-icons/io';

function OptionsBar({ groupModal, setGroupModal }) {
  return (
    <div className="md:block hidden">
      <div className="  flex w-5/12  justify-between mx-5 md:w-10/12 ml-24 my-6 text-2xl">
        <div className="flex gap-5">
          <div className="border-b-2 border-sky-500">All Posts(32)</div>
          <div className="hover:border-b-2  hover:border-sky-500">Article</div>
          <div className="hover:border-b-2  hover:border-sky-500">Events</div>
          <div className="hover:border-b-2  hover:border-sky-500">
            Education
          </div>
          <div className="hover:border-b-2  hover:border-sky-500">Job</div>
        </div>
        <div className=" flex gap-3  relative top-16  md:top-0 ">
          <div
            className="flex justify-center items-center gap-2 text-gray-500 border-2 bg-gray-200 text-xl p-2 font-semibold rounded-xl"
            onClick={setGroupModal}
          >
            <p>Write a post</p>
            <IoMdArrowDropdown />
          </div>
          <button>
            {!groupModal && (
              <div
                className="flex justify-center items-center gap-2 text-white bg-blue-600 text-xl p-2 font-semibold rounded-xl"
                onClick={setGroupModal}
              >
                <IoPersonAddSharp />
                <p>Join Group</p>
              </div>
            )}
            {groupModal && (
              <div
                className="flex justify-center items-center gap-2 text-gray-500 border-2 border-gray-500 text-xl p-2 font-semibold rounded-xl"
                onClick={setGroupModal}
              >
                <IoMdExit />
                <p>Leave Group</p>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OptionsBar;
