//@ts-check
console.log("Js Initialised");
let gFrame = document.getElementsByClassName("gFrame");

const blob = [
  getComputedStyle(document.documentElement).getPropertyValue("--blob1"),
  getComputedStyle(document.documentElement).getPropertyValue("--blob2"),
  getComputedStyle(document.documentElement).getPropertyValue("--blob3"),
  getComputedStyle(document.documentElement).getPropertyValue("--blob4"),
  getComputedStyle(document.documentElement).getPropertyValue("--blob5"),
];

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
