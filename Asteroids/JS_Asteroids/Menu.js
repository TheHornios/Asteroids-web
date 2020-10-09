class Menu{
    constructor(){
        this.arrayMeteoros = new Array();
        this.metCant = 2;

         // Imagnes Explosiones
         this.imgExplosion = new Array("../img/explosion/ex1.png", "../img/explosion/ex2.png", "../img/explosion/ex3.png", "../img/explosion/ex4.png", "../img/explosion/ex5.png");
         this.imgExplosion1 = new Array("../img/explosion/ex1_1.png", "../img/explosion/ex2_2.png", "../img/explosion/ex3_3.png", "../img/explosion/ex4_4.png", "../img/explosion/ex5_5.png");
         this.imgExplosion2 = new Array("../img/explosion/exn1.png", "../img/explosion/exn2.png", "../img/explosion/exn3.png", "../img/explosion/exn4.png", "../img/explosion/exn5.png");
         this.imgExplosion3 =  new Array("../img/menu/monedas.png", "../img/menu/monedas.png", "../img/menu/monedas.png");
 
         this.imgExplosion = this.cargarImgenesArray(this.imgExplosion);
         this.imgExplosion1 = this.cargarImgenesArray(this.imgExplosion1);
         this.imgExplosion2 = this.cargarImgenesArray(this.imgExplosion2);
         this.imgExplosion3 =  this.cargarImgenesArray(this.imgExplosion3);
         // Imagenes Meteoritos
         this.imgMeteoroBig = new Array(objtoImage.getImg_ast()[0][0], objtoImage.getImg_ast()[0][1], objtoImage.getImg_ast()[0][2]);
         this.imgMeteoroMedsiano= new Array(objtoImage.getImg_ast()[1][0], objtoImage.getImg_ast()[1][1], objtoImage.getImg_ast()[1][2]);
         this.imgMeteoroSmall= new Array(objtoImage.getImg_ast()[2][0], objtoImage.getImg_ast()[2][1], objtoImage.getImg_ast()[2][2]);
 
         this.imgMeteoroBig = this.cargarImgenesArray(this.imgMeteoroBig);
         this.imgMeteoroMedsiano = this.cargarImgenesArray(this.imgMeteoroMedsiano);
         this.imgMeteoroSmall = this.cargarImgenesArray(this.imgMeteoroSmall);
 
         this.imgMeteoroBigRojo = new Array(this.cargarImgenColoresMeteoros(this.imgMeteoroBig[0].src,"big_rojo"),this.cargarImgenColoresMeteoros(this.imgMeteoroBig[1].src,"big_rojo"),this.cargarImgenColoresMeteoros(this.imgMeteoroBig[2].src,"big_rojo") );
         this.imgMeteoroMedsianoRojo = new Array(this.cargarImgenColoresMeteoros(this.imgMeteoroMedsiano[0].src,"normal_rojo"),this.cargarImgenColoresMeteoros(this.imgMeteoroMedsiano[1].src,"normal_rojo"),this.cargarImgenColoresMeteoros(this.imgMeteoroMedsiano[2].src,"normal_rojo"));
         this.imgMeteoroSmallRojo = new Array(this.cargarImgenColoresMeteoros(this.imgMeteoroSmall[0].src,"small_rojo"),this.cargarImgenColoresMeteoros(this.imgMeteoroSmall[1].src,"small_rojo"),this.cargarImgenColoresMeteoros(this.imgMeteoroSmall[2].src,"small_rojo"));
 
         this.imgMeteoroRojo = new Array(this.imgMeteoroBigRojo,this.imgMeteoroMedsianoRojo,this.imgMeteoroSmallRojo);

        this.inciarOleada();

        this.VELOCIDAD_ANGULO = 0.1;
        
    }
    update(){
       
        for(let i = 0;i<this.arrayMeteoros.length;i++){
            this.arrayMeteoros[i].update();
        }
    }
    draw(){
        for(let i = 0;i<this.arrayMeteoros.length;i++){
            this.arrayMeteoros[i].draw();
        }
    }
    getVELOCIDAD_ANGULO(){
        return this.VELOCIDAD_ANGULO;
    }
    setVELOCIDAD_ANGULO(a){
        this.VELOCIDAD_ANGULO = a;
    }
    getVidaAstGrande(){
        return 1;
    }
    getVidaAstMediano (){
        return 1;
    }
    getVidaAstpequeño (){
        return 1;
    }
    inciarOleada(){
        let x;
        let y;
        for(let i = 0;i<this.metCant;i++){
			x = Math.random()*dimensionesVentana.ancho-100;
            y = Math.random()*dimensionesVentana.alto-100;
            this.arrayMeteoros.push(new Meteorito(new Vector2D(x, y), 3, this, this.hudmejora,this.imgMeteoroBig,this.imgMeteoroMedsiano,this.imgMeteoroSmall,this.imgMeteoroRojo ));
            x = Math.random()*dimensionesVentana.ancho-100;
            y = Math.random()*dimensionesVentana.alto-100;
            this.arrayMeteoros.push(new Meteorito(new Vector2D(x, y), 2, this, this.hudmejora,this.imgMeteoroBig,this.imgMeteoroMedsiano,this.imgMeteoroSmall,this.imgMeteoroRojo ));
            x = Math.random()*dimensionesVentana.ancho-100;
            y = Math.random()*dimensionesVentana.alto-100;
            this.arrayMeteoros.push(new Meteorito(new Vector2D(x, y), 1, this, this.hudmejora,this.imgMeteoroBig,this.imgMeteoroMedsiano,this.imgMeteoroSmall,this.imgMeteoroRojo ));

		}
		this.metCant++;
    }
    cargarImgenesArray(array){
        let arrImgCargadas = new Array();
        for (let i = 0; i < array.length; i++) {
            let imgCarga = new Image();
            imgCarga.src = array[i];
            arrImgCargadas.push(imgCarga);
        }
        return arrImgCargadas;
    }
    cargarImgenColoresMeteoros(src, tam) {
        let e = new Image();
        e.src = "../img/asteroides/skins/" + tam + src.substring(src.lastIndexOf('/'))
        return e;
    }
}