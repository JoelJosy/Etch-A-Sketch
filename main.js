let grid = document.querySelector('.grid');

// Get no of tiles input
let slider = document.getElementById('rangeSlider');
let rangeOut = document.getElementById('rangeOutput');
let sliderValue = slider.value;


slider.oninput =  () => {
    sliderValue = slider.value;
    rangeOut.innerHTML = sliderValue;
};


// Create tiles
grid.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`;
for (let i = 0; i < (sliderValue**2); i++) {
    grid.appendChild(document.createElement('div'));
}


// Add class to each hovered tile
let divs = document.querySelectorAll('.grid > div')
divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('tileHover');
    });
});