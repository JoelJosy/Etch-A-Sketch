// Function to make the grid
function createGrid(gridSize) {
    toggleGridBox.checked = true;

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
    let divs = document.querySelectorAll('.grid > div');
    if (opt == 1) {
        if (grid.hasChildNodes()) {
            divs.forEach((div) => {
                grid.removeChild(div);
            });
    
        };
    } else if (opt == 2) {
        divs.forEach((div) => {
            div.style.backgroundColor = '#3D0066';
        });
    } else if (opt == 3) {
        divs.forEach((div) => {
            div.style.backgroundColor = bgColor;
        });
    }
};

// Function to check if box is checked
function checkToggle() {
    let tiles = document.querySelectorAll('.grid > div');
    if (toggleGridBox.checked == true) {
        tiles.forEach((tile) => {
            tile.style.border = "1px rgba(251, 255, 121, 0.29) solid";
        });
    } else if (toggleGridBox.checked == false) {
        tiles.forEach((tile) => {
            tile.style.border = "none";
        });
    }
}

let grid = document.querySelector('.grid');
let clearButton = document.querySelector('#clearButton');
let fillButton = document.querySelector('#fillButton');

// Get no of tiles slider input
let slider = document.getElementById('rangeSlider');
let rangeOut = document.getElementById('rangeOutput');

// Update slider output
slider.oninput =  () => {
    rangeOut.innerHTML = `${slider.value} x ${slider.value}`;
};

// Clear Button 
clearButton.onclick = () => {clearGrid(2)};

// Fill color button
fillButton.onclick = () => {clearGrid(3)};

// Toggle grid lines
let toggleGridBox = document.getElementById('toggleGridBox');

toggleGridBox.addEventListener('change', checkToggle)

// Color Picker
let colorPick = document.getElementById('colorpick');
let bgColor = '#FFD500'

colorPick.addEventListener('change', function changeColor(e) {
    bgColor = `${e.target.value}`;  
});

// Default grid
createGrid(16);

slider.addEventListener('mouseup', () => {createGrid(slider.value)});


