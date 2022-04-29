class Shot {
    constructor() {
        this.x = game.irSpace.x;
        this.y = 480;
        this.w = 50;
        this.h = 55;
        this.speed = 3;
        this.img = new Image();
        this.img.src = "./images/shot-individual.png";
        this.audio = new Audio();
        this.audio.src = "./audio/audioShotCortado.mp3";
    }

    drawShot() {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    
    moveObstacleShot() {
            this.y = this.y - this.speed;
    }

    playAudio() {
        this.audio.play();
        this.audio.volume = 0.1;
    }
}