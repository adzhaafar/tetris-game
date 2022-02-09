document.addEventListener('DOMContentLoaded', () => {
    
    //generate grid (15x20 squares)
    const grid = document.querySelector('.grid-container');
    for (let i = 0; i < 300; i++) {
        const gridSquares = document.createElement("div");
        grid.appendChild(gridSquares);
        gridSquares.classList.add('grid-item')
        gridSquares.innerHTML = i;
    }
    // generate invisible helper grids
    for (let i = 0; i < 15; i++) {
        const gridSquaresEnd = document.createElement("div");
        grid.appendChild(gridSquaresEnd);
        gridSquaresEnd.classList.add('grid-taken');
    }


    //grabbing html stuff 
    let squares = Array.from(document.querySelectorAll('.grid-item'));
    const scoreDisplay = document.querySelector('#score');
    const startBtn = document.querySelector('#start-btn');
   
    // Tetrominos (each of the small indices represents a cube on the grid (an array with 4 arrays inside it, each array is a version of rotation of the piece))

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

    // variables for the functions
    let currentIndex = 0;
    let whichTetramino = tetraminos[Math.floor(Math.random() * tetraminos.length)];
    let tetraminoRotation = whichTetramino[Math.floor(Math.random() * whichTetramino.length)];


    //set timer (move piece down every second)
    const timerId = setInterval(moveDown, 1000);

    // move tetraminos down on the grid
    function moveDown() {
        undraw();
        currentIndex += 15;
        // freeze();
        draw();
    }


    // The draw function
    function draw() {
        tetraminoRotation.forEach(index => {
            squares[currentIndex + index].classList.add('tetromino');
        });
      
    };

    // The undraw function
    function undraw() {
        tetraminoRotation.forEach(index => {
            squares[currentIndex + index].classList.remove('tetromino')
        });
    };



    //make tetrominos stop at the bottom of the page
    
    function freeze() {
        if (tetraminoRotation.some((index) => {
            squares[index + 15].classList.contains('grid-taken');
        })) {
            tetraminoRotation.forEach((index) => {
                squares[index].classList.add('grid-freeze')
                console.log(squares[index].classList)
            })
        }
           

    };

});