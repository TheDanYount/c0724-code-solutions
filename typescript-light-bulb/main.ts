const $bulb = document.querySelector('.bulb');
const $background = document.querySelector('.background');
let lightOn = false;
if (!$bulb) throw new Error('Someone had better hurry over to Home Depot!');
$bulb.addEventListener('click', clickHandler);
function clickHandler(): void {
  if (!$bulb) throw new Error('Someone had better hurry over to Home Depot!');
  if (!$background) throw new Error("You're off the map!");
  if (lightOn === false) {
    lightOn = true;
    $bulb.className = 'bulb bulb-on';
    $background.className = 'background background-on';
  } else {
    lightOn = false;
    $bulb.className = 'bulb bulb-off';
    $background.className = 'background background-off';
  }
}
