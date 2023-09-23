"use client";
import React, { useState } from "react";

interface ModalProps {
  setOpen: (param: boolean) => void;
  open: boolean;
}

const Modal: React.FC<ModalProps> = ({ setOpen, open }) => {
  const modalClass = open ? "modal modal-open" : "modal";
  //   console.log(open);

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={() => setOpen(true)}>
        open modal
      </button>
      <dialog id="my_modal_4" className={modalClass}>
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn" onClick={() => setOpen(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
