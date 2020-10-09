<?php
    /* Login */
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    $srcImagenUsu = -1;
    if(isset($_REQUEST['enviar'])&&!empty($_REQUEST['usuario'])&&!empty($_REQUEST['contraseña'])){
        $usu = strtoupper($_REQUEST['usuario']);
        $passW = $_REQUEST['contraseña'];
        $query = mysqli_query($conexion,"SELECT * from user where usuario='$usu'");
            if ($r = mysqli_fetch_array($query)) {
                if(password_verify($_REQUEST['contraseña'],$r['contrasena'])){
                    $_SESSION['user_id'] = $r['usuario'];
                    
                    mysqli_free_result($query);
                }
                
            }
        
    }
    if(isset($_SESSION['user_id'])){
        $usu = $_SESSION['user_id'];
        $query1 = mysqli_query($conexion,"SELECT * from user where usuario='$usu'");
            if ($r1 = mysqli_fetch_array($query1)) {
                $_SESSION['monedas'] = $r1['monedas'];
            }
        $query = mysqli_query($conexion,"SELECT * from skins where usu='$usu'");
        if (!$r = mysqli_fetch_array($query)) {
            $sql2 = "INSERT into skins (nave,asteroide,usu) values ('0','0','$usu')";
            mysqli_query($conexion,$sql2); 
        }
        include("../Funciones_PHP/Sql_Funtion.php");
        require '../Funciones_PHP/obternSrcImgUsu.php';
        require '../Funciones_PHP/Funcioneslogros.php';
        crearColumnasAjustesTeclado($conexion,$usu,array('ArrowRight','ArrowLeft','ArrowUp','Space','e','Escape'),array('derecha','izquierda','moverse','disparar','bombas','pausa'));
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
    <script src="../jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="../buzz.min.js"></script>
    <link rel="icon" type="image/png" href="../img/menu/monedas.png" />
    <title>Asteroids by Ronri</title>
</head>

<body id="index">
    
    <div id="alterarMenuBoton">
        <div class="blanco_arr"></div>
        <div class="blanco_bot"></div>
        <div class="borrar_barra"></div>
    </div>

    <div class="filtro" id="filtro"></div>
    <div class="container">
        <div class="row ">
            <div class="textoPrin">
                <h1>ASTEROIDS</h1>
                <p id="text1">Os Quiero &lt;3</p><!--Pre Alpha!! -->
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4">
                <?php 
                if(isset($_SESSION['user_id'])){
                    
            ?>
                <div class='haIniciadoSesion'>
                    <div class='logo' id='divDeLaImganDeLogo'>
                        <span id='spanDeLaImganDeLogo'>
                            <!-- Imagen de el usuario -->
                            <img class='logo' id="logoClick" src='../img/iconos/icono_cara_sonrriente.png' />
                            <script>
                                function query(css){
                                    return document.querySelectorAll(css);
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
                                function ponerImagenUsuario(){
                                    crearAjax('../Ajax_PHP/obtenerImagenUsuario.php',function(e){
                                        if(e == -1){
                                            query('#logoClick')[0].src = '../img/iconos/icono_cara_sonrriente.png';
                                        }else{
                                            query('#logoClick')[0].src = '../img/imagenesUsuarios/'+e;
                                        }
                                    });
                                   
                                }
                                e = '<?=$srcImagenUsu?>'
                                if(e == -1){
                                    query('#logoClick')[0].src = '../img/iconos/icono_cara_sonrriente.png';
                                }else{
                                    query('#logoClick')[0].src = '../img/imagenesUsuarios/'+e;
                                }
                            </script>
                        </span>
                    </diV>
                    <h2 class='Usuario'><?=$_SESSION['user_id']?></h2>

                    <div>
                        <div class='itemMenu'> <img src='../img/menu/monedas.png'> <span class="textoMenuItem">Enanas azules = <?=$_SESSION['monedas']?></span></div>
                        <div class='itemMenu'> <img src='../img/menu/logo.png'> <span class="textoMenuItem">PTS Maxima: <?= consultaMaximaPts($conexion,$_SESSION['user_id'])?></span></div>
                        <div class='itemMenu'> <img src='../img/menu/partidas.png'> <span class="textoMenuItem">Partidas Jugadas:<?= consultaNumeroPartidasUsu($conexion,$_SESSION['user_id'])?></span></div>
                    </div>
                </div>

                <?php }else{ ?>

                <div class='haIniciadoSesion' id='login'>
                    <img class='logo' src='../img/nave/logo.png'>
                    <h2 class='Usuario mt-2'>Inicia Sesion</h2>
                    <form action='' method='post'>
                        <div class="lineaFormulario">
                            
                            <input required type='text' name='usuario' >
                            <label >Usuario</label>
                        </div>

                        <div class="lineaFormulario">
                            
                            <input required type='password' name='contraseña' >
                            <label >Contraseña</label>
                        </div>
                       
                        <div class="lineaFormulario">
                            <input id='imput' type='submit' value='Iniciar' name='enviar'>
                        </div>
                    </form>
                    <div class="lineaFormulario">
                        <a href='#'>Olvidó su contraseña?</a>
                        <a href='#' id='crear'>No tienes cuenta?</a>
                    </div>
                </div>

                <?php
                    }
                ?>
            </div>
            <div class="col-md-5 ml-5" id="menuDesap">
                <ul class="menuBotones">
                    <li><span id="jugarSp">Jugar</span></li>
                    <?php if(isset($_SESSION['user_id'])){ ?>
                        <li><span id="ptsSp">Puntuaciones</span></li>
                        <li><span id="logroSp">Logros</span></li>
                        <li><span id="ajustesSp">Ajustes</span></li>
                        <li><span id="SkinsSp">Skins</span></li>
                    <?php }else{ ?>
                        <li class='blokear_Boton'><span id="ptsSp">Puntuaciones</span></li>
                        <li class='blokear_Boton'><span id="logroSp">Logros</span></li>
                        <li class='blokear_Boton'><span id="ajustesSp">Ajustes</span></li>
                        <li class='blokear_Boton'><span id="SkinsSp">Skins</span></li>
                    <?php } ?>
                    <li><span id="Sman">Manual</span></li>
                </ul>
            </div>
        </div>
    </div>
    <footer>
        <div id="ronri"><span id="ronriSp">Created by @_Ronri</span>
            <span id="versionSp">v1.0</span></div>
    </footer>
    <?php if(isset($_SESSION['user_id'])){ ?>
    <div class="chat_fondo">
    </div>
    <div class="chat">
        <div class="cabecera">
            <div class="tresBarras" id="volver">
                <div class="barr1Cent"></div>
                <div class="barr2Arr"></div>
                <div class="barr3Baj"></div>
            </div>
            <h2>Chat
                <div id="notificacion"></div>
            </h2>
            
            <div class="minimizar" id="min">
                <div class="barr1"></div>
                <div class="barr2"></div>
            </div>
        </div>
        
        <div class="Buscar_Amigos" id="buscar_Chat">
            <span class="amigos_texto">Amigos</span>
            <input id="amigos_add" type='text' name='amigos'>
            <img id="buscar" src="../img/chat/sh1.png">
            <img id="add" src="../img/chat/add1.png">
        </div>
        <div class="cuerpo_chat" id="cuerpo_chat">
        </div>
        </div>
    </div>
    <script>
        var miNimbre = "<?= strtolower($_SESSION['user_id']) ?>";
    </script>
    <script src="../chat/chat.js"></script>
    <?php } ?>
    <canvas id="MyCanvas"></canvas>
            
    <script>
        
        /* Parte que crea el selecionar foto de perfil */
        <?php 
            if(isset($_SESSION['user_id'])){
        ?>
        var estaDentro = false;
        document.addEventListener('DOMContentLoaded',function(){
            document.getElementById("spanDeLaImganDeLogo").addEventListener("click",crearMenuImagenesDrop);
            document.getElementById("spanDeLaImganDeLogo").addEventListener("mouseover",mouseOverCamara);
            
            document.getElementById("spanDeLaImganDeLogo").addEventListener("mouseout",function(){
                $("#logoClick").css('border',"5px solid transparent");
                if(!estaDentro){
                    query("#camara")[0].remove();
                }
            });
        },false);
        var usu = '<?= $_SESSION['user_id']?>';
        <?php 
            }
        ?>
        
        /****************************************************************************************************************************** */
        function mouseOverCamara(){
            $("#logoClick").css('border',"5px solid gray");
            if(query("#camara")[0]==null){
                let img = crearElemento('img');
                img.id = 'camara';
                img.src = '../img/menu/camera.png';
                añadir(query("#spanDeLaImganDeLogo")[0],img);
                document.getElementById("camara").addEventListener("mouseover",()=>{estaDentro = true});
                document.getElementById("camara").addEventListener("mouseout",()=>{estaDentro = false});
            }
        }
        
        function crearElemento(texto){
            return document.createElement(texto);
        }
        function añadir(elemento1,elemento2){
            elemento1.appendChild(elemento2);
        }
         if (document.getElementById("crear") != null) {
            document.getElementById("crear").addEventListener("click", function () {
                var pop
                pop = window.open("registrar.php", "Formulario de Registro", "width= 400, height=500");
                pop.focus();
                pop.moveTo(0, 0);
            });
        }

        document.getElementById("jugarSp").addEventListener("click", function () {
            location.assign("menuJugar.php")
        });
        document.getElementById("Sman").addEventListener("click", function () {
            location.assign("guia.php")
        });
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
        <?php if(isset($_SESSION['user_id'])){ ?>
            document.getElementById("logroSp").addEventListener("click", function () {
                location.assign("logros.php")
            });
            document.getElementById("ptsSp").addEventListener("click", function () {
                location.assign("pts.php")
            });
            document.getElementById("ajustesSp").addEventListener("click", function () {
                location.assign("ajustes.php")
            });
            document.getElementById("SkinsSp").addEventListener("click", function () {
                location.assign("skins.php")
            });

            
        <?php }else{ ?>
            document.querySelectorAll('.blokear_Boton').forEach(e =>{
                e.style.color = 'grey';
            });
            document.getElementById("logroSp").addEventListener("click", function () {
                mensajePopUp('Inicia Sesion','red');
            });
            document.getElementById("ptsSp").addEventListener("click", function () {
                mensajePopUp('Inicia Sesion','red');
            });
            document.getElementById("ajustesSp").addEventListener("click", function () {
                mensajePopUp('Inicia Sesion','red');
            });
            document.getElementById("SkinsSp").addEventListener("click", function () {
                mensajePopUp('Inicia Sesion','red');
            });
            
            //blokear_Boton
        <?php } ?>
        /* Boton Random */
        var abierto_result = false;
        document.getElementById("alterarMenuBoton").addEventListener("click", function () {
            if(abierto_result){
                abierto_result = false;
                $('.filtro').css('opacity','0');
                $('#menuDesap').removeClass('mostrar');
                $('#menuDesap').addClass('ocultar');
                
                $('.blanco_arr').css('transform','rotate(0deg) translateY(0)');
                $('.blanco_bot').css('transform','rotate(0deg) translateY(0)');
                $('.borrar_barra').show();
                setTimeout(() => {
                    $('#menuDesap').css('display','none');
                    $('#filtro').css('display','none');
                }, 250);
            }else{
                $('#filtro').css('display','block');
                abierto_result = true;
                $('.filtro').css('opacity','0.75');
                $('#menuDesap').css('display','block');
                $('#menuDesap').removeClass('ocultar');
                $('#menuDesap').addClass('mostrar');
                $('.blanco_arr').css('transform','rotate(45deg) translateY(14px)');
                $('.blanco_bot').css('transform','rotate(-45deg) translateY(-14px)');
                $('.borrar_barra').hide();
            }
        });
        document.getElementById("filtro").addEventListener("click", function () {
            abierto_result = false;
            $('.filtro').css('opacity','0');
            $('#menuDesap').removeClass('mostrar');
            $('#menuDesap').addClass('ocultar');
            $('.blanco_arr').css('transform','rotate(0deg) translateY(0)');
            $('.blanco_bot').css('transform','rotate(0deg) translateY(0)');
            $('.borrar_barra').show();
            setTimeout(() => {
                $('#menuDesap').css('display','none');
                $('#filtro').css('display','none');
            }, 250);
        });


        
        window.addEventListener("resize",function(e){
            if(window.innerWidth>990){
                $('#menuDesap').css('display','block');
            }else{
                $('#menuDesap').css('display','none');
            }


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
    <script src="../chat/selectorImg.js"></script>
    <script src="../JS_Asteroids/Menu.js"></script>
    <script src="../JS_Asteroids/DimensionesVentana.js"></script>
    <script src="../JS_Asteroids/vector2D.js"></script>
    <script src="../JS_Asteroids/constantes.js"></script>
    <script src="../JS_Asteroids/meteorito.js"></script>
    <script src="../JS_Asteroids/Rectangulo.js"></script>
    <script src="../JS_Asteroids/Cronometro.js"></script>
    <script src="../JS_Asteroids/BucleMenu.js"></script>
    <script src="../JS_Asteroids/hud_vida.js"></script>
    <script src="../JS_Asteroids/efectos.js"></script>
    <script>
        var soundMiusic = new buzz.sound ( "../song/miusic" , {
            formats: [ "ogg" ],
            preload: true,
            volume:50,
        });
        $(()=>{

            //soundMiusic.play().loop();
        })

        var soundBootom = new buzz.sound ( "../song/click" , {
            formats: [ "mp3" ],
            preload: true,
        });
       

        $('.menuBotones li').each(function(){
            $(this).mouseenter(function(){
                soundBootom.play();
            })
        })
            
    </script>
</body>

</html>