let gridSize = 70
let isPenMode = true;
const GRID_PIXELS = 700

function paintCell(e, classList) {
      if (e.buttons === 1) {
            if (!classList.contains('active') && isPenMode) {
                  classList.toggle('active');
                  return
            }
            if (classList.contains('active') && !isPenMode) {
                  classList.toggle('active');
            }
      }
}

function toggleMode() {
      isPenMode = !isPenMode
      setButtonStyle()
}

function setButtonStyle() {
      const penBtn = document.querySelector('#penMode')
      const eraserBtn = document.querySelector('#eraserMode')
      if (isPenMode) {
            penBtn.style.color = 'green'
            eraserBtn.style.color = 'black'
      } else {
            eraserBtn.style.color = 'green'
            penBtn.style.color = 'black'
      }
}

function createNewGrid() {
      const grid = document.querySelector('#container');
      grid.replaceChildren()
      isPenMode = true
      setButtonStyle()

      const sizeChoice = document.querySelector('#size-choice')
      gridSize = Number(sizeChoice.selectedOptions[0].value)

      for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            const cellSize = (GRID_PIXELS - (gridSize * 2)) / gridSize
            cell.style.width = `${cellSize}px`
            cell.style.height = `${cellSize}px`

            cell.addEventListener('mousedown', function (e) {
                  paintCell(e, this.classList)
            });

            cell.addEventListener('mouseover', function (e) {
                  paintCell(e, this.classList)
            });

            grid.appendChild(cell);
      }
}

createNewGrid()