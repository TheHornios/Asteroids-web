class Nave{
    constructor(img,img2,vector,juego,id){
        this.id = id;
        this.img = new Image();
        this.img.src = img;
        this.srcImg = img;

        this.img2 = new Image();
        this.img2.src = img2;
        this.srcImg2 = img2;

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
        this.diarrea = false;
        this.godHead =0;
        this.cronoColaFuego = new Cronometro();
        this.cronoColaFuego1 = new Cronometro();
        this.cronoMenosVidas = new Cronometro();
        this.cronoMenosVidas1 = new Cronometro();
        this.cronoMenosVidas2 = new Cronometro();
        this.tocado = false;
        this.muerto = false;
        this.colaInt = 0;
        this.colaInt2 = 0;
    }
    draw(){
        var x = this.vector.getX();
        var y = this.vector.getY();
        
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");

        //this.ctx.fillStyle = '#cc0000';
        //console.log(this.img.height);
       // this.ctx.fillRect(this.rectangulo.getX(),this.rectangulo.getY(),this.rectangulo.getAncho(),this.rectangulo.getAncho());
        
        var cti = this.ctx;
        if(!this.isAceleracion ){
            this.img.src = this.srcImg;
            var imgi =  this.img;
        }else{
            
            if(this.colaInt<2){
                this.img.src = this.srcImg2;
                var imgi = this.img;
                this.colaInt++;
                this.colaInt2++;
            }else{
                if(this.colaInt2<4){
                    this.img.src = this.srcImg;
                    var imgi =  this.img;
                    this.colaInt++;
                    this.colaInt2++;
                }else{
                    this.img.src = this.srcImg2;
                    var imgi = this.img;
                    this.colaInt2=0;
                    this.colaInt = 0;
                }
            }
        }

        cti.save();
       
        cti.translate(x+15,y+25); 
        cti.rotate(this.angulo);
        cti.translate(-(x+15),-(y+25)); 
        if(this.cronoMenosVidas.isEncendido()){
            if(this.cronoMenosVidas1.isEncendido()){
                cti.drawImage(imgi, x , y );
            }else{
                if(!this.cronoMenosVidas2.isEncendido()){
                    this.cronoMenosVidas1.run(this.juego.getTIEMPO_MORIR_SKIN()); 
                    this.cronoMenosVidas2.run(this.juego.getTIEMPO_MORIR_SKIN()*2); 
                }
            }
        }else{
            cti.drawImage(imgi, x , y );
        }
       
        cti.restore();
       
    }
    update(){
        if(this.juego.getHUD().getVidas()==0){
            this.muerto= true;
        }
        if(!this.tocado){
            if(!noDisparar){
                if(teclado.teclaPulsada(" ")&&!this.cronoDis.isEncendido()){
                    this.generarDisparos();
                    this.cronoDis.run(this.juego.getTIEMPO_VELOCIDAD_DISPARO());
                }
            }
        }
        if(teclado.teclaPulsada("ArrowRight")&&!this.dislexia){
            this.angulo += 0.1;
        }
        if(teclado.teclaPulsada("ArrowLeft")&&!this.dislexia){
            this.angulo -= 0.1;
        }
        if(teclado.teclaPulsada("ArrowRight")&&this.dislexia){
            this.angulo -= 0.1;
        }
        if(teclado.teclaPulsada("ArrowLeft")&&this.dislexia){
            this.angulo += 0.1;
        }
        if(!noDisparar){
            if(teclado.teclaPulsada("ArrowUp")){
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
        this.rectangulo.setX(this.vector.getX());
        this.rectangulo.setY(this.vector.getY());
        this.cronoDis.update();
        this.cronoBom.update();
        this.cronoColaFuego.update();
        this.cronoColaFuego1.update();
        this.cronoMenosVidas.update();
        this.cronoMenosVidas1.update();
        this.cronoMenosVidas2.update();
    }
    getAceleracion(){
        return this.isAceleracion;
    }
    setAceleracion(value){
        this.isAceleracion = value;
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
    sumGodHead(){
        this.godHead++;
    }
    generarDisparos(){
        this.juego.getDisparos().push(new Disapros(objtoImage.getImg_dis(),new Vector2D(this.vector.getX()+(this.img.width/2-5),this.vector.getY()+(this.img.height/2-5)),this.angulo,this.direccion,this.juego,this.sicosis,this.id));
        var dispGiro = 0.1;
        for(let i = 0;i<this.godHead;i++){
            if(this.direccion.getX()<-0.93||this.direccion.getX()>0.93){
                this.juego.getDisparos().push(new Disapros(objtoImage.getImg_dis(),new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(this.direccion.getX(),this.direccion.getY()-dispGiro),this.juego,this.sicosis,this.id));
                this.juego.getDisparos().push(new Disapros(objtoImage.getImg_dis(),new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(this.direccion.getX(),this.direccion.getY()+dispGiro),this.juego,this.sicosis,this.id));
            }else{
                this.juego.getDisparos().push(new Disapros(objtoImage.getImg_dis(),new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(this.direccion.getX()-dispGiro,this.direccion.getY()),this.juego,this.sicosis,this.id));
                this.juego.getDisparos().push(new Disapros(objtoImage.getImg_dis(),new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(this.direccion.getX()+dispGiro,this.direccion.getY()),this.juego,this.sicosis,this.id));
            }
            dispGiro = dispGiro+0.1;
            //-0.93 //-0.93 && //0.93 //0.93
        }
        if(this.diarrea){
            this.juego.getDisparos().push(new Disapros(objtoImage.getImg_dis(),new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(-this.direccion.getX(),-this.direccion.getY()),this.juego,this.sicosis,this.id));
            var dispGiro = 0.1;
            for(let i = 0;i<this.godHead;i++){
                if(this.direccion.getX()<-0.93||this.direccion.getX()>0.93){
                    this.juego.getDisparos().push(new Disapros(objtoImage.getImg_dis(),new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(-this.direccion.getX(),-(this.direccion.getY()-dispGiro)),this.juego,this.sicosis,this.id));
                    this.juego.getDisparos().push(new Disapros(objtoImage.getImg_dis(),new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(-this.direccion.getX(),-(this.direccion.getY()+dispGiro)),this.juego,this.sicosis));
                }else{
                    this.juego.getDisparos().push(new Disapros(objtoImage.getImg_dis(),new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(-(this.direccion.getX()-dispGiro),-this.direccion.getY()),this.juego,this.sicosis,this.id));
                    this.juego.getDisparos().push(new Disapros(objtoImage.getImg_dis(),new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(-(this.direccion.getX()+dispGiro),-this.direccion.getY()),this.juego,this.sicosis,this.id));
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
}