interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLInputElement;
}
const $form = document.querySelector('form') as HTMLFormElement;
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event: Event): void {
  event.preventDefault();
  const $formElements = $form.elements as FormElements;
  if (!$formElements) throw new Error('$formElements not found!');
  const formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('Form data:', formData);
  $form.reset();
}
