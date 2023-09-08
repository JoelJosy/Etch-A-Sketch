// Function to make the grid
function createGrid(gridSize) {

    // Clear existing tiles
    if (grid.hasChildNodes()) {
        let divs = document.querySelectorAll('.grid > div');
        divs.forEach((div) => {
            grid.removeChild(div)
        });

    }

    // Create tiles
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < (gridSize**2); i++) {
        grid.appendChild(document.createElement('div'));
    }
    
    // Add class to each hovered tile
    let divs = document.querySelectorAll('.grid > div');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add('tileHover');
        });
    });
}

let grid = document.querySelector('.grid');

// Get no of tiles slider input
let slider = document.getElementById('rangeSlider');
let rangeOut = document.getElementById('rangeOutput');

// Update slider output
slider.oninput =  () => {
    rangeOut.innerHTML = slider.value;
};

// Default grid
createGrid(16)

slider.addEventListener('mouseup', () => {createGrid(slider.value)})


