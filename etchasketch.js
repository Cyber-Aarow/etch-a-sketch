let container = document.querySelector('#container');

function deleteGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function createGrid(gridSize){
    deleteGrid();
    for(let i = 0; i < gridSize; i++){
        let new_div = document.createElement('div');
        new_div.className = 'row';
        for(let j = 0; j < gridSize; j++){
            let new_new_div = document.createElement('div');
            new_new_div.className = 'grid column';
            new_div.appendChild(new_new_div);
        }
        container.appendChild(new_div);
    }
    //Allow drawing via hovering
    let grid = document.querySelectorAll('.grid');
    for(let i = 0; i < grid.length; i++){
        grid[i].addEventListener('mouseover', (e) =>{
            grid[i].style.backgroundColor = 'black';
        });
    }
}

let sizeSelector = document.querySelector('#sizeSelector');

sizeSelector.addEventListener('click', (e) => {
    let size = prompt("What size do you want it to be? 1-100.");
    createGrid(size);
});

//Create initial grid
createGrid(16);
