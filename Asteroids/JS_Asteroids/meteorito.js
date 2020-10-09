class Meteorito {
    constructor(vector, tamaño, juego, hud = false, imgBig,imgNormal,imgSmall,imgRojo) {
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.tamaño = tamaño;
        this.posicion = vector;
        this.efectos = new Array();
        this.tocadoSlow = false;
        this.imgRojo = imgRojo;
        this.juego = juego;
        this.tamaño = tamaño;
        this.angulo = 2;
        this.vida = 0;
        this.mehanDado = false;
        this.cancer = false;
        this.cronoDaño = new Cronometro();

        this.velocidad = new Vector2D(Math.random() * 3, Math.random() * 3).setDireccion(Math.random() * Math.PI * 2);
        this.mostrarHud = hud;
        this.imgBig = imgBig;

        this.imgNormal = imgNormal;

        this.imgBSmall = imgSmall;

        if (this.tamaño == 1) {
            this.rectangulo = new Rectangulo(this.posicion.getX() + 5, this.posicion.getY() + 5, 30, 30);
            if (this.mostrarHud) {
                this.hud = new HudVida(this.posicion,this.juego.getVidaAstpequeño(), this.vida, 20, 7);
            }
            this.vida = this.juego.getVidaAstpequeño();
        } else {
            if (this.tamaño == 2) {
                this.rectangulo = new Rectangulo(this.posicion.getX() + 5, this.posicion.getY() + 5, 50, 50);
                if (this.mostrarHud) {
                    this.hud = new HudVida(this.posicion, this.juego.getVidaAstMediano(), this.vida, 40, 7);
                }
                this.vida = this.juego.getVidaAstMediano();
            } else {
                if (this.tamaño == 3) {
                    this.rectangulo = new Rectangulo(this.posicion.getX() + 5, this.posicion.getY() + 5, 90, 90);
                    if (this.mostrarHud) {
                        this.hud = new HudVida(this.posicion, this.juego.getVidaAstGrande(), this.vida, 80, 7);
                    }
                    this.vida = this.juego.getVidaAstGrande();
                }
            }
        }

        this.imgmeteoritoDado = null;

        this.numero = Math.floor(Math.random() * 3);
        
        if (this.tamaño == 1) {
            this.imgmeteoritoDado = this.imgRojo[2][this.numero];
        } else {
            if (this.tamaño == 2) {
                this.imgmeteoritoDado = this.imgRojo[1][this.numero];
            } else {
                if (this.tamaño == 3) {
                    this.imgmeteoritoDado = this.imgRojo[0][this.numero];
                }
            }
        }


        this.cornoEfectos = new Cronometro();

    }
    update() {
        for (let i = 0; i < this.efectos.length; i++) {
            this.efectos[i].update();
        }
        this.posicion = this.posicion.add(this.velocidad);
        this.angulo += this.juego.getVELOCIDAD_ANGULO() / 2;
        if (dimensionesVentana.ancho - 40 < this.posicion.getX()) {
            this.posicion.setX(0);
        } else {
            if (0 > this.posicion.getX()) {
                this.posicion.setX(dimensionesVentana.ancho - 40);
            }
        }
        if (dimensionesVentana.alto - 40 < this.posicion.getY()) {
            this.posicion.setY(10);
        } else {
            if (0 > this.posicion.getY()) {
                this.posicion.setY(dimensionesVentana.alto - 40);
            }
        }
        this.rectangulo.setX(this.posicion.getX() + 5);
        this.rectangulo.setY(this.posicion.getY() + 5);
        if (this.mostrarHud) {
            this.hud.setCantidad(this.vida);
            this.hud.setPosicion(this.posicion);
        }
        if(this.tocadoSlow){
            this.crearEfecto(this.juego.getImgVeneno(), Math.floor(Math.random() * 13) + 3, this.tamaño == 1?30:this.tamaño==2?50:90, 800,300);
        }
        if(this.cancer){
            if(!this.cornoEfectos.isEncendido()){
                this.setDaño(0.5);
                this.setMeHanDado(true)
            }
            this.crearEfecto(this.juego.getImgHielo(), Math.floor(Math.random() * 13) + 3, this.tamaño == 1?30:this.tamaño==2?50:90, 800,500);
        }
        this.cronoDaño.update();
        this.cornoEfectos.update();
    }
    draw() {
        var x = this.posicion.getX();
        var y = this.posicion.getY();

        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");



        var cti = this.ctx;

        var imgi = this.imgBSmall[this.numero];

        if (this.tamaño == 1) {
            if (this.mehanDado) {
                imgi = this.imgmeteoritoDado;
            } else {
                imgi = this.imgBSmall[this.numero];
            }
        } else {
            if (this.tamaño == 2) {
                if (this.mehanDado) {
                    imgi = this.imgmeteoritoDado;
                } else {
                    imgi = this.imgNormal[this.numero];
                }
            } else {
                if (this.tamaño == 3) {
                    if (this.mehanDado) {
                        imgi = this.imgmeteoritoDado;
                    } else {
                        imgi = this.imgBig[this.numero];
                    }
                }
            }
        }

        //this.ctx.fillStyle = '#FF0000';
        //this.ctx.fillRect(x , y,this.rectangulo.getAncho(),this.rectangulo.getAlto());

        cti.save();

        cti.translate(x + imgi.height / 2, y + imgi.width / 2);

        cti.rotate(this.angulo);
        cti.translate(-(x + imgi.height / 2), -(y + imgi.width / 2));

        //cti.drawImage(imgi, 0 , 0,100,100,x , y,100,100);
        cti.drawImage(imgi, x, y);
        cti.restore();
        if (this.mostrarHud) {
            this.hud.draw();
        }
        for (let i = 0; i < this.efectos.length; i++) {
            this.efectos[i].draw();
        }
        if (this.mehanDado && !this.cronoDaño.isEncendido()) {
            this.mehanDado = false;
        }
    }
   
    getPosicion() {
        return this.posicion;
    }
    getRectangulo() {
        return this.rectangulo;
    }
    getTamaño() {
        return this.tamaño;
    }
    getVida() {
        return this.vida;
    }

    setDaño(dmg) {
        this.vida = this.vida - dmg;
    }
    setMeHanDado(e) {
        this.cronoDaño.run(150);
        this.mehanDado = e;
    }
    getCancer(){
        return this.cancer
    }
    setCancer(e){
        this.cancer = e;
    }
    getEfecto() {
        return this.efectos;
    }
    setMostrasHud(e) {
        this.mostrarHud = e;
        if (this.tamaño == 1) {
            this.hud = new HudVida(this.posicion, 2, this.vida, 20, 7);
        } else {
            if (this.tamaño == 2) {
                this.hud = new HudVida(this.posicion, 4, this.vida, 40, 7);
            } else {
                if (this.tamaño == 3) {
                    this.hud = new HudVida(this.posicion, 5, this.vida, 80, 7);
                }
            }
        }
    }
    crearEfecto(src, tam, posTam, vida,time) { //'../img/efectos/hielo.png'
        if (!this.cornoEfectos.isEncendido()) {
            this.cornoEfectos.run(time);
            this.efectos.push(new Efectos(src, tam, tam, new Vector2D(this.posicion.getX() + Math.random() * posTam, this.posicion.getY() + 100), vida, Math.random() * 1, this));
        }
    }
    setTocadoSlow(e) {
        if(!this.tocadoSlow){
            this.velocidad =  new Vector2D(this.velocidad.getX()*50/100,this.velocidad.getY()*50/100);  
            if(this.velocidad.getX()<0.1){
                this.velocidad.setX(0.3);
                }
            if(this.velocidad.getY()<0.1){
                this.velocidad.setY(0.3) ;
            }
        }
        this.tocadoSlow = e;
    }
    getTocadoSlow() {
        return this.tocadoSlow;
    }
}