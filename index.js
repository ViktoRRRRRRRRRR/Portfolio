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
/* --------------------------- prevent scroll func -------------------------- */
//set scrolBlock to true if there are many gFrames so scroll works well, otherwise keep it to false
let scrollBlock = false; // very important variable - decides if scroll should be blocked
/**
 *
 * @param {event} evt accepts the event to stop scroll
 */
function prevent(evt) {
  if (scrollBlock === true) {
    evt.preventDefault();
  }
}
/* -------------------------- horizontal scrolling -------------------------- */
scrollContainer.addEventListener('wheel', (evt) => {
  prevent(evt);
  scrollContainer.scrollLeft += evt.deltaY;
});
/* ------------------------- detect scroll to top and let  ------------------------ */
scrollContainer.addEventListener('scroll', () => {
  if (scrollContainer.scrollLeft <= 0) {
    scrollBlock = false;
  } else {
    scrollBlock = true;
  }
});
// if (
//   scrollContainer.offsetWidth + scrollContainer.scrollLeft >=
//   scrollContainer.scrollWidth
// ) {
//   console.log('scrolled to bottom'); to detect if scrolled to bottom which currently isnt useful
//   scrollBlock = false;
// }
