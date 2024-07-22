'use strict';
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
let clickCount = 0;
if (!$hotButton) {
  throw new Error('Hot button not found!');
}
$hotButton.addEventListener('click', clickHandler);
function clickHandler() {
  if (!$clickCount || !$hotButton) {
    throw new Error('Hot button or click count not found!');
  }
  clickCount++;
  $clickCount.textContent = `Clicks: ${clickCount}`;
  if (clickCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
