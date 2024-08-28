import './Toggle.css';
type Props = {
  onSwitchClick: () => void;
  toggleClass: string;
};

export function Toggle({ onSwitchClick, toggleClass }: Props) {
  return (
    <div id="container">
      <div id="switch" className={toggleClass} onClick={onSwitchClick}>
        <div id="circle"></div>
      </div>
      <p id="label">{String(toggleClass).toUpperCase()}</p>
    </div>
  );
}
