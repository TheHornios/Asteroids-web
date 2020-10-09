<?php
    /* Login */

    //i	la variable correspondiente es de tipo entero
    //d	la variable correspondiente es de tipo double
    //s	la variable correspondiente es de tipo string
    //b	la variable correspondiente es un blob y se envía en paquetes
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    $usuario;
    
    if(isset($_REQUEST['enviar'])&&!empty($_REQUEST['usuario'])&&!empty($_REQUEST['contraseña'])){
        $usu = $_REQUEST['usuario'];
        $pass = sha1($_REQUEST['contraseña']);
        $query = "SELECT * from user where usuario='$usu' and contrasena='$pass' ";
        
        if($resultado = mysqli_query($conexion,$query)){
            if (mysqli_num_rows($resultado) > 0) {
                $_SESSION['user_id'] = $usu;
                $usuario = 1;
                mysqli_free_result($resultado);
            }else{
               
            }
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

    <title>Asteroids by Ronri</title>
</head>

<body>
    <canvas id="MyCanvas"></canvas>
    <div class="container">
        <div class="row">
            <div id="logo2">
                <p id="text1">Pre Alpha!!</p>
                <h1>ASTEROIDS</h1>
            </div>
        </div>
        <div class="row">



            <div id="opacidad" class="col-md-3">

                <?php 
                    if(isset($_SESSION['user_id'])){
                        echo "
                            <div class='haIniciadoSesion'>
                                <img class='logo' src='../img/iconos/icono_cara_sonrriente.png'/>
                                <div>
                                    <div class='Usuario'>".$_SESSION['user_id']."</div>
                                    <div class='Monedas'> <img src='../img/menu/monedas.png'> Enanas azules:</div>
                                    <div class='Logros'> <img src='../img/menu/logo.png'>PTS Maxima: </div>
                                    <div class='PartidasJugadas'> <img src='../img/menu/partidas.png'> Partidas Jugadas:</div>
                                </div>
                            </div>
                        ";
                    }else{
                        echo "
                        <div class='login' id='login'>
                            <h3>Inicia Sesion</h3>
                            <img id='logo' src='../img/nave/logo.png'>
                            <form action='' method='post'>
                                <label for='username'>Usuario</label>
                                <input type='text' name='usuario' placeholder='Introduce Usuario'>
                                <label for='password'>Contraseña</label>
                                <input type='password' name='contraseña' placeholder='Introduce Contraseña'>
                                <input id='imput' type='submit' value='Iniciar' name='enviar'>
                            </form>
                            <a href='#'>Olvidó su contraseña?</a>
                            <a href='#' id='crear'>No tienes cuenta?</a>
                        </div>";
                    }
                    ?>
            </div>
            <div class="col-md-1"></div>
            <div id="menu" class="col-md-4">
                <div id="jugar"><span id="jugarSp">Jugar</span> </div>
                <div id="pts"><span id="ptsSp">Puntuaciones</span></div>
                <div id="logro"><span id="logroSp">Logros</span></div>
                <div id="ajustes"><span id="ajustesSp">Ajustes</span></div>
            </div>



        </div>
    </div>
    <footer>
        <div id="ronri"><span id="ronriSp">Created by @_Ronri</span>
            <span id="versionSp">v1.0</span></div>
    </footer>
    <script>
        if (document.getElementById("crear") != null) {
            document.getElementById("crear").addEventListener("click", function () {
                var pop
                pop = window.open("registrar.php", "Formulario de Registro", "width= 400, height=500");
                pop.focus();
                pop.moveTo(0, 0);
            });
        }

        document.getElementById("jugarSp").addEventListener("click", function () {
            location.assign("juego.php")
        });
        document.getElementById("logroSp").addEventListener("click", function () {
            location.assign("logros.php")
        });
        document.getElementById("ptsSp").addEventListener("click", function () {
            location.assign("pts.php")
        });
        document.getElementById("ajustesSp").addEventListener("click", function () {
            location.assign("ajustes.php")
        });
        if (document.getElementById("imput") != null) {
            document.getElementById("imput").addEventListener("mouseover", function () {
                document.getElementById("imput").style.background = "#fff";
            });
            document.getElementById("imput").addEventListener("mouseout", function () {
                document.getElementById("imput").style.background = "yellow";
            });
        }

        function posP() {
            if (window.innerWidth > 1500 && window.innerHeight > 800) {
                document.getElementById("text1").style.position = "";
                document.getElementById("text1").style.top = "";
                document.getElementById("text1").style.left = "";
                document.getElementById("text1").style.position = "absolute";
                document.getElementById("text1").style.top = "8.4%";
                document.getElementById("text1").style.left = "60.3%";
            }
        }
        posP();
    </script>
    <script src="../JS_Asteroids/Menu.js"></script>
    <script src="../JS_Asteroids/DimensionesVentana.js"></script>
    <script src="../JS_Asteroids/vector2D.js"></script>
    <script src="../JS_Asteroids/constantes.js"></script>
    <script src="../JS_Asteroids/meteorito.js"></script>
    <script src="../JS_Asteroids/Rectangulo.js"></script>
    <script src="../JS_Asteroids/BucleMenu.js"></script>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>

</html>