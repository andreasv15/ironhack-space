class Game {

    constructor() {
        this.irSpace = new Ironship();
        this.irShoot;

        this.obsCSS = new obstacleCSS();
        this.obsHTML = new obstacleHTML();
        this.obsJS = new obstacleJS();
        this.obsMDB = new obstacleMDB();
        //this.obsNODE = new obstacleNODE();
        this.obsREACT = new obstacleREACT();
        this.obsVUE = new obstacleVUE();
        

        //let randomY = Math.floor(Math.random() * canvas.height);
        //console.log(randomX);
        this.obstacleArrCSS = [ ];
        this.obstacleArrHTML = [ ];
        this.obstacleArrJS = [ ];
        this.obstacleArrMDB = [ ];
        //this.obstacleArrNODE = [ ];
        this.obstacleArrREACT = [ ];
        this.obstacleArrVUE = [ ];
        this.shootsArr = [ ];

        this.isGameOn = true;
        this.score = 0;
        this.seconds
    }

    
    addNewObstacleShoot = () => {
        let newObsShoot = new Shoot();
        this.shootsArr.push(newObsShoot);            
    }

    addNewObstacleCSS = () => {
        if ( this.obstacleArrCSS.length === 0 || this.obstacleArrCSS[this.obstacleArrCSS.length -1].y > 200) {
            randomX = Math.random() * (canvas.width - this.obsCSS.w);
            let newObsCSS = new obstacleCSS(randomX, -200);
            this.obstacleArrCSS.push(newObsCSS);
        }
    }

    addNewObstacleHTML = () => {
        if ( this.obstacleArrHTML.length === 0 || this.obstacleArrHTML[this.obstacleArrHTML.length -1].y > 150) {
            randomX = Math.random() * (canvas.width - this.obsHTML.w);
            let newObsHTML = new obstacleHTML(randomX, -50);
            this.obstacleArrHTML.push(newObsHTML);
        }
    }

    addNewObstacleJS = () => {
        if ( this.obstacleArrJS.length === 0 || this.obstacleArrJS[this.obstacleArrJS.length -1].y > 100) {
            randomX = Math.random() * (canvas.width - this.obsJS.w);
            let newObsJS = new obstacleJS(randomX, -100);
            this.obstacleArrJS.push(newObsJS);
        }
    }

    addNewObstacleMDB = () => {
        if ( this.obstacleArrMDB.length === 0 || this.obstacleArrMDB[this.obstacleArrMDB.length -1].y > 80) {
            randomX = Math.random() * (canvas.width - this.obsMDB.w);
            let newObsMDB = new obstacleMDB(randomX, -20);
            this.obstacleArrMDB.push(newObsMDB);
        }
    }

    /*
    addNewObstacleNODE = () => {
        if ( this.obstacleArrNODE.length === 0 || this.obstacleArrNODE[this.obstacleArrNODE.length -1].y > 120) {
            randomX = Math.random() * (canvas.width - this.obsNODE.w);
            let newObsNODE = new obstacleNODE(randomX, -50);
            this.obstacleArrNODE.push(newObsNODE);
        }
    }
    */

    addNewObstacleREACT = () => {
        if ( this.obstacleArrREACT.length === 0 || this.obstacleArrREACT[this.obstacleArrREACT.length -1].y > 210) {
            randomX = Math.random() * (canvas.width - this.obsREACT.w);
            let newObsREACT = new obstacleREACT(randomX, -80);
            this.obstacleArrREACT.push(newObsREACT);
        }
    }

    addNewObstacleVUE = () => {
        if ( this.obstacleArrVUE.length === 0 || this.obstacleArrVUE[this.obstacleArrVUE.length -1].y > 200) {
            randomX = Math.random() * (canvas.width - this.obsVUE.w);
            let newObsVUE = new obstacleVUE(randomX, -100);
            this.obstacleArrVUE.push(newObsVUE);
        }
    }

    Collision = () => {

        this.obstacleArrCSS.forEach( (eachObsCSS, indexCSS) => {
            if (this.irSpace.x < eachObsCSS.x + eachObsCSS.w &&
                this.irSpace.x + this.irSpace.w > eachObsCSS.x &&
                this.irSpace.y < eachObsCSS.y + eachObsCSS.h &&
                this.irSpace.h + this.irSpace.y > eachObsCSS.y) {
                // collision detected!

                // el juego se detiene
                this.isGameOn = false;


            }
            this.shootsArr.forEach( (eachObsShoot, indexShoot) => {
                if (eachObsShoot.x < eachObsCSS.x + eachObsCSS.w &&
                    eachObsShoot.x + eachObsShoot.w > eachObsCSS.x &&
                    eachObsShoot.y < eachObsCSS.y + eachObsCSS.h &&
                    eachObsShoot.h + eachObsShoot.y > eachObsCSS.y) {
                        // 1. va sumando puntos al score y borrando los elementos colisionados
                        this.score += 5;
                        //this.shootsArr.splice(indexShoot, 1);
                        this.obstacleArrCSS.splice(indexCSS, 1);
                        this.shootsArr.splice(indexShoot, 1);
                        pointsSpan.innerText = parseInt(this.score); 
                }   
                
            })
        })

        this.obstacleArrHTML.forEach( (eachObsHTML, indexHTML) => {
            if (this.irSpace.x < eachObsHTML.x + eachObsHTML.w &&
                this.irSpace.x + this.irSpace.w > eachObsHTML.x &&
                this.irSpace.y < eachObsHTML.y + eachObsHTML.h &&
                this.irSpace.h + this.irSpace.y > eachObsHTML.y) {
                // collision detected!
                //console.log("colisiona VUE con iron");
                //finaliza el juego

                // el juego se detiene
                this.isGameOn = false;
            } 
            this.shootsArr.forEach( (eachObsShoot, indexShoot) => {
                if (eachObsShoot.x < eachObsHTML.x + eachObsHTML.w &&
                    eachObsShoot.x + eachObsShoot.w > eachObsHTML.x &&
                    eachObsShoot.y < eachObsHTML.y + eachObsHTML.h &&
                    eachObsShoot.h + eachObsShoot.y > eachObsHTML.y) {
                        // 1. va sumando puntos al score
                        this.score += 5;
                        this.obstacleArrHTML.splice(indexHTML, 1);
                        this.shootsArr.splice(indexShoot, 1);
                        pointsSpan.innerText = parseInt(this.score); 

                }
            })
        })

        this.obstacleArrJS.forEach( (eachObsJS, indexJS) => {
            if (this.irSpace.x < eachObsJS.x + eachObsJS.w &&
                this.irSpace.x + this.irSpace.w > eachObsJS.x &&
                this.irSpace.y < eachObsJS.y + eachObsJS.h &&
                this.irSpace.h + this.irSpace.y > eachObsJS.y) {
                // collision detected!
                //console.log("colisiona VUE con iron");
                //finaliza el juego

                // el juego se detiene
                this.isGameOn = false;
            }
            this.shootsArr.forEach( (eachObsShoot, indexShoot) => {
                if (eachObsShoot.x < eachObsJS.x + eachObsJS.w &&
                    eachObsShoot.x + eachObsShoot.w > eachObsJS.x &&
                    eachObsShoot.y < eachObsJS.y + eachObsJS.h &&
                    eachObsShoot.h + eachObsShoot.y > eachObsJS.y) {
                        // 1. va sumando puntos al score
                        this.score += 5;
                        this.obstacleArrJS.splice(indexJS, 1);
                        this.shootsArr.splice(indexShoot, 1);
                        pointsSpan.innerText = parseInt(this.score); 

                }
            })
        })

        this.obstacleArrMDB.forEach( (eachObsMDB, indexMDB) => {
            if (this.irSpace.x < eachObsMDB.x + eachObsMDB.w &&
                this.irSpace.x + this.irSpace.w > eachObsMDB.x &&
                this.irSpace.y < eachObsMDB.y + eachObsMDB.h &&
                this.irSpace.h + this.irSpace.y > eachObsMDB.y) {
                // collision detected!
                //console.log("colisiona VUE con iron");
                //finaliza el juego

                // el juego se detiene
                this.isGameOn = false;
            } 
            this.shootsArr.forEach( (eachObsShoot, indexShoot) => {
                if (eachObsShoot.x < eachObsMDB.x + eachObsMDB.w &&
                    eachObsShoot.x + eachObsShoot.w > eachObsMDB.x &&
                    eachObsShoot.y < eachObsMDB.y + eachObsMDB.h &&
                    eachObsShoot.h + eachObsShoot.y > eachObsMDB.y) {
                        // 1. va sumando puntos al score
                        this.score += 5;
                        this.obstacleArrMDB.splice(indexMDB, 1);
                        this.shootsArr.splice(indexShoot, 1);
                        pointsSpan.innerText = parseInt(this.score); 

                    }
            })
        })

        /*
        this.obstacleArrNODE.forEach( (eachObsNODE, indexNODE) => {
            if (this.irSpace.x < eachObsNODE.x + eachObsNODE.w &&
                this.irSpace.x + this.irSpace.w > eachObsNODE.x &&
                this.irSpace.y < eachObsNODE.y + eachObsNODE.h &&
                this.irSpace.h + this.irSpace.y > eachObsNODE.y) {
                // collision detected!
                //console.log("colisiona VUE con iron");
                //finaliza el juego

                // el juego se detiene
                this.isGameOn = false;
            }
            this.shootsArr.forEach( (eachObsShoot, indexShoot) => {
                if (eachObsShoot.x < eachObsNODE.x + eachObsNODE.w &&
                    eachObsShoot.x + eachObsShoot.w > eachObsNODE.x &&
                    eachObsShoot.y < eachObsNODE.y + eachObsNODE.h &&
                    eachObsShoot.h + eachObsShoot.y > eachObsNODE.y) {
                        // 1. va sumando puntos al score
                        this.score += 5;
                        this.obstacleArrNODE.splice(indexNODE, 1);
                        this.shootsArr.splice(indexShoot, 1);

                }
            })
        })
        */
        this.obstacleArrREACT.forEach( (eachObsREACT, indexREACT) => {
            if (this.irSpace.x < eachObsREACT.x + eachObsREACT.w &&
                this.irSpace.x + this.irSpace.w > eachObsREACT.x &&
                this.irSpace.y < eachObsREACT.y + eachObsREACT.h &&
                this.irSpace.h + this.irSpace.y > eachObsREACT.y) {
                // collision detected!
                //console.log("colisiona VUE con iron");
                //finaliza el juego

                // el juego se detiene
                this.isGameOn = false;
            } 
            this.shootsArr.forEach( (eachObsShoot, indexShoot) => {
                if (eachObsShoot.x < eachObsREACT.x + eachObsREACT.w &&
                    eachObsShoot.x + eachObsShoot.w > eachObsREACT.x &&
                    eachObsShoot.y < eachObsREACT.y + eachObsREACT.h &&
                    eachObsShoot.h + eachObsShoot.y > eachObsREACT.y) {
                        // 1. va sumando puntos al score
                        this.score += 5;
                        this.obstacleArrREACT.splice(indexREACT, 1);
                        this.shootsArr.splice(indexShoot, 1);
                        //console.log(this.score);
                        pointsSpan.innerText = parseInt(this.score); 
                }
            })
        })

        this.obstacleArrVUE.forEach( (eachObsVUE, indexVUE) => {
            if (this.irSpace.x < eachObsVUE.x + eachObsVUE.w &&
                this.irSpace.x + this.irSpace.w > eachObsVUE.x &&
                this.irSpace.y < eachObsVUE.y + eachObsVUE.h &&
                this.irSpace.h + this.irSpace.y > eachObsVUE.y) {
                // collision detected!
                //console.log("colisiona VUE con iron");
                //finaliza el juego

                // el juego se detiene
                this.isGameOn = false;
            }
            this.shootsArr.forEach( (eachObsShoot, indexShoot) => {
                if (eachObsShoot.x < eachObsVUE.x + eachObsVUE.w &&
                    eachObsShoot.x + eachObsShoot.w > eachObsVUE.x &&
                    eachObsShoot.y < eachObsVUE.y + eachObsVUE.h &&
                    eachObsShoot.h + eachObsShoot.y > eachObsVUE.y) {
                        //console.log("colision shoot con vue")
                        // 1. va sumando puntos al score
                        this.score += 5;
                        this.obstacleArrVUE.splice(indexVUE, 1);
                        this.shootsArr.splice(indexShoot, 1);
                        pointsSpan.innerText = parseInt(this.score); 
                }
            })
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

        /*
        this.obstacleArrNODE.forEach((eachObsNODE) => {
            eachObsNODE.moveObstacleNODE();
        });
        */
        
        this.obstacleArrREACT.forEach((eachObsREACT) => {
            eachObsREACT.moveObstacleREACT();
        });
        
        this.obstacleArrVUE.forEach((eachObsVUE) => {
            eachObsVUE.moveObstacleVUE();
        });

        this.shootsArr.forEach((eachObsShoot) => {
            eachObsShoot.moveObstacleShoot();
        });

        this.addNewObstacleJS();
        this.addNewObstacleMDB();
        this.addNewObstacleHTML();
        //this.addNewObstacleNODE();
        this.addNewObstacleCSS();
        this.addNewObstacleREACT();
        this.addNewObstacleVUE();

        if (this.irShoot) {
            this.irShoot.drawShoot();
            this.irShoot.moveObstacleShoot();
        }

        // checkear si el lenguaje choca con el ironship
        this.Collision();

        
        // 3. dibujar los elementos
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

        /*
        this.obstacleArrNODE.forEach((eachObsNODE) => {
            eachObsNODE.drawObstacleNODE();
        });
        */

        this.obstacleArrREACT.forEach((eachObsREACT) => {
            eachObsREACT.drawObstacleREACT();
        });
        
        this.obstacleArrVUE.forEach((eachObsVUE) => {
            eachObsVUE.drawObstacleVUE();
        });

        this.shootsArr.forEach((eachObsShoot) => {
            eachObsShoot.drawShoot();
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
        if (this.isGameOn) {
            requestAnimationFrame(this.gameLoop);    
        } else {
            // 2. el canvas desaparece
            canvas.style.display = "none";

            // 3. la pantalla final aparece
            gameOverScreen.style.display = "flex";
            
            
        }


    }
}

