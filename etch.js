const container = document.getElementById("container");
const resetButton = document.getElementById("reset-btn");
const gridItems = document.getElementsByClassName("grid-item");

const makeGrid = function(rows, cols) {

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.addEventListener('mouseover', function(event) {
        event.target.classList.add('hovered');
      })
    container.appendChild(cell).className = 'grid-item';
  }
}

resetButton.addEventListener('click', function() {
  for(let item of gridItems) {
    item.classList.remove("hovered");
  }
})


makeGrid(16, 16);