let gridSize = 16;
let drawColour = '#3A3A3A';
let isColourMode = false;
const colours = ["#d9ce9e", "#68c2d3",
     "#b8354f", "#3f4873",
    "#a1cc95", "#3c7368"]

/* Generate the grid */
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
        newSquare.addEventListener('mouseover', () => {
            newSquare.style.background = drawColour;
            if (isColourMode){
                drawColour = colours[Math.floor(Math.random()*colours.length)];
            }
        });
        container.appendChild(newSquare);
    }
}

generateGrid(gridSize);

/* Reset button */
const resetButton = document.getElementById("reset");

resetButton.addEventListener('click', () => {
    generateGrid(gridSize);
});

/* Change colour mode */
const classicModeButton = document.getElementById("classic-mode");
const colourModeButton = document.getElementById("colour-mode");

// Change to regular mode
classicModeButton.addEventListener('click', () => {
    isColourMode = false;
    drawColour = '#3A3A3A';
});

// Change to colour mode
colourModeButton.addEventListener('click', () => {
    isColourMode = true;
    drawColour = colours[Math.floor(Math.random()*colours.length)];
});

/* Change grid size */
const slider = document.getElementById("range-slider");

slider.oninput = function(){
    gridSize = this.value;
    generateGrid(gridSize);
}