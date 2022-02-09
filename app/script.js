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
    var squares = Array.from(document.querySelectorAll('.grid-item'));
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

    //Array of tetraminos
    const tetraminos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    // variables for the functions (make them global)
    var currentIndex = 5; //middle of the board
    var whichTetramino = tetraminos[Math.floor(Math.random() * tetraminos.length)];
    var tetraminoRotation = whichTetramino[Math.floor(Math.random() * whichTetramino.length)];

    //assign functions to keycodes

    function control(e) {
        if (e.keyCode === 37) {
            moveLeft();
        } else if (e.keyCode === 38) {
            //rotate
        } else if (e.keyCode === 39) {
            moveRight();
        } else if (e.keyCode === 40) {
            moveDown();
        }
    }
    document.addEventListener('keyup', control);

    //set timer (move piece down every second)
   
    const startGame = true;
    const timerId = setInterval(moveDown, 1000);
    var width = 15;

    
    // move tetraminos down on the grid
    function moveDown() {
            undraw();
            currentIndex += 15;
            draw();
            freeze();
    };


    // The draw function
    function draw() {
        tetraminoRotation.forEach(index => {
            squares[currentIndex + index].classList.add('tetramino');
        });
    };

    // The undraw function
    function undraw() { 
        tetraminoRotation.forEach(index => {
            squares[currentIndex + index].classList.remove('tetramino');
        });
    };
    
     
    //make tetrominos stop at the bottom of the page
    function freeze() {
        tetraminoRotation.forEach((index) => {
            if ((index + currentIndex) >= 285) {
                clearInterval(timerId);
            }
        });
     
    };

    //move the tetromino left, unless is at the edge or there is
    function moveLeft() {
        undraw()
        //check widths
        const isAtLeftEdge = tetraminoRotation.some(index => (currentIndex + index) % width === 0);

        if (!isAtLeftEdge) {
            currentIndex -= 1
        };
        
        if (currentIndex.some(index => squares[currentIndex + index].classList.contains('taken'))) {
            currentIndex += 1;
        };
        draw();
    };


    function moveRight() {
        undraw();
        const isAtRightEdge = tetraminoRotation.some(index => (currentIndex + index) % width === width - 1);

        if (!isAtRightEdge) {
            currentPosition += 1;
        };
        
        if (currentIndex.some(index => squares[currentIndex + index].classList.contains('taken'))) {
            currentIndex -= 1;
        };
        draw();
    }

});

