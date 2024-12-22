/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode 
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen ,children }) => {
  return (
    <dialog
      id="my_modal_3"
      className={`modal ${modalOpen ? 'modal-open' : ''}`}
      open={modalOpen}
    >
      <div className="modal-box">
        <form method="dialog">
          {/* Close button */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setModalOpen(false)}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Add new Task!</h3>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
