//config
const gridSizeSlider = document.querySelector("#gridsize-slider");
let gridSize = gridSizeSlider.value;
const gridDimension = 600;
const boxWidth = gridDimension / gridSize;
const container = document.querySelector("#container");
const reset = document.querySelector("#resetButton");

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

//drawing
let canDraw = false;

container.addEventListener("mousedown", () => canDraw = true);
container.addEventListener("mouseup", () => canDraw = false);

function hoverEffect(){
    const boxes = document.querySelectorAll("div.box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            if (canDraw === true){
                if(box.style.backgroundColor){
                    const opacity = setOpacity(box.style.backgroundColor);
                    box.style.backgroundColor = opacity;
                } else {
                    box.style.backgroundColor = randomColorGenerator();
                }
            }
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

//reset the grid
reset.addEventListener("click", () => {
    hideGrid();
    drawGrid();
    hoverEffect();
}
)

function randomColorGenerator(){
    let rgba = [];
    for (let i = 0; i < 3; i++) {
        rgba[i] = Math.floor(Math.random() * 256);        
    }
    return "rgba(" + rgba[0] + "," + rgba[1] + "," + rgba[2] + ", 0.1)";
}

function setOpacity(string){
    const length = string.length;
    const opacity = string.substring(length-4, length-1);
    let newString = string.substring(0, length-4);
    let newOpacity = Number(opacity);
    if (opacity < 1 ) {
        newOpacity += 0.1;
        newString= newString + newOpacity + ")";
        return newString;
    }
    return string;
}