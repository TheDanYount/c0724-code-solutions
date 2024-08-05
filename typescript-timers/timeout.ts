const $heading = document.querySelector('h1');

function updateMessage(): void {
  if (!$heading) throw new Error('$heading not found!');
  $heading.textContent = 'Hello There';
}

setTimeout(updateMessage, 2000);
