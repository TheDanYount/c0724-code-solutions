import { useRef } from 'react';
import './App.css';

function App() {
  const modal = useRef<HTMLDialogElement>(null);

  function handleDelete() {
    alert('Something has been deleted!');
    modal.current?.close();
  }

  return (
    <>
      <button onClick={() => modal.current?.showModal()}>Delete Me!</button>
      <dialog ref={modal}>
        <p>Do you really want to delete?</p>
        <button onClick={() => modal.current?.close()}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </dialog>
    </>
  );
}

export default App;
