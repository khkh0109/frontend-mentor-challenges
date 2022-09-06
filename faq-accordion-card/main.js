'use strict';

const li = document.querySelector('.card__accordion li');
const h2 = document.querySelectorAll('.card__accordion li h2');
const p = document.querySelector('.card__accordion li p');

h2.forEach(element => {
  element.addEventListener('click', (event) => {
    if(event.target.nextElementSibling.className === 'act') {
      event.target.nextElementSibling.classList.remove('act');
      element.style.fontWeight = '400';
      element.style.setProperty('--rotate', 'rotate(0deg)');
    } else {
      event.target.nextElementSibling.classList.add('act');
      element.style.fontWeight = '700';
      element.style.setProperty('--rotate', 'rotate(180deg)');
    }
  });
});