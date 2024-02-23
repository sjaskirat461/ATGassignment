import { createPortal } from 'react-dom';
import { useRef } from 'react';
import { useEffect } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import YourSvg from '../assests/images/atg_illustration.svg';

export default function Signup({ showModal, setShowModal }) {
  const dialog = useRef();

  useEffect(() => {
    if (showModal === 'signup') {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [showModal]);

  return createPortal(
    <dialog ref={dialog}>
      <div className="md:block hidden">
        {/* <button onClick={closeModal}>
          <div className="modal-wrapper"></div>
        </button> */}
        <div className="modal-container shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-12">
          <button
            onClick={() => setShowModal('none')}
            className="h-1 text-2xl absolute -top-9 right-0 z-[10000] text-red-500 "
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

            <div className="w-1/2 flex flex-col mb-6">
              <div className="flex justify-center mt-3 items-center">
                Already Have an Account?{' '}
                <button
                  onClick={() => {
                    console.log('hellooooooooooooo');
                    return setShowModal('login');
                  }}
                >
                  <span className="text-blue-400"> Sign In</span>
                </button>{' '}
              </div>

              <img className="w-full" src={YourSvg} alt="Your SVG" />

              <p className="text-xs -mt-12 ">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>

          {/* <button className="model-btn" onClick={closeModal}>
      Accept It
       </button> */}
        </div>
        {/* <div className="md:hidden">
          <button onClick={closeModal}>
            <div className="modal-wrapper"></div>
          </button>
        </div> */}
      </div>
    </dialog>,
    document.getElementById('modal')
  );
}
