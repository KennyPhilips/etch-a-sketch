//config
const gridSizeSlider = document.querySelector("#gridsize-slider");
let gridSize = gridSizeSlider.value;
const gridDimension = 600;
const boxWidth = gridDimension / gridSize;
const container = document.querySelector("#container");

//drawGrid
function drawGrid(){
    for (let i = 0; i < gridSize; i++) {
        const newLine = document.createElement("div");
        newLine.setAttribute("class", "line");
        container.appendChild(newLine);
        for (let j = 0; j < gridSize; j++) {
            const newBox = document.createElement("div");
            newBox.setAttribute("class", "box");
            newLine.appendChild(newBox);
        }    
    }
}

//hover effect
function hoverEffect(){
    const boxes = document.querySelectorAll("div.box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "red";
        })
    })
    boxes.forEach((box) => {
        box.addEventListener("touchmove", () => {
            box.style.backgroundColor = "red";
        })
    })
    /*boxes.forEach((box) => {
        box.addEventListener("mouseleave", () => {
            box.style.backgroundColor = "";
        })
    })*/
}

//hide grid
function hideGrid(){
    container.innerHTML = "";
}

//execution
drawGrid();
hoverEffect();

//resize grid
gridSizeSlider.addEventListener("mouseup", () => {
    gridSize = gridSizeSlider.value;
    hideGrid();
    drawGrid();
    hoverEffect();
});
gridSizeSlider.addEventListener("touchend", () => {
    gridSize = gridSizeSlider.value;
    hideGrid();
    drawGrid();
    hoverEffect();
});