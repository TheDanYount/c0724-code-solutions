type Props = {
  text: string;
  onButtonClick: () => void;
};

export function Button({ text, onButtonClick }: Props) {
  return <button onClick={onButtonClick}>{text}</button>;
}
