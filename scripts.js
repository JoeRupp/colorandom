var hexCharacters = ['A','B','C','D', 'E', 'F', '0', '1', '2','3', '4', '5', '6', '7', '8', '9'];
var newPaletteButton = document.querySelector('.new-palette');
var savePaletteButton = document.querySelector('.save-palette');
var lockOneButton = document.querySelector('.lock-1');
var lockTwoButton = document.querySelector('.lock-2');
var lockThreeButton = document.querySelector('.lock-3');
var lockFourButton = document.querySelector('.lock-4');
var lockFiveButton = document.querySelector('.lock-5');
var colorOneDiv = document.querySelector('.color-one');
var colorTwoDiv = document.querySelector('.color-two');
var colorThreeDiv = document.querySelector('.color-three');
var colorFourDiv = document.querySelector('.color-four');
var colorFiveDiv = document.querySelector('.color-five');
var hexCodeOne = document.querySelector('.hex-code-1');
var hexCodeTwo = document.querySelector('.hex-code-2');
var hexCodeThree = document.querySelector('.hex-code-3');
var hexCodeFour = document.querySelector('.hex-code-4');
var hexCodeFive = document.querySelector('.hex-code-5');

window.addEventListener('load', createPalette);
newPaletteButton.addEventListener('click', generateColors);
savePaletteButton.addEventListener('click', savePalette);
lockOneButton.addEventListener('click', lockColor);
lockTwoButton.addEventListener('click', lockColor);
lockThreeButton.addEventListener('click', lockColor);
lockFourButton.addEventListener('click', lockColor);
lockFiveButton.addEventListener('click', lockColor);

window.addEventListener('load', generateColors);

var currentPalette
var color1
var color2
var color3
var color4
var color5

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateHexCode() {
  var randomHexCode = [];
  for (var i = 0; i < 6; i++) {
  var hexElement = hexCharacters[getRandomIndex(hexCharacters)];
  randomHexCode.push(hexElement);
  }
  return `#${randomHexCode.join('')}`
};

function createPalette() {
  currentPalette = new Palette(color1, color2, color3, color4, color5);
}

function savePalette() {

}

function generateColors() {
  color1 = new Color(generateHexCode())
  colorOneDiv.style.backgroundColor = color1.hexCode
  hexCodeOne.innerText = color1.hexCode
  color2 = new Color(generateHexCode())
  colorTwoDiv.style.backgroundColor = color2.hexCode
  hexCodeTwo.innerText = color2.hexCode
  color3 = new Color(generateHexCode())
  colorThreeDiv.style.backgroundColor = color3.hexCode
  hexCodeThree.innerText = color3.hexCode
  color4 = new Color(generateHexCode())
  colorFourDiv.style.backgroundColor = color4.hexCode
  hexCodeFour.innerText = color4.hexCode
  color5 = new Color(generateHexCode())
  colorFiveDiv.style.backgroundColor = color5.hexCode
  hexCodeFive.innerText = color5.hexCode
}

function lockColor() {

}

// function replaceColor() {
//if (color.locked === false) {
// generateHexCode()

// } else {
// return
// }
// }
