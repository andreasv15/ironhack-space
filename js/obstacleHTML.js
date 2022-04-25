class obstacleHTML {
    constructor(xParam, yParam) {
        this.x = xParam;
        this.y = yParam;
        this.w = 50;
        this.h = 55;
        this.speed = 1;
        this.logo = new Image();
        this.logo.src = "../images/html-sinFondo.png";
    }

    drawObstacleHTML() {
        ctx.drawImage(this.logo, this.x, this.y, this.w, this.h);
    }

    moveObstacleHTML() {
        this.y = this.y + this.speed;
    }

}