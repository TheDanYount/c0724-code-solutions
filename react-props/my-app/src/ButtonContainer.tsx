type Props = {
  buttonContainerText: string;
};

export function ButtonContainer({ buttonContainerText }: Props) {
  return (
    <div>
      <button>{buttonContainerText}</button>
    </div>
  );
}
