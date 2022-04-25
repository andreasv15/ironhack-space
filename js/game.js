class Game {

    constructor() {
        this.irSpace = new Ironship();
        
        this.obsCSS = new obstacleCSS();
        this.obsHTML = new obstacleHTML();
        this.obsJS = new obstacleJS();
        this.obsMDB = new obstacleMDB();
        this.obsNODE = new obstacleNODE();
        this.obsREACT = new obstacleREACT();
        this.obsVUE = new obstacleVUE();
        

        //let randomY = Math.floor(Math.random() * canvas.height);
        //console.log(randomX);
        this.obstacleArrCSS = [ new obstacleCSS(-100, -30) ];
        this.obstacleArrHTML = [ new obstacleHTML(-100, -10) ];
        this.obstacleArrJS = [ new obstacleJS(-100, -90) ];
        this.obstacleArrMDB = [ new obstacleMDB(-100, -160) ];
        this.obstacleArrNODE = [ new obstacleNODE(-120, -270) ];
        this.obstacleArrREACT = [ new obstacleREACT(-200, -80) ];
        this.obstacleArrVUE = [ new obstacleVUE(-100, -90) ];

        //this.isGameOn = true;
    }

    addNewObstacleCSS = () => {
        if (this.obstacleArrCSS[this.obstacleArrCSS.length -1].y > 200) {
            randomX = Math.random() * (canvas.width - this.obsCSS.w);
            let newObsCSS = new obstacleCSS(randomX, -100);
            this.obstacleArrCSS.push(newObsCSS);
        }
    }

    addNewObstacleHTML = () => {
        if (this.obstacleArrHTML[this.obstacleArrHTML.length -1].y > 150) {
            randomX = Math.random() * (canvas.width - this.obsHTML.w);
            let newObsHTML = new obstacleHTML(randomX, -100);
            this.obstacleArrHTML.push(newObsHTML);
        }
    }

    addNewObstacleJS = () => {
        if (this.obstacleArrJS[this.obstacleArrJS.length -1].y > 100) {
            randomX = Math.random() * (canvas.width - this.obsJS.w);
            let newObsJS = new obstacleJS(randomX, -100);
            this.obstacleArrJS.push(newObsJS);
        }
    }

    addNewObstacleMDB = () => {
        if (this.obstacleArrMDB[this.obstacleArrMDB.length -1].y > 80) {
            randomX = Math.random() * (canvas.width - this.obsMDB.w);
            let newObsMDB = new obstacleMDB(randomX, -100);
            this.obstacleArrMDB.push(newObsMDB);
        }
    }

    addNewObstacleNODE = () => {
        if (this.obstacleArrNODE[this.obstacleArrNODE.length -1].y > 120) {
            randomX = Math.random() * (canvas.width - this.obsNODE.w);
            let newObsNODE = new obstacleNODE(randomX, -100);
            this.obstacleArrNODE.push(newObsNODE);
        }
    }

    addNewObstacleREACT = () => {
        if (this.obstacleArrREACT[this.obstacleArrREACT.length -1].y > 210) {
            randomX = Math.random() * (canvas.width - this.obsREACT.w);
            let newObsREACT = new obstacleREACT(randomX, -100);
            this.obstacleArrREACT.push(newObsREACT);
        }
    }

    addNewObstacleVUE = () => {
        if (this.obstacleArrVUE[this.obstacleArrVUE.length -1].y > 200) {
            randomX = Math.random() * (canvas.width - this.obsVUE.w);
            let newObsVUE = new obstacleVUE(randomX, -100);
            this.obstacleArrVUE.push(newObsVUE);
        }
    }

    gameOverCollision = () => {

        // de cada pipe, checkear si colisiona con el pollo

        this.obstacleArrCSS.forEach( (eachObsCSS) => {

            if (this.irSpace.x < eachObsCSS.x + eachObsCSS.w &&
                this.irSpace.x + this.irSpace.w > eachObsCSS.x &&
                this.irSpace.y < eachObsCSS.y + eachObsCSS.h &&
                this.irSpace.h + this.irSpace.y > eachObsCSS.y) {
                // collision detected!
                //console.log("colisiona CSS");
                //finaliza el juego

                // 1. el juego se detiene
                //this.isGameOn = false;

                // 2. el canvas desaparece
                //canvas.style.display = "none";

                // 3. la pantalla final aparece
                //gameOverScreen.style.display = "flex";
            }

        })

        this.obstacleArrHTML.forEach( (eachObsHTML) => {

            if (this.irSpace.x < eachObsHTML.x + eachObsHTML.w &&
                this.irSpace.x + this.irSpace.w > eachObsHTML.x &&
                this.irSpace.y < eachObsHTML.y + eachObsHTML.h &&
                this.irSpace.h + this.irSpace.y > eachObsHTML.y) {
                // collision detected!
                // console.log("colisiona HTML");
                //finaliza el juego

                // 1. el juego se detiene
                //this.isGameOn = false;

                // 2. el canvas desaparece
                //canvas.style.display = "none";

                // 3. la pantalla final aparece
                //gameOverScreen.style.display = "flex";
            }
        })

        this.obstacleArrJS.forEach( (eachObsJS) => {

            if (this.irSpace.x < eachObsJS.x + eachObsJS.w &&
                this.irSpace.x + this.irSpace.w > eachObsJS.x &&
                this.irSpace.y < eachObsJS.y + eachObsJS.h &&
                this.irSpace.h + this.irSpace.y > eachObsJS.y) {
                // collision detected!
                //console.log("colisiona JS");
                //finaliza el juego

                // 1. el juego se detiene
                //this.isGameOn = false;

                // 2. el canvas desaparece
                //canvas.style.display = "none";

                // 3. la pantalla final aparece
                //gameOverScreen.style.display = "flex";
            }
        })

        this.obstacleArrMDB.forEach( (eachObsMDB) => {

            if (this.irSpace.x < eachObsMDB.x + eachObsMDB.w &&
                this.irSpace.x + this.irSpace.w > eachObsMDB.x &&
                this.irSpace.y < eachObsMDB.y + eachObsMDB.h &&
                this.irSpace.h + this.irSpace.y > eachObsMDB.y) {
                // collision detected!
                //console.log("colisiona MDB");
                //finaliza el juego

                // 1. el juego se detiene
                //this.isGameOn = false;

                // 2. el canvas desaparece
                //canvas.style.display = "none";

                // 3. la pantalla final aparece
                //gameOverScreen.style.display = "flex";
            }
        })

        this.obstacleArrNODE.forEach( (eachObsNODE) => {

            if (this.irSpace.x < eachObsNODE.x + eachObsNODE.w &&
                this.irSpace.x + this.irSpace.w > eachObsNODE.x &&
                this.irSpace.y < eachObsNODE.y + eachObsNODE.h &&
                this.irSpace.h + this.irSpace.y > eachObsNODE.y) {
                // collision detected!
                //console.log("colisiona NODE");
                //finaliza el juego

                // 1. el juego se detiene
                //this.isGameOn = false;

                // 2. el canvas desaparece
                //canvas.style.display = "none";

                // 3. la pantalla final aparece
                //gameOverScreen.style.display = "flex";
            }
        })

        this.obstacleArrREACT.forEach( (eachObsREACT) => {

            if (this.irSpace.x < eachObsREACT.x + eachObsREACT.w &&
                this.irSpace.x + this.irSpace.w > eachObsREACT.x &&
                this.irSpace.y < eachObsREACT.y + eachObsREACT.h &&
                this.irSpace.h + this.irSpace.y > eachObsREACT.y) {
                // collision detected!
                //console.log("colisiona REACT");
                //finaliza el juego

                // 1. el juego se detiene
                //this.isGameOn = false;

                // 2. el canvas desaparece
                //canvas.style.display = "none";

                // 3. la pantalla final aparece
                //gameOverScreen.style.display = "flex";
            }
        })

        this.obstacleArrVUE.forEach( (eachObsVUE) => {

            if (this.irSpace.x < eachObsVUE.x + eachObsVUE.w &&
                this.irSpace.x + this.irSpace.w > eachObsVUE.x &&
                this.irSpace.y < eachObsVUE.y + eachObsVUE.h &&
                this.irSpace.h + this.irSpace.y > eachObsVUE.y) {
                // collision detected!
                //console.log("colisiona VUE");
                //finaliza el juego

                // 1. el juego se detiene
                //this.isGameOn = false;

                // 2. el canvas desaparece
                //canvas.style.display = "none";

                // 3. la pantalla final aparece
                //gameOverScreen.style.display = "flex";
            }
        })
    }

    // todos los metodos que regulan nuestro juego
    gameLoop = () => {
        //console.log("juego andando");
        
        // 1. borrar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 2. acciones o movimientos de los elementos
        this.obstacleArrCSS.forEach((eachObsCSS) => {
            eachObsCSS.moveObstacleCSS();
        });

        this.obstacleArrHTML.forEach((eachObsHTML) => {
            eachObsHTML.moveObstacleHTML();
        });

        this.obstacleArrJS.forEach((eachObsJS) => {
            eachObsJS.moveObstacleJS();
        });

        this.obstacleArrMDB.forEach((eachObsMDB) => {
            eachObsMDB.moveObstacleMDB();
        });

        this.obstacleArrNODE.forEach((eachObsNODE) => {
            eachObsNODE.moveObstacleNODE();
        });

        this.obstacleArrREACT.forEach((eachObsREACT) => {
            eachObsREACT.moveObstacleREACT();
        });
        
        this.obstacleArrVUE.forEach((eachObsVUE) => {
            eachObsVUE.moveObstacleVUE();
        });

        this.addNewObstacleJS();
        this.addNewObstacleMDB();
        this.addNewObstacleHTML();
        this.addNewObstacleNODE();
        this.addNewObstacleCSS();
        this.addNewObstacleREACT();
        this.addNewObstacleVUE();

        // checkear si el lenguaje choca con el ironship
        this.gameOverCollision();

        
        // 3. dibujar los elementos
        //ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.irSpace.drawIronship();
        
        this.obstacleArrCSS.forEach((eachObsCSS) => {
            eachObsCSS.drawObstacleCSS();
        });

        this.obstacleArrHTML.forEach((eachObsHTML) => {
            eachObsHTML.drawObstacleHTML();
        });

        this.obstacleArrJS.forEach((eachObsJS) => {
            eachObsJS.drawObstacleJS();
        });

        this.obstacleArrMDB.forEach((eachObsMDB) => {
            eachObsMDB.drawObstacleMDB();
        });

        this.obstacleArrNODE.forEach((eachObsNODE) => {
            eachObsNODE.drawObstacleNODE();
        });

        this.obstacleArrREACT.forEach((eachObsREACT) => {
            eachObsREACT.drawObstacleREACT();
        });
        
        this.obstacleArrVUE.forEach((eachObsVUE) => {
            eachObsVUE.drawObstacleVUE();
        });


        /*
        this.obsCSS.drawObstacleCSS();
        this.obsHTML.drawObstacleHTML();
        this.obsJS.drawObstacleJS();
        this.obsMDB.drawObstacleMDB();
        this.obsNODE.drawObstacleNODE();
        this.obsREACT.drawObstacleREACT();
        this.obsVUE.drawObstacleVUE();
        */
        



        // 4. control y recursividad
        requestAnimationFrame(this.gameLoop);


    }
}

