class PullMejoras{
    constructor(juego){
        this.juego = juego;
        this.arrayPullObjetos = new Array();
        for(let i = 0;i<objtoImage.getImg_meg().length;i++){
            this.arrayPullObjetos.push(new Array(objtoImage.getImg_meg()[i],eval("this."+getAllMethodNames(this)[2+i])));
        }
    }
    getPullObjetos(){
        return this.arrayPullObjetos;
    }
    unaVida(juego) {
        juego.getHUD().vidaMas();  juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2)-100,dimensionesVentana.alto-75+25), juego,'normal 17px Turret Road',true,true,"+"+1,"green"));
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2),juego,'normal 50px Monoton',true,true,"+1 VIDA"));
    }
    millPuntos(juego){
        juego.getHUD().addPts(1000);
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2),juego,'normal 50px Monoton',true,true,"+"+1000*juego.getHUD().getMultiplicador()+"pts"));
    }
    explosiob(juego){
        for(var i = 0 ; i<juego.getMeteoros().length;i++){
            juego.dividir(i);
        }
        for(var i = 0 ; i<juego.getMeteoros().length;i++){
            juego.dividir(i);
        }
        for(var i = 0 ; i<juego.getMeteoros().length;i++){
            juego.dividir(i);
        }
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"BooooM"));
    }
    dislexia(juego){
        if(!juego.getNave().getDislexia()){
            juego.getNave().setDislexia(true);
        }else{
            juego.getNave().setDislexia(false);
        }
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Dislexia"));
    }
    diarrea(juego){
        juego.getNave().setDiarrea(true);
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Diarrea"));
    }
    masVelocidad(juego){
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-20), juego,'normal 17px Turret Road',true,true,"+"+5,"green"));
        juego.setLIMITE_VELOCIDAD_NAVE(juego.getLIMITE_VELOCIDAD_NAVE() + 5);
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Mas Velocidad"));    
    }
    menosVelocidad(juego){
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-20), juego,'normal 17px Turret Road',true,true,"-"+2,"red"));

        juego.setLIMITE_VELOCIDAD_NAVE(juego.getLIMITE_VELOCIDAD_NAVE() - 2);
        if(juego.getLIMITE_VELOCIDAD_NAVE()<1){
            juego.setLIMITE_VELOCIDAD_NAVE( 1);
        }
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Menos Velocidad"));
    }
    puntosX2(juego){
        juego.getHUD().setMultiplicador(juego.getHUD().getMultiplicador()+1);
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Doble De Puntos"));
    }
    sicosis(juego){
        juego.getNave().setSicosis(true);
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Sicosis"));
    }
    disparosX3(juego){
        juego.getNave().sumGodHead();
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Godhead"));
    }
    tiersUp(juego){
        juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2),dimensionesVentana.alto-75+25), juego,'normal 17px Turret Road',true,true,"+"+1,"green"));
        juego.getHUD().bombasMas();
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Bombas +1"));
    }
    masBombas(juego){
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-103), juego,'normal 17px Turret Road',true,true,"+"+50/100,"green"));
        juego.setTIEMPO_VELOCIDAD_DISPARO(juego.getTIEMPO_VELOCIDAD_DISPARO()-50);
        if(juego.getTIEMPO_VELOCIDAD_DISPARO()==50){
            juego.setTIEMPO_VELOCIDAD_DISPARO(50);
        }
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Velocidad Disparo +"));
    }
    gravity(juego){
        juego.getNave().setGravity(true);
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Graviy"));
    }
    antiGravity(juego){
        juego.getNave().setAntiGravity();
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Anti Gravity"));
    }
    cemento(juego){
        juego.getNave().setCemento();
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Cemento"));
    }
    dividirEn4(juego){
        juego.getNave().setDividirEn4();
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Onion"));
    }
    judas(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Judas"));
        juego.generarExplsion(20,juego.getNave().getPosicion(),new Array("../img/menu/monedas.png","../img/menu/monedas.png","../img/menu/monedas.png"),juego.getEXPLOSION_TIME(),false);
        if(usu!=undefined){
            crearAjax('../Ajax_PHP/añadirMoneda.php',function(e){},'mone=30');
            setTimeout(function(){
                parar(30);
            },100)
            function parar(e){
                let a = e-1;
                monedas++;
                if(e!=1){
                    juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho-25 , 40), juego,'normal 17px Turret Road',true,true,"+1"));
                    setTimeout(function(){parar(a)},100)
                }
            }
        }
    }
    hud(juego){
        juego.setHudMejora(true);
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"New Technology"));
    }
    ebo(juego){
        if(!juego.getSoyMilk()){
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+0.75,"green"));
            juego.getNave().setDmg(juego.getNave().getDmg()+0.75);
        }else{
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+0.075,"green"));
            juego.getNave().setDmg(juego.getNave().getDmg()+0.075);
        }
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-103), juego,'normal 17px Turret Road',true,true,"+"+25/100,"green"));
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-60), juego,'normal 17px Turret Road',true,true,"+"+1,"green"));
        juego.setTIEMPO_VELOCIDAD_DISPARO(juego.getTIEMPO_VELOCIDAD_DISPARO()-25);
        if(juego.getTIEMPO_VELOCIDAD_DISPARO()==50){
            juego.setTIEMPO_VELOCIDAD_DISPARO(50);
        }
        juego.setVELOCIDAD_DISPAROS(juego.getVELOCIDAD_DISPAROS()+1);
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Ebo"));
    }
    esteroides(juego){
        if(!juego.getSoyMilk()){
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+1,"green"));
            juego.getNave().setDmg(juego.getNave().getDmg()+1);
        }else{
            juego.getNave().setDmg(juego.getNave().getDmg()+0.1);
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+0.1,"green"));
        }
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-103), juego,'normal 17px Turret Road',true,true,"-"+100/100,"red"));
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-60), juego,'normal 17px Turret Road',true,true,"-"+2,"red"));
        juego.setTIEMPO_VELOCIDAD_DISPARO(juego.getTIEMPO_VELOCIDAD_DISPARO()+100);
        juego.setVELOCIDAD_DISPAROS(juego.getVELOCIDAD_DISPAROS()-2);
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Esteroides"));
    }
    soyMilk(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Soy Milk"));
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"-"+0.25,"red"));
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-103), juego,'normal 17px Turret Road',true,true,"+"+(1000-75)/100,"green"));
        juego.getNave().setDmg(0.25);
        juego.setSoyMilk(true)
        juego.setTIEMPO_VELOCIDAD_DISPARO(75);
    }
    estrellaMArioBros(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Estrella"));
        juego.getNave().setEstrellaTrue();
    }
    icarus(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Icarus"));
        juego.setIcarus(true);
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-20), juego,'normal 17px Turret Road',true,true,"+"+3,"green"));
        juego.setLIMITE_VELOCIDAD_NAVE(juego.getLIMITE_VELOCIDAD_NAVE()+3)
        juego.setACELERACION_NAVE(juego.getACELERACION_NAVE()+0.4)
    }
    midas(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Pesadilla de Midas"));
        juego.setMidas(true);
    }
    aries(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Aries"));
        juego.setACELERACION_NAVE(juego.getACELERACION_NAVE()+0.25)
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-20), juego,'normal 17px Turret Road',true,true,"+"+1,"green"));
        juego.setLIMITE_VELOCIDAD_NAVE(juego.getLIMITE_VELOCIDAD_NAVE()+1)
    }
    aquarius(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Acuarius"));
        juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2)-100,dimensionesVentana.alto-75+25), juego,'normal 17px Turret Road',true,true,"-"+(juego.getHUD().getVidas()-1),"red"));
        juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2),dimensionesVentana.alto-75+25), juego,'normal 17px Turret Road',true,true,"+"+(juego.getHUD().getVidas()-1),"green"));
        juego.getHUD().setBombas(juego.getHUD().getBombas()+(juego.getHUD().getVidas()-1));
        juego.getHUD().setVidas(1);
    }
    cancer(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Cancer"));
        juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2)-100,dimensionesVentana.alto-75+25), juego,'normal 17px Turret Road',true,true,"+"+(juego.getHUD().getBombas()-1),"green"));
        juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2),dimensionesVentana.alto-75+25), juego,'normal 17px Turret Road',true,true,"-"+(juego.getHUD().getBombas()-1),"red"));
        juego.getHUD().setVidas((juego.getHUD().getBombas()-1)+(juego.getHUD().getVidas()));
        juego.getHUD().setBombas(1);
    }
    capricornio(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Capricornio"));
        if(!juego.getSoyMilk()){
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+0.75,"green"));
            juego.getNave().setDmg(juego.getNave().getDmg()+0.75);
        }else{
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+0.075,"green"));
            juego.getNave().setDmg(juego.getNave().getDmg()+0.075);
        }
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-103), juego,'normal 17px Turret Road',true,true,"+"+((25)/100),"green"));
        juego.setTIEMPO_VELOCIDAD_DISPARO(juego.getTIEMPO_VELOCIDAD_DISPARO()-25);
        if(juego.getTIEMPO_VELOCIDAD_DISPARO()==50){
            juego.setTIEMPO_VELOCIDAD_DISPARO(50);
        }
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-60), juego,'normal 17px Turret Road',true,true,"+"+1,"green"));
        juego.setVELOCIDAD_DISPAROS(juego.getVELOCIDAD_DISPAROS()+1);
        juego.setACELERACION_NAVE(juego.getACELERACION_NAVE()+0.15)
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-20), juego,'normal 17px Turret Road',true,true,"+"+1,"green"));
        juego.setLIMITE_VELOCIDAD_NAVE(juego.getLIMITE_VELOCIDAD_NAVE()+1)
    }
    gemini(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Gemini"));
        juego.setGemini(true);
    }
    leo(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Leo"));
        juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2)-100,dimensionesVentana.alto-75+25), juego,'normal 17px Turret Road',true,true,"+"+4,"green"));
        juego.getHUD().setVidas(juego.getHUD().getVidas()+4);
    }
    libra(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Libra"));
        juego.getHUD().setBombas(juego.getHUD().getBombas()+6);
        juego.generarExplsion(6,juego.getNave().getPosicion(),new Array("../img/menu/monedas.png","../img/menu/monedas.png","../img/menu/monedas.png"),juego.getEXPLOSION_TIME(),false);
        if(usu!=undefined){
            crearAjax('../Ajax_PHP/añadirMoneda.php',function(e){},'mone=6');
            setTimeout(function(){
                parar(6);
            },100)
            function parar(e){
                let a = e-1;
                monedas++;
                if(e!=1){
                    juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho-25 , 40), juego,'normal 17px Turret Road',true,true,"+1"));
                    setTimeout(function(){parar(a)},100)
                }
            }
        }
        this.dmgNormal = 2;this.movimientoNoral = 9;this.cadenciaNormal = 400;this.velocidadNomal = 10;this.aceleracionNormal = 0.2;
        if(this.dmgNormal>=juego.getNave().getDmg()){
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+((20*juego.getNave().getDmg())/100),"green"));
            juego.getNave().setDmg(juego.getNave().getDmg()+((20*juego.getNave().getDmg())/100)) ;
        }else{
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"-"+((20*juego.getNave().getDmg())/100),"red"));
            juego.getNave().setDmg(juego.getNave().getDmg()-((20*juego.getNave().getDmg())/100)) ;
        }
        if(this.movimientoNoral>=juego.getLIMITE_VELOCIDAD_NAVE()){
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-20), juego,'normal 17px Turret Road',true,true,"+"+((20*juego.getLIMITE_VELOCIDAD_NAVE())/100),"green"));
            juego.setLIMITE_VELOCIDAD_NAVE(juego.getLIMITE_VELOCIDAD_NAVE()+((20*juego.getLIMITE_VELOCIDAD_NAVE())/100))
        }else{
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-20), juego,'normal 17px Turret Road',true,true,"-"+((20*juego.getLIMITE_VELOCIDAD_NAVE())/100),"red"));
            juego.setLIMITE_VELOCIDAD_NAVE(juego.getLIMITE_VELOCIDAD_NAVE()-((20*juego.getLIMITE_VELOCIDAD_NAVE())/100))
        }
        if(this.cadenciaNormal>=juego.getTIEMPO_VELOCIDAD_DISPARO()){
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-103), juego,'normal 17px Turret Road',true,true,"+"+((20*juego.getTIEMPO_VELOCIDAD_DISPARO())/1000),"green"));
            juego.setTIEMPO_VELOCIDAD_DISPARO(juego.getTIEMPO_VELOCIDAD_DISPARO()-((20*juego.getTIEMPO_VELOCIDAD_DISPARO())/100))
        }else{
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-103), juego,'normal 17px Turret Road',true,true,"-"+((20*juego.getTIEMPO_VELOCIDAD_DISPARO())/1000),"red"));
            juego.setTIEMPO_VELOCIDAD_DISPARO(juego.getTIEMPO_VELOCIDAD_DISPARO()+((20*juego.getTIEMPO_VELOCIDAD_DISPARO())/100))
        }
        if(this.velocidadNomal>=juego.getVELOCIDAD_DISPAROS()){
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-60), juego,'normal 17px Turret Road',true,true,"+"+((20*juego.getVELOCIDAD_DISPAROS())/100),"green"));
            juego.setVELOCIDAD_DISPAROS(juego.getVELOCIDAD_DISPAROS()+((20*juego.getVELOCIDAD_DISPAROS())/100))
        }else{
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-60), juego,'normal 17px Turret Road',true,true,"-"+((20*juego.getVELOCIDAD_DISPAROS())/100),"red"));
            juego.setVELOCIDAD_DISPAROS(juego.getVELOCIDAD_DISPAROS()-((20*juego.getVELOCIDAD_DISPAROS())/100))
        }
        if(this.aceleracionNormal>=juego.getACELERACION_NAVE()){
            juego.setACELERACION_NAVE(juego.getACELERACION_NAVE()+((20*juego.getACELERACION_NAVE())/100))
        }else{
            juego.setACELERACION_NAVE(juego.getACELERACION_NAVE()-((20*juego.getACELERACION_NAVE())/100))
            if(juego.getACELERACION_NAVE()<0.10){
                juego.setACELERACION_NAVE(0.10);
            }
        }
        if(juego.getTIEMPO_VELOCIDAD_DISPARO()==50){
            juego.setTIEMPO_VELOCIDAD_DISPARO(50);
        }
    }
    piscis(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Piscis"));
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-103), juego,'normal 17px Turret Road',true,true,"+"+(1000-100)/100,"green"));
        if(!juego.getSoyMilk()){
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"-"+0.25,"red"));
            juego.getNave().setDmg(juego.getNave().getDmg()-0.25);
        }else{
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"-"+0.025,"red"));
            juego.getNave().setDmg(juego.getNave().getDmg()-0.025);
        }
        juego.setTIEMPO_VELOCIDAD_DISPARO(juego.getTIEMPO_VELOCIDAD_DISPARO()-100)
        if(juego.getTIEMPO_VELOCIDAD_DISPARO()==50){
            juego.setTIEMPO_VELOCIDAD_DISPARO(50);
        }
    }
    elRey(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"El Rey"));
        juego.getHUD().setElRey(true);
    }
    unicornio(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Unicornio"));
        juego.getNave().setUnicornio(true);
    }
    metacarga(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Metacarga"));
        juego.setMetacarga(true);
    }
    rueda(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"El Ruedas"));
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-20), juego,'normal 17px Turret Road',true,true,"+"+2,"green"));
        juego.setACELERACION_NAVE(juego.getACELERACION_NAVE()+0.25)
        juego.setLIMITE_VELOCIDAD_NAVE(juego.getLIMITE_VELOCIDAD_NAVE()+2)
    }
    percha(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"El Perchas"));
        if(!juego.getSoyMilk()){
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+1,"green"));
            juego.getNave().setDmg(juego.getNave().getDmg()+1);
        }else{
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+0.1,"green"));
            juego.getNave().setDmg(juego.getNave().getDmg()+0.1);
        }
    }
    gordo(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Gordo"));
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-20), juego,'normal 17px Turret Road',true,true,"-"+2,"red"));
        juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2)-100,dimensionesVentana.alto-75+25), juego,'normal 17px Turret Road',true,true,"+"+3,"green"));
        juego.setACELERACION_NAVE(juego.getACELERACION_NAVE()-0.10)
        if(juego.getACELERACION_NAVE()<0.10){
            juego.setACELERACION_NAVE(0.10);
        }
        juego.setLIMITE_VELOCIDAD_NAVE(juego.getLIMITE_VELOCIDAD_NAVE()-2)
        juego.getHUD().setVidas(juego.getHUD().getVidas()+3);
    }
    limbo(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Limbo"));
        limbo = true;
    }
    velocity(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Ultra velocity"));
        juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-103), juego,'normal 17px Turret Road',true,true,"+"+1.5,"green"));
        juego.setTIEMPO_VELOCIDAD_DISPARO(juego.getTIEMPO_VELOCIDAD_DISPARO()-150)
        if(juego.getTIEMPO_VELOCIDAD_DISPARO()==50){
            juego.setTIEMPO_VELOCIDAD_DISPARO(50);
        } 
        juego.setVelocity(true)
    }
    molecula(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Operacion Molecular"));
        juego.getMolecula(true)
        if(!juego.getSoyMilk()){
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+2,"green"));
            juego.getNave().setDmg(juego.getNave().getDmg()+2);
        }else{
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+0.2,"green"));
            juego.getNave().setDmg(juego.getNave().getDmg()+0.2);
        }
    }
    hielo(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Sonrie es Burgos"));
        juego.getNave().setHielo(true);
    }
    veneno(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Veneno"));
        juego.getNave().setCancer(true);
    }
    pactoSangre(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Pacto de sangre"));
        juego.getHUD().setVidas(juego.getHUD().getVidas()-1);
        juego.getTextos().push(new Texto(new Vector2D((dimensionesVentana.ancho/2)-100,dimensionesVentana.alto-75+25), juego,'normal 17px Turret Road',true,true,"-"+1,"red"));
        if(!juego.getSoyMilk()){
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+1,"green"));
            juego.getNave().setDmg(juego.getNave().getDmg()+1);
        }else{
            juego.getTextos().push(new Texto(new Vector2D(75,dimensionesVentana.alto-140), juego,'normal 17px Turret Road',true,true,"+"+0.1,"green"));
            juego.getNave().setDmg(juego.getNave().getDmg()+0.1);
        }
    }
    boomerang(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"boomerang"));
        juego.getNave().setBoomerang(true);
    } 
    gusano(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Gusanitooooo"));
        juego.getFriends().push(new Friend(new Array("../img/friends/gusano/gusano1.png","../img/friends/gusano/gusano2.png","../img/friends/gusano/gusano3.png","../img/friends/gusano/gusano4.png","../img/friends/gusano/gusano5.png","../img/friends/gusano/gusano6.png","../img/friends/gusano/gusano7.png","../img/friends/gusano/gusano8.png","../img/friends/gusano/gusano9.png"),new Vector2D(0,0),juego,60,25,0));
    }
    pie(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Daddy   long   leg"));
        juego.getFriends().push(new Friend(new Array('../img/friends/pie/pie.png','../img/friends/pie/perna.png'),new Vector2D(-100,-100),juego,39,36,1));
    }
    friendBrisom(juego){
        juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Minirrallo to chetado"));
        juego.getFriends().push(new Friend(new Array(
        '../img/friends/rayo/rayo1.png',
        '../img/friends/rayo/rayo2.png',
        '../img/friends/rayo/rayo3.png',
        '../img/friends/rayo/rayo4.png',
        '../img/friends/rayo/rayo5.png',
        '../img/friends/rayo/rayo6.png',
        '../img/friends/rayo/rayo7.png',
        '../img/friends/rayo/rayo8.png',
        '../img/friends/rayo/rayo9.png',
        ),new Vector2D(juego.getNave().getPosicion().getX(),juego.getNave().getPosicion().getY()+40),juego,20,40,2));
    }
    //controlCV(juego){
    //    juego.getTextos().push(new Texto(new Vector2D(dimensionesVentana.ancho/2-100,dimensionesVentana.alto/2), juego,'normal 50px Monoton',true,true,"Ctrl + C   y  Ctrl + V"));
    //    juego.getFriends().push(new Friend(new Array('../img/friends/pie/pie.png','../img/friends/pie/perna.png'),new Vector2D(-100,-100),juego,39,36,3));
    //}
}