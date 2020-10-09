<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    include("../Funciones_PHP/Sql_Funtion.php");
    if(!isset($_SESSION['user_id'])){
        print '<meta http-equiv="refresh" content="0;url=index.php?">';
    }else{
        require '../Funciones_PHP/obternSrcImgUsu.php';
    }
    require '../Funciones_PHP/Funcioneslogros.php';
    $partidasJugadas = consultaNumeroPartidasUsu($conexion,$_SESSION['user_id']);
    $maximaPuntuacion = maximaPuntuacion($conexion,$_SESSION['user_id']);
    $usu = $_SESSION['user_id'];
        function getMonedas($conexion,$usu){
            $query1 = mysqli_query($conexion,"SELECT * from user where usuario='$usu'");
            if ($r1 = mysqli_fetch_array($query1)) {
                return  $r1['monedas'];
            }
        }
       
  
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="../bootstrap.min.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="../estilos.css">
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
                            <h1>Logros</h1>
                        </div>
                    </div>
                    <div class="col">
                        <div class="Inicio_Sesion">
                            <?php if(isset($_SESSION['user_id'])){ ?>
                                <h2 class='Usuario'><?=$_SESSION['user_id']?></h2>
                                <div class='itemMenuMonedas'>  <span class="textoMenuItem"><?=getMonedas($conexion,$usu)?></span><img src='../img/menu/monedas.png'></div>
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
        </div>
        <div class='contenidoLogros'>
            <div class='unLogro' id='part1'>
                <img id='imgLogo' src='../img/logros/1game.jpg'/>
                <div id='textoLogros'>
                    <h2>Nooooob palyer</h2>
                    <p>Juega una partida en modo clasico</p>
                    <progress value="<?= $partidasJugadas ?>" max="1"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>100</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Conseguido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'part1',1,$partidasJugadas)?>">Reclamar Recompensa</h1>
            </div>
            <div class='unLogro' id='part2'>
                <img id='imgLogo' src='../img/logros/10game.jpg'/>
                <div id='textoLogros'>
                    <h2>Bronce player</h2>
                    <p>Juega 10 partida en modo clasico</p>
                    <progress value="<?= $partidasJugadas ?>" max="10"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>150</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Obtenido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'part2',10,$partidasJugadas)?>">Reclamar Recompensa</h1>
            </div>
            <div class='unLogro' id='part3'>
                <img id='imgLogo' src='../img/logros/50game.jpg'/>
                <div id='textoLogros'>
                    <h2>Platita player</h2>
                    <p>Juega 50 partida en modo clasico</p>
                    <progress value="<?= $partidasJugadas ?>" max="50"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>200</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Obtenido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'part3',50,$partidasJugadas)?>" >Reclamar Recompensa</h1>
            </div>
            <div class='unLogro' id='part4'>
                <img id='imgLogo' src='../img/logros/100game.jpg'/>
                <div id='textoLogros'>
                    <h2>Elite player</h2>
                    <p>Juega 100 partida en modo clasico</p>
                    <progress value="<?= $partidasJugadas ?>" max="100"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>500</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Obtenido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'part4',100,$partidasJugadas)?>" >Reclamar Recompensa</h1>
            </div>
            <div class='unLogro' id='part5'>
                <img id='imgLogo' src='../img/logros/1000game.jpg'/>
                <div id='textoLogros'>
                    <h2>Pro player</h2>
                    <p>Juega 1000 partida en modo clasico</p>
                    <progress value="<?= $partidasJugadas ?>" max="1000"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>1000</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Obtenido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'part5',1000,$partidasJugadas)?>" >Reclamar Recompensa</h1>
            </div>
            <div class='unLogro' id='pts1'>
                <img id='imgLogo' src='../img/logros/1000pts.jpg'/>
                <div id='textoLogros'>
                    <h2>1.000 pts</h2>
                    <p>Consigue 1.000pts en una partida</p>
                    <progress value="<?= $maximaPuntuacion ?>" max="1000"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>100</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Obtenido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'pts1',1000,$maximaPuntuacion)?>" >Reclamar Recompensa</h1>
            </div>
            <div class='unLogro' id='pts2'>
                <img id='imgLogo' src='../img/logros/10000pts.jpg'/>
                <div id='textoLogros'>
                    <h2>10.000 pts</h2>
                    <p>Consigue 10.000pts en una partida</p>
                    <progress value="<?= $maximaPuntuacion ?>" max="10000"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>150</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Obtenido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'pts2',10000,$maximaPuntuacion)?>" >Reclamar Recompensa</h1>
            </div>
            <div class='unLogro' id='pts3'>
                <img id='imgLogo' src='../img/logros/100000pts.jpg'/>
                <div id='textoLogros'>
                    <h2>100.000 pts</h2>
                    <p>Consigue 100.000pts en una partida</p>
                    <progress value="<?= $maximaPuntuacion ?>" max="100000"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>500</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Obtenido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'pts3',100000,$maximaPuntuacion)?>" >Reclamar Recompensa</h1>
            </div>
            <div class='unLogro' id='pts4'>
                <img id='imgLogo' src='../img/logros/1000000pts.jpg'/>
                <div id='textoLogros'>
                    <h2>1.000.000 pts</h2>
                    <p>Consigue 1.000.000pts en una partida</p>
                    <progress value="<?= $maximaPuntuacion ?>" max="1000000"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>1000</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Obtenido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'pts4',1000000,$maximaPuntuacion)?>" >Reclamar Recompensa</h1>
            </div>
            <div class='unLogro' id='pts5'>
                <img id='imgLogo' src='../img/logros/2000000pts.jpg'/>
                <div id='textoLogros'>
                    <h2>2.000.000 pts</h2>
                    <p>Consigue 2.000.000pts en una partida</p>
                    <progress value="<?= $maximaPuntuacion ?>" max="2000000"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>1000</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Obtenido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'pts5',2000000,$maximaPuntuacion)?>" >Reclamar Recompensa</h1>
            </div>
            <div class='unLogro' id='pts6'>
                <img id='imgLogo' src='../img/logros/3000000pts.jpg'/>
                <div id='textoLogros'>
                    <h2>3.000.000 pts</h2>
                    <p>Consigue 3.000.000pts en una partida</p>
                    <progress value="<?= $maximaPuntuacion ?>" max="3000000"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>1000</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Obtenido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'pts6',3000000,$maximaPuntuacion)?>" >Reclamar Recompensa</h1>
            </div>
            <div class='unLogro' id='pts7'>
                <img id='imgLogo' src='../img/logros/4000000pts.jpg'/>
                <div id='textoLogros'>
                    <h2>4.000.000 pts</h2>
                    <p>Consigue 4.000.000pts en una partida</p>
                    <progress value="<?= $maximaPuntuacion ?>" max="4000000"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>1000</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Obtenido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'pts7',4000000,$maximaPuntuacion)?>" >Reclamar Recompensa</h1>
            </div>
            <div class='unLogro' id='pts8'>
                <img id='imgLogo' src='../img/logros/5000000pts.jpg'/>
                <div id='textoLogros'>
                    <h2>5.000.000 pts</h2>
                    <p>Consigue 5.000.000pts en una partida</p>
                    <progress value="<?= $maximaPuntuacion ?>" max="5000000"></progress>
                </div>
                <div id='monedasLogros'>
                    <p>1000</p>
                    <img src='../img/menu/monedas.png'/>
                </div>
                <div id='fechaLogros'>
                    <p>Obtenido el:</p>
                </div>
                <h1 class="<?= compobarCantidadPartidas($conexion,$usu,'pts8',5000000,$maximaPuntuacion)?>" >Reclamar Recompensa</h1>
            </div>
        </div>
        
        <canvas id="MyCanvas"></canvas>
        <script>
            document.addEventListener('DOMContentLoaded',function(){
                query('.esta').forEach(element =>{
                    element.style.display = 'none';
                    element.parentNode.style.background = '#007EAE';
                    element.parentNode.querySelectorAll('progress')[0].style.display = 'none';
                    crearAjax('../Ajax_PHP/obtenerFechalogros.php?mision='+element.parentNode.id,function(e){
                        element.parentNode.querySelectorAll('#fechaLogros')[0].firstElementChild.innerHTML = 'Obtenido el:'+e;
                    });
                    element.parentNode.style.cursor = 'initial'
                    element.removeEventListener('click',clickLogro);
                });
            });
            document.getElementById("head").addEventListener("click", function () {
                location.assign("index.php");
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
        function query(css){
            return document.querySelectorAll(css);
        }
        query('h1.si').forEach(element =>{
            element.style.display = 'block';
            element.parentNode.style.cursor = 'pointer'
            element.addEventListener('click',clickLogro);
        });
        function clickLogro(e) {
            crearAjax('../Ajax_PHP/añadirLogroBD.php?cual='+e.target.parentNode.id,function(e){
                query('.textoMenuItem')[0].innerHTML = parseFloat(query('.textoMenuItem')[0].innerHTML)+parseFloat(e);
            });
            for(let i = 0;i<15;i++){
                var span = document.createElement('span');
                var img = document.createElement('img');
                img.src = '../img/menu/monedas.png';
                span.appendChild(img);
                span.id='monedas';
                span.style.top = Math.random()* ( window.innerHeight  - 0) + 0+"px";
                span.style.left =  Math.random()* ( (window.innerWidth) - 0) + 0+"px";
                span.style.opacity = 1;
                query('body')[0].appendChild(span);
                timeOutMonedas(50,span,e.target);
            }  
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
        function timeOutMonedas(numero,elemento,padre) {
            function timeOutDentro(num,ele,padre) {
                return function name() {
                    if(num!=0){
                        ele.style.top = parseFloat(ele.style.top.substring(0,ele.style.top.length-2))-20+'px';
                        ele.style.opacity =  ele.style.opacity-0.02;
                        let nuevo = num-1
                        if(num==45){
                            padre.style.display = 'none';
                            padre.parentNode.style.background = '#007EAE';
                            padre.parentNode.querySelectorAll('progress')[0].style.display = 'none';
                            let fecha = new Date();
                            padre.parentNode.querySelectorAll('#fechaLogros')[0].firstElementChild.innerHTML = 'Obtenido el:'+fecha.getDate()+"/"+((fecha.getMonth()+1)<10?"0"+(fecha.getMonth()+1):fecha.getMonth()+1)+"/"+fecha.getFullYear();
                            padre.parentNode.style.cursor = 'initial'
                            padre.removeEventListener('click',clickLogro);
                        }
                        timeOutMonedas(nuevo,ele,padre);
                    }else{
                        ele.remove();
                    }
                }
            }
            setTimeout(timeOutDentro(numero,elemento,padre), 0.1);
        }
        </script>
    <script src="../JS_Asteroids/Menu.js"></script>
    <script src="../JS_Asteroids/DimensionesVentana.js"></script>
    <script src="../JS_Asteroids/vector2D.js"></script>
    <script src="../JS_Asteroids/constantes.js"></script>
    <script src="../JS_Asteroids/meteorito.js"></script>
    <script src="../JS_Asteroids/Rectangulo.js"></script>
    <script src="../JS_Asteroids/Cronometro.js"></script>
    <script src="../JS_Asteroids/BucleMenu.js"></script>
    <script src="../JS_Asteroids/efectos.js"></script>
    </body>
</html>