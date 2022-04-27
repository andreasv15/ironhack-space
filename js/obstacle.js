class obstacleCSS {
    constructor(xParam, yParam) {
        this.x = xParam;
        this.y = yParam;
        this.w = 50;
        this.h = 55;
        this.speed = 1;
        this.logo = new Image();
        this.logo.src = "../images/css-sinFondo.png";
    }

    drawObstacleCSS() {
        ctx.drawImage(this.logo, this.x, this.y, this.w, this.h);
    }

    moveObstacleCSS() {
        this.y = this.y + this.speed;
    }

}

class obstacleJS {
    constructor(xParam, yParam) {
        this.x = xParam;
        this.y = yParam;
        this.w = 50;
        this.h = 55;
        this.speed = 1;
        this.logo = new Image();
        this.logo.src = "../images/js-sinFondo.png";
    }

    drawObstacleJS() {
        ctx.drawImage(this.logo, this.x, this.y, this.w, this.h);
    }

    moveObstacleJS() {
        this.y = this.y + this.speed;
    }

}

class obstacleMDB {
    constructor(xParam, yParam) {
        this.x = xParam;
        this.y = yParam;
        this.w = 50;
        this.h = 55;
        this.speed = 1;
        this.logo = new Image();
        this.logo.src = "../images/mongodb-sinFondo.png";
    }

    drawObstacleMDB() {
        ctx.drawImage(this.logo, this.x, this.y, this.w, this.h);
    }

    moveObstacleMDB() {
        this.y = this.y + this.speed;
    }

}

class obstacleREACT {
    constructor(xParam, yParam) {
        this.x = xParam;
        this.y = yParam;
        this.w = 60;
        this.h = 55;
        this.speed = 1;
        this.logo = new Image();
        this.logo.src = "../images/react-sinFondo.png";
    }

    drawObstacleREACT() {
        ctx.drawImage(this.logo, this.x, this.y, this.w, this.h);
    }

    moveObstacleREACT() {
        this.y = this.y + this.speed;
    }

}

class obstacleVUE {
    constructor(xParam, yParam) {
        this.x = xParam;
        this.y = yParam;
        this.w = 50;
        this.h = 55;
        this.speed = 1;
        this.logo = new Image();
        this.logo.src = "../images/vue-sinFondo.png";
    }

    drawObstacleVUE() {
        ctx.drawImage(this.logo, this.x, this.y, this.w, this.h);
    }

    moveObstacleVUE() {
        this.y = this.y + this.speed;
    }

}

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


