class Disapros{
    constructor(img,vector,angulo,direcion,juego,sicosis,noDividir,arrMejoras,dmg){
        this.arrVacio = new Array(false,false,false,false,false,false);
        this.juego= juego;
        this.img = img;
        /*
        new Image();
        this.img.src = img;*/
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.vector = vector;
        this.velocidad = direcion;
        this.velocidad = this.velocidad.acceleracion(this.juego.getVELOCIDAD_DISPAROS());
        this.angulo = angulo;
        this.rectangulo = new Rectangulo(this.vector.getX(),this.vector.getY(),9,4);
        this.cronoEliminar = new Cronometro();
        this.borrar = false;
        this.dmg = dmg;
        /* Mejoras */
        this.isSicosis = sicosis;   
        this.gravity = arrMejoras[0];
        this.antiGravity = arrMejoras[1];
        this.polaridad = false;
        this.cemento = arrMejoras[2];
        this.disparosEn4 = arrMejoras[3];
        this.matarDisparosEn4 = noDividir;
        this.rotacion = 2;
        this.perforacion = arrMejoras[4];
        this.boomerang = arrMejoras[5];
        this.volver = false;
        if(this.antiGravity){
            this.cronoAntiGravity = new Cronometro();
            this.cronoAntiGravity.run(2000)
        }
        if(this.gravity||this.antiGravity||this.cemento){
            this.cronoEliminar.run(this.juego.getTIEMPO_DISPAROS_VIVOS()*2);
        }else{
            if(this.disparosEn4||this.boomerang){
                this.cronoEliminar.run(this.juego.getTIEMPO_DISPAROS_VIVOS()/4);
            }else{
                this.cronoEliminar.run(this.juego.getTIEMPO_DISPAROS_VIVOS());
            }
        }
        if(this.matarDisparosEn4){
            this.cronoEliminar.run(this.juego.getTIEMPO_DISPAROS_VIVOS()/10);   
        }
    }
    update(){
        this.movimientoNomarl();
        if( this.boomerang&&!this.volver&&!this.cronoEliminar.isEncendido()){
            this.cronoEliminar.run(this.juego.getTIEMPO_DISPAROS_VIVOS()/4);
            this.volver = true;
            this.angulo -= 3;
        }
        if(this.borrar||((this.isSicosis||this.gravity||this.matarDisparosEn4||this.cemento||this.boomerang||this.disparosEn4)&&!this.cronoEliminar.isEncendido())){
            if(this.disparosEn4&&!this.matarDisparosEn4){
                this.dividirEn4();
            }
            var index = this.juego.getDisparos().indexOf(this);
            if(index > -1){
                this.juego.getDisparos().splice(index,1);
            }
            
        }
        this.cronoEliminar.update();
    }
    
    movimientoNomarl(){
        if(this.gravity){
            this.disparoGravity();
        }
        if(this.cronoAntiGravity){
            if(!this.cronoAntiGravity.isEncendido()){
                if(this.volver){
                    this.vector = this.vector.substracto(this.velocidad);
                }else{
                    this.vector = this.vector.add(this.velocidad);
                }
            }
            this.cronoAntiGravity.update();
        }else{
            if(this.volver){
                this.vector = this.vector.substracto(this.velocidad);
            }else{
                this.vector = this.vector.add(this.velocidad);
            }
        }

        this.selectorDeMovimiento();

        this.rectangulo.setX(this.vector.getX());
        this.rectangulo.setY(this.vector.getY());
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
    getRectangulo(){
        return this.rectangulo;
    }
    selectorDeMovimiento(){
        if(this.isSicosis){
            this.sicosis();
        }else{
            if(this.cemento){
                this.cementoDisparo()
            }else{
                this.disparoNormal();
            }
        }
    }
    dividirEn4(){
        this.juego.getDisparos().push(new Disapros(this.img,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(-0.5,-0.5),this.juego,false,true,this.arrVacio,this.dmg));
        this.juego.getDisparos().push(new Disapros(this.img,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(0.5,-0.5),this.juego,false,true,this.arrVacio,this.dmg));
        this.juego.getDisparos().push(new Disapros(this.img,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(-0.5,+0.5),this.juego,false,true,this.arrVacio,this.dmg));
        this.juego.getDisparos().push(new Disapros(this.img,new Vector2D((this.vector.getX()+(this.img.width/2-5)),(this.vector.getY()+(this.img.height/2-5))),this.angulo,new Vector2D(+0.5,+0.5),this.juego,false,true,this.arrVacio,this.dmg));
    }
    cementoDisparo(){
        if(dimensionesVentana.ancho<this.vector.getX()){
            this.velocidad.setX(-this.velocidad.getX());
        }else{
            if(0>this.vector.getX()){
                this.velocidad.setX(-this.velocidad.getX());
            }
        }
        if(dimensionesVentana.alto<this.vector.getY()){
            this.velocidad.setY(-this.velocidad.getY());
        }else{
            if(0>this.vector.getY()){
                this.velocidad.setY(-this.velocidad.getY());
            }
        }
    }
    disparoGravity(){
        this.angulo+=0.1;
        if(this.velocidad.getX()<0&&this.velocidad.getY()<0){
            if(this.polaridad){
                this.polaridad = false;
                this.velocidad.setX(this.velocidad.getX()+this.rotacion);
            }else{
                this.polaridad = true;
                this.velocidad.setY(this.velocidad.getY()-this.rotacion);
            }
        }else{
            if(this.velocidad.getX()>=0&&this.velocidad.getY()<=0){
                if(this.polaridad){
                    this.polaridad = false;
                    this.velocidad.setX(this.velocidad.getX()+this.rotacion);
                }else{
                    this.polaridad = true;
                    this.velocidad.setY(this.velocidad.getY()+this.rotacion);
                }
            }else{
                if(this.velocidad.getX()>=0&&this.velocidad.getY()>0){
                    if(this.polaridad){
                        this.polaridad = false;
                        this.velocidad.setX(this.velocidad.getX()-this.rotacion);
                    }else{
                        this.polaridad = true;
                        this.velocidad.setY(this.velocidad.getY()+this.rotacion);
                    }
                }else{
                    if(this.polaridad){
                        this.polaridad = false;
                        this.velocidad.setX(this.velocidad.getX()-this.rotacion);
                    }else{
                        this.polaridad = true;
                        this.velocidad.setY(this.velocidad.getY()-this.rotacion);
                    }
                }
            }
        this.rotacion = this.rotacion-0.007;
    }
    }
    disparoNormal(){
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
    sicosis(){
        if(dimensionesVentana.ancho<this.vector.getX()){
            this.vector.setX(0);
        }else{
            if(0>this.vector.getX()){
                this.vector.setX(dimensionesVentana.ancho-40);
            }
        }
        if(dimensionesVentana.alto<this.vector.getY()){
            this.vector.setY(10);
        }else{
            if(0>this.vector.getY()){
                this.vector.setY(dimensionesVentana.alto-40);
            }
        }
    }
    getDmg(){
        return this.dmg;
    }
    setDmg(e){
        this.dmg = e;
    }
}