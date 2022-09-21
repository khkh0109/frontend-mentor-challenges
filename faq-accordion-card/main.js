'use strict';

const h2 = document.querySelectorAll('.card__accordion li h2');


h2.forEach(element => {
  element.addEventListener('click', (event) => {
    if(event.target.nextElementSibling.className === 'act') {
      event.target.nextElementSibling.classList.remove('act');
      element.style.fontWeight = '400';
      element.style.setProperty('--rotate', 'rotate(0deg)');

      event.target.nextElementSibling.dataset.group = 'acc';
    } else {
      event.target.nextElementSibling.classList.add('act');
      element.style.fontWeight = '700';
      element.style.setProperty('--rotate', 'rotate(180deg)');
    }
  });
});

