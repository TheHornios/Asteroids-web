document.addEventListener('DOMContentLoaded',function(){
    
    (function() { 
    
        inicio.iniciarJuego();
    })();
},false);

var limbo = false;
var inicio = {

    iniciarJuego:function(){

        console.log("Juego Iniciado");
        dimensionesVentana.iniciar();

        var can = '<canvas id="MyCanvas" width="'+dimensionesVentana.ancho+'" height="'+dimensionesVentana.alto+'" ></canvas>';
        var htmlInicial = document.getElementById("juego").innerHTML;
        document.getElementById("juego").innerHTML = htmlInicial+can;
        
        teclado.iniciar();
        var canvas = document.getElementById("MyCanvas");
        var ctx = canvas.getContext("2d");

        /* Creacion objetos */
        var juego = new Juego();

        var limpiar = 0;

        var pausa = false;
        var soltarPausa = true;
        var pausaSonido = false;
        /* Bucle Principal */
        function frameUpdate() {
            dimensionesVentana.iniciar();
            canvas = document.getElementById("MyCanvas");
            ctx = canvas.getContext("2d");

            if(limbo){
                if(limpiar >=20){
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    limpiar = 0;
                }
                limpiar++;
            }else{
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
           
               
            
          
            let img = new Image();
          //  img.src = '../img/fondojuego.png';
            ctx.drawImage(img, 0 , 0 );
            if( teclado.teclaPulsada(teclado.getPausa()) && pausa && !soltarPausa){
                setTimeout(function(){
                    soltarPausa = true;
                    pausa = false;
                },200)
            }
            if( teclado.teclaPulsada(teclado.getPausa()) && !pausa && soltarPausa){
                setTimeout(function(){
                    soltarPausa = false;
                    pausa = true;
                },200)
              
            }
            

            if(!pausa){
                document.getElementById('audio__controller').style.display = 'none';
                juego.update();
            }
            
            juego.getSonido().getSoundMiusic().setVolume((80*volumen__slider)/100);
            juego.draw();


            if(pausa){
                document.getElementById('audio__controller').style.display = 'block';
                /** Boton de pausa  */
                ctx.fillStyle = "#000000";
                ctx.globalAlpha = 0.85
                ctx.fillRect(0+(canvas.width*20/100),0+(canvas.height*20/100),(canvas.width*60/100),(canvas.height*60/100));
                ctx.globalAlpha = 1

                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0+(canvas.width*20/100),0+(canvas.height*20/100),5,(canvas.height*50/100));
                ctx.fillRect(0+(canvas.width*80/100),0+(canvas.height*30/100),5,(canvas.height*50/100)+5);
                ctx.fillRect(0+(canvas.width*20/100),0+(canvas.height*20/100),(canvas.width*50/100),5);
                ctx.fillRect(0+(canvas.width*30/100),0+(canvas.height*80/100),(canvas.width*50/100)+5,5);

                // Letra de pausa y el rectangulo de pausa 
                ctx.fillStyle = "#FFFFFF";
                ctx.font = "normal 60px Turret Road" ;
                ctx.textAlign = "center";
                ctx.fillText("PAUSA",canvas.width/2,canvas.height/2-120);
                ctx.fillRect(0+(canvas.width*48/100),0+(canvas.height*40/100),15,(canvas.height*10/100));
                ctx.fillRect(0+(canvas.width*52/100),0+(canvas.height*40/100),15,(canvas.height*10/100));

                //Parte del volumen 
                ctx.font = "normal 30px Turret Road" ;
                ctx.fillText("Volumen",canvas.width*65/100,canvas.height/2+50);

                ctx.textAlign = "start";

                document.getElementById('audio__controller').style.top = canvas.height/2+50+"px";
                document.getElementById('audio__controller').style.left = canvas.width*61/100+"px";
            }


            window.requestAnimationFrame(frameUpdate);
            //ctx.closePath();

        }
        frameUpdate();
    },
};