/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

const Modal = ({ children, closeModal }) => {
  return (
    <>
      <div
        onClick={() => closeModal()}
        className="fixed inset-0 bg-[#000] bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="modal fixed top-[50%] left-[50%] z-10" style={{transform: 'translate(-50%, -50%)'}}>
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[800px]">
          <div className="bg-white p-6 text-black">
            <IoMdClose
              onClick={() => closeModal()}
              className="absolute top-1 right-1 text-[20px] cursor-pointer"
            />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
