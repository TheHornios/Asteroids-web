class Friend{
    constructor(imgArr,vector,juego,ancho,alto,tipo){
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.indiceImagen = 0;
        this.vector = vector;
        this.juego = juego;
        this.angulo = 0;
        this.alto = alto;
        this.ancho = ancho;
        this.cronoCambiarSkin = new Cronometro();
        this.cronoCambiarSkin.run(100);
        this.rectangulo = new Rectangulo(this.vector.getX(),this.vector.getY(),ancho,alto);

        // Pie
        this.dondeCaer = new Vector2D(this.vector.getX(),0);
        this.cantPiernas = Math.ceil(this.vector.getY()/69)+2;
        this.caer = false;
        this.cronoCaer = new Cronometro();
        this.cronoCaer.run(8000);
        this.cronoQuitar = new Cronometro();
        this.quitar = false;

        //Rayo laser
        this.ultimaPos = this.vector;
        this.cargar = 1;
        this.cargado = false;
        this.disparar = false;
        this.cronoCargarRayo = new Cronometro();
        this.cronoCargarRayo.run(200);
        this.apunta = 0;

        this.imgArrCargados = new Array();
        for(let i = 0;i<imgArr.length;i++){
            this.img = new Image();
            this.img.src = imgArr[i];
            this.imgArrCargados.push(this.img);
        }
        this.tipo = tipo;
        if( this.tipo == 0 ){
            this.vector.setX(dimensionesVentana.ancho/2);
            this.vector.setY(this.alto);
        }
    }
    update(){
        if( this.tipo == 0 ){
            this.tipoCero();
        }else{
            if( this.tipo == 1 ){
                this.tipoUno();
            }else{
                if( this.tipo == 2 ){
                    this.vector = this.ultimaPos ;
                    setTimeout(timeOutPos(this,this.juego.getNave().getPosicion().getX(),this.juego.getNave().getPosicion().getY()),200);

                    if(teclado.teclaPulsada(teclado.getDisparar())){
                        if(!this.cronoCargarRayo.isEncendido()){
                            this.cargar = this.cargar+1;
                            if(this.cargar == this.imgArrCargados.length-1){
                                this.cargar = this.imgArrCargados.length-2;
                                this.cargado  = true;
                                this.disparar = true;
                            }
                            this.cronoCargarRayo.run(400)
                        }
                    }else{
                        if( !this.disparar ){
                            this.cargado  = false;
                            this.cargar = 0;
                        }else{
                            this.crearDisparo();
                            this.disparar = false;
                        }
                        
                    }
                    this.cronoCargarRayo.update();

                }





                if(this.juego.getNave().getDirecion().getX()<-0.7 ){
                    //console.log('derecha');
                    this.apunta  = 0;
                    this.angulo = -1.575;
                }else{
                    if(this.juego.getNave().getDirecion().getX()>0.7 ){
                        //console.log('izquierda');
                        this.apunta  = 1;
                        this.angulo = 1.575;
                    }else{
                        if(this.juego.getNave().getDirecion().getY()<-0.7 ){
                            //console.log('Up');
                            this.apunta  = 2;
                            this.angulo = 0;
                        }else{
                            //console.log('Down');
                            this.apunta = 3;
                            this.angulo = 3.15;
                        }
                    }
                }
            }
        }
        
        this.cronoCambiarSkin.update();
        
        this.rectangulo.setX(this.vector.getX());
        this.rectangulo.setY(this.vector.getY());
    }
    draw(){
        var x = this.vector.getX();
        var y = this.vector.getY();
        
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");

       /* this.ctx.fillStyle = '#cc0000';
        this.ctx.fillRect(this.rectangulo.getX(),this.rectangulo.getY(),this.rectangulo.getAncho(),this.rectangulo.getAlto());*/
        
        var cti = this.ctx;

        cti.save();
       
        cti.translate(x+this.ancho/2,y+this.alto/2); 
        
        cti.rotate(this.angulo);
        cti.translate(-(x+this.ancho/2),-(y+this.alto/2)); 
        if( this.tipo == 0 ){
            cti.drawImage(this.imgArrCargados[this.indiceImagen], x , y );
        }
        if( this.tipo == 1 &&  this.caer ){
            if(this.dondeCaer.getY()<=this.vector.getY()){
                this.dondeCaer.setY(this.dondeCaer.getY()+30);
            }
            let contY = 66;
            for(let i = 0;i<this.cantPiernas;i++){
                cti.drawImage(this.imgArrCargados[1], x+25 , this.dondeCaer.getY()-contY );
                contY+=66;
            }
            cti.drawImage(this.imgArrCargados[0], x , this.dondeCaer.getY() );  
        }
        if(this.tipo == 2){
            cti.drawImage(this.imgArrCargados[this.cargar], x , y );  
        }
        cti.restore();
    }
    movimientoTipoCero(){
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        if( this.vector.getY() >= this.alto && this.vector.getX() > 0 && this.vector.getY() <= dimensionesVentana.alto-this.alto-this.alto ){
            if( this.vector.getX() >= dimensionesVentana.ancho-this.ancho  ){
                this.angulo = 1.6;
                this.vector.setY(this.vector.getY()+3);
                this.rectangulo.setAlto(this.ancho);
                this.rectangulo.setAncho(this.alto);
            }else{
                this.vector.setX(this.vector.getX()+3);
                this.angulo = 0;
                this.rectangulo.setAlto(this.alto);
                this.rectangulo.setAncho(this.ancho);
            }
        }else{
            if( this.vector.getX() >= 0 ){
                this.vector.setX(this.vector.getX()-3);
                this.angulo = 3.2;
                this.rectangulo.setAlto(this.alto);
                this.rectangulo.setAncho(this.ancho);
            }else{
                this.vector.setY(this.vector.getY()-3);
                this.angulo = 3.2+1.6;
                this.rectangulo.setAlto(this.ancho);
                this.rectangulo.setAncho(this.alto);
                if(this.vector.getY()<=this.alto){
                    this.vector.setX(this.vector.getX()+10);
                }
            }
        }
    }
    crearDisparo(){
        this.juego.getRayos().push(new Rayo(new Vector2D(this.vector.getX()+7,this.vector.getY()+20) ,this.apunta,this.juego,5,null,100,1000,this));
    }
    setVector(e){
        this.vector = e;
    }
    getJuego(){
        return this.juego;
    }
    setAngulo(e){
        this.angulo = e;
    }
    setUltimaPos(e){
        this.ultimaPos = e;
    }
    getVector(){
        return this.vector;
    }
    getRectangulo(){
        return this.rectangulo;
    }
    getTipo(){
        return this.tipo;
    }
    tipoCero(){
        this.movimientoTipoCero();
        if( !this.cronoCambiarSkin.isEncendido() ){
            this.cronoCambiarSkin.run(100);
            this.indiceImagen++;
            if( this.indiceImagen == this.imgArrCargados.length ){
                this.indiceImagen = 0;
            }
        }
    }
    tipoUno(){
        if(!this.cronoCaer.isEncendido()){
            this.cronoCaer.run(8000);
            if( this.juego.getMeteoros().length != 0 ){
                this.vector.setX(this.juego.getMeteoros()[0].getPosicion().getX());
                this.vector.setY(this.juego.getMeteoros()[0].getPosicion().getY());
                this.caer = true;
                this.dondeCaer = new Vector2D(this.vector.getX(),0);
                this.cantPiernas = Math.ceil(this.vector.getY()/69)+2;
                
                this.cronoQuitar.run(1000);
            }
            
        }
        if(this.caer && !this.cronoQuitar.isEncendido()){
            this.caer = false;
            this.quitar = false;
            this.vector = new Vector2D(-100,-100)
        }
        this.cronoQuitar.update();
        this.cronoCaer.update(); 
    }
}
function  timeOutPos(vect,x,y) {
    return function(e) {
        
        vect.setUltimaPos(new Vector2D(x+50,y));
    }
}