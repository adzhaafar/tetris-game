document.addEventListener('DOMContentLoaded', () => {
    
   //generate grid (15x20 squares)
    const grid = document.querySelector('.grid-container');
    for (let i = 0; i < 300; i++) {
        const gridSquares = document.createElement("div");
        grid.appendChild(gridSquares);
        gridSquares.classList.add('grid-item')
        gridSquares.innerHTML = i;
    }
    //grabbing stuff
    const rowIndex = 15;
    const columnIndex = 1;
    let squares = Array.from(document.querySelectorAll('.grid-item'));
    const scoreDisplay = document.querySelector('#score');
    const startBtn = document.querySelector('#start-btn');
    //the tetrominoes

    // the L-shaped tetromino (an array with 4 arrays inside it, each array is a version of rotation of the piece)
    //each of the small indices represents a cube on the grid
    const lTetromino = [
        [2, 1, 16, 31],
        [1, 2, 3, 18],
        [1, 16, 31, 30],
        [15, 16, 17, 2],
    ]
    let currentIndex = 4;
    function draw(shape) {
        shape.forEach(
            squares[currentIndex + shape].classList.add('tetromino'))
    };
    
draw(lTetromino[0])

//make all tetraminos and put them into array

    
    // the squares are an array of the little cube pieces, each having an index, by doing squares[currentposition + index] you will access a certain cube, the indexes come from the tetromino shapes which are coded. Then to that certain cube you add a class which will colour it a different color, so the shape will show up. 
    


























});