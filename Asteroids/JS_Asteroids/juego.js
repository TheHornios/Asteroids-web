class Juego {

    constructor() {
        this.sonido = new Sonido();
        this.nave = new Nave(objtoImage.getImg_nave_0(), new Vector2D(dimensionesVentana.ancho / 2, dimensionesVentana.alto / 2), this);

        this.arrayMeteoros = new Array();
        this.arrRayos = new Array();
        this.metCant = 1;
        this.disparos = new Array();
        this.animaciones = new Array();
        this.textos = new Array();
        this.hud = new Hud(this);
        this.mejora = new Array();
        this.bombas = new Array();
        this.explosion = new Array();
        // Imagnes Explosiones
        this.imgExplosion = new Array("../img/explosion/ex1.png", "../img/explosion/ex2.png", "../img/explosion/ex3.png", "../img/explosion/ex4.png", "../img/explosion/ex5.png");
        this.imgExplosion1 = new Array("../img/explosion/ex1_1.png", "../img/explosion/ex2_2.png", "../img/explosion/ex3_3.png", "../img/explosion/ex4_4.png", "../img/explosion/ex5_5.png");
        this.imgExplosion2 = new Array("../img/explosion/exn1.png", "../img/explosion/exn2.png", "../img/explosion/exn3.png", "../img/explosion/exn4.png", "../img/explosion/exn5.png");
        this.imgExplosion3 =  new Array("../img/menu/monedas.png", "../img/menu/monedas.png", "../img/menu/monedas.png");

        this.imgExplosion = this.cargarImgenesArray(this.imgExplosion);
        this.imgExplosion1 = this.cargarImgenesArray(this.imgExplosion1);
        this.imgExplosion2 = this.cargarImgenesArray(this.imgExplosion2);
        this.imgExplosion3 =  this.cargarImgenesArray(this.imgExplosion3);
        // Imagenes Meteoritos
        this.imgMeteoroBig = new Array(objtoImage.getImg_ast()[0][0], objtoImage.getImg_ast()[0][1], objtoImage.getImg_ast()[0][2]);
        this.imgMeteoroMedsiano= new Array(objtoImage.getImg_ast()[1][0], objtoImage.getImg_ast()[1][1], objtoImage.getImg_ast()[1][2]);
        this.imgMeteoroSmall= new Array(objtoImage.getImg_ast()[2][0], objtoImage.getImg_ast()[2][1], objtoImage.getImg_ast()[2][2]);

        this.imgMeteoroBig = this.cargarImgenesArray(this.imgMeteoroBig);
        this.imgMeteoroMedsiano = this.cargarImgenesArray(this.imgMeteoroMedsiano);
        this.imgMeteoroSmall = this.cargarImgenesArray(this.imgMeteoroSmall);

        this.imgMeteoroBigRojo = new Array(this.cargarImgenColoresMeteoros(this.imgMeteoroBig[0].src,"big_rojo"),this.cargarImgenColoresMeteoros(this.imgMeteoroBig[1].src,"big_rojo"),this.cargarImgenColoresMeteoros(this.imgMeteoroBig[2].src,"big_rojo") );
        this.imgMeteoroMedsianoRojo = new Array(this.cargarImgenColoresMeteoros(this.imgMeteoroMedsiano[0].src,"normal_rojo"),this.cargarImgenColoresMeteoros(this.imgMeteoroMedsiano[1].src,"normal_rojo"),this.cargarImgenColoresMeteoros(this.imgMeteoroMedsiano[2].src,"normal_rojo"));
        this.imgMeteoroSmallRojo = new Array(this.cargarImgenColoresMeteoros(this.imgMeteoroSmall[0].src,"small_rojo"),this.cargarImgenColoresMeteoros(this.imgMeteoroSmall[1].src,"small_rojo"),this.cargarImgenColoresMeteoros(this.imgMeteoroSmall[2].src,"small_rojo"));

        this.imgMeteoroRojo = new Array(this.imgMeteoroBigRojo,this.imgMeteoroMedsianoRojo,this.imgMeteoroSmallRojo);
        // Imagenes de efectos
        this.imgVeneno = new Image();
        this.imgVeneno.src = '../img/efectos/hielo.png';
        this.imgHielo = new Image();
        this.imgHielo.src = '../img/efectos/veneno.png';

        this.friends = new Array();
        this.arrMejorarYaTener = new Array();


        this.vidaAstGrande = 4.9;
        this.vidaAstMediano= 3.9;
        this.vidaAstpequeño = 1.9;

        /* Velocity */
        this.velocity = false;
        this.VelocityUnaVez = true;
        /* Molecula */
        this.molecula = false;
        this.restartRonda = false;

        
        this.pullMejoras = new PullMejoras(this);

            this.inciarOleada();
        
        
        this.actualizarExplosiones = 0;
        this.hudmejora = false;
        this.lose = false;
        this.terminar = false;
        this.soyMilk = false;
        this.icarus = false;
        this.midas = false;
        this.gemini = false;

        this.metacarga = false;
        this.metacargaPoner = false;
        this.metacargaQuitar = false;


        /* Constantes */


        this.ACELERACION_NAVE = 0.2;
        this.LIMITE_VELOCIDAD_NAVE = 9;
        this.TIEMPO_COLA_NAVE = 20;
        this.TIEMPO_MORIR = 3000;
        this.TIEMPO_MORIR_SKIN = 200;

        this.VELOCIDAD_ANGULO = 0.1;

        this.VELOCIDAD_DISPAROS = 10;
        this.TIEMPO_VELOCIDAD_DISPARO = 400; //400 
        this.TIEMPO_DISPAROS_VIVOS = 2000;
        this.EXPLOSION_TIME = 800;

        this.EXPLOSION_TIME_BOMBA = 1200;

        this.TIEMPO_BOMBAS = 400;
        this.TIEMPO_EXPLOSION_BOMBAS = 400;

        this.sonido.getSoundMiusic().play().loop();
        //
        this.colisionSi = 0;
    }

    draw() {
       

        for (let i = 0; i < this.animaciones.length; i++) {
            this.animaciones[i].draw();
        }
        for (let i = 0; i < this.explosion.length; i++) {
            this.explosion[i].draw();
        }

        for (let i = 0; i < this.arrayMeteoros.length; i++) {
            this.arrayMeteoros[i].draw();
        }
        
        this.hud.draw();
        // this.inciarOleada();
        
        for (let i = 0; i < this.bombas.length; i++) {
            this.bombas[i].draw();
        }
        for (let i = 0; i < this.disparos.length; i++) {
            this.disparos[i].draw();
        }
        for (let i = 0; i < this.arrRayos.length; i++) {
            this.arrRayos[i].draw();
        }
        for(let i = 0;i<this.friends.length;i++){
            this.friends[i].draw();
        }
        for (let i = 0; i < this.mejora.length; i++) {
            this.mejora[i].draw();
        }
        for (let i = 0; i < this.textos.length; i++) {
            this.textos[i].draw();
        }
        if (!this.lose) {
            this.nave.draw();
        }
        

    }
    update() {
        if (this.sonido.getSoundMiusic().isPaused()) {
            this.sonido.getSoundMiusic().play().loop();
        }

        if (!this.lose) {
            this.nave.update();

            if( this.colisionSi >= 1){
                this.colisionSi = 0;
                this.colisiones();
            }
            this.colisionSi++;

            for (let i = 0; i < this.mejora.length; i++) {
                this.mejora[i].update();
            }
            for (let i = 0; i < this.bombas.length; i++) {
                this.bombas[i].update();
            }
        }
        for(let i = 0;i<this.friends.length;i++){
            this.friends[i].update();
        }
        let indexMeteoro = -1;
        for (let i = 0; i < this.arrayMeteoros.length; i++) {
            this.arrayMeteoros[i].update();
            if (this.arrayMeteoros[i].getVida() <= 0) {
                indexMeteoro = i;
            }
        }
        for (let i = 0; i < this.arrRayos.length; i++) {
            this.arrRayos[i].update();
        }
        for (let i = 0; i < this.explosion.length; i++) {
            this.explosion[i].update();
        }

        for (let i = 0; i < this.disparos.length; i++) {
            this.disparos[i].update();

        }
        if (this.arrayMeteoros.length == 0) {
            this.inciarOleada();
        }
       
        if (indexMeteoro > -1) { 
            this.dividir(indexMeteoro);
        }
        for (let i = 0; i < this.animaciones.length; i++) {
            this.animaciones[i].update();
        }

        for (let i = 0; i < this.textos.length; i++) {
            this.textos[i].update();
        }



        /* UNA VEZ MUERTO ENVIAR LOS DARTOS A EL PHP */
        if (this.lose && this.explosion.length == 0 && !this.terminar) {
            acabarPartida(this.hud.getPts(), new Date());
            this.terminar = true;
        }
        /* Mejora de metacarga mejora la velocidad de disparo si esta quito si se mueve se vuelve a aumentar */
        if (this.nave != undefined && this.metacarga) {
            if (this.nave.getEstarQuiero() && !this.metacargaPoner) {
                this.metacargaPoner = true;
                this.metacargaQuitar = false;
                this.setTIEMPO_VELOCIDAD_DISPARO(this.getTIEMPO_VELOCIDAD_DISPARO() - 150)
                if (this.getTIEMPO_VELOCIDAD_DISPARO() == 50) {
                    this.setTIEMPO_VELOCIDAD_DISPARO(50);
                }
            } else {
                if (!this.nave.getEstarQuiero() && this.metacargaPoner && !this.metacargaQuitar) {
                    this.metacargaPoner = false;
                    this.metacargaQuitar = true;
                    this.setTIEMPO_VELOCIDAD_DISPARO(this.getTIEMPO_VELOCIDAD_DISPARO() + 150)
                }
            }
        }
        /* Mejora velocity que hace que la nave se teletansporte aleatoriamente  */
        if (this.velocity && this.VelocityUnaVez) {
            if (55 == Math.floor(Math.random() * 1000)) {
                let x = Math.random() * dimensionesVentana.ancho - 100;
                let y = Math.random() * dimensionesVentana.alto - 100;
                this.nave.setPosicion(new Vector2D(x, y))
                this.VelocityUnaVez = false;
            }
        }
        /* Mejora Molecula */
        if (this.molecula && this.restartRonda) {
            this.restartRonda = false;
            this.arrayMeteoros = new Array();
            this.metCant--;
            this.nave.setPosicion(new Vector2D(dimensionesVentana.ancho / 2, dimensionesVentana.alto / 2));
            this.inciarOleada();
        }
        /* MORIR PARAR PARTIDA */
        if ((!this.lose) && this.nave.getMuerto()) {
            this.generarExplsion(10, this.nave.getPosicion(), this.imgExplosion2, 5000, true);
            this.textos.push(new Texto(new Vector2D(dimensionesVentana.ancho / 2 - 200, dimensionesVentana.alto / 2), this, 'normal 50px Turret Road', false, false, "Puntos Totales: " + this.hud.getPts()));
            this.arrRayos = new Array();
            this.friends = new Array();
            this.nave = null;
            this.lose = true;
        }


    }

    inciarOleada() {
        this.vidaAstGrande  +=0.10;
        this.vidaAstMediano +=0.10;
        this.vidaAstpequeño +=0.10;
        this.VelocityUnaVez = true;
        // this.mejora.push(new Mejoras(this));
        this.mejora.push(new Mejoras(this));
        //this.mejora.push(new Mejoras(this,34));
        this.textos.push(new Texto(new Vector2D(dimensionesVentana.ancho / 2 - 100, dimensionesVentana.alto / 2), this, 'normal 50px Monoton', true, true, "RONDA" + this.metCant));
        let x;
        let y;
        for (let i = 0; i < this.metCant; i++) {
            x = Math.random() * dimensionesVentana.ancho - 100;
            y = Math.random() * dimensionesVentana.alto - 100;
            if (this.nave.getPosicion().getX() + 100 > x && this.nave.getPosicion().getX() - 100 < x && this.nave.getPosicion().getY() + 100 > y && this.nave.getPosicion().getY() - 100 < y) {
                x = this.nave.getPosicion().getX() + 260.0;
                y = this.nave.getPosicion().getY() + 260.0;
            }
            this.arrayMeteoros.push(new Meteorito(new Vector2D(x, y), 3, this, this.hudmejora,this.imgMeteoroBig,this.imgMeteoroMedsiano,this.imgMeteoroSmall,this.imgMeteoroRojo ));
        }
        this.metCant++;
        if (this.icarus) {
            let valor = Math.floor(Math.random() * 10);
            if (valor == 2) {
                this.icarus = false;
                this.juego.setLIMITE_VELOCIDAD_NAVE(9)
                this.juego.setACELERACION_NAVE(0.2)
            }
        }
        
    }
    dividir(index) {
        if (this.arrayMeteoros[index].getTamaño() == 1) {
            this.textos.push(new Texto(this.arrayMeteoros[index].getPosicion(), this, 'normal 20px Turret Road', true, true, "+" + 20 * this.hud.getMultiplicador() + "pts"));
            this.hud.addPts(20);
            //this.animaciones.push(new Animacion(this.arrayMeteoros[index].getPosicion(),array1,50,this));
            this.generarExplsion(10, this.arrayMeteoros[index].getPosicion(), this.imgExplosion1, this.getEXPLOSION_TIME(), false);
            this.arrayMeteoros.splice(index, 1);
        } else {
            if (this.arrayMeteoros[index].getTamaño() == 2) {
                 this.textos.push(new Texto(this.arrayMeteoros[index].getPosicion(), this, 'normal 20px Turret Road', true, true, "+" + 20 * this.hud.getMultiplicador() + "pts"));
                 this.hud.addPts(20);
                // this.animaciones.push(new Animacion(this.arrayMeteoros[index].getPosicion(),array1,50,this));
                 this.generarExplsion(20, this.arrayMeteoros[index].getPosicion(), this.imgExplosion1, this.getEXPLOSION_TIME(), false);
                 this.arrayMeteoros.push(new Meteorito(this.arrayMeteoros[index].getPosicion(), 1, this, this.hudmejora,this.imgMeteoroBig,this.imgMeteoroMedsiano,this.imgMeteoroSmall,this.imgMeteoroRojo));
                 this.arrayMeteoros.push(new Meteorito(this.arrayMeteoros[index].getPosicion(), 1, this, this.hudmejora,this.imgMeteoroBig,this.imgMeteoroMedsiano,this.imgMeteoroSmall,this.imgMeteoroRojo));
                this.arrayMeteoros.splice(index, 1);
            } else {
                if (this.arrayMeteoros[index].getTamaño() == 3) {
                    this.textos.push(new Texto(this.arrayMeteoros[index].getPosicion(), this, 'normal 20px Turret Road', true, true, "+" + 20 * this.hud.getMultiplicador() + "pts"));
                     this.hud.addPts(20);
                    // this.animaciones.push(new Animacion(this.arrayMeteoros[index].getPosicion(),array1,50,this));
                     this.generarExplsion(40, this.arrayMeteoros[index].getPosicion(), this.imgExplosion1, this.getEXPLOSION_TIME(), false);
                     this.arrayMeteoros.push(new Meteorito(this.arrayMeteoros[index].getPosicion(), 2, this, this.hudmejora,this.imgMeteoroBig,this.imgMeteoroMedsiano,this.imgMeteoroSmall,this.imgMeteoroRojo));
                     this.arrayMeteoros.push(new Meteorito(this.arrayMeteoros[index].getPosicion(), 2, this, this.hudmejora,this.imgMeteoroBig,this.imgMeteoroMedsiano,this.imgMeteoroSmall,this.imgMeteoroRojo));
                    this.arrayMeteoros.splice(index, 1);
                }
            }
        }
    }
    generarExplsion(valor, pos, arr, time, neve) {
        for (let i = 0; i < valor; i++) {
            this.explosion.push(new Explosion(pos, this, arr, time, neve));
        }
    }
    getDisparos() {
        return this.disparos;
    }
    colisiones() {
        var indexDisapro = -1;
        var indexMeteoro = -1;

        for (let i = 0; i < this.disparos.length; i++) {
            for (let x = 0; x < this.arrayMeteoros.length; x++) {
                if (this.disparos[i].getRectangulo().colision(this.arrayMeteoros[x].getRectangulo())) {
                    this.arrayMeteoros[x].setMeHanDado(true)
                    indexDisapro = i;
                    
                    this.sonido.getSoundImpat().play();

                    this.arrayMeteoros[x].setDaño(this.disparos[i].getDmg());
                    if (this.nave.getHielo()) {
                        this.arrayMeteoros[x].setTocadoSlow(true);
                    }
                    if (this.nave.getCancer()) {
                        this.arrayMeteoros[x].setCancer(true);
                    }
                    if (this.arrayMeteoros[x].getVida() <= 0) {
                        indexMeteoro = x;
                    }
                }
            }
        }

        if (!this.gemini || !this.nave.getInactivo()) {
            if (!this.nave.getTocado()) {
                for (let i = 0; i < this.arrayMeteoros.length; i++) {
                    if (this.nave.getRectangulo().colision(this.arrayMeteoros[i].getRectangulo())) {
                        this.arrayMeteoros[i].setMeHanDado(true)
                        this.sonido.getSoundImpat().play();
                        indexMeteoro = i;
                        if (this.midas) {
                            this.generarExplsion(20, this.getNave().getPosicion(), this.imgExplosion3, this.getEXPLOSION_TIME(), false);
                            if (usu != undefined) {
                                crearAjax('../Ajax_PHP/añadirMoneda.php', function (e) {}, 'mone=5');
                                for (let i = 0; i < 5; i++) {
                                    monedas++;
                                }
                            }
                        }
                        if (!this.nave.getEstrella()) {
                            this.hud.vidaMenos();
                            /* Mejora de molecula */
                            if (this.molecula) {
                                this.restartRonda = true;
                            }
                        }
                    }
                }
            }
        }
        if(this.friends.length!=0){
            for(let i = 0; i<this.friends.length;i++){
                for(let w = 0;w<this.arrayMeteoros.length;w++){
                    if (this.friends[i].getRectangulo().colision(this.arrayMeteoros[w].getRectangulo())) {
                        this.arrayMeteoros[w].setMeHanDado(true)
                        this.sonido.getSoundImpat().play();
                        indexMeteoro = w;
                    }
                    if(this.friends[i].getTipo() == 2){
                        for(let l = 0 ; l < this.arrRayos.length;l++){
                            if(this.arrRayos[l].getRectangulo().colision(this.arrayMeteoros[w].getRectangulo())){
                                this.arrayMeteoros[w].setMeHanDado(true)
                                this.sonido.getSoundImpat().play();
                                indexMeteoro = w;
                            }
                        }
                    }
                }
            }
        }
        if (indexDisapro > -1) {
            this.disparos.splice(indexDisapro, 1);
        }
        if (indexMeteoro > -1) {
            this.dividir(indexMeteoro);
        }
    }
    setMuteSound(e){
        this.muteSound = e;
    }
    getMuteSound(){
        return this.muteSound;
    }
    getSonido(){
        return this.sonido;
    }
    getBombas() {
        return this.bombas;
    }
    getAnimaciones() {
        return this.animaciones;
    }
    getMeteoros() {
        return this.arrayMeteoros;
    }
    getArrMejorarYaTener(){
        return this.arrMejorarYaTener;
    }
    getNave() {
        return this.nave;
    }
    getTextos() {
        return this.textos;
    }
    getMejoreas() {
        return this.mejora;
    }
    getRayos(){
        return this.arrRayos;
    }
    getHUD() {
        return this.hud;
    }
    getExplosiones() {
        return this.explosion;
    }
    getImgeExplosion() {
        return this.imgExplosion;
    }
    getTIEMPO_EXPLOSION_BOMBAS() {
        return this.TIEMPO_EXPLOSION_BOMBAS;
    }
    setTIEMPO_EXPLOSION_BOMBASS(a) {
        this.TIEMPO_EXPLOSION_BOMBAS = a;
    }
    getTIEMPO_BOMBAS() {
        return this.TIEMPO_BOMBAS;
    }
    setTIEMPO_BOMBAS(a) {
        this.TIEMPO_BOMBAS = a;
    }
    getEXPLOSION_TIME_BOMBA() {
        return this.EXPLOSION_TIME_BOMBA;
    }
    setEXPLOSION_TIME_BOMBA(a) {
        this.EXPLOSION_TIME_BOMBA = a;
    }
    getEXPLOSION_TIME() {
        return this.EXPLOSION_TIME;
    }
    setEXPLOSION_TIME(a) {
        this.EXPLOSION_TIME = a;
    }
    getTIEMPO_DISPAROS_VIVOS() {
        return this.TIEMPO_DISPAROS_VIVOS;
    }
    setTIEMPO_DISPAROS_VIVOS(a) {
        this.TIEMPO_DISPAROS_VIVOS = a;
    }
    getTIEMPO_VELOCIDAD_DISPARO() {
        return this.TIEMPO_VELOCIDAD_DISPARO;
    }
    setTIEMPO_VELOCIDAD_DISPARO(a) {
        this.TIEMPO_VELOCIDAD_DISPARO = a;
    }
    getVELOCIDAD_DISPAROS() {
        return this.VELOCIDAD_DISPAROS;
    }
    setVELOCIDAD_DISPAROS(a) {
        this.VELOCIDAD_DISPAROS = a;
    }
    getVELOCIDAD_ANGULO() {
        return this.VELOCIDAD_ANGULO;
    }
    setVELOCIDAD_ANGULO(a) {
        this.VELOCIDAD_ANGULO = a;
    }
    getTIEMPO_MORIR_SKIN() {
        return this.TIEMPO_MORIR_SKIN;
    }
    setTIEMPO_MORIR_SKIN(a) {
        this.TIEMPO_MORIR_SKIN = a;
    }
    getTIEMPO_MORIR() {
        return this.TIEMPO_MORIR;
    }
    setTIEMPO_MORIR(a) {
        this.TIEMPO_MORIR = a;
    }
    getACELERACION_NAVE() {
        return this.ACELERACION_NAVE;
    }
    setACELERACION_NAVE(a) {
        this.ACELERACION_NAVE = a;
    }
    getLIMITE_VELOCIDAD_NAVE() {
        return this.LIMITE_VELOCIDAD_NAVE;
    }
    setLIMITE_VELOCIDAD_NAVE(a) {
        this.LIMITE_VELOCIDAD_NAVE = a;
    }
    getTIEMPO_COLA_NAVE() {
        return this.TIEMPO_COLA_NAVEM
    }
    setTIEMPO_COLA_NAVE(a) {
        this.TIEMPO_COLA_NAVE = a;
    }
    getPullMejoras() {
        return this.pullMejoras;
    }
    setHudMejora(e) {
        this.hudmejora = e;
        for (let i = 0; i < this.arrayMeteoros.length; i++) {
            this.arrayMeteoros[i].setMostrasHud(e);
        }
    }
    setSoyMilk(e) {
        this.soyMilk = e
    }
    getSoyMilk() {
        return this.soyMilk;
    }
    setIcarus(e) {
        this.icarus = e;
    }
    getMidas() {
        return this.midas;
    }
    setMidas(e) {
        this.midas = e;
    }
    getGemini() {
        return this.gemini;
    }
    setGemini(e) {
        this.gemini = e;
    }
    setMetacarga(e) {
        this.metacarga = e;
    }
    getMetacarga() {
        return this.metacarga;
    }
    setVelocity(e) {
        this.velocity = e;
    }
    getMolecula(e) {
        this.molecula = e;
    }
    getFriends(){
        return this.friends;
    }
    getVidaAstGrande(){
        return this.vidaAstGrande ;
    }
    getVidaAstMediano(){
        return this.vidaAstMediano ;
    }
    getVidaAstpequeño (){
        return this.vidaAstpequeño ;
    }
    getImgHielo(){
        return this.imgHielo;
    }
    getImgVeneno(){
        return this.imgVeneno;
    }
    cargarImgenesArray(array){
        let arrImgCargadas = new Array();
        for (let i = 0; i < array.length; i++) {
            let imgCarga = new Image();
            imgCarga.src = array[i];
            arrImgCargadas.push(imgCarga);
        }
        return arrImgCargadas;
    }
    cargarImgenColoresMeteoros(src, tam) {
        let e = new Image();
        e.src = "../img/asteroides/skins/" + tam + src.substring(src.lastIndexOf('/'))
        return e;
    }
}

function getAllMethodNames(obj) {
    let methods = new Array();
    while (obj = Reflect.getPrototypeOf(obj)) {
        let keys = Reflect.ownKeys(obj)
        keys.forEach((k) => methods.push(k));
    }
    return methods;
}