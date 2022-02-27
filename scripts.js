var currentPalette;
var color1 = new Color;
var color2 = new Color;
var color3 = new Color;
var color4 = new Color;
var color5 = new Color;

// var colors = ['color-one', 'color-two', 'color-three', 'color-four', 'color-five'];
var savedPalettes = [];
var hexCharacters = ['A','B','C','D', 'E', 'F', '0', '1', '2','3', '4', '5', '6', '7', '8', '9'];

var newPaletteButton = document.querySelector('.new-palette');
var savePaletteButton = document.querySelector('.save-palette');
var palette = document.querySelector('.palette');
var unlockButtonOne = document.querySelector('.unlock-color-1');
var lockButtonOne = document.querySelector('.lock-color-1');
var unlockButtonTwo = document.querySelector('.unlock-color-2');
var lockButtonTwo = document.querySelector('.lock-color-2');
var unlockButtonThree = document.querySelector('.unlock-color-3');
var lockButtonThree = document.querySelector('.lock-color-3');
var unlockButtonFour = document.querySelector('.unlock-color-4');
var lockButtonFour = document.querySelector('.lock-color-4');
var unlockButtonFive = document.querySelector('.unlock-color-5');
var lockButtonFive = document.querySelector('.lock-color-5');

// var lockTwoButton = document.querySelector('.lock-2');
// var lockThreeButton = document.querySelector('.lock-3');
// var lockFourButton = document.querySelector('.lock-4');
// var lockFiveButton = document.querySelector('.lock-5');

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

var savedPaletteSection = document.querySelector('.saved-section');
var colorProps = document.querySelectorAll('.color-props');

window.addEventListener('load', createPalette);
// window.addEventListener('load', generateColors);

newPaletteButton.addEventListener('click', generateColors);
savePaletteButton.addEventListener('click', savePalette);
// lockButton.addEventListener('click', lockColor);

colorOneDiv.addEventListener('click', function(event) {
  if (event.target.className === 'lock-color-1' || 'unlock-color-1') {
    lockButtonOne.classList.toggle('hidden')
    unlockButtonOne.classList.toggle('hidden')
  }
  if (`${lockButtonOne.classList}` === 'lock-color-1') {
    color1.locked = true;
  } else {
      color1.locked = false;
  }
});

colorTwoDiv.addEventListener('click', function(event) {
  if (event.target.className === 'lock-color-2' || 'unlock-color-2') {
    lockButtonTwo.classList.toggle('hidden')
    unlockButtonTwo.classList.toggle('hidden')
  }
  if (`${lockButtonTwo.classList}` === 'lock-color-2') {
    color2.locked = true;
  } else {
      color2.locked = false;
  }
});

colorThreeDiv.addEventListener('click', function(event) {
  if (event.target.className === 'lock-color-3' || 'unlock-color-3') {
    lockButtonThree.classList.toggle('hidden')
    unlockButtonThree.classList.toggle('hidden')
  }
  if (`${lockButtonThree.classList}` === 'lock-color-3') {
    color3.locked = true;
  } else {
      color3.locked = false;
  }
});

colorFourDiv.addEventListener('click', function(event) {
  if (event.target.className === 'lock-color-4' || 'unlock-color-4') {
    lockButtonFour.classList.toggle('hidden')
    unlockButtonFour.classList.toggle('hidden')
  }
  if (`${lockButtonFour.classList}` === 'lock-color-4') {
    color4.locked = true;
  } else {
      color4.locked = false;
  }
});

colorFiveDiv.addEventListener('click', function(event) {
  if (event.target.className === 'lock-color-5' || 'unlock-color-5') {
    lockButtonFive.classList.toggle('hidden')
    unlockButtonFive.classList.toggle('hidden')
  }
  if (`${lockButtonFive.classList}` === 'lock-color-5') {
    color5.locked = true;
  } else {
      color5.locked = false;
  }
});
//
// function lockColor() {
//   if (`${lockButtonOne.classList}` === 'lock-color-1') {
//     color1.locked = true;
//   }
// }
// for (var i = 0; i < colorProps.length; i++) {
//   if (event.className === 'color-one' || 'color-two') {


// lockTwoButton.addEventListener('click', lockColor);
// lockThreeButton.addEventListener('click', lockColor);
// lockFourButton.addEventListener('click', lockColor);
// lockFiveButton.addEventListener('click', lockColor);

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
  generateColors()
  // var firstColor = color1
  currentPalette = new Palette(color1, color2, color3, color4, color5);
}
// function createInitialPalette() {
//   generateInitialColors()
//   currentPalette = new Palette(color1, color2, color3, color4, color5);
// }
//This function would take a snapshot of the current palette being displayed, make a copy of it, and store it
//This will push the currently displayed palette, with the colors 1-5, into the savedpalettes array as an object.
// color1, color2, color3, color4, color5

