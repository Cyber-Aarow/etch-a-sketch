let container = document.querySelector('#container');
for(let i = 0; i < 16; i++){
    let new_div = document.createElement('div');
    new_div.className = 'row';
    for(let j = 0; j < 16; j++){
        let new_new_div = document.createElement('div');
        new_new_div.className = 'grid column';
        new_div.appendChild(new_new_div);
    }
    container.appendChild(new_div);
}