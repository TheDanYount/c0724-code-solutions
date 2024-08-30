import './RotatingBanner.css';
import { Title } from './Title';
import { Next } from './Next';
import { ButtonRow } from './ButtonRow';
import { Prev } from './Prev';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  return (
    <>
      <Title title={items[0]} />
      <Next />
      <ButtonRow items={items} />
      <Prev />
    </>
  );
}
