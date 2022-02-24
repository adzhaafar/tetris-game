document.addEventListener('DOMContentLoaded', () => {
    
    //generate grid (15x20 squares)
    const grid = document.querySelector('.grid-container');
    for (let i = 0; i < 300; i++) {
        const gridSquares = document.createElement("div");
        grid.appendChild(gridSquares);
        gridSquares.classList.add('grid-item');
        gridSquares.innerHTML = i;
    }

    //generate grid for "upcoming shape" for the user (4x4 squares)
    const miniGrid = document.querySelector('.mini-grid');
    for (let i = 0; i < 16; i++) {
        const gridMiniSquares = document.createElement('div');
        miniGrid.appendChild(gridMiniSquares);
        gridMiniSquares.classList.add('mini-grid-item');
        gridMiniSquares.innerHTML = i;
    }

    //grabbing html stuff 
    var squares = Array.from(document.querySelectorAll('.grid-item')); //array of 300  generated squares
    const scoreDisplay = document.querySelector('.score');
    const startBtn = document.querySelector('.start-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    const resumeBtn = document.querySelector('.resume-btn');
   
// Tetrominos (array representing shape, with multiple arrays each representing shape's rotation)
    // The L tetramino
    const lTetromino = [
        [2, 1, 16, 31],
        [1, 2, 3, 18],
        [1, 16, 31, 30],
        [15, 16, 17, 2],
    ];
    // The Z tetramino
    const zTetromino = [
        [1, 2, 17, 18],
        [1, 16, 17, 32],
        [15, 16, 1, 2],
        [2, 17, 16, 31],
    ];
    // The T tetramino
    const tTetromino = [
        [1, 2, 3, 17],
        [1, 16, 31, 15],
        [15, 16, 17, 1],
        [1, 16, 31, 17],
    ];
    //The O tetramino, only 1 rotation because it is a square
    const oTetromino = [
        [1, 2, 16, 17],
    ];
    //The I tetramino, only 2 rotations because it is a line
    const iTetromino = [
        [1, 16, 31, 46],
        [1, 2, 3, 4],
    ];
    //Array of tetraminos
    const tetraminos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    // variables for the functions (make them global to use all throughout)
    var currentIndex = 5; //middle of the board
    var whichTetramino = tetraminos[Math.floor(Math.random() * tetraminos.length)]; //random shape
    var tetraminoRotation = whichTetramino[Math.floor(Math.random() * whichTetramino.length)]; //random rotation of that shape
    var width = 15; //width of the grid
        
    //event listeners
    startBtn.addEventListener('click', mainMovement);
    pauseBtn.addEventListener('click', freeze);
    resumeBtn.addEventListener('click', everySecond);
    

    function everySecond() {
        return setInterval(moveDown, 500)
    }
    //while playGame is true keep drawing new shapes when hitting the bottom of grid
    
    function mainMovement() {
        toggleTetramino(); //draw tetramino
        everySecond();
        tetraminoRotation.forEach(index => {
            if (squares[currentIndex + index].innerHTML >= 100) {
                freeze();
            }
        });
    };

    function moveDown() {
        toggleTetramino() //undraw tetramino
        currentIndex += width;
        toggleTetramino(); //draw tetramino
    }

    function freeze() {
        clearInterval(everySecond);
    }
    //this function adds and removes a tetramino class when it is there or not, drawing the shape
    function toggleTetramino() {
        tetraminoRotation.forEach(index => {
            squares[currentIndex + index].classList.toggle('tetramino');
        })
    }
  

    //Event listener for shape movement
    document.addEventListener('keyup', control); 

        //assign functions to keycodes (moving left, right, down, rotating piece through arrowkeys)
    function control(e) {
        if (e.keyCode === 37) {
            moveLeft();
        } else if (e.keyCode === 38) {
            rotate();
        } else if (e.keyCode === 39) {
            moveRight();
        } 
    };

//Functions responding to user arrowkeys (move left, right or rotate)
    
    //move the tetromino left, unless is at the edge or there is another piece
    function moveLeft() {
        toggleTetramino();
        //check if it is at the edge
        const isAtLeftEdge = tetraminoRotation.some(index => (currentIndex + index) % width === 0);
        //subtract 1 from current index
        if (!isAtLeftEdge) {
            currentIndex -= 1
        };
        
        // if (currentIndex.some(index => squares[currentIndex + index].classList.contains('taken'))) {
        //     currentIndex += 1;
        // };
        toggleTetramino();
    };

    //move the tetromino right, unless there is an edge or another piece
    function moveRight() {
        toggleTetramino();
        //check if at the right edge
        const isAtRightEdge = tetraminoRotation.some(index => (currentIndex + index) % width === width - 1);
        //add 1 to current index
        if (!isAtRightEdge) {
            currentIndex += 1;
        };
        
        // if (currentIndex.some(index => squares[currentIndex + index].classList.contains('taken'))) {
        //     currentIndex -= 1;
        // };
        toggleTetramino();
    }
    //function rotate

});


