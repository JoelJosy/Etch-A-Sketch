let grid = document.querySelector('.grid');


// Create tiles
for (let i = 0; i < (16**2); i++) {
    grid.appendChild(document.createElement('div'));
}


// Add class to each hovered tile
let divs = document.querySelectorAll('.grid > div')
divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('tileHover')
    })
});