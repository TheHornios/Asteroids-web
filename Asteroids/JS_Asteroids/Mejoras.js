class Mejoras{
    constructor(juego){
        this.arrMejorasNoSePuedeRepetir = new Array(4,8,12,13,14,15,17,20,22,23,27,28,30,32,33,34,38,39,40,41,42,44);
        this.juego = juego;
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.array =  this.juego.getPullMejoras().getPullObjetos();

        var numero = Math.floor(Math.random()*this.array.length);
        while( this.estaLaMejora(this.arrMejorasNoSePuedeRepetir,numero,this.juego.getArrMejorarYaTener()) ){
            numero = Math.floor(Math.random()*this.array.length);
        }

        this.valor = numero;//21
        juego.getArrMejorarYaTener().push(numero)
        this.rectangulo = new Rectangulo((Math.random()*(dimensionesVentana.ancho-100))+70,(Math.random()*(dimensionesVentana.alto-100))+50,20,20);
        this.imge = new Image();
        this.imge.src = this.array[this.valor][0];
    }
    update(){
       /// console.log(this.juego.getNave().getRectangulo());
      //  console.log(this.rectangulo);
        if(this.rectangulo.colision(this.juego.getNave().getRectangulo())){
            if(this.juego.getMidas()){
                this.juego.generarExplsion(20,this.juego.getNave().getPosicion(),new Array("../img/menu/monedas.png","../img/menu/monedas.png","../img/menu/monedas.png"),this.juego.getEXPLOSION_TIME(),false);
                if(usu!=undefined){
                    crearAjax('../Ajax_PHP/añadirMoneda.php',function(e){},'mone=5');
                    for(let i = 0;i<5;i++){
                        monedas++;
                    }
                }
            }else{
                this.array[this.valor][1](this.juego)
            }
           
            
            var indexDisapro = this.juego.getMejoreas().indexOf(this);
            if(indexDisapro > -1){
                if(!this.juego.getMidas()|| this.valor==23){
                    this.juego.getHUD().getMejorasDibujarHud().unshift(this.imge.src);
                }
                this.juego.getMejoreas().splice(indexDisapro,1);
                
            }
        }

        
    }
    draw(){
        this.canvas = document.getElementById("MyCanvas");
        this.ctx = this.canvas.getContext("2d");
        var cti = this.ctx;

        //this.ctx.fillStyle = '#cc0000';
        //this.ctx.fillRect(this.rectangulo.getX(),this.rectangulo.getY(),this.rectangulo.getAncho(),this.rectangulo.getAncho());

        cti.drawImage(this.imge, this.rectangulo.getX() , this.rectangulo.getY());
    }
    estaLaMejora(arrNorepetibles,numeroGenerado,yaAñadidos){
        var estaAñadido = false;
        for( let i = 0 ; i < arrNorepetibles.length ; i++ ){
            for( let f = 0 ; f < yaAñadidos.length ; f++ ){
                if( yaAñadidos[f]  == arrNorepetibles[i] ){
                    if( numeroGenerado == yaAñadidos[f] ){
                        estaAñadido = true;
                    }
                }
            }
        }   
        return estaAñadido;
    }
}