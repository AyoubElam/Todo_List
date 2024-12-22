/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import { useState } from 'react';

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add New Task <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
        <form >
          <h3 className='font-bold text-lg'></h3>
          <div className='modal-action'>
          <input type="text" placeholder="Type here" className="input input-bordered w-full " />
          <button type='submit' className='btn bg-blend-color-dodge'> Submit </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
