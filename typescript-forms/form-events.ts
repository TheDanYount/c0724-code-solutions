function handleFocus(event: Event): void {
  console.log("'focus' event fired.");
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name on focus:', eventTarget.name);
}
function handleBlur(event: Event): void {
  console.log("'blur' event fired.");
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name on blur:', eventTarget.name);
}
function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(
    'eventTarget.name and eventTarget.value on input:',
    eventTarget.name + ',',
    eventTarget.value
  );
}
const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');
if (!$userName) throw new Error('$userName not found!');
if (!$userEmail) throw new Error('$userEmail not found!');
if (!$userMessage) throw new Error('$userMessage not found!');
const inputs = [$userName, $userEmail, $userMessage];
for (const value of inputs) {
  value.addEventListener('focus', handleFocus);
  value.addEventListener('blur', handleBlur);
  value.addEventListener('input', handleInput);
}
