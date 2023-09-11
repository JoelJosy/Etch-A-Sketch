// Function to make the grid
function createGrid(gridSize) {

    // Clear existing tiles
    clearGrid(1);

    // Create tiles
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < (gridSize**2); i++) {
        grid.appendChild(document.createElement('div'));
    };
    
    // Add class to each hovered tile
    let divs = document.querySelectorAll('.grid > div');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = bgColor;
        });
    });
};

// Clearing grid
function clearGrid(opt) {
    if (opt == 1) {
        if (grid.hasChildNodes()) {
            let divs = document.querySelectorAll('.grid > div');
            divs.forEach((div) => {
                grid.removeChild(div);
            });
    
        };
    } else if (opt == 2) {
        let divs = document.querySelectorAll('.grid > div');
        divs.forEach((div) => {
            div.style.backgroundColor = '#470077';
        });
    };
};

let grid = document.querySelector('.grid');
let clearButton = document.querySelector('#clearButton');

// Get no of tiles slider input
let slider = document.getElementById('rangeSlider');
let rangeOut = document.getElementById('rangeOutput');

// Update slider output
slider.oninput =  () => {
    rangeOut.innerHTML = `${slider.value} x ${slider.value}`;
};

// Clear Button 
clearButton.onclick = () => {clearGrid(2)};

// Color Picker
let colorPick = document.getElementById('colorpick');
let bgColor = '#FFD500'

colorPick.addEventListener('change', function changeColor(e) {
    bgColor = `${e.target.value}`;  
});

// Default grid
createGrid(16);

slider.addEventListener('mouseup', () => {createGrid(slider.value)});


