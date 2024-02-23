import React, { useState } from 'react';
import MyModal from './ShowModal';
import './Modal.css';
import YourSvg from '../assests/images/atg_illustration.svg';
import { RxCrossCircled } from 'react-icons/rx';
const Modal2 = (props) => {
  // const [showModal, setShowModal] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const closeModal = () => props.setShowModal(false);
  const change = () => setIsSignedIn(!isSignedIn);

  const mainModal = (
    <MyModal closeModal={closeModal}>
      <div className="md:block hidden">
        <button onClick={closeModal}>
          <div className="modal-wrapper"></div>
        </button>
        <div className="modal-container shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-12">
          <button
            onClick={closeModal}
            className="h-1 text-2xl absolute -top-9 right-0 z-[10000]"
          >
            <RxCrossCircled />
          </button>
          <div className="ModalTopHeading -mt-2 pb-2 pt-1 ">
            <p className="flex justify-center items-center mt-2 TopHeadingContent">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
          </div>
          <div className="flex mainDiv ">
            {isSignedIn && (
              <div className="w-1/2  ">
                <p className="Text1 flex justify-center mt-3 mb-3  items-center mx-8">
                  Create Account
                </p>
                <div className="flex flex-col mx-8">
                  <div className=" nameDiv px-3">
                    <div className="border-r-2 pr-16">FirstName</div>
                    <div>LastName</div>
                  </div>
                  <div className="emailDiv flex justify-start pl-3 items-center">
                    Email
                  </div>
                  <div className=" passDiv flex justify-between px-3 items-center ">
                    {/* <div className=""> */}
                    <p>Password</p>
                    <p>Icon</p>
                    {/* </div> */}
                  </div>
                  <div className="px-3 flex items-center mb-3 confirmPassDiv">
                    Confirm Password
                  </div>
                </div>
                <div className=" mx-8 mb-3 createAccountDiv">
                  <button>Create Account</button>
                </div>
                <div className=" mx-8 facebookDiv">
                  <p>Sign up with Facebook</p>
                </div>
                <div className="mx-8 mt-3 googleDiv">Sign up with Google</div>
              </div>
            )}
            {!isSignedIn && (
              <div className="w-1/2  ">
                <p className="Text1 flex  mt-3 mb-3  items-center mx-8">
                  Sign In
                </p>
                <div className="flex flex-col mx-8">
                  <div className="emailDiv flex justify-start pl-3 items-center">
                    Email
                  </div>
                  <div className=" passDiv flex justify-between px-3 items-center ">
                    {/* <div className=""> */}
                    <p>Password</p>
                    <p>Icon</p>
                    {/* </div> */}
                  </div>
                </div>
                <div className=" mx-8 mb-3 createAccountDiv mt-3">
                  <button>Sign In</button>
                </div>
                <div className=" mx-8 facebookDiv">
                  <p>Sign up with Facebook</p>
                </div>
                <div className="mx-8 mt-3 googleDiv">Sign up with Google</div>
                <div className="mx-8 mt-3 semibold flex justify-center items-center">
                  Forgot Password?
                </div>
              </div>
            )}
            <div className="w-1/2 flex flex-col mb-6">
              {isSignedIn && (
                <div className="flex justify-center mt-3 items-center">
                  Already Have an Account?{' '}
                  <button onClick={change}>
                    <span className="text-blue-400"> Sign In</span>
                  </button>{' '}
                </div>
              )}
              {!isSignedIn && (
                <div className="flex justify-center mt-3 items-center">
                  {' '}
                  Don't Have an Account?{' '}
                  <button onClick={change}>
                    <span className="text-blue-400"> Create new for free</span>
                  </button>{' '}
                </div>
              )}
              <img className="w-full" src={YourSvg} alt="Your SVG" />
              {isSignedIn && (
                <p className="text-xs -mt-12 ">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              )}
              {!isSignedIn && <p className="text-xs -mt-12 "></p>}
            </div>
          </div>

          {/* <button className="model-btn" onClick={closeModal}>
      Accept It
       </button> */}
        </div>
        <div className="md:hidden">
          <button onClick={closeModal}>
            <div className="modal-wrapper"></div>
          </button>
        </div>
      </div>
    </MyModal>
  );

  return (
    <>
      {/* <button className="model-btn" onClick={() => props.setShowModal(true)}>
        Open Modal
      </button> */}
      {props.showModal && mainModal}
    </>
  );
};

export default Modal2;
