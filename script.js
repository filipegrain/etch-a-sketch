let gridSize = 64

const grid = document.querySelector('#container');

for (let i = 0; i < gridSize * gridSize; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';

      cell.addEventListener('mouseover', function (k) {
            if (k.buttons === 1 && !this.classList.contains('active')) {
                  this.classList.toggle('active');
            }
      });

      grid.appendChild(cell);
}