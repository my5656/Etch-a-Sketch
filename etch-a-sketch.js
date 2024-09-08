const container = document.getElementById('container');
let gridSize = 16;
createInitialGrid(gridSize);

function createInitialGrid(gridSize) {
    container.style.setProperty('--grid-size', gridSize);
    for (let i = 0; i < gridSize * gridSize; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('div-class');
        container.appendChild(newDiv);
    }
};

container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('div-class')) {
        event.target.style.backgroundColor = '#87ceeb';
    }
});

const numberInput = document.getElementById("numberInput");
const confirmButton = document.getElementById("confirmButton");
confirmButton.addEventListener("click", function () {
    let inputValue = parseInt(numberInput.value);
    if (isNaN(inputValue) || inputValue <= 0) {
        alert("Please enter a valid number greater than 0.");
    }
    else if (inputValue > 100) {
        alert("Please enter a number less than 100.");
    }
    else {
        gridSize = inputValue;
        recreateGrid(gridSize);
    }
});
function recreateGrid(gridSize) {
    container.innerHTML = '';
    container.style.setProperty('--grid-size', gridSize);
    for (let i = 0; i < gridSize * gridSize; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('div-class');
        container.appendChild(newDiv);
    }
};