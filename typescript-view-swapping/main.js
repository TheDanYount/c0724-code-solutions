'use strict';
const $tabContainer = document.querySelector('.tab-container');
const $viewClassNodeList = document.querySelectorAll('.view');
const $tabClassNodeList = document.querySelectorAll('.tab');
if (!$tabContainer) throw new Error('$tabContainer not found!');
$tabContainer.addEventListener('click', clickHandler);
function clickHandler(event) {
  const eventTarget = event.target;
  if (!eventTarget.matches('.tab')) {
    // console.log('Tab not clicked.');
    return;
  } else {
    for (const tab of $tabClassNodeList) {
      if (tab === eventTarget) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    }
    for (const view of $viewClassNodeList) {
      if (!(view instanceof HTMLElement))
        throw new Error('view not HTMLElement');
      if (view.dataset.view === eventTarget.dataset.view) {
        view.className = 'view';
      } else {
        view.className = 'view hidden';
      }
    }
  }
}
