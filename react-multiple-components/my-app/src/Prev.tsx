type Prop = {
  onButtonClick: () => void;
};

export function Prev({ onButtonClick }: Prop) {
  return <button onClick={onButtonClick}>Prev</button>;
}
