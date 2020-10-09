<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    include("../Funciones_PHP/Sql_Funtion.php");
    $crearPArtida;
    if(isset($_REQUEST['puntos'])&&$_REQUEST['puntos']!=""){
        $crearPArtida = true;
        $Consulta;
        if(isset($_SESSION['user_id'])&&!isset($Consulta)){
            /* Preparar Datos Para El Insert */
            $puntos = $_REQUEST['puntos'];
            $fecha = $_REQUEST['fecha'];
            $tiempoPartida = $_REQUEST['fechaInicio'];
            $fecha = str_replace(" ","",$fecha);
            $tiempoPartida = floor($tiempoPartida);
            $usuario = $_SESSION['user_id'];
            $date21 = date("Y-m-d H:i:s");
            //Insertar Datos
            $sql_Partida = "INSERT into partidas (usu,pts,fecha_hora,tiempo_partida) values ('$usuario', '$puntos','$date21', '$tiempoPartida')";
            
            mysqli_query($conexion,$sql_Partida); 
            $Consulta = 1;
            print '<meta http-equiv="refresh" content="0;url=index.php?">';
        }else{
            print '<meta http-equiv="refresh" content="0;url=index.php?">';
        }
    }

    
?>

<!DOCTYPE html>
<html lang="en" id="juego">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="../Estilos_Juego.css">
    <link href="https://fonts.googleapis.com/css?family=Turret+Road:300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Monoton&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="../img/menu/monedas.png" />
    <title>Asteroids</title>
