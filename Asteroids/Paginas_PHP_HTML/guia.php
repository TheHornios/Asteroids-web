<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    include("../Funciones_PHP/Sql_Funtion.php");
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
    <link rel="icon" type="image/png" href="../img/menu/monedas.png" />
    <title>Manual Asteroids</title>
</head>
<body class="guia">
    <div class="container-fluid">
        <div class="cabecera">
            <div class="row align-items-start">
                <div class="col">
                    <div class="Head_PTS">
                        <h1 id="head"><span>Asteroids</span></h1>
                    </div>
                </div>
                <div class="col">
                    <h1>Manual</h1>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
        <div class="cuepo">
            <div class="row mt-5">
                <div class="col-md-5 mr-5" id="Guia">
                    <div class="borde">
                    <h2 class="cabecera">Guia</h2> 
                    <div class="row" id="texto">
                    
                        <h3>Objetos</h3>
                        
                    </div>
                    <div class="row" id="texto">        
                        <ul>
                            <li id="remarcar">
                                <span class="amarillo">Skins</span>
                                <div class="imagenes"><img width="20" height="20" src="../img/asteroides/skins/small/ast0_0.png"/><img width="20" height="20" src="../img/asteroides/skins/small/ast4_0.png"/><img width="20" height="20" src="../img/asteroides/skins/small/ast5_0.png"/><img width="20" height="20" src="../img/asteroides/skins/small/ast6_0.png"/><img width="20" height="20" src="../img/asteroides/skins/small/ast7_0.png"/><img width="20" height="20" src="../img/asteroides/skins/small/ast8_0.png"/><img width="20" height="20" src="../img/asteroides/skins/small/ast9_0.png"/></div>
                            </li>
                            <li>
                                1 Vida 
                                <div class="imagenes"><img src="../img/mejoras/0/1up.png"/><img src="../img/mejoras/4/1up.png"/><img src="../img/mejoras/5/1up.png"/><img src="../img/mejoras/6/1up.png"/><img src="../img/mejoras/7/1up.png"/><img src="../img/mejoras/8/1up.png"/><img src="../img/mejoras/9/1up.png"/></div>
                                <div id="sublista">Hooooo una vida mas, no te va a durar ni 10 segundos</div>
                            </li>
                            <li>
                                 1000 Puntos
                                 <div class="imagenes"><img src="../img/mejoras/0/1000pts.png"/><img src="../img/mejoras/4/1000pts.png"/><img src="../img/mejoras/5/1000pts.png"/><img src="../img/mejoras/6/1000pts.png"/><img src="../img/mejoras/7/1000pts.png"/><img src="../img/mejoras/8/1000pts.png"/><img src="../img/mejoras/9/1000pts.png"/></div>
                                    <div id="sublista">Te damos mas puntos gratis disfrutalos</div>
                            </li>
                            <li>
                                BooooM
                                <div class="imagenes"><img src="../img/mejoras/0/boom.png"/><img src="../img/mejoras/4/boom.png"/><img src="../img/mejoras/5/boom.png"/><img src="../img/mejoras/6/boom.png"/><img src="../img/mejoras/7/boom.png"/><img src="../img/mejoras/8/boom.png"/><img src="../img/mejoras/9/boom.png"/></div>
                                    <div id="sublista">Se genera una explosion en el mapa y rompe todos los asteroides de una ronda</div>
                            </li>
                            <li>
                                Dislexia
                                <div class="imagenes"><img src="../img/mejoras/0/dislexia.png"/><img src="../img/mejoras/4/dislexia.png"/><img src="../img/mejoras/5/dislexia.png"/><img src="../img/mejoras/6/dislexia.png"/><img src="../img/mejoras/7/dislexia.png"/><img src="../img/mejoras/8/dislexia.png"/><img src="../img/mejoras/9/dislexia.png"/></div>
                                    <div id="sublista">Te ataca la dislexia y te confundes al pulsar las teclas</div>
                            </li>
                            <li>
                                Diarrea
                                <div class="imagenes"><img src="../img/mejoras/0/disparoDetras.png"/><img src="../img/mejoras/4/disparoDetras.png"/><img src="../img/mejoras/5/disparoDetras.png"/><img src="../img/mejoras/6/disparoDetras.png"/><img src="../img/mejoras/7/disparoDetras.png"/><img src="../img/mejoras/8/disparoDetras.png"/><img src="../img/mejoras/9/disparoDetras.png"/></div>
                                    <div id="sublista">Tu nave se encuentra mal y ahora dispara tambien por detras</div>
                            </li>
                            <li>
                                Mas Velocidad
                                <div class="imagenes"><img src="../img/mejoras/0/masVelocidad.png"/><img src="../img/mejoras/4/masVelocidad.png"/><img src="../img/mejoras/5/masVelocidad.png"/><img src="../img/mejoras/6/masVelocidad.png"/><img src="../img/mejoras/7/masVelocidad.png"/><img src="../img/mejoras/8/masVelocidad.png"/><img src="../img/mejoras/9/masVelocidad.png"/></div>
                                    <div id="sublista">Waw tu velocidad aumenta</div>
                            </li>
                            <li>
                                Menos Velocidad
                                <div class="imagenes"><img src="../img/mejoras/0/menosVelocidad.png"/><img src="../img/mejoras/4/menosVelocidad.png"/><img src="../img/mejoras/5/menosVelocidad.png"/><img src="../img/mejoras/6/menosVelocidad.png"/><img src="../img/mejoras/7/menosVelocidad.png"/><img src="../img/mejoras/8/menosVelocidad.png"/><img src="../img/mejoras/9/menosVelocidad.png"/></div>

                                    <div id="sublista">Tu velocidad disminulle porque tu nave no tiene gasolina</div>

                            </li>
                            <li>
                                Puntos x2
                                <div class="imagenes"><img src="../img/mejoras/0/ptsx2.png"/><img src="../img/mejoras/4/ptsx2.png"/><img src="../img/mejoras/5/ptsx2.png"/><img src="../img/mejoras/6/ptsx2.png"/><img src="../img/mejoras/7/ptsx2.png"/><img src="../img/mejoras/8/ptsx2.png"/><img src="../img/mejoras/9/ptsx2.png"/></div>

                                    <div id="sublista">Tus puntos se dusplican</div>

                            </li>
                            <li>
                                Sicosis
                                <div class="imagenes"><img src="../img/mejoras/0/sicosis.png"/><img src="../img/mejoras/4/sicosis.png"/><img src="../img/mejoras/5/sicosis.png"/><img src="../img/mejoras/6/sicosis.png"/><img src="../img/mejoras/7/sicosis.png"/><img src="../img/mejoras/8/sicosis.png"/><img src="../img/mejoras/9/sicosis.png"/></div>

                                    <div id="sublista">Llega el momento de la confusion tus disparos atraviesan el limite de la pantalla</div>

                            </li>
                            <li>
                                GodHead
                                <div class="imagenes"><img src="../img/mejoras/0/x2.png"/><img src="../img/mejoras/4/x2.png"/><img src="../img/mejoras/5/x2.png"/><img src="../img/mejoras/6/x2.png"/><img src="../img/mejoras/7/x2.png"/><img src="../img/mejoras/8/x2.png"/><img src="../img/mejoras/9/x2.png"/></div>

                                    <div id="sublista">Dios te da el doble de disparos</div>

                            </li>
                            <li>
                                Mas Bombas
                                <div class="imagenes"><img src="../img/mejoras/0/nuevos/bombasMas.png"/><img src="../img/mejoras/4/nuevos/bombasMas.png"/><img src="../img/mejoras/5/nuevos/bombasMas.png"/><img src="../img/mejoras/6/nuevos/bombasMas.png"/><img src="../img/mejoras/7/nuevos/bombasMas.png"/><img src="../img/mejoras/8/nuevos/bombasMas.png"/><img src="../img/mejoras/9/nuevos/bombasMas.png"/></div>

                                    <div id="sublista">Una bomba mas para tu bolsillo</div>

                            </li>
                            <li>
                                Mas Velocidad De Disparo
                                <div class="imagenes"><img src="../img/mejoras/0/nuevos/tiersUp.png"/><img src="../img/mejoras/4/nuevos/tiersUp.png"/><img src="../img/mejoras/5/nuevos/tiersUp.png"/><img src="../img/mejoras/6/nuevos/tiersUp.png"/><img src="../img/mejoras/7/nuevos/tiersUp.png"/><img src="../img/mejoras/8/nuevos/tiersUp.png"/><img src="../img/mejoras/9/nuevos/tiersUp.png"/></div>

                                    <div id="sublista">Tu cadencia de disparo aumenta como tus ganas de salir de fiesta</div>

                            </li>
                            <li>
                                Graviy
                                <div class="imagenes"><img src="../img/mejoras/0/gravity.png"/><img src="../img/mejoras/0/gravity.png"/><img src="../img/mejoras/0/gravity.png"/><img src="../img/mejoras/0/gravity.png"/><img src="../img/mejoras/0/gravity.png"/><img src="../img/mejoras/0/gravity.png"/><img src="../img/mejoras/0/gravity.png"/></div>

                                    <div id="sublista">Los disparos orbitan a tu alrededor</div>

                            </li>
                            <li>
                                Anti Gravity
                                <div class="imagenes"><img src="../img/mejoras/0/antiGravity.png"/><img src="../img/mejoras/0/antiGravity.png"/><img src="../img/mejoras/0/antiGravity.png"/><img src="../img/mejoras/0/antiGravity.png"/><img src="../img/mejoras/0/antiGravity.png"/><img src="../img/mejoras/0/antiGravity.png"/><img src="../img/mejoras/0/antiGravity.png"/></div>

                                    <div id="sublista">Los disparos se quedan parados y se mueven despues de 2s</div>

                            </li>
                            <li>
                                Cemento
                                <div class="imagenes"><img src="../img/mejoras/0/cemento.png"/><img src="../img/mejoras/0/cemento.png"/><img src="../img/mejoras/0/cemento.png"/><img src="../img/mejoras/0/cemento.png"/><img src="../img/mejoras/0/cemento.png"/><img src="../img/mejoras/0/cemento.png"/><img src="../img/mejoras/0/cemento.png"/></div>

                                    <div id="sublista">Los disparos rebotan en las paredes </div>

                            </li>
                            <li>
                                Onion
                                <div class="imagenes"><img src="../img/mejoras/0/dividir4.png"/><img src="../img/mejoras/0/dividir4.png"/><img src="../img/mejoras/0/dividir4.png"/><img src="../img/mejoras/0/dividir4.png"/><img src="../img/mejoras/0/dividir4.png"/><img src="../img/mejoras/0/dividir4.png"/><img src="../img/mejoras/0/dividir4.png"/></div>

                                    <div id="sublista">Los disparos se dividen en 4 al colisionar </div>

                            </li>
                            <li>
                                Judas
                                <div class="imagenes"><img src="../img/mejoras/0/judas.png"/><img src="../img/mejoras/0/judas.png"/><img src="../img/mejoras/0/judas.png"/><img src="../img/mejoras/0/judas.png"/><img src="../img/mejoras/0/judas.png"/><img src="../img/mejoras/0/judas.png"/><img src="../img/mejoras/0/judas.png"/></div>

                                    <div id="sublista">Recibes 30 monedas de plata </div>

                            </li>
                            <li>
                                New Technology
                                <div class="imagenes"><img src="../img/mejoras/0/hud.png"/><img src="../img/mejoras/0/hud.png"/><img src="../img/mejoras/0/hud.png"/><img src="../img/mejoras/0/hud.png"/><img src="../img/mejoras/0/hud.png"/><img src="../img/mejoras/0/hud.png"/><img src="../img/mejoras/0/hud.png"/></div>

                                    <div id="sublista">Los asteroides muestan su vida  </div>

                            </li>
                            <li>
                                Ebo
                                <div class="imagenes"><img src="../img/mejoras/0/ebo.png"/><img src="../img/mejoras/0/ebo.png"/><img src="../img/mejoras/0/ebo.png"/><img src="../img/mejoras/0/ebo.png"/><img src="../img/mejoras/0/ebo.png"/><img src="../img/mejoras/0/ebo.png"/><img src="../img/mejoras/0/ebo.png"/></div>

                                    <div id="sublista">Mas daño mas velodidad disparo</div>

                            </li>
                            <li>
                                Esteroides
                                <div class="imagenes"><img src="../img/mejoras/0/esteroides.png"/><img src="../img/mejoras/0/esteroides.png"/><img src="../img/mejoras/0/esteroides.png"/><img src="../img/mejoras/0/esteroides.png"/><img src="../img/mejoras/0/esteroides.png"/><img src="../img/mejoras/0/esteroides.png"/><img src="../img/mejoras/0/esteroides.png"/></div>

                                    <div id="sublista">Mas daño nenos velocidad disparo</div>

                            </li>
                            <li>
                                Soy Milk
                                <div class="imagenes"><img src="../img/mejoras/0/soy milk.png"/><img src="../img/mejoras/0/soy milk.png"/><img src="../img/mejoras/0/soy milk.png"/><img src="../img/mejoras/0/soy milk.png"/><img src="../img/mejoras/0/soy milk.png"/><img src="../img/mejoras/0/soy milk.png"/><img src="../img/mejoras/0/soy milk.png"/></div>

                                    <div id="sublista">*</div>

                            </li>
                            <li>
                                Estrella
                                <div class="imagenes"><img src="../img/mejoras/0/strella.png"/><img src="../img/mejoras/0/strella.png"/><img src="../img/mejoras/0/strella.png"/><img src="../img/mejoras/0/strella.png"/><img src="../img/mejoras/0/strella.png"/><img src="../img/mejoras/0/strella.png"/><img src="../img/mejoras/0/strella.png"/></div>

                                    <div id="sublista">Estrella del mario bros</div>

                            </li>
                            <li>
                                Icarus
                                <div class="imagenes"><img src="../img/mejoras/0/icarus.png"/><img src="../img/mejoras/0/icarus.png"/><img src="../img/mejoras/0/icarus.png"/><img src="../img/mejoras/0/icarus.png"/><img src="../img/mejoras/0/icarus.png"/><img src="../img/mejoras/0/icarus.png"/><img src="../img/mejoras/0/icarus.png"/></div>

                                    <div id="sublista">Te da velocidad de movimiento y al pasar el tiempo tu velocidad se quema con el sol</div>

                            </li>
                            <li>
                                Pesadilla de Midas
                                <div class="imagenes"><img src="../img/mejoras/0/midas.png"/><img src="../img/mejoras/0/midas.png"/><img src="../img/mejoras/0/midas.png"/><img src="../img/mejoras/0/midas.png"/><img src="../img/mejoras/0/midas.png"/><img src="../img/mejoras/0/midas.png"/><img src="../img/mejoras/0/midas.png"/></div>

                                    <div id="sublista">*</div>

                            </li>
                            <li>
                                Aries
                                <div class="imagenes"><img src="../img/mejoras/0/aries.png"/><img src="../img/mejoras/0/aries.png"/><img src="../img/mejoras/0/aries.png"/><img src="../img/mejoras/0/aries.png"/><img src="../img/mejoras/0/aries.png"/><img src="../img/mejoras/0/aries.png"/><img src="../img/mejoras/0/aries.png"/></div>

                                    <div id="sublista">Mas aceleracion </div>

                            </li>
                            <li>
                                Acuarius
                                <div class="imagenes"><img src="../img/mejoras/0/acuarius.png"/><img src="../img/mejoras/0/acuarius.png"/><img src="../img/mejoras/0/acuarius.png"/><img src="../img/mejoras/0/acuarius.png"/><img src="../img/mejoras/0/acuarius.png"/><img src="../img/mejoras/0/acuarius.png"/><img src="../img/mejoras/0/acuarius.png"/></div>

                                    <div id="sublista">Las vidas se convierten en vidas </div>

                            </li>
                            <li>
                                Cancer
                                <div class="imagenes"><img src="../img/mejoras/0/cancer.png"/><img src="../img/mejoras/0/cancer.png"/><img src="../img/mejoras/0/cancer.png"/><img src="../img/mejoras/0/cancer.png"/><img src="../img/mejoras/0/cancer.png"/><img src="../img/mejoras/0/cancer.png"/><img src="../img/mejoras/0/cancer.png"/></div>

                                    <div id="sublista">Las bombas se conviereten en vidas </div>

                            </li>
                            <li>
                                Capricornio
                                <div class="imagenes"><img src="../img/mejoras/0/capricornio.png"/><img src="../img/mejoras/0/capricornio.png"/><img src="../img/mejoras/0/capricornio.png"/><img src="../img/mejoras/0/capricornio.png"/><img src="../img/mejoras/0/capricornio.png"/><img src="../img/mejoras/0/capricornio.png"/><img src="../img/mejoras/0/capricornio.png"/></div>

                                    <div id="sublista">Mas daño  y mas velocidad de movimiento</div>

                            </li>
                            <li>
                                Gemini
                                <div class="imagenes"><img src="../img/mejoras/0/gemini.png"/><img src="../img/mejoras/0/gemini.png"/><img src="../img/mejoras/0/gemini.png"/><img src="../img/mejoras/0/gemini.png"/><img src="../img/mejoras/0/gemini.png"/><img src="../img/mejoras/0/gemini.png"/><img src="../img/mejoras/0/gemini.png"/></div>

                                    <div id="sublista">Si te quedas quieto te conviertes en piedra </div>

                            </li>
                            <li>
                                Leo
                                <div class="imagenes"><img src="../img/mejoras/0/leo.png"/><img src="../img/mejoras/0/leo.png"/><img src="../img/mejoras/0/leo.png"/><img src="../img/mejoras/0/leo.png"/><img src="../img/mejoras/0/leo.png"/><img src="../img/mejoras/0/leo.png"/><img src="../img/mejoras/0/leo.png"/></div>

                                    <div id="sublista">4 vidas </div>

                            </li>
                            <li>
                                Libra
                                <div class="imagenes"><img src="../img/mejoras/0/libra.png"/><img src="../img/mejoras/0/libra.png"/><img src="../img/mejoras/0/libra.png"/><img src="../img/mejoras/0/libra.png"/><img src="../img/mejoras/0/libra.png"/><img src="../img/mejoras/0/libra.png"/><img src="../img/mejoras/0/libra.png"/></div>

                                    <div id="sublista">*</div>

                            </li>
                            <li>
                                Piscis
                                <div class="imagenes"><img src="../img/mejoras/0/piscis.png"/><img src="../img/mejoras/0/piscis.png"/><img src="../img/mejoras/0/piscis.png"/><img src="../img/mejoras/0/piscis.png"/><img src="../img/mejoras/0/piscis.png"/><img src="../img/mejoras/0/piscis.png"/><img src="../img/mejoras/0/piscis.png"/></div>

                                    <div id="sublista">Menos daño mas cadencia</div>

                            </li>
                            <li>
                                El Rey
                                <div class="imagenes"><img src="../img/mejoras/0/el rey.png"/><img src="../img/mejoras/0/el rey.png"/><img src="../img/mejoras/0/el rey.png"/><img src="../img/mejoras/0/el rey.png"/><img src="../img/mejoras/0/el rey.png"/><img src="../img/mejoras/0/el rey.png"/><img src="../img/mejoras/0/el rey.png"/></div>

                                    <div id="sublista">Cuendo tienes un corazon tienes mas daño y mas cadencia</div>

                            </li>
                            <li>
                                Unicornio
                                <div class="imagenes"><img src="../img/mejoras/0/unicornio.png"/><img src="../img/mejoras/0/unicornio.png"/><img src="../img/mejoras/0/unicornio.png"/><img src="../img/mejoras/0/unicornio.png"/><img src="../img/mejoras/0/unicornio.png"/><img src="../img/mejoras/0/unicornio.png"/><img src="../img/mejoras/0/unicornio.png"/></div>

                                    <div id="sublista">*</div>

                            </li>
                            <li>
                                Metacarga
                                <div class="imagenes"><img src="../img/mejoras/0/metaCarga.png"/><img src="../img/mejoras/0/metaCarga.png"/><img src="../img/mejoras/0/metaCarga.png"/><img src="../img/mejoras/0/metaCarga.png"/><img src="../img/mejoras/0/metaCarga.png"/><img src="../img/mejoras/0/metaCarga.png"/><img src="../img/mejoras/0/metaCarga.png"/></div>

                                    <div id="sublista">Se activa el modo torreta al estar quiero </div>

                            </li>
                            <li>
                                El Ruedas
                                <div class="imagenes"><img src="../img/mejoras/0/rueda.png"/><img src="../img/mejoras/0/rueda.png"/><img src="../img/mejoras/0/rueda.png"/><img src="../img/mejoras/0/rueda.png"/><img src="../img/mejoras/0/rueda.png"/><img src="../img/mejoras/0/rueda.png"/><img src="../img/mejoras/0/rueda.png"/></div>

                                    <div id="sublista">Mas valodidad de movimiento </div>

                            </li>
                            <li>
                                El Perchas
                                <div class="imagenes"><img src="../img/mejoras/0/percha.png"/><img src="../img/mejoras/0/percha.png"/><img src="../img/mejoras/0/percha.png"/><img src="../img/mejoras/0/percha.png"/><img src="../img/mejoras/0/percha.png"/><img src="../img/mejoras/0/percha.png"/><img src="../img/mejoras/0/percha.png"/></div>

                                    <div id="sublista">Mas daño</div>

                            </li>
                            <li>
                                Gordo
                                <div class="imagenes"><img src="../img/mejoras/0/gordo.png"/><img src="../img/mejoras/0/gordo.png"/><img src="../img/mejoras/0/gordo.png"/><img src="../img/mejoras/0/gordo.png"/><img src="../img/mejoras/0/gordo.png"/><img src="../img/mejoras/0/gordo.png"/><img src="../img/mejoras/0/gordo.png"/></div>

                                    <div id="sublista">3 corazones mas lentitud</div>

                            </li>
                            <li>
                                Limbo
                                <div class="imagenes"><img src="../img/mejoras/0/limbo.png"/><img src="../img/mejoras/0/limbo.png"/><img src="../img/mejoras/0/limbo.png"/><img src="../img/mejoras/0/limbo.png"/><img src="../img/mejoras/0/limbo.png"/><img src="../img/mejoras/0/limbo.png"/><img src="../img/mejoras/0/limbo.png"/></div>

                                    <div id="sublista">*</div>

                            </li>
                            <li>
                                Ultra velocity
                                <div class="imagenes"><img src="../img/mejoras/0/velocity.png"/><img src="../img/mejoras/0/velocity.png"/><img src="../img/mejoras/0/velocity.png"/><img src="../img/mejoras/0/velocity.png"/><img src="../img/mejoras/0/velocity.png"/><img src="../img/mejoras/0/velocity.png"/><img src="../img/mejoras/0/velocity.png"/></div>

                                    <div id="sublista">Mas cadencia pero te sobrecalientas y te teletransporta aletoriamente</div>

                            </li>
                            <li>
                                Operacion Molecular
                                <div class="imagenes"><img src="../img/mejoras/0/molecula.png"/><img src="../img/mejoras/0/molecula.png"/><img src="../img/mejoras/0/molecula.png"/><img src="../img/mejoras/0/molecula.png"/><img src="../img/mejoras/0/molecula.png"/><img src="../img/mejoras/0/molecula.png"/><img src="../img/mejoras/0/molecula.png"/></div>

                                    <div id="sublista">Mas daño pero si te toca un asteroide se reinicia la ronda </div>

                            </li>
                            <li>
                                Sonrie es Burgos
                                <div class="imagenes"><img src="../img/mejoras/0/cadenas.png"/><img src="../img/mejoras/0/cadenas.png"/><img src="../img/mejoras/0/cadenas.png"/><img src="../img/mejoras/0/cadenas.png"/><img src="../img/mejoras/0/cadenas.png"/><img src="../img/mejoras/0/cadenas.png"/><img src="../img/mejoras/0/cadenas.png"/></div>

                                    <div id="sublista">Tus disparos tienen efecto de lentitud</div>

                            </li>
                            <li>
                                Veneno
                                <div class="imagenes"><img src="../img/mejoras/0/mataRatas.png"/><img src="../img/mejoras/0/mataRatas.png"/><img src="../img/mejoras/0/mataRatas.png"/><img src="../img/mejoras/0/mataRatas.png"/><img src="../img/mejoras/0/mataRatas.png"/><img src="../img/mejoras/0/mataRatas.png"/><img src="../img/mejoras/0/mataRatas.png"/></div>

                                    <div id="sublista">Tus disparos envenenan</div>

                            </li>
                            <li>
                                Pacto de sangre
                                <div class="imagenes"><img src="../img/mejoras/0/pactoSangre.png"/><img src="../img/mejoras/0/pactoSangre.png"/><img src="../img/mejoras/0/pactoSangre.png"/><img src="../img/mejoras/0/pactoSangre.png"/><img src="../img/mejoras/0/pactoSangre.png"/><img src="../img/mejoras/0/pactoSangre.png"/><img src="../img/mejoras/0/pactoSangre.png"/></div>

                                    <div id="sublista">*</div>

                            </li>
                            <li>
                                boomerang
                                <div class="imagenes"><img src="../img/mejoras/0/bomerang.png"/><img src="../img/mejoras/0/bomerang.png"/><img src="../img/mejoras/0/bomerang.png"/><img src="../img/mejoras/0/bomerang.png"/><img src="../img/mejoras/0/bomerang.png"/><img src="../img/mejoras/0/bomerang.png"/><img src="../img/mejoras/0/bomerang.png"/></div>

                                    <div id="sublista">Tus disparos son un boomerang</div>

                            </li>
                            <li>
                                Gusanitooooo
                                <div class="imagenes"><img src="../img/mejoras/0/gusano.png"/><img src="../img/mejoras/0/gusano.png"/><img src="../img/mejoras/0/gusano.png"/><img src="../img/mejoras/0/gusano.png"/><img src="../img/mejoras/0/gusano.png"/><img src="../img/mejoras/0/gusano.png"/><img src="../img/mejoras/0/gusano.png"/></div>

                                    <div id="sublista">*</div>

                            </li>
                            <li>
                                Daddy   long   leg
                                <div class="imagenes"><img src="../img/mejoras/0/pie.png"/><img src="../img/mejoras/0/pie.png"/><img src="../img/mejoras/0/pie.png"/><img src="../img/mejoras/0/pie.png"/><img src="../img/mejoras/0/pie.png"/><img src="../img/mejoras/0/pie.png"/><img src="../img/mejoras/0/pie.png"/></div>

                                    <div id="sublista">*</div>

                            </li>
                            <li>
                                Minirrallo to chetado
                                <div class="imagenes"><img src="../img/mejoras/0/rayo.png"/><img src="../img/mejoras/0/rayo.png"/><img src="../img/mejoras/0/rayo.png"/><img src="../img/mejoras/0/rayo.png"/><img src="../img/mejoras/0/rayo.png"/><img src="../img/mejoras/0/rayo.png"/><img src="../img/mejoras/0/rayo.png"/></div>

                                    <div id="sublista">*</div>

                            </li>
                        </ul>
                    </div>
                    <div class="row" id="texto">
                        <h3>Skins</h3>
                    </div>
                    <div class="row" id="texto">        
                        <ul>
                            <li id="remarcarCentro">
                                <span class="amarillo">Naves</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="col-md-5" id="Notas">
                    <h2 class="cabecera">Notas del parche</h2> 
                        <div class="row" id="texto">
                            <h3>Version Beta 1.0</h3>
                        </div>
                </div>  
            </div>
        </div> 
    </div>
    <canvas id="MyCanvas"></canvas>
    <script>
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
        <script src="../JS_Asteroids/efectos.js"></script>
    <script src="../JS_Asteroids/vector2D.js"></script>
    <script src="../JS_Asteroids/constantes.js"></script>
    <script src="../JS_Asteroids/Cronometro.js"></script>
    <script src="../JS_Asteroids/meteorito.js"></script>
    <script src="../JS_Asteroids/Rectangulo.js"></script>
    <script src="../JS_Asteroids/BucleMenu.js"></script>
</body>
</html>