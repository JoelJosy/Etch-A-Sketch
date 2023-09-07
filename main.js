let grid = document.querySelector('.grid');
console.log(grid);

for (let i = 0; i < (16**2); i++) {
    let divEle =  document.createElement('div');
    grid.appendChild(divEle);
}