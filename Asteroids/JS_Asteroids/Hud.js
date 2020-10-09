class Hud{
    constructor(juego){
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.imgVidas = new Image();
        this.imgVidas.src = objtoImage.getImg_hubInf();
        this.juego = juego;
        this.vidas = 3;//3
        this.font = 'normal 17px Turret Road';
        this.pts = 0;
        this.bombas = 3;
        this.vector = new Vector2D(10,40);
        this.multiplicador = 1;

        this.dmg = this.juego.getNave().getDmg();
        this.velocidadMovimiento = this.juego.getLIMITE_VELOCIDAD_NAVE();
        this.cadencia = this.juego.getTIEMPO_VELOCIDAD_DISPARO();
        this.rango = this.juego.getVELOCIDAD_DISPAROS();
        this.disparos = this.juego.getNave().getGodHead()*3;
        this.imge = new Image();
        this.imge.src = "../img/menu/monedas.png";
        this.mejorasDibujarHud = new Array();

        this.elRey = false;
        this.elReySubir = false;
        this.elReyBajr = false;

        this.dmgImg = new Image();
        this.dmgImg.src='../img/hud/daño.png'
        this.velocidadMovimientoImg = new Image();
        this.velocidadMovimientoImg.src='../img/hud/velocidad.png'
        this.cadenciaImg = new Image();
        this.cadenciaImg.src='../img/hud/cadencia.png'
        this.rangoImg = new Image();
        this.rangoImg.src='../img/hud/velocidadDisparo.png'
    }
    draw(){
        if(this.elRey&&this.vidas==1&&!this.elReySubir){
            this.elReySubir = true;
            this.elReyBajr = false;
            this.juego.getNave().setDmg( this.juego.getNave().getDmg()+2.25);
            this.juego.setTIEMPO_VELOCIDAD_DISPARO( this.juego.getTIEMPO_VELOCIDAD_DISPARO()-100)
            if( this.juego.getTIEMPO_VELOCIDAD_DISPARO()==50){
                this.juego.setTIEMPO_VELOCIDAD_DISPARO(50);
            }
        }else{
            if(this.elRey&&this.vidas!=1&&this.elReySubir&&!this.elReyBajr ){
                this.elReyBajr = true;
                this.elReySubir = false;
                this.juego.getNave().setDmg( this.juego.getNave().getDmg()-2.25);
                this.juego.setTIEMPO_VELOCIDAD_DISPARO( this.juego.getTIEMPO_VELOCIDAD_DISPARO()+100)
            }
        }

        if(this.juego.getNave()!=null){
            this.dmg = (this.juego.getNave().getDmg());
            this.velocidadMovimiento = this.juego.getLIMITE_VELOCIDAD_NAVE();
            this.disparos = this.juego.getNave().getGodHead()*3==0?1:this.juego.getNave().getGodHead()*3;
            this.cadencia = (1000-this.juego.getTIEMPO_VELOCIDAD_DISPARO())/100;
            this.rango = this.juego.getVELOCIDAD_DISPAROS();
        }
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        var cti = this.ctx;

        // PTS
        cti.font = this.font ;
    //    cti.fillText("PTS="+this.pts,this.vector.getX(),this.vector.getY());

        // VIDAS
        cti.fillStyle = '#ffffff';
        cti.drawImage(this.imgVidas,(dimensionesVentana.ancho/2)-this.imgVidas.width/2,dimensionesVentana.alto-this.imgVidas.height);
        cti.fillText(this.vidas+" X ",(dimensionesVentana.ancho/2)-100,dimensionesVentana.alto-this.imgVidas.height+25);
        cti.fillText(this.bombas+" X ",(dimensionesVentana.ancho/2),dimensionesVentana.alto-this.imgVidas.height+25);

        cti.fillText('SCORE: '+this.pts,10,30);

        /* Monedas */
        if(usu!=undefined){
            cti.drawImage(this.imge, dimensionesVentana.ancho-130 , 10);
            cti.fillText(monedas,dimensionesVentana.ancho-90,35);
        }
       

        /* Hud valores */
        cti.drawImage(this.dmgImg,10,dimensionesVentana.alto-163,30,30);
        cti.fillText(this.dmg,45,dimensionesVentana.alto-140);
        cti.drawImage(this.cadenciaImg,10,dimensionesVentana.alto-123,30,30);
        cti.fillText(this.cadencia,45,dimensionesVentana.alto-103);
        cti.drawImage(this.rangoImg,10,dimensionesVentana.alto-83,30,30);
        cti.fillText(this.rango,45,dimensionesVentana.alto-60);
        cti.drawImage(this.velocidadMovimientoImg,10,dimensionesVentana.alto-43,30,30);
        cti.fillText(this.velocidadMovimiento,45,dimensionesVentana.alto-20);
        /*
       
        /* dibujar mejoras */
        cti.save();
        cti.globalAlpha = 0.3
        var distanciaAncho = dimensionesVentana.ancho-160;
        var distanciaAlto = dimensionesVentana.alto-200;
        var e = 0;
        var o = 0;
        for(let i = 0;i<this.mejorasDibujarHud.length;i++){
            if(i!=0&&i%5==0){
                e = 0;
                o += 30;
            }
            let imagen = new Image();
            imagen.src = this.mejorasDibujarHud[i];
            cti.drawImage(imagen, distanciaAncho+(e*30) ,distanciaAlto+o);
            e++;
            
        }
        cti.restore()
    }
    vidaMenos(){
        if(!this.juego.getNave().getTocado()){
            this.juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2)-100,dimensionesVentana.alto-this.imgVidas.height+22),this.juego,'normal 20px Turret Road',true,true,"-1"));
            this.vidas--;
            this.juego.getNave().setTocado(true);
        }
        if(this.vidas<0){
            this.vidas = 0;
        }
    }
    vidaMas(){
        this.juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2)-100,dimensionesVentana.alto-this.imgVidas.height+22),this.juego,'normal 20px Turret Road',true,true,"+1"));
        this.vidas++;
    }
    bombasMenos(){
        this.bombas--;
        if(this.bombas<0){
            this.bombas = 0;
        }else{
            this.juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2),dimensionesVentana.alto-this.imgVidas.height+22),this.juego,'normal 20px Turret Road',true,true,"-1"));
        }
    }
    bombasMas(){
        this.juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2),dimensionesVentana.alto-this.imgVidas.height+22),this.juego,'normal 20px Turret Road',true,true,"+1"));
        this.bombas++;
    }
    setVidas(e){
        this.vidas = e;
    }
    getVidas(){
        return this.vidas;
    }
    addPts(valor){
        this.pts+= valor*this.multiplicador;
    }
    getPts(){
        return this.pts;
    }
    getBombas(){
        return this.bombas;
    }
    setBombas(e){
        this.bombas = e;
    }
    setMultiplicador(valor){
        this.multiplicador = valor;
    }
    getMultiplicador(){
        return this.multiplicador;
    }
    getMejorasDibujarHud(){
        return this.mejorasDibujarHud;
    }
    setElRey(e){
        this.elRey = e;
    }
}