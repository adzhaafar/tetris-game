This project is based on the simple tetris game.

The first step was to dinamically generate a player grid (15x20 squares) through javascript using a for loop
There was minimal styling added to make grid visible on the page
Create an array for each tetramino shape that has all of that piece's rotations
Randomly select one of them to draw
Create helper functions, draw, undraw and freeze
Create a move down function that will execute every frame (every second) when tetramino moves downwards
Create a main function that controls when to start/stop movement

Pseudocode:

1. User presses start game
2. Random tetramino shape and rotation are generated through Math.random()
3. Through the indices that are specified in each specific shape rotation, color those indices through giving them an additional class (draw() function)
4. Move piece down, discolour (remove class) from the pieces that previously had it, add to each index a width of the grid container, then add the class again (undraw())
5. In order for the piece to move every 1 second, this needs to repeat everysecond (undraw(), add width, draw())
6. When the pieces reach the last row in the grid, freeze the piece in its position
7. Repeat the sequence of steps drawing a new tetramino, but the other one still stays at its place

Every frame (every second): this goes in the move function because it should happen every frame

1. Undraw shape undraw()
2. Do currentIndex += width
3. Draw that shape on the board draw()

There is a main function to control it better (repeat this function until the game is not paused or over)

1. Start the game (draw function)
2. Run the move function every second
3. When it is at the end of the grid, freeze the piece in place

Later on:
when a row is filled, all the pieces need to dissapear and points should be added to the user
add levels later on
add nice styling later on