function savePalette() {
  savedPalettes.push(currentPalette);
  // pushing an object into an array
  displaySavedPalettes();
  createPalette()
  // currentPalette = new Palette();
};

// function displaySavedPalettes() {
//   var userSavedPalettes = [];
//   for (var i = 0; i < savedPalettes.length; i++) {
//     userSavedPalettes += `<section class="saved-palette" id="${savedPalettes[i].id}">
//     <div class="saved-color"></div>
//     <div class="saved-color"></div>
//     <div class="saved-color"></div>
//     <div class="saved-color"></div>
//     <div class="saved-color"></div>
//     <img class="trash-icon" src="./icons/trash.png" alt="delete button">
//     </section>`
//   }
//   for (var i = 0; i < savedPalettes.length; i++) {
//     var paletteBlockOne = document.querySelector(.saved)
//   }
//   savedPaletteSection.innerHTML = userSavedPalettes;
// }

function displaySavedPalettes() {
  savedPaletteSection.innerHTML = "";
  for (var i = 0; i < savedPalettes.length; i++) {
  var savedPalette = document.createElement("section");
  savedPalette.classList.add("saved-palette");
  savedPaletteSection.appendChild(savedPalette);
    var colorBox1 = document.createElement("div");
    colorBox1.classList.add("saved-color");
    savedPalette.appendChild(colorBox1)
    colorBox1.style.backgroundColor = `${savedPalettes[i].firstColor.hexCode}`
    var colorBox2 = document.createElement("div");
    colorBox2.classList.add("saved-color");
    savedPalette.appendChild(colorBox2)
    colorBox2.style.backgroundColor = `${savedPalettes[i].secondColor.hexCode}`
    var colorBox3 = document.createElement("div");
    colorBox3.classList.add("saved-color");
    savedPalette.appendChild(colorBox3)
    colorBox3.style.backgroundColor = `${savedPalettes[i].thirdColor.hexCode}`
    var colorBox4 = document.createElement("div");
    colorBox4.classList.add("saved-color");
    savedPalette.appendChild(colorBox4)
    colorBox4.style.backgroundColor = `${savedPalettes[i].fourthColor.hexCode}`
    var colorBox5 = document.createElement("div");
    colorBox5.classList.add("saved-color");
    savedPalette.appendChild(colorBox5)
    colorBox5.style.backgroundColor = `${savedPalettes[i].fifthColor.hexCode}`
    var trash = document.createElement("div");
    trash.classList.add("trash-icon");
    savedPalette.appendChild(trash)
    }

}

// data-hexcode="${savedPalettes[i].firstColor.hexCode}"

function deletePalette(event) {
   if (event.target.className === '.trash') {

   }
}

// function generateInitialColors() {
//   color1 = new Color(generateHexCode())
//   colorOneDiv.style.backgroundColor = color1.hexCode
//   hexCodeOne.innerText = color1.hexCode
//   color2 = new Color(generateHexCode())
//   colorTwoDiv.style.backgroundColor = color2.hexCode
//   hexCodeTwo.innerText = color2.hexCode
//   color3 = new Color(generateHexCode())
//   colorThreeDiv.style.backgroundColor = color3.hexCode
//   hexCodeThree.innerText = color3.hexCode
//   color4 = new Color(generateHexCode())
//   colorFourDiv.style.backgroundColor = color4.hexCode
//   hexCodeFour.innerText = color4.hexCode
//   color5 = new Color(generateHexCode())
//   colorFiveDiv.style.backgroundColor = color5.hexCode
//   hexCodeFive.innerText = color5.hexCode
// }

function generateColors() {
  if (color1.locked === false) {
    color1 = new Color(generateHexCode())
  colorOneDiv.style.backgroundColor = color1.hexCode
  hexCodeOne.innerText = color1.hexCode
}
  if (color2.locked === false) {
  color2 = new Color(generateHexCode())
  colorTwoDiv.style.backgroundColor = color2.hexCode
  hexCodeTwo.innerText = color2.hexCode
}
  if (color3.locked === false) {
  color3 = new Color(generateHexCode())
  colorThreeDiv.style.backgroundColor = color3.hexCode
  hexCodeThree.innerText = color3.hexCode
}
  if (color4.locked === false) {
  color4 = new Color(generateHexCode())
  colorFourDiv.style.backgroundColor = color4.hexCode
  hexCodeFour.innerText = color4.hexCode
}
  if (color5.locked === false) {
  color5 = new Color(generateHexCode())
  colorFiveDiv.style.backgroundColor = color5.hexCode
  hexCodeFive.innerText = color5.hexCode
}
}


// function replaceColor() {
//if (color.locked === false) {
// generateHexCode()

// } else {
// return
// }
// }
