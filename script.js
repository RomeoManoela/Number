'use strict';
let el1 = 0;
let el2 = 0;
let el3 = 0;
const spanEl = document.querySelectorAll('span');
setInterval(function () {
  if (el1 < 500) {
    el1++;
    spanEl[0].textContent = `${el1}+`;
  }

  if (el2 < 17140) {
    el2 += 12;
    spanEl[1].textContent = `${el2}+`;
  }
  if (el3 < 1500) {
    el3 += 2;
    spanEl[2].textContent = `${el3}+`;
  }
}, 2);
