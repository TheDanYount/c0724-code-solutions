import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }
  function handleDelete() {
    alert('Something has been deleted!');
    handleClose();
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Me!</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <p>Do you really want to delete?</p>
        <button onClick={handleClose}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </Modal>
    </>
  );
}
