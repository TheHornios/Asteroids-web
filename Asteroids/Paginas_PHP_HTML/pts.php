<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    if(isset($_SESSION['user_id'])){
        require '../Funciones_PHP/obternSrcImgUsu.php';
    }else{
        print '<meta http-equiv="refresh" content="0;url=index.php?">';
    }
    
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="../estilos.css">
        <link rel="icon" type="image/png" href="../img/menu/monedas.png" />

        <title>Puntuaciones Asteroids</title>
    </head>   
    <body class="pts">
        <div class="formalrioPartidas">
            <form action='' method='post' name="formulario1">
                <input type='text' name='dato' id="dato" value="top10">
            <form>
        </div>
    <div class="container-fluid">
            <div class="cabecera">
                <div class="row align-items-start">
                    <div class="col">
                        <div class="Head_PTS">
                            <h1 id="head"><span>Asteroids</span></h1>
                        </div>
                    </div>
                    <div class="col">
                        <div class="Head_PTS_Puntuaciones">
                            <h1>Puntuaciones</h1>
                        </div>
                    </div>
                    <div class="col">
                        <div class="Inicio_Sesion">
                            <?php if(isset($_SESSION['user_id'])){ ?>
                                <h2 class='Usuario'><?=$_SESSION['user_id']?></h2>
                                <img class='logo' src='../img/iconos/icono_cara_sonrriente.png' />
                                <script>
                                    function query(css){
                                        return document.querySelectorAll(css);
                                    }
                                    e = '<?=$srcImagenUsu?>'
                                    if(e == -1){
                                        query('.logo')[0].src = '../img/iconos/icono_cara_sonrriente.png';
                                    }else{
                                        query('.logo')[0].src = '../img/imagenesUsuarios/'+e;
                                    }
                                </script>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cuepo">
                <div class="row mt-5">
                    <div class="col-md-7 ml-5 ">
                        <div class="table-wrapper" id="divConTabala">
                            <table class="fl-table">
                                <thead><tr><th id="primerTh">Posicion</th><th>Usuario</th><th>Puntos</th><th>Duracion</th><th>Fecha</th></tr></thead>
                                <tbody>
                                <?php
                                    include("../Funciones_PHP/Sql_Funtion.php");
                                    if(isset($_REQUEST['dato'])){
                                        $dato_form = $_REQUEST['dato'];
                                        if($dato_form=='top10'){
                                            echo consulatTop($conexion,10);
                                            
                                        }else{
                                            if($dato_form=='top50'){
                                                echo consulatTop($conexion,50);
                                            }else{
                                                if($dato_form=='top100'){
                                                    echo consulatTop($conexion,100);
                                                }else{
                                                    echo consultaMisPts($conexion,$_SESSION['user_id']);
                                                }
                                            }
                                        }
                                    }else{
                                        echo consulatTop($conexion,10);
                                    }
                                    
                                ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-4 ml-5 ">
                        <ul class="menuBotones_Pts">
                            <li><span id="top10">TOP 10</span></li>
                            <li><span id="top50">TOP 50</span></li>
                            <li><span id="top100">TOP 100</span></li>
                            <li><span id="MisPts">Mis Puntuaciones</span></li>
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
        <canvas id="MyCanvas"></canvas>
        <script>
            document.getElementById("divConTabala").style.height = window.innerHeight-230+"px";
            document.getElementById("divConTabala").style.maxHeight = window.innerHeight-230+"px";
            window.addEventListener("resize",function(e){
                document.getElementById("divConTabala").style.height = window.innerHeight-230+"px";
                document.getElementById("divConTabala").style.maxHeight = window.innerHeight-230+"px";
            });
            /* Botones Para las puntuaciones */
            document.getElementById("top10").addEventListener("click", function () {
                document.getElementById("dato").value = "top10";
                document.formulario1.submit()
            });
            document.getElementById("top50").addEventListener("click", function () {
                document.getElementById("dato").value = "top50";
                document.formulario1.submit()
            });
            document.getElementById("top100").addEventListener("click", function () {
                document.getElementById("dato").value = "top100";
                document.formulario1.submit()
            });
            document.getElementById("MisPts").addEventListener("click", function () {
                document.getElementById("dato").value = "MisPts";
                document.formulario1.submit()
            });
            document.getElementById("head").addEventListener("click", function () {
                location.assign("index.php")
            });
            
            class ObjImg{
            constructor(){
                this.arr_img_nave0 = new Array('../img/nave/skins/nave0_0.png','../img/nave/skins/nave1_0.png','../img/nave/skins/nave2_0.png','../img/nave/skins/nave3_0.png','../img/nave/skins/nave4_0.png','../img/nave/skins/nave5_0.png','../img/nave/skins/nave6_0.png','../img/nave/skins/nave7_0.png');
                this.arr_img_nave1 = new Array('../img/nave/skins/nave0_1.png','../img/nave/skins/nave1_1.png','../img/nave/skins/nave2_1.png','../img/nave/skins/nave3_1.png','../img/nave/skins/nave4_1.png','../img/nave/skins/nave5_1.png','../img/nave/skins/nave6_0.png','../img/nave/skins/nave7_0.png');
                this.img_nave_0 =  this.arr_img_nave0[0];
                this.img_nave_1 =  this.arr_img_nave1[0];

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
                <?php if(isset($_SESSION['user_id'])){ ?>
                    this.img_nave_0 =  this.arr_img_nave0[<?= getSkinNave($conexion,$_SESSION['user_id'])?>];
                    this.mg_nave_1 =  this.arr_img_nave1[<?= getSkinNave($conexion,$_SESSION['user_id'])?>];
                    this.img_ast =  this.arr_img_ast[<?= getSkinAsteroid($conexion,$_SESSION['user_id'])?>]
                <?php } ?>  
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
        </script>
    <script src="../JS_Asteroids/Menu.js"></script>
    <script src="../JS_Asteroids/DimensionesVentana.js"></script>
    <script src="../JS_Asteroids/vector2D.js"></script>
    <script src="../JS_Asteroids/constantes.js"></script>
    <script src="../JS_Asteroids/meteorito.js"></script>
    <script src="../JS_Asteroids/Rectangulo.js"></script>
    <script src="../JS_Asteroids/Cronometro.js"></script>
    <script src="../JS_Asteroids/efectos.js"></script>
    <script src="../JS_Asteroids/BucleMenu.js"></script>
    </body>
</html>