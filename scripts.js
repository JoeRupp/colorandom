//VARIABLES ---------------------------------------------

var currentPalette;
var color1 = new Color;
var color2 = new Color;
var color3 = new Color;
var color4 = new Color;
var color5 = new Color;

var savedPalettes = [];
var hexCharacters = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var newPaletteButton = document.querySelector('.new-palette');
var savePaletteButton = document.querySelector('.save-palette');
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

var lockOne = document.querySelector('#lockOne');
var lockTwo = document.querySelector('#lockTwo');
var lockThree = document.querySelector('#lockThree');
var lockFour = document.querySelector('#lockFour');
var lockFive = document.querySelector('#lockFive');

var colorOneDiv = document.querySelector('#colorOne');
var colorTwoDiv = document.querySelector('#colorTwo');
var colorThreeDiv = document.querySelector('#colorThree');
var colorFourDiv = document.querySelector('#colorFour');
var colorFiveDiv = document.querySelector('#colorFive');

var hexCodeOne = document.querySelector('.hex-code-1');
var hexCodeTwo = document.querySelector('.hex-code-2');
var hexCodeThree = document.querySelector('.hex-code-3');
var hexCodeFour = document.querySelector('.hex-code-4');
var hexCodeFive = document.querySelector('.hex-code-5');

var savedPaletteSection = document.querySelector('.saved-section');

//EVENT LISTENERS ---------------------------------------------

window.addEventListener('load', makeNewPalette);

newPaletteButton.addEventListener('click', makeNewPalette);
savePaletteButton.addEventListener('click', savePalette);

lockOne.addEventListener('click', function() {
  lockColor(lockButtonOne, unlockButtonOne, color1);
});

lockTwo.addEventListener('click', function() {
  lockColor(lockButtonTwo, unlockButtonTwo, color2);
});

lockThree.addEventListener('click', function() {
  lockColor(lockButtonThree, unlockButtonThree, color3);
});

lockFour.addEventListener('click', function() {
  lockColor(lockButtonFour, unlockButtonFour, color4);
});

lockFive.addEventListener('click', function() {
  lockColor(lockButtonFive, unlockButtonFive, color5);
});

savedPaletteSection.addEventListener('click', function(event) {
   if (event.target.className === 'trash-icon') {
     for (var i = 0; i < savedPalettes.length; i++) {
       if (`${savedPalettes[i].id}` === event.target.id) {
         savedPalettes.splice(i, 1);
       }
     }
   }
  displaySavedPalettes();
 });

//FUNCTIONS ---------------------------------------------

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateHexCode() {
  var randomHexCode = [];
  for (var i = 0; i < 6; i++) {
    var hexElement = hexCharacters[getRandomIndex(hexCharacters)];
    randomHexCode.push(hexElement);
  }

  return `#${randomHexCode.join('')}`;
};

function savePalette() {
  savedPalettes.push(currentPalette);
  displaySavedPalettes();
  currentPalette = new Palette(color1, color2, color3, color4, color5);
};

function makeNewPalette() {
  generateColors()
  currentPalette = new Palette(color1, color2, color3, color4, color5);
};

function lockColor(lockButton, unlockButton, color) {
  lockButton.classList.toggle('hidden');
  unlockButton.classList.toggle('hidden');
  if (!lockButton.classList.contains('hidden')) {
    color.locked = true;
  } else {
    color.locked = false;
  }
};

function displaySavedPalettes() {
  savedPaletteSection.innerHTML = "";
  for (var i = 0; i < savedPalettes.length; i++) {
    var savedPalette = document.createElement("section");
    savedPalette.classList.add("saved-palette");
    savedPaletteSection.appendChild(savedPalette);
    var colorBox1 = document.createElement("div");
    colorBox1.classList.add("saved-color");
    savedPalette.appendChild(colorBox1);
    colorBox1.style.backgroundColor = `${savedPalettes[i].firstColor.hexCode}`;
    var colorBox2 = document.createElement("div");
    colorBox2.classList.add("saved-color");
    savedPalette.appendChild(colorBox2);
    colorBox2.style.backgroundColor = `${savedPalettes[i].secondColor.hexCode}`;
    var colorBox3 = document.createElement("div");
    colorBox3.classList.add("saved-color");
    savedPalette.appendChild(colorBox3);
    colorBox3.style.backgroundColor = `${savedPalettes[i].thirdColor.hexCode}`;
    var colorBox4 = document.createElement("div");
    colorBox4.classList.add("saved-color");
    savedPalette.appendChild(colorBox4);
    colorBox4.style.backgroundColor = `${savedPalettes[i].fourthColor.hexCode}`;
    var colorBox5 = document.createElement("div");
    colorBox5.classList.add("saved-color");
    savedPalette.appendChild(colorBox5);
    colorBox5.style.backgroundColor = `${savedPalettes[i].fifthColor.hexCode}`;
    var trash = document.createElement("div");
    trash.classList.add("trash-icon");
    trash.setAttribute("id", `${savedPalettes[i].id}`);
    savedPalette.appendChild(trash);
    }
};

function generateColors() {
  if (color1.locked === false) {
    color1 = new Color(generateHexCode());
    colorOneDiv.style.backgroundColor = color1.hexCode;
    hexCodeOne.innerText = color1.hexCode;
  }

  if (color2.locked === false) {
    color2 = new Color(generateHexCode());
    colorTwoDiv.style.backgroundColor = color2.hexCode;
    hexCodeTwo.innerText = color2.hexCode;
  }

  if (color3.locked === false) {
    color3 = new Color(generateHexCode());
    colorThreeDiv.style.backgroundColor = color3.hexCode;
    hexCodeThree.innerText = color3.hexCode;
  }

  if (color4.locked === false) {
    color4 = new Color(generateHexCode());
    colorFourDiv.style.backgroundColor = color4.hexCode;
    hexCodeFour.innerText = color4.hexCode;
  }

  if (color5.locked === false) {
    color5 = new Color(generateHexCode());
    colorFiveDiv.style.backgroundColor = color5.hexCode;
    hexCodeFive.innerText = color5.hexCode;
  }
};
