'use strict';
const $message = document.querySelector('h1');
function countDown() {
  if (!$message) throw new Error('$message not found!');
  if (!($message.textContent === null)) {
    if ($message.textContent.match(/\d+/)) {
      if ($message.textContent === '0') {
        $message.textContent = '~Earth Beeeelooowww Us~';
        clearInterval(theCountDown);
      } else {
        $message.textContent = String(Number($message.textContent) - 1);
      }
    }
  }
}
const theCountDown = setInterval(countDown, 1000);
