class Shoot {
    constructor() {
        this.x = 350;
        this.y = 350;
        this.w = 50;
        this.h = 55;
        this.speed = 1;
        this.img = new Image();
        this.img.src = "../images/shoot-individual.png";
    }

    drawObstacleShoot() {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    moveObstacleShoot() {
        this.y = this.y - this.speed;
    }
}