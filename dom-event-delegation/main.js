'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) {
  throw new Error('$taskList not found!');
}
$taskList.addEventListener('click', clickHandler);
function clickHandler(event) {
  const eventTarget = event.target;
  console.log('eventTarget variable:', eventTarget);
  console.log('eventTarget tagName:', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const $targetTaskListItem = eventTarget.closest('.task-list-item');
    console.log("eventTarget's nearest li ancestor:", $targetTaskListItem);
    $targetTaskListItem.remove();
  }
}
