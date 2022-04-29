/* BOTONES */
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn");

/* PANTALLAS */
const startScreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen");

/* CAPTURA DE ELEMENTOS */
const canvas = document.querySelector("#my-canvas");

const timePoints = document.querySelector("#time-points");
const timeSpan = document.querySelector("#timeSpan");
const pointsSpan = document.querySelector("#scoreSpan");


const timePointsGO = document.querySelector("#timePointsGameOver");
const timeSpanGO = document.querySelector("#timeSpanGO");
const pointsSpanGO = document.querySelector("#scoreSpanGO");


const ctx = canvas.getContext("2d");

let game;
let randomX = Math.floor(Math.random() * canvas.width);
let score = 0;

/* INICIACION DE JUEGO */
const startGame = () => {
    window.addEventListener("keydown", keyPress);

    score = 0;
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    canvas.style.display = "flex";
    timePoints.style.display = "flex";
    timePointsGO.style.display = "flex";
    timePoints.style.justifyContent = "space-around";
    timePointsGO.style.justifyContent = "space-around";
    pointsSpan.innerText = score;
    game = new Game();

    game.gameLoop();

}

const keyPress = (event) => {
    //console.log(event);
    if (event.code === "ArrowLeft" && game.irSpace.x > 0) {
        // mueve izquierda
        game.irSpace.moveLeftIronship();
        //console.log("izq")
    } else if (event.code === "ArrowRight" && game.irSpace.x < 400) {
        // mueve derecha
        game.irSpace.moveRightIronship();
        //console.log("der")
    } else if (event.code === "Space") {
        //game.irShoot = new Shoot();
            game.addNewObstacleShoot();
    }
}

/* ADDEVENTLISTENERS */
startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", startGame);
