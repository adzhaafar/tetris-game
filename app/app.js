document.addEventListener('DOMContentLoaded', () => {
    
    //generate grid (15x20 squares)
    const grid = document.querySelector('.grid-container');
    for (let i = 0; i < 300; i++) {
        const gridSquares = document.createElement("div");
        grid.appendChild(gridSquares);
        gridSquares.classList.add('grid-item');
        gridSquares.innerHTML = i;
    }
    //squares array
    var squares = Array.from(document.querySelectorAll('.grid-item'));

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
    //The O tetramino
    const oTetromino = [
        [1, 2, 16, 17],
    ];
    //The I tetramino
    const iTetromino = [
        [1, 16, 31, 46],
        [1, 2, 3, 4],
    ];

    //Array of tetraminos
    const tetraminos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];
    var currentIndex = 5; //middle of the board
    const width = 15; //width of the grid





    //choose random tetramino
    function drawRandomTetramino() {
        let whichTetramino = tetraminos[Math.floor(Math.random() * tetraminos.length)];
        let tetraminoRotation = whichTetramino[Math.floor(Math.random() * whichTetramino.length)];
        return tetraminoRotation;
    }


    //draw and undraw the tetramino (by calling the class on and off)
    function toggleTetramino(tetramino) {
        tetramino.forEach(index => {
            squares[currentIndex + index].classList.toggle('tetramino');
        });
        return 1;
    };

    //moves down tetramino (the callback is toggleTetramino)
    function moveDown() {
        toggleTetramino();
        currentIndex += width;
        toggleTetramino();
        check(currentIndex);
    };


    //check if at bottom
    function check(index) {
        if (index >= 284) {
            clearInterval(timerId);
        }
    }

    

    
    // console.log(drawRandomTetramino());

    function moveDown(tetramino) {
        toggleTetramino(tetramino);
        setInterval(() => {
            toggleTetramino(tetramino);
            currentIndex += width;
            toggleTetramino(tetramino);
        
        }, 1000);  
    }



    moveDown(drawRandomTetramino());
    // console.log(toggleTetramino(drawRandomTetramino()));
    // currentIndex += width;
    // toggleTetramino();
    // console.log(toggleTetramino(drawRandomTetramino()));

    //every second movedown
    // var timerId = setInterval(moveDown, 1000);
    

});