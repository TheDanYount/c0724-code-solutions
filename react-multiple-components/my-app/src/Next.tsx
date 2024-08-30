type Prop = {
  onButtonClick: () => void;
};

export function Next({ onButtonClick }: Prop) {
  return <button onClick={onButtonClick}>Next</button>;
}
