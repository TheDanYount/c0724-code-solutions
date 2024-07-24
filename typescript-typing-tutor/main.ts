const sentences = [
  `Hold your ground! Hold your ground! Sons of Gonder, of Rohan, my brothers, I see in your eyes the same fear that would take the heart of me. A day may come when the courage of men fails, when we forsake our friends and break all bonds of fellowship, but it is not this day. An hour of wolves and shattered shields, when the age of men comes crashing down, but it is not this day! This day we fight! By all that you hold dear on this good Earth, I bid you stand, Men of the West!`,
  `Saruman believes it is only great power that can hold evil in check. But that is not what I have found. I've found it is the small things, everyday deeds of ordinary folk that keeps the darkness at bay. Simple acts of kindness and love.`,
  `It's like in the great stories, Mr. Frodo. The ones that really mattered, full of darkness and danger they were, and sometimes you didn't want to know the end, because how could the end be happy? How could the world go back to the way it was when so much bad had happened? But in the end, it's only a passing thing, this shadow. Even darkness must pass. A new day will come, and when the sun shines it will shine out the clearer. Those were the stories that stayed with you, that meant something, even if you were too small to understand why. But I think, Mr. Frodo, I do understand. I know now. Folk in those stories had lots of chances of turning back, only they didn't. They kept going, because they were holding on to something. What are we holding on to Sam? That there is some good in this world, and it's worth fighting for.`,
];
let currentSentence: string;
let currentPlace = 0;
let accurateInputs = 0;
let inaccurateInputs = 0;
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
const $accuracy = document.querySelector('#accuracy');

function setUp(): void {
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  if (!$quillTip) throw new Error('$quillTip is missing!');
  $quillTip.textContent = currentSentence[0];
  if (!$palimpsest) throw new Error('$palimpsest is missing!');
  $palimpsest.textContent = currentSentence.slice(1);
}

setUp();

document.addEventListener('keydown', handleKeydown);

function handleKeydown(event: KeyboardEvent): void {
  if (!$yeomansWork) throw new Error('$quillTip is missing!');
  if (!$quillTip) throw new Error('$quillTip is missing!');
  if (!$error) throw new Error('$error is missing!');
  if (!$palimpsest) throw new Error('$palimpsest is missing!');
  console.log('key: ', event.key);
  console.log('looking for: ', currentSentence[currentPlace]);
  if (keysToIgnore.includes(event.key)) {
    return;
  }
  if (event.key === currentSentence[currentPlace]) {
    currentPlace++;
    accurateInputs++;
    updateAccuracy();
    $yeomansWork.textContent = currentSentence.slice(0, currentPlace);
    $quillTip.textContent = currentSentence[currentPlace];
    $palimpsest.textContent = currentSentence.slice(currentPlace + 1);
    $error.textContent = '';
  } else {
    inaccurateInputs++;
    updateAccuracy();
    $error.textContent = currentSentence[currentPlace];
    $quillTip.textContent = '';
  }
}

function updateAccuracy(): void {
  if (!$accuracy) throw new Error('$accuracy is missing!');
  $accuracy.textContent =
    'Accuracy: ' +
    Math.round((accurateInputs / (inaccurateInputs + accurateInputs)) * 100) +
    '%';
}
