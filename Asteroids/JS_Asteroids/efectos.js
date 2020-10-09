class Efectos{
    constructor(img,tamImagenX,tamImagenY,posicion,tiempoVida,rotacion,objetoDelJuego){
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.posicion = posicion;
        this.img = img
        this.tamImgX = tamImagenX;
        this.tamImgY = tamImagenY;
        this.rotacion = rotacion;
        this.objeto = objetoDelJuego;
        this.cronoEliminar = new Cronometro();
        this.cronoFadeIn = new Cronometro();
        this.cronoFadeIn2 = new Cronometro();
        this.cronoFadeIn.run((tiempoVida*20)/100) 
        this.cronoFadeIn2.run((tiempoVida*10)/100) 
        this.cronoEliminar.run(tiempoVida) 
        this.timepoDerecha = Math.floor(Math.random()*1000)
        this.cronoTimepoDerecha = new Cronometro();
        this.cronoTimepoDerecha.run(this.timepoDerecha);
        this.cambio = true;
    }
    update(){
        this.posicion.setY(this.posicion.getY()-1)
        if(this.cronoTimepoDerecha.isEncendido()&&this.cambio){
            this.posicion.setX(this.posicion.getX()+1)
        }else{
            this.posicion.setX(this.posicion.getX()-1)
        }
        if(!this.cronoTimepoDerecha.isEncendido()){
            this.cambio = this.cambio?false:true;
            this.cronoTimepoDerecha.run(this.timepoDerecha);
        }
        this.cronoFadeIn2.update()
        this.cronoTimepoDerecha.update();
        this.cronoEliminar.update();
        this.cronoFadeIn.update();
        if(!this.cronoEliminar.isEncendido()){
            var index = this.objeto.getEfecto().indexOf(this);
            if(index > -1){
                this.objeto.getEfecto().splice(index,1);
            }
        }
    }
    draw(){
        this.canvas = document.getElementById("MyCanvas");
        this.cti = this.canvas.getContext("2d");
        var x = this.posicion.getX();
        var y = this.posicion.getY();

        this.cti.save();
        this.rotacion= this.rotacion+0.2;
        this.cti.translate(x+1,y+2); 
        this.cti.globalAlpha=0.70;
        if(!this.cronoFadeIn.isEncendido()){
           // this.cti.globalAlpha=0.50;
        }
        if(!this.cronoFadeIn2.isEncendido()){
           // this.cti.globalAlpha=0.30;
        }
        
        this.cti.rotate(this.rotacion);
        this.cti.translate(-(x+1),-(y+2)); 

        this.cti.drawImage(this.img, x , y,this.tamImgX,this.tamImgY);
        this.cti.restore();
    }
}