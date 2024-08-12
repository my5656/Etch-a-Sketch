const container = document.getElementById('container');
const gridSize = 16;
const numberOfDiv = gridSize*gridSize;
for (let i=0; i < numberOfDiv; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('div-class');
    container.appendChild(newDiv);
}