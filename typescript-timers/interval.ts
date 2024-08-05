const $message = document.querySelector('h1');
let count = 4;

function countDown(): void {
  count--;
  if (!$message) throw new Error('$message not found!');
  if (count === 0) {
    $message.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(theCountDown);
  } else {
    $message.textContent = String(count);
  }
}

const theCountDown = setInterval(countDown, 1000);
