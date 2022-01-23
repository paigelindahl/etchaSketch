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

const clearGrid = function(parent) {
while(parent.firstChild) {
  parent.removeChild(parent.firstChild)
}

}

resetButton.addEventListener('click', function() {
  for(let item of gridItems) {
    item.classList.remove("hovered");
  }
  let response = prompt("How many squares in a row would you like your next game to be?");
  clearGrid(container);
  makeGrid(response, response)
  

})


makeGrid(16, 16);