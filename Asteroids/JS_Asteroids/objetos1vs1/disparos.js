class Disapros{
    constructor(img,vector,angulo,direcion,juego,sicosis,id){
        this.id = id;
        this.juego= juego;
        this.img = new Image();
        this.img.src = img;
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.vector = vector;
        this.velocidad = direcion;
        this.velocidad = this.velocidad.acceleracion(this.juego.getVELOCIDAD_DISPAROS());
        this.angulo = angulo;
        this.rectangulo = new Rectangulo(this.vector.getX(),this.vector.getY(),9,4);
        this.cronoEliminar = new Cronometro();
        this.cronoEliminar.run(this.juego.getTIEMPO_DISPAROS_VIVOS());
        this.borrar = false;
        this.isSicosis = sicosis;
        
    }
    update(){
        this.vector = this.vector.add(this.velocidad);

        if(this.isSicosis){
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
        }else{
            if(dimensionesVentana.ancho+40<this.vector.getX()){
                this.borrar = true;
            }else{
                if(-10>this.vector.getX()){
                    this.borrar = true;
                }
            }
            if(dimensionesVentana.alto+40<this.vector.getY()){
                this.borrar = true;
            }else{
                if(-10>this.vector.getY()){
                    this.borrar = true;
                }
            }
        }
        
        
        this.rectangulo.setX(this.vector.getX());
        this.rectangulo.setY(this.vector.getY());


        if(this.borrar||(this.isSicosis&&!this.cronoEliminar.isEncendido())){
            var index = this.juego.getDisparos().indexOf(this);
            if(index > -1){
                this.juego.getDisparos().splice(index,1);
            }
            
        }
        this.cronoEliminar.update();
    }
    draw(){
        var x = this.vector.getX();
        var y = this.vector.getY();
        
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        
       // this.ctx.fillStyle = '#cc0000';
       // this.ctx.fillRect(this.rectangulo.getX(),this.rectangulo.getY(),5,5);

        var cti = this.ctx;
        var imgi =  this.img;

        cti.save();
       
        cti.translate(x+1,y+2); 
        
        cti.rotate(this.angulo);
        cti.translate(-(x+1),-(y+2)); 

        cti.drawImage(imgi, x , y );
        cti.restore();
    }
    getDirecion(){
        return this.velocidad;
    }
    getAngulo(){
        return this.angulo;
    }
    getPosicion(){
        return this.vector;
    }
    getBorrar(){
        return this.borrar;
    }
    getRectangulo(){
        return this.rectangulo;
    }
    getId(){
        return this.id;
    }
    
}