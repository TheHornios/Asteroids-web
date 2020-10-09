<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    include("../Funciones_PHP/Sql_Funtion.php");
    if(!isset($_SESSION['user_id'])){
        print '<meta http-equiv="refresh" content="0;url=index.php?">';
    }else{
        require '../Funciones_PHP/obternSrcImgUsu.php';
    }
    $usu = $_SESSION['user_id'];
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="../estilos.css">
        <script src="../jquery-3.4.1.min.js"></script>
        <link rel="icon" type="image/png" href="../img/menu/monedas.png" />
        <title>Logros Asteroids</title>
    </head>
    <body class="logros">
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
                            <h1>Ajustes</h1>
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
            <div id='bodySettings'>
                <div class='tipo'>
                    <h2>Teclado</h2>
                    <div class='opcion'>
                        <span>Girar derecha</span>
                        <input type='text' class='teclado' id='derecha' placeholder='<?= obtenerTecla($conexion,$usu,"derecha") ?>' maxlength="1"//>
                    </div>
                    <div class='opcion'>
                        <span>Girar izquierda</span>
                        <input type='text' class='teclado' id='izquierda' placeholder='<?= obtenerTecla($conexion,$usu,"izquierda") ?>' maxlength="1"//>
                    </div>
                    <div class='opcion'>
                        <span>Moverse</span>
                        <input type='text' class='teclado' id='moverse' placeholder='<?= obtenerTecla($conexion,$usu,"moverse") ?>' maxlength="1"//>
                    </div>
                    <div class='opcion'>
                        <span>Disparar</span>
                        <input type='text' class='teclado' id='disparar' placeholder='<?= obtenerTecla($conexion,$usu,"disparar") ?>' maxlength="1"//>
                    </div>
                    <div class='opcion'>
                        <span>Bomabas</span>
                        <input type='text' class='teclado' id='bombas' placeholder='<?= obtenerTecla($conexion,$usu,"bombas") ?>' maxlength="1"//>
                    </div>
                    <div class='opcion'>
                        <span>Pausa</span>
                        <input type='text'class='teclado' id='pausa' placeholder='<?= obtenerTecla($conexion,$usu,"pausa") ?>' maxlength="1"/>
                    </div>
                </div>
                <div class='tipo'>
                    <h2>Volumen</h2>
                </div>
            </div>
        </div>
        <canvas id="MyCanvas"></canvas>
        <script>
            $(inicio)
            function crearAjax(url,funct,paramt){
                var xhr  = new XMLHttpRequest();
                xhr.open("POST",url,true);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(paramt);
                xhr.onreadystatechange = function(){
                    if(this.readyState == 4  && this.status == 200){
                        funct(this.responseText);
                    }
                }
            }
            function inicio(){
                $('.teclado').focus(function(e){
                    e.target.placeholder = "";
                })
                $('.teclado').keydown(function(e){
                    $('.teclado').each(function(){
                        if($(this).attr('placeholder') == e.key){
                            this.placeholder = '';
                        }
                    });
                    if(e.key != ' '){
                        e.target.value = '';
                        e.target.placeholder = e.key;
                        e.target.blur();
                        crearAjax('../Ajax_PHP/cambiarTeclas.php',function(){},'tecla='+e.key+"&mov="+e.target.id);
                    }else{
                        e.target.value = 'Space';
                        e.target.placeholder = 'Space';
                        e.target.blur();
                        crearAjax('../Ajax_PHP/cambiarTeclas.php',function(){},'tecla='+'Space'+"&mov="+e.target.id);
                    }
                }); 
                    document.getElementById("head").addEventListener("click", function () {
                    location.assign("index.php");
                });
            }
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
    <script src="../JS_Asteroids/Cronometro.js"></script>
    <script src="../JS_Asteroids/meteorito.js"></script>
    <script src="../JS_Asteroids/Rectangulo.js"></script>
    <script src="../JS_Asteroids/BucleMenu.js"></script>
        <script src="../JS_Asteroids/efectos.js"></script>
    </body>
</html>