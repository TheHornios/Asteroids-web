class Animacion{
    constructor(vector,array,tiempo1,juego){
        this.juego = juego;
        this.img = new Image();
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.vector = vector;
        this.array = array;
        this.tiempo = tiempo1;
        this.posicion = 0;
        this.cronometro = new Cronometro();
        this.recorrido = false;
        this.cronometro.run(tiempo1);
        
    }
    draw(){
        var x = this.vector.getX();
        var y = this.vector.getY();
        
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        
        var cti = this.ctx;
        this.img.src = this.array[this.posicion];
        var imgi = this.img;
        cti.drawImage(imgi, x , y );
        
    }
    update(){
        if(!this.cronometro.isEncendido()){
            this.posicion++;
            this.cronometro.run(this.tiempo);
        }
        if(this.array.length==this.posicion){
            this.recorrido = true;

            var index = this.juego.getAnimaciones().indexOf(this);
            if(index > -1){
                this.juego.getAnimaciones().splice(index,1);
            }
        }
        this.cronometro.update();
    }
    getPosicion(){
        return array[this.posicion];
    }
    isRecorrido(){
        return this.recorrido;
    }
}