type Props = {
  onButtonClick: () => void;
  bgColor: string;
  color: string;
};

export function Button({ onButtonClick, bgColor, color }: Props) {
  return (
    <button
      style={{
        border: '4px solid black',
        borderRadius: '0',
        boxShadow: '2px 2px 0px rgb(0, 0, 0)',
        backgroundColor: bgColor,
        color,
        outline: 0,
      }}
      onClick={onButtonClick}>
      Hot Button
    </button>
  );
}
