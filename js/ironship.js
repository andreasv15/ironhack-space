class Ironship {
    // propiedades
    constructor() {
        this.x = 200;
        this.y = 530;
        this.w = 50;
        this.h = 55;
        this.logo = new Image();
        this.logo.src = "./images/ironhack2-sinFondo.png";
    }

    // metodos
    drawIronship() {
        ctx.drawImage(this.logo, this.x, this.y, this.w, this.h);
    }

    moveLeftIronship() {
        this.x = this.x - 10;
    }


    moveRightIronship() {
        this.x = this.x + 10;
    }

}