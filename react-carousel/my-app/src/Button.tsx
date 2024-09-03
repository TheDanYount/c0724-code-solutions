import { FaCircle, FaRegCircle } from 'react-icons/fa';

type Props = {
  onButtonClick: () => void;
  stateMatch: boolean;
};

export function Button({ onButtonClick, stateMatch }: Props) {
  return stateMatch ? (
    <FaCircle onClick={onButtonClick} />
  ) : (
    <FaRegCircle onClick={onButtonClick} />
  );
}
