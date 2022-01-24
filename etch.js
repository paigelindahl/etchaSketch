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

const promptInput = function() {
  let response = prompt("How many squares in a row would you like your next game to be? (max 100)");
  if (response > 100) {
    alert("Please choose a number less than 100")
    promptInput();
  } else {
    clearGrid(container);
    makeGrid(response, response)
    
  }

}

resetButton.addEventListener('click', function() {
  for(let item of gridItems) {
    item.classList.remove("hovered");
  }
  promptInput();

})


makeGrid(16, 16);