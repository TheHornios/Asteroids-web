class Rayo{
    constructor(vector,direcion,juego,ancho,arrMejoras,dmg,tiempoVida,obCreador){
        this.creadorPadre = obCreador;
        this.arrMejoras = arrMejoras;
        this.ancho = ancho;
        this.juego= juego;
        /*
        new Image();
        this.img.src = img;*/
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.vector = vector;
        this.direcion = direcion;

        if( this.direcion == 0 ){
            //derecha
            this.rectangulo = new Rectangulo(-dimensionesVentana.ancho ,this.vector.getY(),this.vector.getX(),this.ancho);
        }else{
            if( this.direcion == 1 ){
                //iz
                this.rectangulo = new Rectangulo(this.vector.getX(),this.vector.getY(),dimensionesVentana.ancho,this.ancho);
            }else{
                if( this.direcion == 2 ){
                    //up
                    this.rectangulo = new Rectangulo(this.vector.getX(), -dimensionesVentana.alto,this.ancho,this.vector.getY());
                }else{
                    //down
                    this.rectangulo = new Rectangulo(this.vector.getX(),this.vector.getY(),this.ancho,dimensionesVentana.alto);
                }
            }
        }

        this.cronoEliminar = new Cronometro();
        this.borrar = false;
        this.dmg = dmg;
        this.cronoEliminar.run(tiempoVida);
    }
    update(){
        this.vector = this.creadorPadre.getVector(); 
        if(this.direcion == 1 || this.direcion  == 3){
            this.rectangulo.setX(this.vector.getX()+7);
            this.rectangulo.setY(this.vector.getY()+20);
        }
        if(this.direcion == 0 ){
            this.rectangulo = new Rectangulo(0 ,this.vector.getY()+20,this.vector.getX()+7,this.ancho);
        }
        if(this.direcion == 2 ){
            this.rectangulo = new Rectangulo(this.vector.getX()+7, 0,this.ancho,this.vector.getY()+20);
        }
        
        if(!this.cronoEliminar.isEncendido()){
            var index = this.juego.getRayos().indexOf(this);
            if(index > -1){
                this.juego.getRayos().splice(index,1);
            }
            
        }
        this.cronoEliminar.update();
    }
    
    draw(){
        var x = this.vector.getX();
        var y = this.vector.getY();
        
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        
        this.ctx.fillStyle = '#F95326';
        this.ctx.fillRect(this.rectangulo.getX(),this.rectangulo.getY(),this.rectangulo.getAncho(),this.rectangulo.getAlto());
        this.ctx.fillStyle = '#F71300';
        for(let i = 0; i <20; i++){
            this.ctx.fillRect((Math.random()*this.rectangulo.getAncho()-5)+this.rectangulo.getX(),(Math.random()*this.rectangulo.getAlto()-5)+this.rectangulo.getY(),10,10);
        }

        var cti = this.ctx;
        //var imgi =  this.img;

        cti.save();
       
        cti.translate(x+1,y+2); 
        
        cti.rotate(this.angulo);
        cti.translate(-(x+1),-(y+2)); 

        //cti.drawImage(imgi, x , y );
        cti.restore();
    }
    getRectangulo(){
        return this.rectangulo;
    }
    getDmg(){
        return this.dmg;
    }
    setDmg(e){
        this.dmg = e;
    }
}