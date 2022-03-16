//@ts-check
console.log("Js Initialised");
let gFrame = document.getElementsByClassName("gFrame");

for (let i = 0; i < gFrame.length; i++) {
  //@ts-ignore
  gFrame[i].style.borderRadius = randomRadius(45);
}

/**
 *
 * @param {number} num defines the max percantage of curvyness
 */
function randomRadius(num) {
  let rad = "";
  for (let i = 0; i < 8; i++) {
    rad += getRandomInt(num) + "% ";
    if (i == 3) {
      rad += "/ ";
    }
  }
  return rad;
}
/**
 *
 * @param {number} max upper random ceiling
 * @returns number
 */
function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  return Math.random() * (max - 15) + 15; //random number more than 15 but no more than max
}
//@ts-ignore
particlesJS.load("stars", "/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});
