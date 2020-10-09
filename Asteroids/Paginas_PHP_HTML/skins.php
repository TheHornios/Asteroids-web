<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    include("../Funciones_PHP/Sql_Funtion.php");
    if(isset($_SESSION['user_id'])){
        require '../Funciones_PHP/obternSrcImgUsu.php';
        if(isset($_REQUEST['anadido'])){
            añadirSkin($conexion,$_SESSION['user_id'],$_REQUEST['nave'],$_REQUEST['asteroid']);
        }
    }else{
        print '<meta http-equiv="refresh" content="0;url=index.php?">';
    }
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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="../estilos.css">
        <link href="https://fonts.googleapis.com/css?family=Turret+Road:300&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Monoton&display=swap" rel="stylesheet">
        <script src="../jquery-3.4.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <link rel="icon" type="image/png" href="../img/menu/monedas.png" />

        <title>Skins Asteroids</title>
    </head>
        <div class="formalrioPartidas">
            <form action='' method='post' name="formulario1">
                <input type='text' name='nave' id="nave" value='<?=getSkinNave($conexion,$_SESSION['user_id'])?>'>
                <input type='text' name='asteroid' id="asteroid" value='<?=getSkinAsteroid($conexion,$_SESSION['user_id'])?>'>
                <input type='text' name='anadido' id="anadido">
            <form>
        </div>
    <body class="skins">
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
                            <h1>Skins</h1>
                        </div>
                    </div>
                    <div class="col">
                        <div class="Inicio_Sesion">
                            <?php if(isset($_SESSION['user_id'])){ ?>
                                <h2 class='Usuario'><?=$_SESSION['user_id']?></h2>
                                <div class='itemMenuMonedas'>  <span id='textoMenuItem_' class="textoMenuItem"><?=getMonedas($conexion,$usu)?></span><img src='../img/menu/monedas.png'></div>
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
                    <div class="col-md-5 mr-5" id="div_nave">
                        <h2 class="cabecera">Nave</h2>
                        <div class="row">
                            <div class="col-md-2" id="item_menu">
                                <div id="item0_nave">
                                    <img src="../img/nave/skins/nave0_0.png">
                                    <?php if(getSkinNave($conexion,$_SESSION['user_id'])== 0){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <div id='comprado'></div>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item1_nave">
                                    <img src="../img/nave/skins/nave1_0.png">
                                    <?php if(getSkinNave($conexion,$_SESSION['user_id'])== 1){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item1_nave')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>100</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item2_nave">
                                    <img src="../img/nave/skins/nave2_0.png">
                                    <?php if(getSkinNave($conexion,$_SESSION['user_id'])== 2){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item2_nave')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>100</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item3_nave">
                                    <img src="../img/nave/skins/nave3_0.png">
                                    <?php if(getSkinNave($conexion,$_SESSION['user_id'])== 3){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item3_nave')){ ?>
                                    <div class='comprarSkinFondo'></div>
                                    <div class='comprarSkin'><span>100</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2" id="item_menu">
                                <div id="item4_nave">
                                    <img src="../img/nave/skins/nave4_0.png">
                                    <?php if(getSkinNave($conexion,$_SESSION['user_id'])== 4){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item4_nave')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>500</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item5_nave">
                                    <img src="../img/nave/skins/nave5_0.png">
                                    <?php if(getSkinNave($conexion,$_SESSION['user_id'])== 5){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item5_nave')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>500</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item6_nave">
                                    <img src="../img/nave/skins/nave6_0.png">
                                    <?php if(getSkinNave($conexion,$_SESSION['user_id'])== 6){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item6_nave')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>500</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item7_nave">
                                    <img src="../img/nave/skins/nave7_0.png">
                                    <?php if(getSkinNave($conexion,$_SESSION['user_id'])== 7){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item7_nave')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>500</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                        </div>
                    </div>  
                    <div class="col-md-5" id="div_asteroides">
                        <h2 class="cabecera">Asteroides</h2> 
                        <div class="row">
                            <div class="col-md-2" id="item_menu">
                                <div id="item0_ast">
                                    <img src="../img/asteroides/skins/small/ast0_1.png">
                                    <?php if(getSkinAsteroid($conexion,$_SESSION['user_id'])== 0){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <div id='comprado'></div>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item1_ast">
                                    <img src="../img/asteroides/skins/small/ast1_0.png">
                                    <?php if(getSkinAsteroid($conexion,$_SESSION['user_id'])== 1){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item1_ast')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>100</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item2_ast">
                                    <img src="../img/asteroides/skins/small/ast2_0.png">
                                    <?php if(getSkinAsteroid($conexion,$_SESSION['user_id'])== 2){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item2_ast')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>100</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item3_ast">
                                    <img src="../img/asteroides/skins/small/ast3_0.png">
                                    <?php if(getSkinAsteroid($conexion,$_SESSION['user_id'])== 3){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item3_ast')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>100</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2" id="item_menu">
                                <div id="item4_ast">
                                    <img src="../img/asteroides/skins/small/ast4_0.png">
                                    <?php if(getSkinAsteroid($conexion,$_SESSION['user_id'])== 4){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item4_ast')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>500</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item5_ast">
                                    <img src="../img/asteroides/skins/small/ast5_0.png">
                                    <?php if(getSkinAsteroid($conexion,$_SESSION['user_id'])== 5){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item5_ast')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>500</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item6_ast">
                                    <img src="../img/asteroides/skins/small/ast6_0.png">
                                    <?php if(getSkinAsteroid($conexion,$_SESSION['user_id'])== 6){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item6_ast')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>1000</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item7_ast">
                                    <img src="../img/asteroides/skins/small/ast7_0.png">
                                    <?php if(getSkinAsteroid($conexion,$_SESSION['user_id'])== 7){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item7_ast')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>1000</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2" id="item_menu">
                                <div id="item8_ast">
                                    <img src="../img/asteroides/skins/small/ast8_0.png">
                                    <?php if(getSkinAsteroid($conexion,$_SESSION['user_id'])== 8){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item8_ast')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>500</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                            <div class="col-md-2" id="item_menu">
                                <div id="item9_ast">
                                    <img src="../img/asteroides/skins/small/ast9_0.png">
                                    <?php if(getSkinAsteroid($conexion,$_SESSION['user_id'])== 9){ ?> <img id="Check" src="../img/check.png"> <?php } ?>
                                </div>
                                <?php if(tienesLaSkin($conexion,$usu,'item9_ast')){ ?>
                                    <div class='comprarSkinFondo' id='sinComprar'></div>
                                    <div class='comprarSkin'><span>1</span><img src='../img/menu/monedas.png'/></div>
                                <?php }else{ ?>
                                    <div id='comprado'></div>
                                <?php } ?>
                            </div>
                        </div> 
                    </div>           
                </div>
            </div>
        </div>
        <canvas id="MyCanvas"></canvas>
        <script>
            /* Funcnion crear ajax */
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
            /* Mensaje */
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
            /* Poner hover y click en las Skins un for para naves y otro para asteroides  */
            for(let i = 0;i<8;i++){
                if(document.getElementById("item"+i+"_nave").nextElementSibling.id=='comprado'){
                    document.getElementById("item"+i+"_nave").addEventListener("click", function () {
                        document.getElementById("nave").value = i;
                        document.getElementById("anadido").value = i;
                        document.formulario1.submit();
                    });
                }else{
                    document.getElementById("item"+i+"_nave").nextElementSibling.addEventListener("click",comprar("item"+i+"_nave"));
                    document.getElementById("item"+i+"_nave").nextElementSibling.nextElementSibling.addEventListener("click",comprar("item"+i+"_nave"));
                    hoverComprar(document.getElementById("item"+i+"_nave"));
                }
            }
            for(let i = 0;i<10;i++){
                if(document.getElementById("item"+i+"_ast").nextElementSibling.id=='comprado'){
                    document.getElementById("item"+i+"_ast").addEventListener("click", function () {
                        document.getElementById("asteroid").value = i;
                        document.getElementById("anadido").value = i;
                        document.formulario1.submit();
                    });
                }else{
                    document.getElementById("item"+i+"_ast").nextElementSibling.addEventListener("click",comprar("item"+i+"_ast"));
                    document.getElementById("item"+i+"_ast").nextElementSibling.nextElementSibling.addEventListener("click",comprar("item"+i+"_ast"));
                    hoverComprar(document.getElementById("item"+i+"_ast"));
                }
            }
            /* hover y blur de comprar Skins */
            function hoverComprar(elemento){
                elemento.nextElementSibling.addEventListener('mouseover',function(){elemento.nextElementSibling.style.background='rgb(97, 96, 96)'; elemento.parentNode.style.border = '1px yellow solid';});
                elemento.nextElementSibling.addEventListener('mouseout',function(){elemento.nextElementSibling.style.background='grey'; elemento.parentNode.style.border = '1px white solid';});
                elemento.nextElementSibling.nextElementSibling.addEventListener('mouseover',function(){elemento.nextElementSibling.style.background='rgb(97, 96, 96)'; elemento.parentNode.style.border = '1px yellow solid';});
                elemento.nextElementSibling.nextElementSibling.addEventListener('mouseout',function(){elemento.nextElementSibling.style.background='grey'; elemento.parentNode.style.border = '1px white solid';});
            }
            /* click comprar Skins */
            function comprar(elemento){
                return function(e){
                    crearAjax('../Ajax_PHP/comprarSkin.php?skin='+elemento,ponerHoverYClickSelecionar(elemento));
                }
            }
            /* Funcnion que pone Hover y click a un elemento comprado */
            function ponerHoverYClickSelecionar(eele){
                return function(e){
                    
                    console.log(eele+" "+e);
                    if(e!='no'){
                    document.getElementById("textoMenuItem_").innerHTML = parseFloat(document.getElementById("textoMenuItem_").innerHTML)-parseFloat(e);
                    document.getElementById(eele).addEventListener("click", function () {
                        if(eele.substring(eele.indexOf("_"),eele.length)=='_nave'){
                            document.getElementById("nave").value = eele.substring(4,eele.indexOf("_"));
                            document.getElementById("anadido").value = eele.substring(4,eele.indexOf("_"));
                        }else{
                            document.getElementById("asteroid").value = eele.substring(4,eele.indexOf("_"));
                            document.getElementById("anadido").value = eele.substring(4,eele.indexOf("_"));
                        }
                        document.formulario1.submit();
                    });
                    document.getElementById(eele).nextElementSibling.remove();
                    document.getElementById(eele).nextElementSibling.remove(); 
                    let id = document.createElement("div");
                    id.id = 'comprado';
                    document.getElementById(eele).parentNode.appendChild(id);
                    hoverMouseIn(document.getElementById(eele));
                    hoverMouseOut(document.getElementById(eele));
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
                        timeOutMonedas(50,span);
                    }  
                    timeOutMonedas(50,span,e.target);
                    }else{
                        mensajePopUp('Faltan Monedas','red');
                    }
                }
            }
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
        function query(css){
            return document.querySelectorAll(css);
        }
        query('#comprado').forEach(ele=>{
            hoverMouseIn(ele);
            hoverMouseOut(ele);
        });
        function hoverMouseIn(ele){
            ele.parentNode.addEventListener('mouseover',anon(ele));
            function anon(ele){
                return function(e){
                    ele.parentNode.style.border = '1px yellow solid';
                    ele.parentNode.style.borderRadius = '35px'
                }
            }
        }
        function hoverMouseOut(ele){
            ele.parentNode.addEventListener('mouseout',anon(ele));
            function anon(ele){
                return function(e){
                    ele.parentNode.style.border = '1px white solid';
                    ele.parentNode.style.borderRadius = '15px';
                }
            }
        }
        function timeOutMonedas(numero,elemento) {
            function timeOutDentro(num,ele) {
                return function name() {
                    if(num!=0){
                        ele.style.top = parseFloat(ele.style.top.substring(0,ele.style.top.length-2))+20+'px';
                        ele.style.opacity =  ele.style.opacity-0.02;
                        let nuevo = num-1
                        timeOutMonedas(nuevo,ele);
                    }else{
                        ele.remove();
                    }
                }
            }
            setTimeout(timeOutDentro(numero,elemento), 0.1);
        }
        </script>
    <script src="../JS_Asteroids/Menu.js"></script>
    <script src="../JS_Asteroids/DimensionesVentana.js"></script>
    <script src="../JS_Asteroids/vector2D.js"></script>
    <script src="../JS_Asteroids/constantes.js"></script>
    <script src="../JS_Asteroids/meteorito.js"></script>
    <script src="../JS_Asteroids/Rectangulo.js"></script>
    <script src="../JS_Asteroids/BucleMenu.js"></script>
    <script src="../JS_Asteroids/efectos.js"></script>
    <script src="../JS_Asteroids/Cronometro.js"></script>
    </body>
</html>