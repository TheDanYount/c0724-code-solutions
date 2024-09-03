import { FaChevronLeft } from 'react-icons/fa';

type Props = {
  onButtonClick: () => void;
};

export function PrevButton({ onButtonClick }: Props) {
  return <FaChevronLeft className="w-8 h-8" onClick={onButtonClick} />;
}
