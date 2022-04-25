/* BOTONES */
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn");

/* PANTALLAS */
const startScreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen");

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

let game;
let randomX = Math.floor(Math.random() * canvas.width);


const startGame = () => {
    startScreen.style.display = "none";
    //gameOverScreen.style.display = "none";
    canvas.style.display = "flex";

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
        //game.shoot.();
    }
}



startBtnDOM.addEventListener("click", startGame);
//restartBtnDOM.addEventListener("click", startGame);
window.addEventListener("keydown", keyPress);
