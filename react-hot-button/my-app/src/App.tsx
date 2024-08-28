import { useState } from 'react';
import { Button } from './Button.tsx';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const bgColor =
    count < 4
      ? '#351C75'
      : count < 7
      ? '#674EA7'
      : count < 10
      ? '#E06666'
      : count < 13
      ? '#F6B26B'
      : count < 16
      ? '#FFFF00'
      : '#FFFFFF';
  const color = count < 10 ? 'white' : 'black';

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Button onButtonClick={handleClick} bgColor={bgColor} color={color} />
    </>
  );
}
