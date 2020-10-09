class Texto{
    constructor(vector,juego,font,desaparecer,mover,texto,color='white'){
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.vector = vector;
        this.juego = juego;
        this.font = font;
        this.desaparecer = desaparecer;
        this.cronoEmpezar = new Cronometro();
        this.cronoEmpezar.run(800);
        this.mover = mover;
        this.texto = texto;
        this.opaciad = 1;
        this.color = color;
    }
    setTexto(texto){
        this.texto = texto;
    }
    getTexto(){
        return  this.texto;
    }
    update(){
        if(!this.cronoEmpezar.isEncendido()){
            if(this.mover){
                this.vector.setY(this.vector.getY()-1);
            }
            if(this.desaparecer){
                this.opaciad -=0.04 ;
            }
            if(this.opaciad<0){
                var index = this.juego.getTextos().indexOf(this);
                if(index > -1){
                    this.juego.getTextos().splice(index,1);
                }
            }
        }
        this.cronoEmpezar.update();
    }
    draw(){
        var x = this.vector.getX();
        var y = this.vector.getY();
        
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        var cti = this.ctx;
        
        cti.globalAlpha = this.opaciad;
        
        cti.fillStyle = this.color;
        cti.font = this.font ;
        cti.fillText(this.texto,this.vector.getX(),this.vector.getY());
        cti.globalAlpha = 1;
    }
    borrar(){
        var index = this.juego.getTextos().indexOf(this);
        if(index > -1){
            this.juego.getTextos().splice(index,1);
        }
    }
}