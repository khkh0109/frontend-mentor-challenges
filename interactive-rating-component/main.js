'use strict';
const sectionThankYou = document.querySelector(".thank-you");
const sectionRating = document.querySelector(".rating");
const form = document.querySelector(".rating__form");
const span = document.querySelector(".thank-you__selected span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  for(let i = 0; i < 5; i++) {
    if(e.target[i].checked === true) {
      span.innerText = e.target[i].defaultValue;
      sectionRating.id = "blocked";
      sectionThankYou.removeAttribute("id");
    }
  }
});
