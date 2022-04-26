class Shoot {
    constructor() {
        this.x = game.irSpace.x;
        this.y = 480;
        this.w = 50;
        this.h = 55;
        this.speed = 3;
        this.img = new Image();
        this.img.src = "../images/shoot-individual.png";
    }

    drawShoot() {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        //console.log(ctx);
        //console.log("dibujando disparo");
    }

    
    moveObstacleShoot() {
            this.y = this.y - this.speed;
    }
    
}