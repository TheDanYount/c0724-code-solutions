'use strict';
const imgRelativeUrls = [
  './images/001.png',
  './images/004.png',
  './images/007.png',
  './images/025.png',
  './images/039.png',
];
const $indicators = document.querySelector('#indicators');
if (!$indicators) throw new Error('$indicators not found!');
const indicatorList = Array.from($indicators.querySelectorAll('i'));
const $currentImg = document.querySelector('#current-img');
const $mainRow = document.querySelector('#main-row');
let position = 1;
function updateImg() {
  if (!$currentImg) throw new Error('$currentImg not found!');
  $currentImg.src = imgRelativeUrls[position - 1];
  for (const indicator of indicatorList) {
    if (Number(indicator.dataset.pos) === position) {
      indicator.className = 'fa-solid fa-circle';
    } else {
      indicator.className = 'fa-regular fa-circle';
    }
  }
}
function updateCarousel() {
  if (position < 5) {
    position++;
  } else {
    position = 1;
  }
  updateImg();
}
if (!$mainRow) throw new Error('$mainRow not found!');
$mainRow.addEventListener('click', handleMainRowClick);
function handleMainRowClick(event) {
  const eventTarget = event.target;
  if (!eventTarget) throw new Error('eventTarget not found!');
  if (eventTarget.matches('.fa-chevron-left')) {
    if (position > 1) {
      position--;
    } else {
      position = 5;
    }
    updateImg();
    clearInterval(carouselSwitcher);
    carouselSwitcher = setInterval(updateCarousel, 3000);
  } else if (eventTarget.matches('.fa-chevron-right')) {
    if (position < 5) {
      position++;
    } else {
      position = 1;
    }
    updateImg();
    clearInterval(carouselSwitcher);
    carouselSwitcher = setInterval(updateCarousel, 3000);
  }
}
$indicators.addEventListener('click', handleIndicatorsClick);
function handleIndicatorsClick(event) {
  const eventTarget = event.target;
  if (!eventTarget) throw new Error('eventTarget not found!');
  if (!eventTarget.matches('i')) return;
  position = Number(eventTarget.dataset.pos);
  updateImg();
  clearInterval(carouselSwitcher);
  carouselSwitcher = setInterval(updateCarousel, 3000);
}
let carouselSwitcher = setInterval(updateCarousel, 3000);
