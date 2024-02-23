import React, { useState } from "react";
import MyModal from "./ShowModal";
import "./Modal.css"
import YourSvg from "../assests/images/atg_illustration.svg"
import { RxCrossCircled } from "react-icons/rx";
const Modal2 = (props) => {
  // const [showModal, setShowModal] = useState(false);
const [isSignedIn,setIsSignedIn]=useState(true);
  const closeModal = () => props.setShowModal1(false);
  const change = () => setIsSignedIn(!isSignedIn);


  const mainModal1 = (
    <MyModal closeModal={closeModal} >
      <button onClick={closeModal}>
      <div className="modal-wrapper1"  ></div>
      </button>
      <div className="modal-container1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-12">
       Hello Ji
      </div>

    </MyModal>
  );

  return (
    <>
      {/* <button className="model-btn" onClick={() => props.setShowModal(true)}>
        Open Modal
      </button> */}
      {props.showModal1 && mainModal1}
     
    </>
  );
};

export default Modal2;