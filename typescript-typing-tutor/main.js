'use strict';
let currentSentence = 'This is a test.';
let currentPlace = 0;
const keysToIgnore = [
  'Shift',
  'Control',
  'Alt',
  'Tab',
  'Backspace',
  'Escape',
  'Enter',
];
const $yeomansWork = document.querySelector('.yeomans-work');
const $quillTip = document.querySelector('.quill-tip');
const $error = document.querySelector('.error');
const $palimpsest = document.querySelector('.palimpsest');
function setUp() {
  if (!$quillTip) throw new Error('$quillTip is missing!');
  $quillTip.textContent = currentSentence[0];
  if (!$palimpsest) throw new Error('$palimpsest is missing!');
  $palimpsest.textContent = currentSentence.slice(1);
}
setUp();
document.addEventListener('keydown', handleKeydown);
function handleKeydown(event) {
  if (!$yeomansWork) throw new Error('$quillTip is missing!');
  if (!$quillTip) throw new Error('$quillTip is missing!');
  if (!$error) throw new Error('$error is missing!');
  if (!$palimpsest) throw new Error('$palimpsest is missing!');
  if (keysToIgnore.includes(event.key)) {
    return;
  }
  if (event.key === currentSentence[currentPlace]) {
    currentPlace++;
    $yeomansWork.textContent = currentSentence.slice(0, currentPlace);
    $quillTip.textContent = currentSentence[currentPlace];
    $palimpsest.textContent = currentSentence.slice(currentPlace + 1);
    $error.textContent = '';
  } else {
    $error.textContent = currentSentence[currentPlace];
    $quillTip.textContent = '';
  }
}
