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
  return (
    <>
      <Title title={items[stage]} />
      <Next />
      <ButtonRow items={items} />
      <Prev />
    </>
  );
}
