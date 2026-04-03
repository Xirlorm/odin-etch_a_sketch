function generateGrid(size = 16) {
  const gridContainer = document.getElementById("grid-container");

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.style.flexBasis = `${480 / size - 1}px`;
      gridContainer.appendChild(cell);
    }
  }

  gridContainer.addEventListener("mouseover", (event) => {
    switch (event.target.className) {
      case "grid-cell":
        event.target.style.backgroundColor = "black";
    }
  });
}

document.getElementById("grid-size-btn").addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (1-100):");
  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  document.getElementById("grid-container").innerHTML = "";
  generateGrid(newSize);
});

generateGrid();
