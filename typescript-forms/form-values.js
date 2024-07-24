'use strict';
const $form = document.querySelector('form');
$form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const $formElements = $form.elements;
  if (!$formElements) throw new Error('$formElements not found!');
  const formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('Form data:', formData);
  $form.reset();
}
