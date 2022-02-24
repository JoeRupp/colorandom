// if (color.locked === false) {
//
// }
var hexCharacters = ['A','B','C','D', 'E', 'F', '0', '1', '2','3', '4', '5', '6', '7', '8', '9'];


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
// function replaceColor() {
//if (color.locked === false) {
// generateHexCode()

// } else {
// return
// }
// }
