import { useState } from 'react';
import { Toggle } from './Toggle.tsx';
import './App.css';

export default function App() {
  const [toggle, setToggle] = useState(false);
  function handleSwitchClick() {
    setToggle(!toggle);
  }
  const toggleClass = toggle ? 'on' : 'off';

  return (
    <>
      <Toggle onSwitchClick={handleSwitchClick} toggleClass={toggleClass} />
    </>
  );
}
