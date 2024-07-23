'use strict';
const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$openModal) throw new Error('open-modal not found!');
$openModal.addEventListener('click', dialogOpenner);
function dialogOpenner(event) {
  if (!$dialog) throw new Error('dialog not found!');
  $dialog.showModal();
}
if (!$dismissModal) throw new Error('dismiss-modal not found!');
$dismissModal.addEventListener('click', dialogCloser);
function dialogCloser(event) {
  if (!$dialog) throw new Error('dialog not found!');
  $dialog.close();
}
