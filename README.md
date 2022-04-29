# IRONSPACE


## [Link Ironspace game](https://andreasv15.github.io/ironhack-space/)
NOTE: above link will be added later

# Description
IronSpace is a game in which the Ironhack spaceship tries to shot and destroy the different programming languages that appear in the space.

# Main Functionalities
- If the Ironship shot the obstacle, add 5 points.
- If the Ironship don´t shot the obstacle and the obstacle reaches the goal, lose 10 points.
- If the score is less than 0 points, the game ends.
- If the obstacle collides with the Ironship, no points are deducted, but the game ends.
- Every x points scored, the speed of each obstacle increases.
- The left and right keys are used to move the Ironship, and the space bar is used to shot.



# Backlog Functionalities
- Add an obstacle that if the Ironship shot it, a second ship will appear which will help the main ship destroy the programming languages.

# Proyect Structure

## main.js

- startGame()
- keyPress()

## game.js

- Game () {}
- incrementsSeconds() {}
- stopSeconds () {}
- addNewObstacleshot() {}
- addNewObstacleCSS() {}
- addNewObstacleHTML() {}
- addNewObstacleJS() {}
- addNewObstacleREACT() {}
- Collision() {}
- gameLoop() {}

## ironship.js 
- Ironship () { this.x; this.y; this.w; this.h; this.logo; }
- drawIronship () {}
- moveLeftIronship () {}
- moveRightIronship() {}

## obstacle.js 
- obstacleCSS () { this.x; this.y; this.w; this.h; this.speed; this.logo; }
- drawObstacleCSS () {}
- moveObstacleCSS () {}

- obstacleJS () { this.x; this.y; this.w; this.h; this.speed; this.logo; }
- drawObstacleJS () {}
- moveObstacleJS () {}

- obstacleREACT () { this.x; this.y; this.w; this.h; this.speed; this.logo; }
- drawObstacleREACT () {}
- moveObstacleREACT () {}

- obstacleHTML () { this.x; this.y; this.w; this.h; this.speed; this.logo; }
- drawObstacleHTML () {}
- moveObstacleHTML () {}

## obstacleshot.js
- Shot () { this.x; this.y; this.w; this.h; this.speed; this.img; this.audio; }
- drawShot () {}
- moveObstacleShot () {}
- playAudio () {}


# States and Transitions

- Start Screen
- Game Screen
- GameOver Screen

# Tasks (Optional)

- Add Ironship.
- Move Ironship.
- Add obstacles.
- Move obstacles.
- Add shots.
- Move shots.
- Add music to the shot
- Random positions of obstacles.
- Check collisions.
- Add or subtract points.
- Build Game Screen, Game and Game Over.
- Check mouse and keyboard events.


# Extra Links (The links can be added later when available)


### Slides
[Link Slides.com](https://drive.google.com/file/d/1tbUOZyS9dZstE_4eUOkjkJKIfbbeazO-/view?usp=sharing)