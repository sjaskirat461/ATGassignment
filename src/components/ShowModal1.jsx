import { Children } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const MyModal = ({ closeModal, children, handleCloseButton }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper1" onClick={closeModal}></div>
      <div className="modal-container1">
        {children}
        {handleCloseButton}
      </div>
    </>,
    document.querySelector(".myPortalModal1Div")
  );
};

export default MyModal;