class Bomba{
    constructor(vector,juego){
        this.img = new Image();
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.vector = vector;
        this.juego = juego;
        this.arrImgBom = new Array("../img/bombas/bomba.png","../img/bombas/bomba1.png","../img/bombas/bomba2.png","../img/bombas/bomba3.png","../img/bombas/bomba4.png");
     //   this.arrMorir = new Array("img/bombas/explosion1.png","img/bombas/explosion2.png","img/bombas/explosion3.png","img/bombas/explosion4.png","img/bombas/explosion5.png");
        this.cronoVida = new Cronometro();
        this.cronoVida.run(2000);
        this.cronoCambiarImg = new Cronometro();
        this.cronoCambiarImg.run(400);
        this.img.src = this.arrImgBom[0];
        this.morir = false;
        this.explosion = false;
        this.cantidad = -2;
        this.posArray = 0;
    }
    update(){
        if(!this.cronoVida.isEncendido()){
            this.explosion = true;
        }
        if(this.explosion&&this.cantidad!=3){
            this.borrarAsteroides();
            this.cantidad++;
            if(this.cantidad==3){
                this.morir = true;
            }
        }
        if(this.morir){
           // this.juego.getAnimaciones().push(new Animacion(new Vector2D(this.vector.getX()-100,this.vector.getY()-100),this.arrMorir,50,this.juego));
           this.juego.generarExplsion(40,new Vector2D(this.vector.getX(),this.vector.getY()),this.juego.getImgeExplosion(),this.juego.getEXPLOSION_TIME_BOMBA(),false);
            var index = this.juego.getBombas().indexOf(this);
            if(index > -1){
                this.juego.getBombas().splice(index,1);
            }
        }
        this.cronoCambiarImg.update();
        this.cronoVida.update();
    }
    draw(){

        var x = this.vector.getX();
        var y = this.vector.getY();
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        var cti = this.ctx;
        if(!this.cronoCambiarImg.isEncendido()){
            this.img.src = this.arrImgBom[this.posArray];
            this.cronoCambiarImg.run(400);
            this.posArray++;
            this.juego.getTextos().push(new Texto(new Vector2D(this.vector.getX()+7,this.vector.getY()-4),this.juego,'normal 20px Turret Road',true,true,5-this.posArray));
            
            if(this.posArray>4){
                this.posArray = 4;
            }
        }
        cti.drawImage(this.img, x , y );
    }
    borrarAsteroides(){
        for(var i = 0 ; i<this.juego.getMeteoros().length;i++){
            this.juego.dividir(i);
        }
    }
}