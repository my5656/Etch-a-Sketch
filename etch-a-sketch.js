const container = document.getElementById('container');
const gridSize = 16;
const numberOfDiv = gridSize*gridSize;
for (let i=0; i < numberOfDiv; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('div-class');
    container.appendChild(newDiv);
};
container.addEventListener('mouseover', (event)=>{
    if (event.target.classList.contains('div-class')) {
        event.target.style.backgroundColor = '#87ceeb';
    }
}); 

const numberInput = document.getElementById("numberInput");
const confirmButton = document.getElementById("confirmButton");
confirmButton.addEventListener("click", function(){
    const gridNumber = parseInt(numberInput.value);
    if (isNaN(gridNumber) || gridNumber<=0){
        alert("Please enter a valid number greater than 0.");
    }
    if (gridNumber > 100){
        alert("Please enter a number less than 100.");
    }
    recreateGrid(gridNumber);
});
function recreateGrid(gridNumber){
    container.innerHTML = '';
    const gridSize = Math.floor(800/gridNumber);
    for (let i=0; i < gridNumber*gridNumber; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('div-class');
        newDiv.style.width = `${gridSize}px`;
        newDiv.style.height = `${gridSize}px`;
        container.appendChild(newDiv);
    }
};