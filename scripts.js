var hexCharacters = ['A','B','C','D', 'E', 'F', '0', '1', '2','3', '4', '5', '6', '7', '8', '9'];
var newPaletteButton = document.querySelector('.new-palette');
var savePaletteButton = document.querySelector('.save-palette');
var lockOneButton = document.querySelector('.lock-1');
var lockTwoButton = document.querySelector('.lock-2');
var lockThreeButton = document.querySelector('.lock-3');
var lockFourButton = document.querySelector('.lock-4');
var lockFiveButton = document.querySelector('.lock-5');

window.addEventListener('load', createPalette);
newPaletteButton.addEventListener('click', generateColors);
savePaletteButton.addEventListener('click', savePalette);
lockOneButton.addEventListener('click', lockColor);
lockTwoButton.addEventListener('click', lockColor);
lockThreeButton.addEventListener('click', lockColor);
lockFourButton.addEventListener('click', lockColor);
lockFiveButton.addEventListener('click', lockColor);



var currentPalette

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
  currentPalette = new Palette()
}

function savePalette() {

}

function generateColors() {
  currentPalette.color1 = new Color(generateHexCode())
  currentPalette.color2 = new Color(generateHexCode())
  currentPalette.color3 = new Color(generateHexCode())
  currentPalette.color4 = new Color(generateHexCode())
  currentPalette.color5 = new Color(generateHexCode())
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
