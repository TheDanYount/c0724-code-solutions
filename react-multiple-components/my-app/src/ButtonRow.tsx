type Prop = {
  items: string[];
};

export function ButtonRow({ items }: Prop) {
  return (
    <div>
      {items.map((v, i) => (
        <button key={i}>{i}</button>
      ))}
    </div>
  );
}
