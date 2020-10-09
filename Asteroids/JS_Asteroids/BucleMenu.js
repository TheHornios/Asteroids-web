document.addEventListener('DOMContentLoaded',function(){
    inicioMenuAsteroides.iniciarJuego();
},false);

var inicioMenuAsteroides = {

    iniciarJuego:function(){

        console.log("Juego Iniciado");


        dimensionesVentana.iniciar();


        document.getElementById("MyCanvas").setAttribute("width",dimensionesVentana.ancho-10);
        document.getElementById("MyCanvas").setAttribute("height",dimensionesVentana.alto);
        //teclado.iniciar();
        
        var canvas = document.getElementById("MyCanvas");
        var ctx = canvas.getContext("2d");

        /* Creacion objetos */
        var menu = new Menu();

        var limpiar = 0;
        /* Bucle Principal */
        function frameUpdate() {
            document.getElementById("MyCanvas").setAttribute("width",dimensionesVentana.ancho-10);
            document.getElementById("MyCanvas").setAttribute("height",dimensionesVentana.alto);
            dimensionesVentana.iniciar();
            canvas = document.getElementById("MyCanvas");
            ctx = canvas.getContext("2d");
            //ctx.globalCompositeOperation = "multiply"
           // ctx.globalAlpha = 0.90;
            //ctx.beginPath();
          
          /*  if(limpiar==10){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                limpiar = 0;
            }
            console.log(limpiar);

            limpiar++;*/
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let img = new Image();
            img.src = '../img/fondojuego.png';
            ctx.drawImage(img, 0 , 0 );
            
            menu.update();
            menu.draw();
            
            
            window.requestAnimationFrame(frameUpdate);
            //ctx.closePath();

        }
        frameUpdate();
    },
  

};
