document.addEventListener('DOMContentLoaded', () => {
    
   //generate grid (15x20 squares)
    const grid = document.querySelector('.grid-container');
    for (let i = 0; i < 300; i++) {
        const gridSquares = document.createElement("div");
        grid.appendChild(gridSquares);
        gridSquares.classList.add('grid-item')
        gridSquares.innerHTML = i;
    }
    //grabbing html stuff 
    const rowIndex = 15;
    const columnIndex = 1;
    let squares = Array.from(document.querySelectorAll('.grid-item'));
    const scoreDisplay = document.querySelector('#score');
    const startBtn = document.querySelector('#start-btn');
   
    // Tetrominos

    //each of the small indices represents a cube on the grid (an array with 4 arrays inside it, each array is a version of rotation of the piece)

    // The L tetromino
    const lTetromino = [
        [2, 1, 16, 31],
        [1, 2, 3, 18],
        [1, 16, 31, 30],
        [15, 16, 17, 2],
    ];
    // The Z tetromino
    const zTetromino = [
        [1, 2, 17, 18],
        [1, 16, 17, 32], 
        [15, 16, 1, 2],
        [2, 17, 16, 31],
        
    ];
    // The T tetromino
    const tTetromino = [
        [1, 2, 3, 17],
        [1, 16, 31, 15],
        [15, 16, 17, 1], 
        [1, 16, 31, 17],

    ];

    //only 1 rotation because it is a block
    const oTetromino = [
        [1, 2, 16, 17],
    ];

    //only 2 rotations because it is a line
    const iTetromino = [
        [1, 16, 31, 46], 
        [1, 2, 3, 4],
    ];

    //Array of tetrominos
    const tetraminos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentIndex = 0;
    let whichShape = tetraminos[Math.floor(Math.random() * tetraminos.length)]
    let tetraminoRotation = whichShape[Math.floor(Math.random() * whichShape.length)]
    function draw() {
        tetraminoRotation.forEach((index) => {
            squares[currentIndex + index].classList.add('tetromino');

        });
      
    };
    
draw()

//make all tetraminos and put them into array

    
    // the squares are an array of the little cube pieces, each having an index, by doing squares[currentposition + index] you will access a certain cube, the indexes come from the tetromino shapes which are coded. Then to that certain cube you add a class which will colour it a different color, so the shape will show up. 
    


























});