class Explosion{
    constructor(vector,juego,imgArr,tiempo,nave){
        this.vector = vector;
        this.juego = juego;
        this.imgArr = imgArr;
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.velocidad = new Vector2D(Math.random()*3,Math.random()*3).setDireccion(Math.random()*Math.PI*2);
        if(nave){
            this.velocidad = new Vector2D(Math.random(),Math.random()).setDireccion(Math.random()*Math.PI*2);
        }
        
        this.numero = Math.floor(Math.random()*(imgArr.length));
        
        this.img = this.imgArr[this.numero];
        this.angulo = Math.random()*10;
        this.cronoVida = new Cronometro();
        this.cronoVida.run(Math.random()*tiempo);
    }   
    update(){
        this.vector =  this.vector.add( this.velocidad);
        if(!this.cronoVida.isEncendido()){
            var index = this.juego.getExplosiones().indexOf(this);
            if(index > -1){
                this.juego.getExplosiones().splice(index,1);
            }
        }
        this.cronoVida.update();
    }
    draw(){
        var x = this.vector.getX();
        var y = this.vector.getY();
        
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        
        

        var cti = this.ctx;

        var imgi =  this.img;

        cti.save();
       
        cti.translate(x+imgi.height/2,y+imgi.width/2); 
        
        cti.rotate(this.angulo);
        cti.translate(-(x+imgi.height/2),-(y+imgi.width/2)); 

        cti.drawImage(imgi, x , y );
        cti.restore();
    }
}