const $bulb = document.querySelector('.bulb');
const $background = document.querySelector('.background');
let lightStatus = 'off';
if (!$bulb) throw new Error('Someone had better hurry over to Home Depot!');
$bulb.addEventListener('click', clickHandler);
function clickHandler(): void {
  if (!$bulb) throw new Error('Someone had better hurry over to Home Depot!');
  if (!$background) throw new Error("You're off the map!");
  if (lightStatus === 'off') {
    lightStatus = 'on';
    $bulb.className = 'bulb bulb-on';
    $background.className = 'background background-on';
  } else {
    lightStatus = 'off';
    $bulb.className = 'bulb bulb-off';
    $background.className = 'background background-off';
  }
}
