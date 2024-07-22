'use strict';
const $clickButton = document.querySelector('.click-button');
const $mouseOverButton = document.querySelector('.hover-button');
const $doubleClickButton = document.querySelector('.double-click-button');
if (!$clickButton) {
  throw new Error('$clickButton not found!');
}
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$clickButton.addEventListener('click', handleClick);
if (!$mouseOverButton) {
  throw new Error('$mouseOverButton not found!');
}
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$mouseOverButton.addEventListener('mouseover', handleMouseover);
if (!$doubleClickButton) {
  throw new Error('$doubleClickButton not found!');
}
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
