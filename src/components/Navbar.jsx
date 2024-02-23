import React from 'react';
import navbar_left from '../assests/images/navbar_left_logo.png';
import profilePhoto from '../assests/images/sarthakKamra.jpg';
import { CiSearch } from 'react-icons/ci';
import { MdArrowDropDown } from 'react-icons/md';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar(props) {
  const [nav, setNav] = useState(false);
  let [open, setOpen] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <navbar className="top-0 w-full fixed bg-white z-[1000] flex flex-row flex-wrap justify-around items-center p-4 gap-6">
      <img src={navbar_left} alt="" className="" />

      <div className="flex flex-row rounded-full bg-gray-100 justify-between items-center px-4 py-1 gap-2 w-1/4 !sm:w-full">
        <CiSearch className="h-5 w-5 text-gray-600" />
        <input
          type="search"
          name="search"
          placeholder="Search for your favorite groups in ATG"
          className="text-gray-600 bg-gray-100 flex-grow min-w-0 px-auto text-center outline-none"
        />
      </div>

      {isAuthenticated && (
        <div className="flex flex-row items-center justify-center w-1/8 gap-2">
          <img className="rounded-full w-7" src={profilePhoto} alt="" />
          <p>Alex White</p>
          <div className="my-8">
            <MdArrowDropDown />
          </div>
        </div>
      )}

      {!isAuthenticated && (
        <div className="flex items-center justify-center gap-x-2">
          <div>
            Create Account
            <button
              className="ml-2 bg-white text-blue-500"
              onClick={() => props.setShowModal('login')}
            >
              It's free
            </button>
            {/* <span>It's free</span>  */}
          </div>
          <div className="-ml-1 my-auto mt-2">
            <MdArrowDropDown />
          </div>
        </div>
      )}
    </navbar>
  );
}

export default Navbar;
