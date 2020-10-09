class HudVida{
    constructor(posicion,tamaño,cantidad,pixeles,alto){
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.tamaño = tamaño;
        this.posicion = posicion;
        this.cantidad = cantidad;
        this.pixeles = pixeles;
        this.alto = alto;
    }
    draw(){
        var vida = (this.cantidad*this.pixeles)/this.tamaño;
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        var cti = this.ctx;

            //Fondo gris
        cti.fillStyle = '#A2A1A1';
        cti.fillRect(this.posicion.getX()+18, this.posicion.getY()-32, this.pixeles+4, this.alto+4)
            //Fondo rojo
        cti.fillStyle = '#FF0000';
        cti.fillRect(this.posicion.getX()+20, this.posicion.getY()-30, this.pixeles, this.alto)
            //Fondo verde
        cti.fillStyle = '#09BA0E';
        cti.fillRect(this.posicion.getX()+20, this.posicion.getY()-30, vida, this.alto)
            //Barras vertical 
        cti.fillStyle = '#000000';
        cti.fillRect(this.posicion.getX()+20, this.posicion.getY()-30, 1, this.alto-1)
        cti.fillRect(this.posicion.getX()+18+this.pixeles, this.posicion.getY()-30, 1, this.alto-1)
        cti.fillRect(this.posicion.getX()+18+(this.pixeles/2), this.posicion.getY()-30, 1, this.alto)
        cti.fillRect(this.posicion.getX()+18+(this.pixeles/3), this.posicion.getY()-30, 1, this.alto-3)
        cti.fillRect(this.posicion.getX()+18+(this.pixeles/1.5), this.posicion.getY()-30, 1, this.alto-3)
        cti.fillRect(this.posicion.getX()+18+(this.pixeles/5), this.posicion.getY()-30, 1, this.alto-3)
        cti.fillRect(this.posicion.getX()+18+(this.pixeles/1.25), this.posicion.getY()-30, 1, this.alto-3)
        cti.fillStyle = '#ffffff';
    }
    setPosicion(e){
        this.posicion = e;
    }
    setCantidad(e){
        this.cantidad = e;
    }
}