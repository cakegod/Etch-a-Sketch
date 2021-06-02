let container = document.querySelector(".container");
let resetButton = document.querySelector(".reset");
let changeSize = document.querySelector(".change-size");
let cells;
let nColumns = 10;
let nCells = nColumns * nColumns;

changeSize.addEventListener('click', () => {
    nColumns = prompt("Choose a number between 1 and 64");
    if (isNaN(nColumns)) {
        return alert("ERROR! You must choose a valid number");
    } else if (nColumns > 64 || nColumns < 1) {
        return alert("You must choose a number between 1 and 64");
    } else
        document.documentElement.style.setProperty('--columns', nColumns);
    document.querySelectorAll(".cell").forEach(e => e.remove());
    nCells = nColumns * nColumns;
    colorize(createCells());
});

resetButton.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.style.cssText = "";
    });
});

function createCells() {
    for (i = 0; i < nCells; i++) {
        let cell = document.createElement("div");
        container.appendChild(cell);
        cell.classList.add("cell");
    }
};

function colorize() {
    cells = document.querySelectorAll(".cell");;
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            cell.style.cssText = "background-color:" + randomColor;
        });
    });
}

colorize(createCells());
