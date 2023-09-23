"use client";
import React, { useState } from "react";

interface ModalProps {
  setOpen: (open: boolean) => void;
  open: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ setOpen, open, children }) => {
  // console.log(open);
  // console.log(setOpen);
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={() => setOpen(true)}>
        open modal
      </button> */}
      <dialog id="my_modal_3" className={`modal ${open ? "modal-open" : ""}`}>
        <div className="modal-box w-11/12 max-w-5xl">
          {children}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  console.log("click");
                  setOpen(false);
                  // console.log(open);
                }}
              >
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
