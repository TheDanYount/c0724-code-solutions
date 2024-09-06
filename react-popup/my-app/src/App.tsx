import { useRef, useState } from 'react';
import './App.css';
import { Popup } from './Popup';

export default function App() {
  const [poppedUp, setPoppedUp] = useState(false);
  const theButton = useRef(null).current;
  const menuItems = ['this', 'that', 'the other'];
  function handleClose() {
    setPoppedUp(false);
  }
  return (
    <>
      <button
        ref={theButton}
        className="hover:bg-[#aaa]"
        onClick={() => setPoppedUp(!poppedUp)}>
        Pop up!
      </button>
      <p>Some random text</p>
      {poppedUp && (
        <Popup
          poppedUp={poppedUp}
          positionTo={theButton}
          onClose={handleClose}
          opacity={0.5}>
          <ul className="border-2 shadow-[0_0_10px_0_#000] bg-white rounded-xl p-2">
            {menuItems.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </Popup>
      )}
      <p>Some random text</p>
    </>
  );
}
