// Enable dropdown on mobile

/* const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.remove('main-nav--open');

navToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--open')) {
    mainNav.classList.remove('main-nav--open');
  } else {
    mainNav.classList.add('main-nav--open');
  }
}); */

// Slider in story-block

let range = document.querySelector('.slider__range');
let catBefore = document.querySelector('.slider__image--before');
let catAfter = document.querySelector('.slider__image--after');
let buttonBefore = document.querySelector('.slider__button--before');
let buttonAfter = document.querySelector('.slider__button--after');
let viewport = window.innerWidth;

if (viewport < 768) {
  range.setAttribute('value', '0');
} else {
  range.setAttribute('value', '50');
}

range.addEventListener('input', function() {
  let calcValue = 100 - range.value;
  range.setAttribute('value', range.value);
  catBefore.style.clipPath = 'polygon(0 0, ' + calcValue + '%  0, ' + calcValue + '% 100%, 0 100%)';
  catAfter.style.clipPath = 'polygon(100% 0, ' + calcValue + '% 0, ' + calcValue + '% 100%, 100% 100%)';
  if (viewport >= 1440) {
    catBefore.style.clipPath = 'polygon(0 0, ' + (calcValue + 6) + '%  0, ' + (calcValue + 6) + '% 100%, 0 100%)';
    catAfter.style.clipPath = 'polygon(100% 0, ' + (calcValue + 6) + '% 0, ' + (calcValue + 6) + '% 100%, 100% 100%)';
  }
  if (calcValue === 0 || calcValue === 100) {
    catBefore.style.clipPath = 'polygon(0 0, ' + calcValue + '%  0, ' + calcValue + '% 100%, 0 100%)';
    catAfter.style.clipPath = 'polygon(100% 0, ' + calcValue + '% 0, ' + calcValue + '% 100%, 100% 100%)';
  }
});

buttonBefore.addEventListener('click', function() {
  range.value = 0;
  range.setAttribute('value', range.value);
  catBefore.style.clipPath = 'polygon(0 0, 100% 0,  100% 100%, 0 100%)';
  catAfter.style.clipPath = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
});

buttonAfter.addEventListener('click', function() {
  range.value = 100;
  range.setAttribute('value', range.value);
  catBefore.style.clipPath = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
  catAfter.style.clipPath = 'polygon(0 0, 100% 0,  100% 100%, 0 100%)';
});
