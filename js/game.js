class Game {

    constructor() {
        this.irSpace = new Ironship();

        this.obsCSS = new obstacleCSS();
        this.obsHTML = new obstacleHTML();
        this.obsJS = new obstacleJS();
        this.obsREACT = new obstacleREACT();
        

        this.obstacleArrCSS = [ ];
        this.obstacleArrHTML = [ ];
        this.obstacleArrJS = [ ];
        this.obstacleArrREACT = [ ];
        this.shotsArr = [ ];
        this.speed = 1;
        this.isGameOn = true;
        this.seconds = 0;
        this.incSeconds = setInterval(this.incrementsSeconds, 1000);
    }

    incrementsSeconds = () => {
        this.seconds++;
        timeSpan.innerText = parseInt(this.seconds);
        timeSpanGO.innerText = parseInt(this.seconds);
    }

    stopSeconds = () => {
        clearInterval(this.incSeconds);
    }

    // AÑADIENDO OBSTACULOS
    addNewObstacleShot = () => {
        let newObsShot = new Shot();
        newObsShot.playAudio();
        this.shotsArr.push(newObsShot);            
    }

    addNewObstacleCSS = () => {
        if ( this.obstacleArrCSS.length === 0 || this.obstacleArrCSS[this.obstacleArrCSS.length -1].y > 200) {
            randomX = Math.random() * (canvas.width - this.obsCSS.w);
            if (score > 190) {
                this.speed += 0.05;
            } else if  (score > 140) {
                this.speed += 0.05;
            } else if  (score > 70) {
                this.speed += 0.05;
            } else if (score > 30) {
                this.speed += 0.05;
            }
            let newObsCSS = new obstacleCSS(randomX, -200, this.speed);
            this.obstacleArrCSS.push(newObsCSS);
        }
    }

    addNewObstacleHTML = () => {
        if ( this.obstacleArrHTML.length === 0 || this.obstacleArrHTML[this.obstacleArrHTML.length -1].y > 150) {
            randomX = Math.random() * (canvas.width - this.obsHTML.w);
            if (score > 190) {
                this.speed += 0.05;
            } else if  (score > 140) {
                this.speed += 0.05;
            } else if  (score > 70) {
                this.speed += 0.05;
            } else if (score > 30) {
                this.speed += 0.05;
            }
            let newObsHTML = new obstacleHTML(randomX, -50, this.speed);
            this.obstacleArrHTML.push(newObsHTML);
        }
    }

    addNewObstacleJS = () => {
        if ( this.obstacleArrJS.length === 0 || this.obstacleArrJS[this.obstacleArrJS.length -1].y > 100) {
            randomX = Math.random() * (canvas.width - this.obsJS.w);
            if (score > 190) {
                this.speed += 0.08;
            } else if  (score > 140) {
                this.speed += 0.08;
            } else if  (score > 70) {
                this.speed += 0.08;
            } else if (score > 30) {
                this.speed += 0.08;
            }
            let newObsJS = new obstacleJS(randomX, -100, this.speed);
            this.obstacleArrJS.push(newObsJS);
        }
    }
    

    addNewObstacleREACT = () => {
        if ( this.obstacleArrREACT.length === 0 || this.obstacleArrREACT[this.obstacleArrREACT.length -1].y > 210) {
            randomX = Math.random() * (canvas.width - this.obsREACT.w);
            if (score > 190) {
                this.speed += 0.08;
            } else if  (score > 140) {
                this.speed += 0.08;
            } else if  (score > 70) {
                this.speed += 0.08;
            } else if (score > 30) {
                this.speed += 0.08;
            }
            let newObsREACT = new obstacleREACT(randomX, -80, this.speed);
            this.obstacleArrREACT.push(newObsREACT);
        }
    }

    // COLISION DE OBSTACULOS CON LA NAVE Y DISPARO
    Collision = () => {

        this.obstacleArrCSS.forEach( (eachObsCSS, indexCSS) => {
            if (this.irSpace.x < eachObsCSS.x + eachObsCSS.w &&
                this.irSpace.x + this.irSpace.w > eachObsCSS.x &&
                this.irSpace.y < eachObsCSS.y + eachObsCSS.h &&
                this.irSpace.h + this.irSpace.y > eachObsCSS.y) {
                // collision detected!
                // el juego se detiene
                this.isGameOn = false;
                
            } else if (eachObsCSS.y > canvas.height) {
                // colision obstacles con canvas height
                // 1. va restando puntos al score y borrando los elementos colisionados
                score -= 10;
                this.obstacleArrCSS.splice(indexCSS, 1);
                pointsSpan.innerText = parseInt(score);
                if (score < 0) {
                    this.isGameOn = false;
                    pointsSpanGO.style.color = "red";
                }
            }
            this.shotsArr.forEach( (eachObsShot, indexShot) => {
                if (eachObsShot.x < eachObsCSS.x + eachObsCSS.w &&
                    eachObsShot.x + eachObsShot.w > eachObsCSS.x &&
                    eachObsShot.y < eachObsCSS.y + eachObsCSS.h &&
                    eachObsShot.h + eachObsShot.y > eachObsCSS.y) {
                        // 1. va sumando puntos al score y borrando los elementos colisionados
                        score += 5;
                        
                        this.obstacleArrCSS.splice(indexCSS, 1);
                        this.shotsArr.splice(indexShot, 1);
                        pointsSpan.innerText = parseInt(score); 
                }
            })
        })

        this.obstacleArrHTML.forEach( (eachObsHTML, indexHTML) => {
            if (this.irSpace.x < eachObsHTML.x + eachObsHTML.w &&
                this.irSpace.x + this.irSpace.w > eachObsHTML.x &&
                this.irSpace.y < eachObsHTML.y + eachObsHTML.h &&
                this.irSpace.h + this.irSpace.y > eachObsHTML.y) {
                // collision detected!

                // el juego se detiene
                this.isGameOn = false;
            } else if (eachObsHTML.y > canvas.height) {
                // colision obstacles con canvas height
                // 1. va restando puntos al score y borrando los elementos colisionados
                score -= 10;
                this.obstacleArrHTML.splice(indexHTML, 1);
                pointsSpan.innerText = parseInt(score);
                if (score < 0) {
                    this.isGameOn = false;
                    pointsSpanGO.style.color = "red";
                }

            }
            this.shotsArr.forEach( (eachObsShot, indexShot) => {
                if (eachObsShot.x < eachObsHTML.x + eachObsHTML.w &&
                    eachObsShot.x + eachObsShot.w > eachObsHTML.x &&
                    eachObsShot.y < eachObsHTML.y + eachObsHTML.h &&
                    eachObsShot.h + eachObsShot.y > eachObsHTML.y) {
                        // 1. va sumando puntos al score
                        score += 5;
                        this.obstacleArrHTML.splice(indexHTML, 1);
                        this.shotsArr.splice(indexShot, 1);
                        pointsSpan.innerText = parseInt(score); 
                }
            })
        })

        this.obstacleArrJS.forEach( (eachObsJS, indexJS) => {
            if (this.irSpace.x < eachObsJS.x + eachObsJS.w &&
                this.irSpace.x + this.irSpace.w > eachObsJS.x &&
                this.irSpace.y < eachObsJS.y + eachObsJS.h &&
                this.irSpace.h + this.irSpace.y > eachObsJS.y) {
                // collision detected!
                // el juego se detiene
                this.isGameOn = false;
            } else if (eachObsJS.y > canvas.height) {
                // colision obstacles con canvas height
                // 1. va restando puntos al score y borrando los elementos colisionados
                score -= 10;
                this.obstacleArrJS.splice(indexJS, 1);
                pointsSpan.innerText = parseInt(score);
                if (score < 0) {
                    this.isGameOn = false;
                    pointsSpanGO.style.color = "red";
                }
            }
            this.shotsArr.forEach( (eachObsShot, indexShot) => {
                if (eachObsShot.x < eachObsJS.x + eachObsJS.w &&
                    eachObsShot.x + eachObsShot.w > eachObsJS.x &&
                    eachObsShot.y < eachObsJS.y + eachObsJS.h &&
                    eachObsShot.h + eachObsShot.y > eachObsJS.y) {
                        // 1. va sumando puntos al score
                        score += 5;
                        this.obstacleArrJS.splice(indexJS, 1);
                        this.shotsArr.splice(indexShot, 1);
                        pointsSpan.innerText = parseInt(score);
                }
            })
        })

        this.obstacleArrREACT.forEach( (eachObsREACT, indexREACT) => {
            if (this.irSpace.x < eachObsREACT.x + eachObsREACT.w &&
                this.irSpace.x + this.irSpace.w > eachObsREACT.x &&
                this.irSpace.y < eachObsREACT.y + eachObsREACT.h &&
                this.irSpace.h + this.irSpace.y > eachObsREACT.y) {
                // collision detected!
                //finaliza el juego

                // el juego se detiene
                this.isGameOn = false;
            } else if (eachObsREACT.y > canvas.height) {
                // colision obstacles con canvas height
                // 1. va restando puntos al score y borrando los elementos colisionados
                score -= 10;
                this.obstacleArrREACT.splice(indexREACT, 1);
                pointsSpan.innerText = parseInt(score);
                if (score < 0) {
                    this.isGameOn = false;
                    pointsSpanGO.style.color = "red";
                }
            }
            this.shotsArr.forEach( (eachObsShot, indexShot) => {
                if (eachObsShot.x < eachObsREACT.x + eachObsREACT.w &&
                    eachObsShot.x + eachObsShot.w > eachObsREACT.x &&
                    eachObsShot.y < eachObsREACT.y + eachObsREACT.h &&
                    eachObsShot.h + eachObsShot.y > eachObsREACT.y) {
                        // 1. va sumando puntos al score
                        score += 5;
                        this.obstacleArrREACT.splice(indexREACT, 1);
                        this.shotsArr.splice(indexShot, 1);
                        pointsSpan.innerText = parseInt(score); 
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

        this.obstacleArrREACT.forEach((eachObsREACT) => {
            eachObsREACT.moveObstacleREACT();
        });
        
        this.shotsArr.forEach((eachObsShot) => {
            eachObsShot.moveObstacleShot();
        });


        this.addNewObstacleJS();
        this.addNewObstacleHTML();
        this.addNewObstacleCSS();
        this.addNewObstacleREACT();


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
        
        this.obstacleArrREACT.forEach((eachObsREACT) => {
            eachObsREACT.drawObstacleREACT();
        });
        
        this.shotsArr.forEach((eachObsShot) => {
            //console.log("¨dibujando")
            eachObsShot.drawShot();
        });


        // 4. control y recursividad
        if (this.isGameOn) {
            requestAnimationFrame(this.gameLoop);    
        } else {
            this.stopSeconds();
            pointsSpanGO.innerText = parseInt(score); 
            window.removeEventListener("keydown", keyPress);
            // 2. el canvas desaparece
            canvas.style.display = "none";
            timePoints.style.display = "none";
            // 3. la pantalla final aparece
            gameOverScreen.style.display = "flex";
            
        }
    }
}

