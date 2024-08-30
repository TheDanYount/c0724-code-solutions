type Props = {
  items: string[];
  onButtonClick: (num: number) => void;
};

export function ButtonRow({ items, onButtonClick }: Props) {
  return (
    <div>
      {items.map((v, i) => (
        <button key={i} onClick={() => onButtonClick(i)}>
          {i}
        </button>
      ))}
    </div>
  );
}
