'use strict';
console.log('Js Initialised');
const gFrame = document.getElementsByClassName('gFrame');
const scrollContainer = document.getElementsByClassName('gallery')[0];
/**
 *
 * @param {number} max upper random ceiling
 * @returns number
 */
function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  return Math.random() * (max - 15) + 15; //random number more than 15 but no more than max
}

/**
 *
 * @param {number} num defines the max percantage of curvyness
 */
function randomRadius(num) {
  let rad = '';
  for (let i = 0; i < 8; i++) {
    rad += getRandomInt(num) + '% ';
    if (i === 3) {
      rad += '/ ';
    }
  }
  return rad;
}

for (let i = 0; i < gFrame.length; i++) {
  gFrame[i].style.borderRadius = randomRadius(45);
}

particlesJS.load('stars', '/Particles/particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
});
/* -------------------------- horizontal scrolling -------------------------- */
scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});
