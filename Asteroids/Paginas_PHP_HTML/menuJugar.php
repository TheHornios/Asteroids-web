<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="../estilos_menu_jugar.css">
    <title>Menu Jugar Asteroids</title>
    <script src="../jquery-3.4.1.min.js"></script>
    <link rel="icon" type="image/png" href="../img/menu/monedas.png" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</head>
<body>
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
                        <h1>Partidas</h1>
                    </div>
                </div>
                <div class="col">
                    <div class="Inicio_Sesion">
                        <?php 
                            if(isset($_SESSION['user_id'])){ 
                            require '../Funciones_PHP/obternSrcImgUsu.php';
                        ?>
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
            <div class="Solo">
                <h1>Solo</h1>
                <div class='amuneta'>
                    <div id="clasico" class='boton'>
                        <img src="../img/menu/clasic.PNG" alt="Img de clasic" class="video">
                        <div id='titulo'>Clasico</div>
                    </div>
                </div>
            </div>
                <div class="Multijugador">
                    <h1>Multijugador</h1>
                    <?php if(isset($_SESSION['user_id'])){ ?>
                        <div class='amuneta'>
                            <div id="1vs1" class='boton'>
                                <img src="../img/menu/clasic.PNG" alt="Img de clasic" class="video">
                                <div id='titulo'>1 vs 1</div>
                            </div>
                        </div>
                    <?php }else{ ?>
                        <div class='amuneta'>
                            <div id="1vs1" class='btnBlokeadoInicioSesion'>
                                <img src="../img/menu/clasic.PNG" alt="Img de clasic" class="video">
                                <div id='titulo'>1 vs 1</div>
                            </div>
                        </div>
                    <?php } ?>   
                </div>
        </div>
    </div>
    <canvas id="MyCanvas"></canvas>
    <script>
         function crearElemento(texto){
            return document.createElement(texto);
        }
        function mensajePopUp(texto,color){
            if(document.querySelector('#popUp')==null){
                var h5 = document.createElement('h5');
                h5.textContent = texto;
                h5.id = "popUp";
                document.body.appendChild(h5);
                $("#popUp").css('background',color);
                setTimeout(() => {
                    document.querySelector('#popUp').remove();
                }, 1000);
            }
        }
        document.getElementById("clasico").addEventListener("click", function () {
            location.assign("juego.php")
        });
        <?php if(isset($_SESSION['user_id'])){ ?>
            document.getElementById("1vs1").addEventListener("click", function () {
                    location.assign("sala1vs1.php")
            });
        <?php }else{ ?>
            document.getElementById("1vs1").addEventListener("click", function () {
                mensajePopUp('Inicia Sesion','red');
            });
        <?php } ?>
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
    <script src="../JS_Asteroids/Cronometro.js"></script>
    <script src="../JS_Asteroids/Rectangulo.js"></script>
    <script src="../JS_Asteroids/hud_vida.js"></script>
    <script src="../JS_Asteroids/efectos.js"></script>
    <script src="../JS_Asteroids/BucleMenu.js"></script>
    
    </script>
</body>
</html>