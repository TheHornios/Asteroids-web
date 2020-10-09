var players = new Array();
var disparosEnemigos = new Array();
var sala = new Array();
var empezarPartida = false;
var noDisparar = false;
var inicar1vs1 = false;
var numeroNaveEnemiga = 0;
var juegoALoServer = null;
var generarIntervaloDisparos = false;
var disaproDataServidor = null;
class Juego{
    
    constructor(){
        this.nave = new Nave(objtoImage.getImg_nave_0(),objtoImage.getImg_nave_1(),new Vector2D(dimensionesVentana.ancho/2,dimensionesVentana.alto/2),this,id_user);
        this.arrayMeteoros = new Array();
        this.metCant = 1;
        this.disparos = new Array();
        this.animaciones = new Array();
        this.textos = new Array();
        this.hud = new Hud(this);
        this.mejora = new Array();
        this.bombas = new Array();
        this.explosion = new Array();
        this.imgExplosion = new Array("../img/explosion/ex1.png","../img/explosion/ex2.png","../img/explosion/ex3.png","../img/explosion/ex4.png","../img/explosion/ex5.png");
        this.imgExplosion1 = new Array("../img/explosion/ex1_1.png","../img/explosion/ex2_2.png","../img/explosion/ex3_3.png","../img/explosion/ex4_4.png","../img/explosion/ex5_5.png");
        this.imgExplosion2 = new Array("../img/explosion/exn1.png","../img/explosion/exn2.png","../img/explosion/exn3.png","../img/explosion/exn4.png","../img/explosion/exn5.png");
        this.inciarOleada();
        this.cronoCargando = new Cronometro();
        this.cronoCargando.run(500);
        this.cronoCuentaAtras = new Cronometro();

        this.posicionarNaves = false;
        //this.mejora.push(new Mejoras(this));
        this.actualizarExplosiones = 0;
        this.lose = false;
        this.terminar = false;
        
        this.textoEsperandoJugadores = new Texto(new Vector2D(dimensionesVentana.ancho/2-230,100),this,'normal 50px Turret Road',false,false,"Esperando jugadores");
        this.textoCuentaAtras = new Texto(new Vector2D(dimensionesVentana.ancho/2-20,100),this,'normal 100px Turret Road',false,false,"4");
        /* Constantes */
        this.ACELERACION_NAVE = 0.2; 
        this.LIMITE_VELOCIDAD_NAVE = 9; 
        this.TIEMPO_COLA_NAVE = 20;
        this.TIEMPO_MORIR = 3000;
        this.TIEMPO_MORIR_SKIN = 200;

        this.VELOCIDAD_ANGULO = 0.1;

        this.VELOCIDAD_DISPAROS = 10;
        this.TIEMPO_VELOCIDAD_DISPARO = 400;
        this.TIEMPO_DISPAROS_VIVOS = 2000;
        this.EXPLOSION_TIME = 800;

        this.EXPLOSION_TIME_BOMBA = 1200;

        this.TIEMPO_BOMBAS = 400;
        this.TIEMPO_EXPLOSION_BOMBAS = 400;
        //
        this.counter = 0;
        socket.on('getCounter',function(data){
            this.counter = data;
        });
        socket.emit('salaEspecifica',id_user);
        this.cargarSala();
        
        var data = {
            id:id_user,
            x:this.nave.getPosicion().getX(),
            y:this.nave.getPosicion().getY(),
            angulo:this.nave.getAngulo(),
            aceleracion:this.nave.getAceleracion(),
            
        }
        this.datos = data;
        socket.emit('start',data);
        function enviar(e,o){
            return function(){
                e.emit('actualizar',o);
            } 
        }
        setInterval(enviar(socket,this.datos),1);
        socket.on('heartBeat',function(data){
            players = new Array();
            for(let i = 0;i<data.length;i++){
                if(data[i].id != id_user && (sala[2]== data[i].id||sala[1]== data[i].id)){
                  
                    let naveEnemiga = new Nave(objtoImage.getImg_nave_0_pasando_numero(numeroNaveEnemiga),objtoImage.getImg_nave_1_pasando_numero(numeroNaveEnemiga),new Vector2D(data[i].x,data[i].y),this,data.id);
                    naveEnemiga.setAngulo(data[i].angulo);
                    if(data[i].aceleracion){
                        if(Math.round(Math.random()*1)==1){
                            naveEnemiga.setAceleracion(data[i].aceleracion);
                        }else{
                            naveEnemiga.setAceleracion(false);
                        }
                    }else{
                        naveEnemiga.setAceleracion(data[i].aceleracion);
                    }
                    players.push(naveEnemiga);
                }
            }
        });
        juegoALoServer = this;
        socket.on('getDeisparos',function(data){
            disparosEnemigos = new Array();
            for(let i = 0;i<data.length;i++){
                if(data[i].id!=id_user&&(data[i].id==sala[1]||data[i].id==sala[2])){
                    //console.log(data[i].id);
                    disparosEnemigos.push(new Disapros(objtoImage.getImg_dis(),new Vector2D(data[i].x,data[i].y),data[i].angulo,new Vector2D( data[i].direccionX, data[i].direccionY),juegoALoServer,false,data[i].id));
                }
            }
        });
    }
    cargarSala(){
        socket.on('getSalaEspecifica',function(data){
            if(data[1]==id_user||data[2]==id_user){
                sala = data;
                if(sala[2]!=""||data[2]==id_user){

                    if(data[2]==id_user){
                        crearAjax("../Ajax_PHP/getNumeroDeImgenNave.php?amigo="+data[1],consultaImgAyax);
                    }else{
                        crearAjax("../Ajax_PHP/getNumeroDeImgenNave.php?amigo="+data[2],consultaImgAyax);
                    }
                    empezarPartida = true; 
                    noDisparar = true;
                   // console.log(sala);
                }
            }
        });
    }
    draw(){
        for(let i = 0;i<this.animaciones.length;i++){
            this.animaciones[i].draw();
        }
        for(let i = 0;i<this.explosion.length;i++){
            this.explosion[i].draw();
        }
        
        this.hud.draw();
       // this.inciarOleada();
        for(let i = 0;i<this.disparos.length;i++){
            this.disparos[i].draw();
        }
        for(let i = 0;i<disparosEnemigos.length;i++){
            disparosEnemigos[i].draw();
        }
        for(let i = 0;i<this.mejora.length;i++){
            this.mejora[i].draw();
        }
        for(let i = 0;i<this.textos.length;i++){
            this.textos[i].draw();
        }
        for(let i = 0;i<players.length;i++){
            players[i].draw();
        }
        if(!this.lose){
            this.nave.draw();
        }
        if(!empezarPartida){
            this.textoEsperandoJugadores.draw();
        }else{
            if(!inicar1vs1){
                this.textoCuentaAtras.draw();
            }
        }
        
    }
    update(){
        juegoALoServer = this;
        if(!generarIntervaloDisparos){
            if(sala[2]!=null&&sala[2]!=""){
                function enviarDisparos(e,o){
                    return function(){
                        e.emit('pedirDisapros',o);
                    } 
                }
                if(sala[2] == id_user){
                    setInterval(enviarDisparos(socket,sala[1]),1);
                    generarIntervaloDisparos = true;
                }else{
                    setInterval(enviarDisparos(socket,sala[2]),1);
                    generarIntervaloDisparos = true;
                }
            }
        }
        let arrDisparosReducido = new Array();
        for(let i = 0;i<this.disparos.length;i++){
            arrDisparosReducido.push(new DisparoServidor(id_user,this.disparos[i].getPosicion().getX(),this.disparos[i].getPosicion().getY(),this.disparos[i].getAngulo(),this.disparos[i].getDirecion().getX(),this.disparos[i].getDirecion().getY()));
        }
        disaproDataServidor ={
            id:id_user,
            arr:arrDisparosReducido,
        }
        
        

        if(!empezarPartida){
            this.textoEsperandoJugadores.update();
            this.cronoCargando.update();
            if(!this.cronoCargando.isEncendido()){
                this.textoEsperandoJugadores.setTexto(this.textoEsperandoJugadores.getTexto()+".");
                if(this.textoEsperandoJugadores.getTexto().length==24){
                    this.textoEsperandoJugadores.setTexto(this.textoEsperandoJugadores.getTexto().substring(0,19));
                }
                this.cronoCargando.run(500);
            }
        }else{
            if(!this.posicionarNaves){
                if(sala[1]==id_user){
                    this.nave.setPosicion(new Vector2D((dimensionesVentana.ancho/2)/2,dimensionesVentana.alto/2));
                }else{
                    this.nave.setPosicion(new Vector2D(((dimensionesVentana.ancho/2)/2)+dimensionesVentana.ancho/2,dimensionesVentana.alto/2));
                }
                this.posicionarNaves = true;
            }
            if(!inicar1vs1){
                this.cronoCuentaAtras.update();
                this.textoCuentaAtras.update();
                if(!this.cronoCuentaAtras.isEncendido()){
                    this.textoCuentaAtras.setTexto(this.textoCuentaAtras.getTexto()-1);
                    if(this.textoCuentaAtras.getTexto()!=0){
                        this.generarExplsion(30,new Vector2D(dimensionesVentana.ancho/2,60),this.imgExplosion2,1500,true);
                    }
                    this.cronoCuentaAtras.run(1500);
                    if(this.textoCuentaAtras.getTexto()==0){
                        inicar1vs1 = true;
                        noDisparar = false;
                    }
                }
            }
        }
        if(!this.lose){
            this.nave.update();
            this.colisiones();
            for(let i = 0;i<this.mejora.length;i++){
                this.mejora[i].update();
            }
        }
        for(let i = 0;i<this.explosion.length;i++){
            this.explosion[i].update();
        }
        
        

        for(let i = 0;i<this.disparos.length;i++){
            this.disparos[i].update();
        }
        socket.emit('anadirDisparos',disaproDataServidor);
       /* var borrar = null;
        for(let i = 0;i<disparosEnemigos.length;i++){
            disparosEnemigos[i].update();
            console.log(disparosEnemigos[i].getPosicion().getX());
            if(disparosEnemigos[i].getBorrar()){
                borrar = i;
            }
        }
        if(borrar!=null){
            disparosEnemigos.splice(borrar,1);
            borrar = null;
        }*/

        for(let i = 0;i<this.animaciones.length;i++){
            this.animaciones[i].update();
        }
        
        for(let i = 0;i<this.textos.length;i++){
            this.textos[i].update();
        }
        for(let i = 0;i<players.length;i++){
       //     players[i].update();
        }
        
        
        /* UNA VEZ MUERTO ENVIAR LOS DARTOS A EL PHP */
        if(this.lose && this.explosion.length == 0&&!this.terminar){
            acabarPartida(this.hud.getPts(),new Date());
            this.terminar  = true;
        }
        /* MORIR PARAR PARTIDA */
        if((!this.lose)&&this.nave.getMuerto()){
            this.generarExplsion(10,this.nave.getPosicion(),this.imgExplosion2,5000,true);
            this.textos.push(new Texto(new Vector2D(dimensionesVentana.ancho/2-200,dimensionesVentana.alto/2),this,'normal 50px Turret Road',false,false,"Puntos Totales: "+this.hud.getPts()));
            this.nave = null;
            this.lose = true;
        }
        
        this.datos.x = this.nave.getPosicion().getX();
        this.datos.y = this.nave.getPosicion().getY();
        this.datos.angulo = this.nave.getAngulo();
        this.datos.aceleracion = this.nave.getAceleracion();

        
       
    }
    
