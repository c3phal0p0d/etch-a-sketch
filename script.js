let gridSize = 16;
let drawColour = '#3A3A3A';
let isColorMode = false;
const maxSize = 64;

const container = document.querySelector('#container');
container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr)`);

for (let i=0; i<gridSize**2; i++){
    let square = document.createElement('div');
    container.appendChild(square);
}

function draw(){
    square.setAttribute('style', `background: ${drawColour};`);
}

function setModeToColour(){
    return 0;
}

function setModeToRegular(){
    return 0;
}

function setGridSize(){
    return 0;
}