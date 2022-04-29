class obstacleCSS {
    constructor(xParam, yParam, speedParam) {
        this.x = xParam;
        this.y = yParam;
        this.w = 50;
        this.h = 55;
        this.speed = speedParam;
        this.logo = new Image();
        this.logo.src = "./images/css-sinFondo.png";
    }

    drawObstacleCSS() {
        ctx.drawImage(this.logo, this.x, this.y, this.w, this.h);
    }

    moveObstacleCSS() {
        this.y = this.y + this.speed;
    }
}

class obstacleJS {
    constructor(xParam, yParam, speedParam) {
        this.x = xParam;
        this.y = yParam;
        this.w = 50;
        this.h = 55;
        this.speed = speedParam;
        this.logo = new Image();
        this.logo.src = "./images/js-sinFondo.png";
    }

    drawObstacleJS() {
        ctx.drawImage(this.logo, this.x, this.y, this.w, this.h);
    }

    moveObstacleJS() {
        this.y = this.y + this.speed;
    }

}

class obstacleREACT {
    constructor(xParam, yParam, speedParam) {
        this.x = xParam;
        this.y = yParam;
        this.w = 60;
        this.h = 55;
        this.speed = speedParam;
        this.logo = new Image();
        this.logo.src = "./images/react-sinFondo.png";
    }

    drawObstacleREACT() {
        ctx.drawImage(this.logo, this.x, this.y, this.w, this.h);
    }

    moveObstacleREACT() {
        this.y = this.y + this.speed;
    }

}

class obstacleHTML {
    constructor(xParam, yParam, speedParam) {
        this.x = xParam;
        this.y = yParam;
        this.w = 50;
        this.h = 55;
        this.speed = speedParam;
        this.logo = new Image();
        this.logo.src = "./images/html-sinFondo.png";
    }

    drawObstacleHTML() {
        ctx.drawImage(this.logo, this.x, this.y, this.w, this.h);
    }

    moveObstacleHTML() {
        this.y = this.y + this.speed;
    }
}


