import { FaChevronRight } from 'react-icons/fa';

type Props = {
  onButtonClick: () => void;
};

export function NextButton({ onButtonClick }: Props) {
  return <FaChevronRight className="w-8 h-8" onClick={onButtonClick} />;
}
