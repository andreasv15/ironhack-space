# IRONSPACE


## [Link Ironspace game](https://andreasv15.github.io/ironhack-space/)
NOTE: above link will be added later

# Description
IronSpace is a game in which the Ironhack spaceship tries to shoot and destroy the different programming languages that appear in the space.

# Main Functionalities
- If the Ironship shoot the obstacle, add 5 points.
- If the Ironship don´t shoot the obstacle and the obstacle reaches the goal, lose 10 points.
- If the score is less than 0 points, the game ends.
- If the obstacle collides with the Ironship, no points are deducted, but the game ends.
- Every x points scored, the speed of obstacle increases.
- The left and right keys are used to move the Ironship, and the space bar is used to shoot.



# Backlog Functionalities
- Each programming languages has a different score.


# Proyect Structure

## main.js

- startGame()

## game.js

- Game () {
    this.irSpace;
    this.obstacles = [];
}
- gameLoop () {}
- checkCollisions () {}

## ironship.js 
- Ironship () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.logo;
}
- drawIronship () {}
- moveIronship () {}
- shoot() {}

## obstacle.js 
- Obstacle () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.logo;
}
- drawObstacle () {}
- moveObstacle () {}


# States and Transitions

- Start Screen
- Game Screen
- GameOver Screen

# Tasks (Optional)

- List of individual Tasks you will need to finish the game from zero to an amazing game!
- Note: If using Trello or github proyect to keep track of tasks, then you can remove this section.

# Extra Links (The links can be added later when available)

### Trello
[Link url](https://trello.com/b/CWviY2zv/kraken-brigade-project)

### Slides
[Link Slides.com](https://docs.google.com/presentation/d/138o01hAz-0gXepN78RsDgse12HiiuN7Fz_N_hJnI9_g/edit?usp=sharing)