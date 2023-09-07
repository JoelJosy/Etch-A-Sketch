let grid = document.querySelector('.grid');

// Get no of tiles input
const input = prompt("Enter number of tiles");
grid.style.gridTemplateColumns = `repeat(${input}, 1fr)`;

// Create tiles

for (let i = 0; i < (input**2); i++) {
    grid.appendChild(document.createElement('div'));
}


// Add class to each hovered tile
let divs = document.querySelectorAll('.grid > div')
divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('tileHover');
    });
});