</head>
<body>
    <div class="formalrioPartidas" id="formlario_Oculto">
        <form action='' method='post' name="formulario1">
            <input type='text' name='puntos' id="puntos" value="">
            <input type='text' name='fecha' id="fecha" value="">
            <input type='text' name='fechaInicio' id="fechaInicio" value="">
        <form>
    </div>
   
    <script>

        class ObjImg{
            constructor(){
                this.arr_img_nave0 = new Array('../img/nave/skins/nave0_0.png','../img/nave/skins/nave1_0.png','../img/nave/skins/nave2_0.png','../img/nave/skins/nave3_0.png','../img/nave/skins/nave4_0.png','../img/nave/skins/nave5_0.png','../img/nave/skins/nave6_0.png','../img/nave/skins/nave7_0.png');
                this.arr_img_nave1 = new Array('../img/nave/skins/nave0_1.png','../img/nave/skins/nave1_1.png','../img/nave/skins/nave2_1.png','../img/nave/skins/nave3_1.png','../img/nave/skins/nave4_1.png','../img/nave/skins/nave5_1.png','../img/nave/skins/nave6_1.png','../img/nave/skins/nave7_1.png');
                this.img_nave_0 =  this.arr_img_nave0[0];
                this.img_nave_1 =  this.arr_img_nave1[0];
                /* ARRAY HUD INFERIOR */
                this.arr_img_hubInf = new Array('../img/hud/Hud_0.png','../img/hud/Hud_1.png','../img/hud/Hud_2.png','../img/hud/Hud_3.png','../img/hud/Hud_4.png','../img/hud/Hud_5.png','../img/hud/Hud_6.png','../img/hud/Hud_7.png');
                this.img_hubInf = this.arr_img_hubInf[0];
                /* ARRAY METEORITOS */
                this.arr_img_ast = new Array(
                    new Array(new Array("../img/asteroides/skins/big/ast0_0.png","../img/asteroides/skins/big/ast0_1.png","../img/asteroides/skins/big/ast0_2.png"),
                            new Array("../img/asteroides/skins/normal/ast0_0.png","../img/asteroides/skins/normal/ast0_1.png","../img/asteroides/skins/normal/ast0_2.png"),
                            new Array("../img/asteroides/skins/small/ast0_0.png","../img/asteroides/skins/small/ast0_1.png","../img/asteroides/skins/small/ast0_2.png")),

                    new Array(new Array("../img/asteroides/skins/big/ast1_0.png","../img/asteroides/skins/big/ast1_1.png","../img/asteroides/skins/big/ast1_2.png"),
                            new Array("../img/asteroides/skins/normal/ast1_0.png","../img/asteroides/skins/normal/ast1_1.png","../img/asteroides/skins/normal/ast1_2.png"),
                            new Array("../img/asteroides/skins/small/ast1_0.png","../img/asteroides/skins/small/ast1_1.png","../img/asteroides/skins/small/ast1_2.png")),

                    new Array(new Array("../img/asteroides/skins/big/ast2_0.png","../img/asteroides/skins/big/ast2_1.png","../img/asteroides/skins/big/ast2_2.png"),
                            new Array("../img/asteroides/skins/normal/ast2_0.png","../img/asteroides/skins/normal/ast2_1.png","../img/asteroides/skins/normal/ast2_2.png"),
                            new Array("../img/asteroides/skins/small/ast2_0.png","../img/asteroides/skins/small/ast2_1.png","../img/asteroides/skins/small/ast2_2.png")),

                    new Array(new Array("../img/asteroides/skins/big/ast3_0.png","../img/asteroides/skins/big/ast3_1.png","../img/asteroides/skins/big/ast3_2.png"),
                            new Array("../img/asteroides/skins/normal/ast3_0.png","../img/asteroides/skins/normal/ast3_1.png","../img/asteroides/skins/normal/ast3_2.png"),
                            new Array("../img/asteroides/skins/small/ast3_0.png","../img/asteroides/skins/small/ast3_1.png","../img/asteroides/skins/small/ast3_2.png")),

                    new Array(new Array("../img/asteroides/skins/big/ast4_0.png","../img/asteroides/skins/big/ast4_1.png","../img/asteroides/skins/big/ast4_2.png"),
                            new Array("../img/asteroides/skins/normal/ast4_0.png","../img/asteroides/skins/normal/ast4_1.png","../img/asteroides/skins/normal/ast4_2.png"),
                            new Array("../img/asteroides/skins/small/ast4_0.png","../img/asteroides/skins/small/ast4_1.png","../img/asteroides/skins/small/ast4_2.png")),

                    new Array(new Array("../img/asteroides/skins/big/ast5_0.png","../img/asteroides/skins/big/ast5_1.png","../img/asteroides/skins/big/ast5_2.png"),
                            new Array("../img/asteroides/skins/normal/ast5_0.png","../img/asteroides/skins/normal/ast5_1.png","../img/asteroides/skins/normal/ast5_2.png"),
                            new Array("../img/asteroides/skins/small/ast5_0.png","../img/asteroides/skins/small/ast5_1.png","../img/asteroides/skins/small/ast5_2.png")),

                    new Array(new Array("../img/asteroides/skins/big/ast6_0.png","../img/asteroides/skins/big/ast6_1.png","../img/asteroides/skins/big/ast6_2.png"),
                            new Array("../img/asteroides/skins/normal/ast6_0.png","../img/asteroides/skins/normal/ast6_1.png","../img/asteroides/skins/normal/ast6_2.png"),
                            new Array("../img/asteroides/skins/small/ast6_0.png","../img/asteroides/skins/small/ast6_1.png","../img/asteroides/skins/small/ast6_2.png")),
                    
                    new Array(new Array("../img/asteroides/skins/big/ast7_0.png","../img/asteroides/skins/big/ast7_1.png","../img/asteroides/skins/big/ast7_2.png"),
                            new Array("../img/asteroides/skins/normal/ast7_0.png","../img/asteroides/skins/normal/ast7_1.png","../img/asteroides/skins/normal/ast7_2.png"),
                            new Array("../img/asteroides/skins/small/ast7_0.png","../img/asteroides/skins/small/ast7_1.png","../img/asteroides/skins/small/ast7_2.png")),

                    new Array(new Array("../img/asteroides/skins/big/ast8_0.png","../img/asteroides/skins/big/ast8_1.png","../img/asteroides/skins/big/ast8_2.png"),
                            new Array("../img/asteroides/skins/normal/ast8_0.png","../img/asteroides/skins/normal/ast8_1.png","../img/asteroides/skins/normal/ast8_2.png"),
                            new Array("../img/asteroides/skins/small/ast8_0.png","../img/asteroides/skins/small/ast8_1.png","../img/asteroides/skins/small/ast8_2.png")),

                    new Array(new Array("../img/asteroides/skins/big/ast9_0.png","../img/asteroides/skins/big/ast9_1.png","../img/asteroides/skins/big/ast9_2.png"),
                            new Array("../img/asteroides/skins/normal/ast9_0.png","../img/asteroides/skins/normal/ast9_1.png","../img/asteroides/skins/normal/ast9_2.png"),
                            new Array("../img/asteroides/skins/small/ast9_0.png","../img/asteroides/skins/small/ast9_1.png","../img/asteroides/skins/small/ast9_2.png")),
                );
                this.img_ast =  this.arr_img_ast[0];
                /* ARRAY MEJORAS */
                this.arr_img_meg = new Array(
                        new Array('../img/mejoras/0/1up.png','../img/mejoras/0/1000pts.png','../img/mejoras/0/boom.png','../img/mejoras/0/dislexia.png','../img/mejoras/0/disparoDetras.png','../img/mejoras/0/masVelocidad.png','../img/mejoras/0/menosVelocidad.png','../img/mejoras/0/ptsx2.png','../img/mejoras/0/sicosis.png','../img/mejoras/0/x2.png','../img/mejoras/0/nuevos/tiersUp.png','../img/mejoras/0/nuevos/bombasMas.png'),
                        new Array('../img/mejoras/1/1up.png','../img/mejoras/1/1000pts.png','../img/mejoras/1/boom.png','../img/mejoras/1/dislexia.png','../img/mejoras/1/disparoDetras.png','../img/mejoras/1/masVelocidad.png','../img/mejoras/1/menosVelocidad.png','../img/mejoras/1/ptsx2.png','../img/mejoras/1/sicosis.png','../img/mejoras/1/x2.png','../img/mejoras/1/nuevos/tiersUp.png','../img/mejoras/1/nuevos/bombasMas.png'),
                        new Array('../img/mejoras/2/1up.png','../img/mejoras/2/1000pts.png','../img/mejoras/2/boom.png','../img/mejoras/2/dislexia.png','../img/mejoras/2/disparoDetras.png','../img/mejoras/2/masVelocidad.png','../img/mejoras/2/menosVelocidad.png','../img/mejoras/2/ptsx2.png','../img/mejoras/2/sicosis.png','../img/mejoras/2/x2.png','../img/mejoras/2/nuevos/tiersUp.png','../img/mejoras/2/nuevos/bombasMas.png'),
                        new Array('../img/mejoras/3/1up.png','../img/mejoras/3/1000pts.png','../img/mejoras/3/boom.png','../img/mejoras/3/dislexia.png','../img/mejoras/3/disparoDetras.png','../img/mejoras/3/masVelocidad.png','../img/mejoras/3/menosVelocidad.png','../img/mejoras/3/ptsx2.png','../img/mejoras/3/sicosis.png','../img/mejoras/3/x2.png','../img/mejoras/3/nuevos/tiersUp.png','../img/mejoras/3/nuevos/bombasMas.png'),
                        new Array('../img/mejoras/4/1up.png','../img/mejoras/4/1000pts.png','../img/mejoras/4/boom.png','../img/mejoras/4/dislexia.png','../img/mejoras/4/disparoDetras.png','../img/mejoras/4/masVelocidad.png','../img/mejoras/4/menosVelocidad.png','../img/mejoras/4/ptsx2.png','../img/mejoras/4/sicosis.png','../img/mejoras/4/x2.png','../img/mejoras/4/nuevos/tiersUp.png','../img/mejoras/4/nuevos/bombasMas.png'),
                        new Array('../img/mejoras/5/1up.png','../img/mejoras/5/1000pts.png','../img/mejoras/5/boom.png','../img/mejoras/5/dislexia.png','../img/mejoras/5/disparoDetras.png','../img/mejoras/5/masVelocidad.png','../img/mejoras/5/menosVelocidad.png','../img/mejoras/5/ptsx2.png','../img/mejoras/5/sicosis.png','../img/mejoras/5/x2.png','../img/mejoras/5/nuevos/tiersUp.png','../img/mejoras/5/nuevos/bombasMas.png'),
                        new Array('../img/mejoras/6/1up.png','../img/mejoras/6/1000pts.png','../img/mejoras/6/boom.png','../img/mejoras/6/dislexia.png','../img/mejoras/6/disparoDetras.png','../img/mejoras/6/masVelocidad.png','../img/mejoras/6/menosVelocidad.png','../img/mejoras/6/ptsx2.png','../img/mejoras/6/sicosis.png','../img/mejoras/6/x2.png','../img/mejoras/6/nuevos/tiersUp.png','../img/mejoras/6/nuevos/bombasMas.png'),
                        new Array('../img/mejoras/7/1up.png','../img/mejoras/7/1000pts.png','../img/mejoras/7/boom.png','../img/mejoras/7/dislexia.png','../img/mejoras/7/disparoDetras.png','../img/mejoras/7/masVelocidad.png','../img/mejoras/7/menosVelocidad.png','../img/mejoras/7/ptsx2.png','../img/mejoras/7/sicosis.png','../img/mejoras/7/x2.png','../img/mejoras/7/nuevos/tiersUp.png','../img/mejoras/7/nuevos/bombasMas.png'),
                        new Array('../img/mejoras/8/1up.png','../img/mejoras/8/1000pts.png','../img/mejoras/8/boom.png','../img/mejoras/8/dislexia.png','../img/mejoras/8/disparoDetras.png','../img/mejoras/8/masVelocidad.png','../img/mejoras/8/menosVelocidad.png','../img/mejoras/8/ptsx2.png','../img/mejoras/8/sicosis.png','../img/mejoras/8/x2.png','../img/mejoras/8/nuevos/tiersUp.png','../img/mejoras/8/nuevos/bombasMas.png'),
                        new Array('../img/mejoras/9/1up.png','../img/mejoras/9/1000pts.png','../img/mejoras/9/boom.png','../img/mejoras/9/dislexia.png','../img/mejoras/9/disparoDetras.png','../img/mejoras/9/masVelocidad.png','../img/mejoras/9/menosVelocidad.png','../img/mejoras/9/ptsx2.png','../img/mejoras/9/sicosis.png','../img/mejoras/9/x2.png','../img/mejoras/9/nuevos/tiersUp.png','../img/mejoras/9/nuevos/bombasMas.png')
                );
                this.img_meg =  this.arr_img_meg[0];
                /* ARRAY DISPAROS */
                this.arr_img_dis = new Array('../img/nave/Disparos/disparo_0.png','../img/nave/Disparos/disparo_1.png','../img/nave/Disparos/disparo_2.png','../img/nave/Disparos/disparo_3.png','../img/nave/Disparos/disparo_4.png','../img/nave/Disparos/disparo_5.png','../img/nave/Disparos/disparo_6.png','../img/nave/Disparos/disparo_7.png','../img/nave/Disparos/disparo_4.png');
                this.img_dis =  this.arr_img_dis[0];
                <?php if(isset($_SESSION['user_id'])){ ?>
                    /* Nave */
                    this.img_nave_0 =  this.arr_img_nave0[<?= getSkinNave($conexion,$_SESSION['user_id'])?>];
                    this.img_nave_1 =  this.arr_img_nave1[<?= getSkinNave($conexion,$_SESSION['user_id'])?>];
                    this.img_hubInf = this.arr_img_hubInf[<?= getSkinNave($conexion,$_SESSION['user_id'])?>];
                    this.img_dis= this.arr_img_dis[<?= getSkinNave($conexion,$_SESSION['user_id'])?>];
                    /* Asteroides */
                    this.img_ast =  this.arr_img_ast[<?= getSkinAsteroid($conexion,$_SESSION['user_id'])?>];
                    this.img_meg =this.arr_img_meg[<?= getSkinAsteroid($conexion,$_SESSION['user_id'])?>];
                    
                <?php } ?>  
            }
            getImg_meg(){
                return this.img_meg;
            }
            getImg_dis(){
                return this.img_dis;
            }
            getImg_nave_0_pasando_numero(valor){
                return this.arr_img_nave0[valor];
            }
            getImg_nave_1_pasando_numero(valor){
                return this.arr_img_nave1[valor];
            }
            getImg_hubInf(){
                return this.img_hubInf;
            }
            getImg_nave_0(){
                return this.img_nave_0;
            }
            getImg_nave_1(){
                return this.img_nave_1;
            }
            getImg_ast(){
                return this.img_ast;
            }
        }
        
        var objtoImage = new ObjImg();
        var fechaIni = new Date(); 
        /* Esta Funcion Escribira Los Datos De La Partida En El Caso De Que Exista Una Session*/
        function acabarPartida(puntos,fecha){
            if(document.getElementById("formlario_Oculto")!= null){
                document.getElementById("puntos").value = puntos;
                document.getElementById("fecha").value = +fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+"|"+fecha.toTimeString().substr(0,9);
                document.getElementById("fechaInicio").value = (fecha.getTime()-fechaIni.getTime())/1000;
                document.formulario1.submit()
            }
        }
    </script>
    <?php if(!isset($crearPArtida)){ ?>
        <div id="juego"></div>
        <script src="../JS_Asteroids/constantes.js"></script>
        <script src="../JS_Asteroids/Cronometro.js"></script>
        <script src="../JS_Asteroids/DimensionesVentana.js"></script>
        <script src="../JS_Asteroids/animaciones.js"></script>
        <script src="../JS_Asteroids/texto.js"></script>
        <script src="../JS_Asteroids/Hud.js"></script>
        <script src="../JS_Asteroids/Rectangulo.js"></script>
        <script src="../JS_Asteroids/objetos1vs1/disparos.js"></script>
        <script src="../JS_Asteroids/Teclado.js"></script>
        <script src="../JS_Asteroids/explosion.js"></script>
        <script src="../JS_Asteroids/bomba.js"></script>
        <script src="../JS_Asteroids/vector2D.js"></script>
        <script src="../JS_Asteroids/1vs1juego.js"></script>
        <script src="../JS_Asteroids/objetos1vs1/nave.js"></script>
        <script src="../JS_Asteroids/Mejoras.js"></script>
        <script src="../JS_Asteroids/meteorito.js"></script>
        <script src="../JS_Asteroids/buble.js"></script>
        <script src="../JS_Asteroids/pullMejoras.js"></script>
        <script src="../JS_Asteroids/efectos.js"></script>
    <?php } ?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.dev.js"></script>
    <script>
        var socket = io('http://192.168.33.75:2525');
        var id_user = "<?= $_SESSION['user_id']?>";
    </script>
</body>
</html>