class Nave{
    constructor(img,vector,juego){
        this.img = new Image();
        this.img.src = img;
        this.srcImg = img;
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");  
        this.vector = vector;
        this.movimiento = new Vector2D(0.0,0.0);
        this.velocidad = new Vector2D(0.0,0.0);
        this.direccion = new Vector2D(0.0,1.0);
        this.isAceleracion = false;
        this.angulo = 0;
        this.juego = juego;
        this.cronoDis = new Cronometro();
        this.cronoDis.run("400");
        this.cronoBom = new Cronometro();
        this.cronoBom.run("400");
        this.rectangulo = new Rectangulo(this.vector.getX(),this.vector.getY(),30,50);
        this.dislexia = false;
        this.sicosis = false;
        this.hielo = false;
        this.diarrea = false;
        this.cancer = false;
        this.godHead =0;
        this.cronoColaFuego = new Cronometro();
        this.cronoColaFuego1 = new Cronometro();
        this.cronoMenosVidas = new Cronometro();
        this.cronoMenosVidas1 = new Cronometro();
        this.cronoMenosVidas2 = new Cronometro();
        this.cronoEstrella1 = new Cronometro();
        this.cronoEstrella2 = new Cronometro();
        this.cronoEstrella3 = new Cronometro();
        this.tocado = false;
        this.muerto = false;
        this.strella = false;
        this.estasQuieto = false;
        this.inactivo = false; 
        this.uniocrnio = false;
        this.numUnicornio = 0;
        this.vectorQuieto = new Vector2D(this.vector.getX(),this.vector.getY());
        this.tiempoNecesrioQuieto = new Cronometro();
        this.tiempoNecesrioQuieto.run(4000);
        this.colaInt = 0;
        this.colaInt2 = 0;
        this.dmg = 2;
        /* 0-gravity 1-antigravity 2-cemento 3-4diapros */
        this.mejorasDisparos = new Array(false,false,false,false,false,false);


        //Carga Imganes
        this.imgQuieto = new Image();
        this.imgQuieto.src = this.srcImg;

        this.imgAceleracion = new Image();
        this.imgAceleracion.src = objtoImage.getImg_nave_1();

        this.imgAmarillo = new Image();
        this.imgAmarillo.src = '../img/nave/skins/amarillo'+this.imgQuieto.src.substring(this.imgQuieto.src.lastIndexOf('/'));

        this.imgRojo = new Image();
        this.imgRojo.src = '../img/nave/skins/rojo'+this.imgQuieto.src.substring(this.imgQuieto.src.lastIndexOf('/'));

        this.imgeDisparo = new Image();
        this.imgeDisparo.src = objtoImage.getImg_dis();
    }
    draw(){
        var x = this.vector.getX();
        var y = this.vector.getY();
        
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.ctx.fillStyle = '#cc0000';
        //console.log(this.img.height);
        //this.ctx.fillRect(this.rectangulo.getX(),this.rectangulo.getY(),this.rectangulo.getAncho(),this.rectangulo.getAncho());
        
        var cti = this.ctx;
        if(!this.isAceleracion ){
            var imgi =  this.imgQuieto;
        }else{
            
            if(this.colaInt<2){
                var imgi = this.imgAceleracion;
                this.colaInt++;
                this.colaInt2++;
            }else{
                if(this.colaInt2<4){
                    var imgi =  this.imgQuieto;
                    this.colaInt++;
                    this.colaInt2++;
                }else{
                    var imgi = this.imgAceleracion;
                    this.colaInt2=0;
                    this.colaInt = 0;
                }
            }
        }

        cti.save();
        
        cti.translate(x+15,y+25); 
        cti.rotate(this.angulo);
        cti.translate(-(x+15),-(y+25)); 
        if(!this.strella){
            if((this.juego.getGemini()&&this.inactivo)){
                cti.globalAlpha = 0.3
            }else{
                cti.globalAlpha = 1
            }

            if(this.cronoMenosVidas.isEncendido()){
                if(this.cronoMenosVidas1.isEncendido()){
                    cti.drawImage(imgi, x , y );
                }else{
                    cti.drawImage(this.imgRojo, x , y );
                    if(!this.cronoMenosVidas2.isEncendido()){
                        this.cronoMenosVidas1.run(this.juego.getTIEMPO_MORIR_SKIN()); 
                        this.cronoMenosVidas2.run(this.juego.getTIEMPO_MORIR_SKIN()*2); 
                    }
                }
            }else{
                cti.drawImage(imgi, x , y);
            }
        }else{
            if(this.cronoEstrella2.isEncendido()){
                cti.drawImage(this.imgRojo, x , y );
            }else{
                cti.drawImage(this.imgAmarillo, x , y );
                if(!this.cronoEstrella3.isEncendido()){
                    this.cronoEstrella2.run(200);
                    this.cronoEstrella3.run(400);
                }
            }
            if(!this.cronoEstrella1.isEncendido()){
                this.strella = false;
                this.juego.setLIMITE_VELOCIDAD_NAVE(9)
            }
        }
       
        cti.restore();
       
    }
    update(){
        if(this.juego.getHUD().getVidas()==0){
            this.muerto= true;
        }
        if(!this.tocado){
            if(teclado.teclaPulsada(teclado.getBombas())&&!this.cronoBom.isEncendido()&&this.juego.getHUD().getBombas()!=0){
                this.juego.getHUD().bombasMenos();
                this.juego.getBombas().push(new Bomba(this.vector,this.juego));
                this.cronoBom.run(this.juego.getTIEMPO_BOMBAS());
            }
            if(teclado.teclaPulsada(teclado.getDisparar())&&!this.cronoDis.isEncendido()&&!this.strella){
                this.juego.getSonido().getSoundDisparo1().play();
                this.generarDisparos();
                this.cronoDis.run(this.juego.getTIEMPO_VELOCIDAD_DISPARO());
            }
        }
        if(teclado.teclaPulsada(teclado.getDerecha())&&!this.dislexia){
            this.angulo += 0.1;
        }
        if(teclado.teclaPulsada(teclado.getIzquierda())&&!this.dislexia){
            this.angulo -= 0.1;
        }
        if(teclado.teclaPulsada(teclado.getDerecha())&&this.dislexia){
            this.angulo -= 0.1;
        }
        if(teclado.teclaPulsada(teclado.getIzquierda())&&this.dislexia){
            this.angulo += 0.1;
        }

        if(teclado.teclaPulsada(teclado.getMovimiento())){
            this.movimiento = this.direccion.acceleracion(this.juego.getACELERACION_NAVE());
            if(!this.acceleracion){
                this.cronoColaFuego.run(this.juego.getTIEMPO_COLA_NAVE());
                this.cronoColaFuego1.run(this.juego.getTIEMPO_COLA_NAVE()*2);
            }
            this.isAceleracion = true;

        }else{
            if(this.velocidad.getMagnitud()>1){
                this.movimiento = (this.velocidad.acceleracion(-1).normalizar()).acceleracion(this.juego.getACELERACION_NAVE()/2);
            }else{
                this.velocidad.setX(0.0);
                this.velocidad.setY(0.0);
                this.movimiento.setY(0.0);
                this.movimiento.setX(0.0);
            }
            this.isAceleracion = false;
        }
        if(this.movimiento!=null&&this.movimiento!=undefined&&this.movimiento.getX()!=null&&this.movimiento.getY()!=null){
           
            this.velocidad = this.velocidad.add(this.movimiento);
           
            this.velocidad = this.velocidad.limite(this.juego.getLIMITE_VELOCIDAD_NAVE());
  
        }

        this.direccion = this.direccion.setDireccion(this.angulo - Math.PI/2);
      //  console.log(this.vector.add(this.velocidad));
     //   console.log(this.direccion.setDireccion(this.angulo - Math.PI/2));
        
        this.vector = this.vector.add(this.velocidad);
       
       if(dimensionesVentana.ancho-40<this.vector.getX()){
            this.vector.setX(0);
        }else{
            if(0>this.vector.getX()){
                this.vector.setX(dimensionesVentana.ancho-40);
            }
        }
        if(dimensionesVentana.alto-40<this.vector.getY()){
            this.vector.setY(10);
        }else{
            if(0>this.vector.getY()){
                this.vector.setY(dimensionesVentana.alto-40);
            }
        }
        if(this.tocado&&!this.cronoMenosVidas.isEncendido()){
            this.tocado = false;
        }
        if(!this.tiempoNecesrioQuieto.isEncendido()){
            if(this.vector.getX()==this.vectorQuieto.getX()&&this.vector.getY()==this.vectorQuieto.getY()){
                this.estasQuieto = true;
                this.inactivo = true;
            }
            this.tiempoNecesrioQuieto.run(4000)
        }
        if(this.vector.getX()!=this.vectorQuieto.getX()||this.vector.getY()!=this.vectorQuieto.getY()){
            this.estasQuieto = false;
            this.inactivo = false;
            this.vectorQuieto = new Vector2D(this.vector.getX(),this.vector.getY());
        }
        this.rectangulo.setX(this.vector.getX());
        this.rectangulo.setY(this.vector.getY());
        this.cronoDis.update();
        this.cronoBom.update();
        this.cronoColaFuego.update();
        this.cronoColaFuego1.update();
        this.cronoMenosVidas.update();
        this.cronoMenosVidas1.update();
        this.cronoMenosVidas2.update();
        this.cronoEstrella1.update();
        this.cronoEstrella2.update();
        this.tiempoNecesrioQuieto.update();
        this.cronoEstrella3.update();
    }
    getPosicion(){
        return this.vector;
    }
    setPosicion(e){
        this.vector = e;
    }
    getRectangulo(){
        return this.rectangulo;
    }
    getDislexia(){
        return this.dislexia;
    }
    setDislexia(valor){
        this.dislexia = valor;
    }
    setDiarrea(valor){
        return this.diarrea = valor;
    }
    setSicosis(valor){
        this.sicosis = valor;
    }
    getGodHead(){
        return this.godHead;
    }
    sumGodHead(){
        this.godHead++;
    }
    generarDisparos(){
        this.inactivo = false;
        this.vectorDisparos = new Vector2D(this.direccion.getX(),this.direccion.getY());
        if(this.uniocrnio){
            if(this.numUnicornio==0){
                if(this.direccion.getX()<-0.93||this.direccion.getX()>0.93){
                    this.vectorDisparos = new Vector2D(this.direccion.getX(),this.direccion.getY()+0.2);
                }else{
                    this.vectorDisparos = new Vector2D(this.direccion.getX()+0.2,this.direccion.getY());
                }
                this.numUnicornio++;
            }else{
                if(this.direccion.getX()<-0.93||this.direccion.getX()>0.93){
                    this.vectorDisparos = new Vector2D(this.direccion.getX(),this.direccion.getY()-0.2);
                }else{
                    this.vectorDisparos = new Vector2D(this.direccion.getX()-0.2,this.direccion.getY());
                }
                this.numUnicornio = 0;
            }
        }
        this.juego.getDisparos().push(new Disapros(this.imgeDisparo,new Vector2D(this.vector.getX()+(this.img.width/2-5),this.vector.getY()+(this.img.height/2-5)),this.angulo,this.vectorDisparos,this.juego,this.sicosis,false,this.mejorasDisparos,this.dmg));
        
        var dispGiro = 0.1;
        for(let i = 0;i<this.godHead;i++){
            if(this.direccion.getX()<-0.93||this.direccion.getX()>0.93){
                this.juego.getDisparos().push(new Disapros(this.imgeDisparo,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(this.vectorDisparos.getX(),this.vectorDisparos.getY()-dispGiro),this.juego,this.sicosis,false,this.mejorasDisparos,this.dmg));
                this.juego.getDisparos().push(new Disapros(this.imgeDisparo,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(this.vectorDisparos.getX(),this.vectorDisparos.getY()+dispGiro),this.juego,this.sicosis,false,this.mejorasDisparos,this.dmg));
            }else{
                this.juego.getDisparos().push(new Disapros(this.imgeDisparo,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(this.vectorDisparos.getX()-dispGiro,this.vectorDisparos.getY()),this.juego,this.sicosis,false,this.mejorasDisparos,this.dmg));
                this.juego.getDisparos().push(new Disapros(this.imgeDisparo,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(this.vectorDisparos.getX()+dispGiro,this.vectorDisparos.getY()),this.juego,this.sicosis,false,this.mejorasDisparos,this.dmg));
            }
            dispGiro = dispGiro+0.1;
            //-0.93 //-0.93 && //0.93 //0.93
        }
        if(this.diarrea){
            this.juego.getDisparos().push(new Disapros(this.imgeDisparo,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(-this.vectorDisparos.getX(),-this.vectorDisparos.getY()),this.juego,this.sicosis,false,this.mejorasDisparos,this.dmg));
            var dispGiro = 0.1;
            for(let i = 0;i<this.godHead;i++){
                if(this.direccion.getX()<-0.93||this.direccion.getX()>0.93){
                    this.juego.getDisparos().push(new Disapros(this.imgeDisparo,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(-this.vectorDisparos.getX(),-(this.vectorDisparos.getY()-dispGiro)),this.juego,this.sicosis,false,this.mejorasDisparos,this.dmg));
                    this.juego.getDisparos().push(new Disapros(this.imgeDisparo,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(-this.vectorDisparos.getX(),-(this.vectorDisparos.getY()+dispGiro)),this.juego,this.sicosis,false,this.mejorasDisparos,this.dmg));
                }else{
                    this.juego.getDisparos().push(new Disapros(this.imgeDisparo,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(-(this.vectorDisparos.getX()-dispGiro),-this.vectorDisparos.getY()),this.juego,this.sicosis,false,this.mejorasDisparos,this.dmg));
                    this.juego.getDisparos().push(new Disapros(this.imgeDisparo,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(-(this.vectorDisparos.getX()+dispGiro),-this.vectorDisparos.getY()),this.juego,this.sicosis,false,this.mejorasDisparos,this.dmg));
                }
                dispGiro = dispGiro+0.1;
                //-0.93 //-0.93 && //0.93 //0.93
            }
        }
    }
    setTocado(value){
        this.tocado = value;
        this.cronoMenosVidas.run(this.juego.getTIEMPO_MORIR());  
        this.cronoMenosVidas1.run(this.juego.getTIEMPO_MORIR_SKIN()); 
        this.cronoMenosVidas2.run(this.juego.getTIEMPO_MORIR_SKIN()*2); 
    }
    getDirecion(){
        return  this.direccion;
    }
    getTocado(){
        return this.tocado;
    }
    getMuerto(){
        return this.muerto;
    }
    getAngulo(){
        return this.angulo;
    }
    setAngulo(angulo){
        this.angulo = angulo;
    }
    getDmg(){
        return this.dmg;
    }
    setDmg(e){
        this.dmg = e;
    }
    setGravity(){
        this.mejorasDisparos[0] = true;
    }
    setAntiGravity(){
        this.mejorasDisparos[1] = true;
    }
    setCemento(){
        this.mejorasDisparos[2] = true;
    }
    setDividirEn4(){
        this.mejorasDisparos[3] = true;
    }
    setEstrellaTrue(){
        this.strella = true;
        this.cronoEstrella1.run(10000);
        this.cronoEstrella2.run(200);
        this.cronoEstrella3.run(400);
        this.juego.setLIMITE_VELOCIDAD_NAVE(15)
    }
    getEstrella(){
        return this.strella;
    }
    getEstarQuiero(){
        return  this.estasQuieto ;
    }
    setEstarQuieto(e){
        this.estasQuieto = e;
    }
    getInactivo(){
        return this.inactivo;
    }
    setInactivo(e){
        this.inactivo = e;
    }
    setUnicornio(e){
        this.uniocrnio = e;
    }
    setHielo(e){
        this.hielo = e;
    }
    getHielo(){
        return this.hielo;
    }
    setCancer(e){
        this.cancer = e;
    }
    getCancer(){
        return this.cancer;
    }
    getBoomerang(){
        return  this.mejorasDisparos[5];
    }
    setBoomerang(e){
        this.mejorasDisparos[5] = e;
    }
}