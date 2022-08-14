let gridSize = 16;
let drawColour = '#3A3A3A';
let isColorMode = false;
const maxSize = 64;

function generateGrid(gridSize){
    const container = document.querySelector('#container');
    container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr)`);

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.remove();
    });

    for (let i=0; i<gridSize**2; i++){
        let newSquare = document.createElement('div');
        newSquare.classList.add("square");
        newSquare.addEventListener('mouseover', function handleMouseOver() {
            newSquare.style.background = drawColour;
        });
        container.appendChild(newSquare);
    }


}

generateGrid(gridSize);


function setModeToColour(){
    return 0;
}

function setModeToRegular(){
    return 0;
}

const slider = document.getElementById("range-slider");

slider.oninput = function(){
    gridSize = this.value;
    generateGrid(gridSize);
}