type Props = {
  items: string[];
  onButtonClick: (num: number) => void;
  currentStage: number;
};

export function ButtonRow({ items, onButtonClick, currentStage }: Props) {
  return (
    <div>
      {items.map((v, i) => (
        <button
          key={i}
          className={i === currentStage ? 'blue' : ''}
          onClick={() => onButtonClick(i)}>
          {i}
        </button>
      ))}
    </div>
  );
}
