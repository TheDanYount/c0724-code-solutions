import './RotatingBanner.css';
import { Title } from './Title';
import { Next } from './Next';
import { ButtonRow } from './ButtonRow';
import { Prev } from './Prev';
import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [stage, setStage] = useState(0);
  function handleNext() {
    setStage((stage + 1) % items.length);
  }
  function handlePrev() {
    setStage((items.length + stage - 1) % items.length); // I add 6 here so that stage doesn't change from 0 to -1, but rather 0 to 5 % 6, which is 5.
  }
  function handleButtonClick(num: number) {
    setStage(num);
  }
  return (
    <>
      <Title title={items[stage]} />
      <Next onButtonClick={handleNext} />
      <ButtonRow
        items={items}
        onButtonClick={handleButtonClick}
        currentStage={stage}
      />
      <Prev onButtonClick={handlePrev} />
    </>
  );
}
