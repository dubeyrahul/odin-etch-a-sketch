const container = document.querySelector(".container");
const DEFAULTSIZE = 10;
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", drawGrid);
createGrid(DEFAULTSIZE);

function drawGrid() {
    const grid = document.querySelector(".grid");
    if (grid != null) container.removeChild(grid);
    const numSquares = getNumSquares();
    createGrid(numSquares);
}
function getNumSquares() {
    console.log("Inside getNumSquares");
    let numSquares = parseInt(document.querySelector(".numSquares").value);
    if (numSquares < 10 || numSquares > 30){
        alert("Number of squares should be between 10 and 30. Setting default size to 10.");
        numSquares = 10;
    }
    console.log(numSquares);
    return numSquares;
}

function createGrid(gridSize) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    for (i=0; i<gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("row");

        for(j=0; j<gridSize; j++) {
            let singleGrid = document.createElement("div");
            singleGrid.setAttribute("class", "card");
            singleGrid.addEventListener("mouseenter", changeColor);
            gridRow.appendChild(singleGrid);
        }
        grid.appendChild(gridRow);
    }
    container.appendChild(grid);
}

function changeColor(event) {
    this.style.backgroundColor = "blue";
}