    inciarOleada(){
        //this.mejora.push(new Mejoras(this));
        this.textos.push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2),this,'normal 50px Monoton',true,true,"RONDA"+this.metCant));
        let x;
        let y;
        for(let i = 0;i<this.metCant;i++){
			x = Math.random()*dimensionesVentana.ancho-100;
            y = Math.random()*dimensionesVentana.alto-100;
            if(this.nave.getPosicion().getX()+100>x&&this.nave.getPosicion().getX()-100<x&&this.nave.getPosicion().getY()+100>y&&this.nave.getPosicion().getY()-100<y){
				x =this.nave.getPosicion().getX()+260.0;
				y =this.nave.getPosicion().getY()+260.0;
			}
		}
		this.metCant++;
    }
   
    generarExplsion(valor,pos,arr,time,neve){
        for(let i = 0;i<valor;i++){
            this.explosion.push(new Explosion(pos,this, arr,time,neve));
        }
    }
    getDisparos(){
        return this.disparos;
    }
    colisiones(){
        var indexDisapro = -1;
        var indexMeteoro = -1;
        
       
        if(indexDisapro > -1){
            this.disparos.splice(indexDisapro,1);
        }
        if(indexMeteoro > -1){
            this.dividir(indexMeteoro);
        }
    }
    getBombas(){
        return this.bombas;
    }
    getAnimaciones(){
        return this.animaciones;
    }
    getNave(){
        return this.nave;
    }
    getTextos(){
        return this.textos;
    }
    getMejoreas(){
        return this.mejora;
    }
    getHUD(){
        return this.hud;
    }
    getExplosiones(){
        return this.explosion;
    }
    getImgeExplosion(){
        return this.imgExplosion;
    }
    getTIEMPO_EXPLOSION_BOMBAS(){
        return this.TIEMPO_EXPLOSION_BOMBAS;
    }
    setTIEMPO_EXPLOSION_BOMBASS(a){
        this.TIEMPO_EXPLOSION_BOMBAS = a;
    }
    getTIEMPO_BOMBAS(){
        return this.TIEMPO_BOMBAS;
    }
    setTIEMPO_BOMBAS(a){
        this.TIEMPO_BOMBAS = a;
    }
    getEXPLOSION_TIME_BOMBA(){
        return this.EXPLOSION_TIME_BOMBA;
    }
    setEXPLOSION_TIME_BOMBA(a){
        this.EXPLOSION_TIME_BOMBA = a;
    }
    getEXPLOSION_TIME(){
        return this.EXPLOSION_TIME;
    }
    setEXPLOSION_TIME(a){
        this.EXPLOSION_TIME = a;
    }
    getTIEMPO_DISPAROS_VIVOS(){
        return this.TIEMPO_DISPAROS_VIVOS;
    }
    setTIEMPO_DISPAROS_VIVOS(a){
        this.TIEMPO_DISPAROS_VIVOS = a;
    }
    getTIEMPO_VELOCIDAD_DISPARO(){
        return this.TIEMPO_VELOCIDAD_DISPARO;
    }
    setTIEMPO_VELOCIDAD_DISPARO(a){
        this.TIEMPO_VELOCIDAD_DISPARO = a;
    }
    getVELOCIDAD_DISPAROS(){
        return this.VELOCIDAD_DISPAROS;
    }
    setVELOCIDAD_DISPAROS(a){
        this.VELOCIDAD_DISPAROS = a;
    }
    getVELOCIDAD_ANGULO(){
        return this.VELOCIDAD_ANGULO;
    }
    setVELOCIDAD_ANGULO(a){
        this.VELOCIDAD_ANGULO = a;
    }
    getTIEMPO_MORIR_SKIN(){
        return this.TIEMPO_MORIR_SKIN;
    }
    setTIEMPO_MORIR_SKIN(a){
        this.TIEMPO_MORIR_SKIN = a;
    }
    getTIEMPO_MORIR(){
        return this.TIEMPO_MORIR;
    }
    setTIEMPO_MORIR(a){
        this.TIEMPO_MORIR = a;
    }
    getACELERACION_NAVE(){
        return this.ACELERACION_NAVE;
    }
    setACELERACION_NAVE(a){
        this.ACELERACION_NAVE = a;
    }
    getLIMITE_VELOCIDAD_NAVE(){
        return this.LIMITE_VELOCIDAD_NAVE;
    }
    setLIMITE_VELOCIDAD_NAVE(a){
        this.LIMITE_VELOCIDAD_NAVE = a;
    }
    getTIEMPO_COLA_NAVE(){
        return this.TIEMPO_COLA_NAVEM
    }
    setTIEMPO_COLA_NAVE(a){
        this.TIEMPO_COLA_NAVE = a;
    }
}
function  consultaImgAyax(e){
    numeroNaveEnemiga = e;
}
function crearAjax(url,funct){

    var xhr  = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4  && this.status == 200){
            var text = this.responseText;
            funct(text);
        }
    }
    
}
class DisparoServidor{
    constructor(id,x,y,angulo,direccionX,direccionY){
        this.id = id;
        this.x = x;
        this.y = y;
        this.angulo = angulo;
        this.direccionX = direccionX;
        this.direccionY = direccionY;
    }
}