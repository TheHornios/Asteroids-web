<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="../img/menu/monedas.png" />
    <link rel="stylesheet" type="text/css" href="../estilos.css">
    <title>Registro Asteroids</title>
</head>
<body id="reves">
    <?php
    require '../Funciones_PHP/baseDeDatos.php';
    $cuenta_Creada;
     if(isset($_REQUEST['enviar'])){
        $error;
        foreach($_REQUEST as $key => $dato){
            $error[$key]="";
            $$key = $_REQUEST[$key];
        }

        $usu = strtoupper(mysqli_real_escape_string($conexion, $_REQUEST['usuario']));
            //Sh1
        //$pass = sha1(mysqli_real_escape_string($conexion, $_REQUEST['contraseña']));
            //Pasword_Hash
        $pasTexto = mysqli_real_escape_string($conexion, $_REQUEST['contraseña']);
        $pass = password_hash ($pasTexto,PASSWORD_BCRYPT);
        $name_ape = $nombre.",".$apellido;
        $name_ape = mysqli_real_escape_string($conexion, $name_ape);
        $correo= mysqli_real_escape_string($conexion, $correo);
        //Comprobar texto Correcto
        if(empty($usu)){
            $error['usuario'] = "No se ha introducido ningun dato";
        }else{
            if($usu==""||$usu==" "||$usu=="  "||$usu=="   "){
                $error['usuario'] = "No se ha introducido ningun dato";
            }
        }
        if(empty($_REQUEST['contraseña'])){
            $error['contraseña'] = "No se ha introducido ningun dato";
        }else{
            if($_REQUEST['contraseña']==""||$_REQUEST['contraseña']==" "||$_REQUEST['contraseña']=="  "||$_REQUEST['contraseña']=="   "){
                $error['contraseña'] = "No se ha introducido ningun dato";
            }
            if(!empty($_REQUEST['contraseña1'])){
                if($_REQUEST['contraseña1']!=$_REQUEST['contraseña']){
                    $error['contraseña'] = "Las dos contraseñas no son iguales";
                    $error['contraseña1'] = " ";
                }
            }
        }
        if(empty($_REQUEST['contraseña1'])){
            $error['contraseña1'] = "No se a introducido el la segunda contraseña";
        }
        if(empty($nombre)){
            $error['nombre'] = "No se ha introducido ningun dato";
        }else{
            if($nombre==""||$nombre==" "||$nombre=="  "||$nombre=="   "){
                $error['nombre'] = "No se ha introducido ningun dato";
            }
        }
        if(empty($apellido)){
            $error['apellido'] = "No se ha introducido ningun dato";
        }else{
            if($apellido==""||$apellido==" "||$apellido=="  "||$apellido=="   "){
                $error['apellido'] = "No se ha introducido ningun dato";
            }
        }
        if(empty($correo)){
            $error['correo'] = "No se ha introducido ningun dato";
        }else{
            if($correo==""||$correo==" "||$correo=="  "||$correo=="   "){
                $error['correo'] = "No se ha introducido ningun dato";
            }
        }
        //Consulta
        $var;
        foreach($error as $key => $dato){
            if($dato!=""){
                $var = 1;
            }
        }
        if(empty($var)){
            $query = "SELECT * from user where usuario='$usu'";
            if($resultado = mysqli_query($conexion,$query)){
                if (mysqli_num_rows($resultado) > 0) {
                    $error['usuario'] .= "El usuario '".$usu."' ya existe.";
                }else{
                    $pass = password_hash ($contraseña,PASSWORD_BCRYPT);
                    $name_ape = $nombre.",".$apellido;
                    $sql = "INSERT into user (usuario,nombre_ape,email,contrasena) values ('$usuario', '$name_ape', '$correo', '$pass')";
                    $sql2 = "INSERT into skins (nave,asteroide,usu) values ('0','0','$usuario')";
                    mysqli_query($conexion,$sql); 
                    mysqli_query($conexion,$sql2); 
                    $cuenta_Creada = 1;
                }
            }
        }
        
        
     }
    ?>
    <div id='Cabecera'>
        <h1>Crear cuenta</h1>
        <h2>* Campo Obligatorio</h2>
    </div>
    <div id="error">
        <?php
            if(!empty($error)){
                echo "Errores:<br/><div>";
                if($error['usuario']!=""){
                    echo "Usuario: <a href='#usuario'>".$error['usuario']."</a><br/>";
                }
                if($error['nombre']!=""){
                    echo "Nombre: <a href='#nombre'>".$error['nombre']."</a><br/>";
                }
                if($error['apellido']!=""){
                    echo "Apellido: <a href='#apellido'>".$error['apellido']."</a><br/>";
                }
                if($error['correo']!=""){
                    echo "Correo: <a href='#correo'>".$error['correo']."</a><br/>";
                }
                if($error['contraseña']!=""){
                echo "Contraseña: <a href='#contraseña'>".$error['contraseña']."</a><br/>";
                }
                if($error['contraseña1']!=""&&$error['contraseña1']!=" "){
                    echo "Contraseña: <a href='#contraseña1'>".$error['contraseña1']."</a><br/>";
                    }
                echo "</div>";
            }
        ?>
    </div>
    <div id="cuerpo">
        <form action='' method='post'>
            <label for="username">Usuario*</label>
            <input class="cont" type="text" name="usuario" id="usuario" id="usuario"placeholder="Ingrese un Nombre de Usuario"
                value="<?php 
                    if(!empty($error)){
                        if($error['usuario']==""){
                            echo $usu;
                        }
                    }
                ?>">
            <label for="Nombre">Nombre*</label>
            <input class="cont" type="text" name="nombre" id="nombre" id="nombre"placeholder="Ingrese su Nombre" 
                value="<?php 
                    if(!empty($error)){
                        if($error['nombre']==""){
                            echo $nombre;
                        }
                    }
                ?>">
            <label for="Nombre">Apellido*</label>
            <input class="cont" type="text" name="apellido" id="apellido" id="apellido" placeholder="Ingrese su Apellido"
                value="<?php 
                    if(!empty($error)){
                        if($error['apellido']==""){
                            echo $apellido;
                        }
                    }
                ?>">

            <label for="Nombre">Email*</label>
            <input class="cont" type="email" name="correo" id="correo" id="correo"  placeholder="Ingrese un Correo" 
                value="<?php 
                    if(!empty($error)){
                        if($error['correo']==""){
                            echo $correo;
                        }
                    }
                ?>">
            <label for="Nombre">Contraseña*</label>
            <input class="cont" type="password" name="contraseña" id="contraseña" id="contraseña" placeholder="Ingrese una Contraseña"
                value="<?php 
                    if(!empty($error)){
                        if($error['contraseña']==""){
                            echo $contraseña;
                        }
                    }
                ?>">
            <label for="Nombre">Contraseña*</label>
            <input class="cont" type="password" name="contraseña1" id="contraseña1" id="contraseña1" placeholder="Ingrese la misma Contraseña" >
            <input class="boton" type="submit" name='enviar'>
        <form action='' method='post' >
        <a href="#" id="cerrar">Ya tengo cuenta</a>
    </div>
    <script>
        document.getElementById("usuario").addEventListener("keyup",function(){ 
            var char = document.getElementById("usuario").value.charAt(document.getElementById("usuario").value.length-1);
            if(char==" "||char=="<"||char==">"||char=="/"||char=="\\"){
                document.getElementById("usuario").value = document.getElementById("usuario").value.substring(0,document.getElementById("usuario").value.length-1);
            }
        });
        document.getElementById("nombre").addEventListener("keyup",function(){ 
            var char = document.getElementById("nombre").value.charAt(document.getElementById("nombre").value.length-1);
            if(char=="<"||char==">"||char=="/"||char=="\\"){
                document.getElementById("nombre").value = document.getElementById("nombre").value.substring(0,document.getElementById("nombre").value.length-1);
            }
        });
        document.getElementById("apellido").addEventListener("keyup",function(){ 
            var char = document.getElementById("apellido").value.charAt(document.getElementById("apellido").value.length-1);
            if(char=="<"||char==">"||char=="/"||char=="\\"){
                document.getElementById("apellido").value = document.getElementById("apellido").value.substring(0,document.getElementById("apellido").value.length-1);
            }
        });
        document.getElementById("correo").addEventListener("keyup",function(){ 
            var char = document.getElementById("correo").value.charAt(document.getElementById("correo").value.length-1);
            if(char==" "||char=="<"||char==">"||char=="/"||char=="\\"){
                document.getElementById("correo").value = document.getElementById("correo").value.substring(0,document.getElementById("correo").value.length-1);
            }
        });
        document.getElementById("contraseña").addEventListener("keyup",function(){ 
            var char = document.getElementById("contraseña").value.charAt(document.getElementById("contraseña").value.length-1);
            if(char==" "||char=="<"||char==">"||char=="/"||char=="\\"){
                document.getElementById("contraseña").value = document.getElementById("contraseña").value.substring(0,document.getElementById("contraseña").value.length-1);
            }
        });
        document.getElementById("contraseña1").addEventListener("keyup",function(){ 
            var char = document.getElementById("contraseña1").value.charAt(document.getElementById("contraseña1").value.length-1);
            if(char==" "||char=="<"||char==">"||char=="/"||char=="\\"){
                document.getElementById("contraseña1").value = document.getElementById("contraseña1").value.substring(0,document.getElementById("contraseña1").value.length-1);
            }
        });

        var pos = -300;
        var opacidad = 0;
        var intervalo = setInterval(function(){
            document.getElementById("Cabecera").style.left = pos+"px";
            document.getElementById("Cabecera").style.opacity = opacidad;
            opacidad = opacidad+0.009;
            pos = pos+2.5;
            if(pos>=0){
                clearInterval(intervalo);
            }
            if(opacidad>=1){
                opacidad = 1;
            }
        },1);

        var pos1 = 360;
        var opacidad1 = 0;
        var intervalo1 = setInterval(function(){
            document.getElementById("cuerpo").style.left = pos1+"px";
            document.getElementById("cuerpo").style.opacity = opacidad1;
            opacidad1 = opacidad1+0.009;
            pos1 = pos1-2.5;
            if(pos1<=0){
                clearInterval(intervalo1);
            }
            if(opacidad1>=1){
                opacidad1 = 1;
            }
        },1);

        document.getElementById("cerrar").addEventListener("click",function(){ 
            window.close();
        });
    </script>
    <?php
        if(!empty($error)){
            if($error['usuario']!=""){
                echo "<script> document.getElementById('usuario').style.borderBottom= '1px solid red';
                document.getElementById('usuario').style.borderRight= '1px solid red';
                </script>";
            }else{
                echo "<script> document.getElementById('usuario').style.borderBottom= '1px solid black';
                document.getElementById('usuario').style.borderRight= '';
                </script>";
            }
            if($error['nombre']!=""){
                echo "<script> document.getElementById('nombre').style.borderBottom= '1px solid red';
                document.getElementById('nombre').style.borderRight= '1px solid red';
                </script>";
            }else{
                echo "<script> document.getElementById('nombre').style.borderBottom= '1px solid black';
                document.getElementById('nombre').style.borderRight= '';
                </script>";
            }
            if($error['apellido']!=""){
                echo "<script> document.getElementById('apellido').style.borderBottom= '1px solid red';
                document.getElementById('apellido').style.borderRight= '1px solid red';
                </script>";
            }else{
                echo "<script> document.getElementById('apellido').style.borderBottom= '1px solid black';
                document.getElementById('apellido').style.borderRight= '';
                </script>";
            }
            if($error['correo']!=""){
                echo "<script> document.getElementById('correo').style.borderBottom= '1px solid red';
                document.getElementById('correo').style.borderRight= '1px solid red';
                </script>";
            }else{
                echo "<script> document.getElementById('correo').style.borderBottom= '1px solid black';
                document.getElementById('correo').style.borderRight= '';
                </script>";
            }
            if($error['contraseña']!=""){
                echo "<script> document.getElementById('contraseña').style.borderBottom= '1px solid red';
                document.getElementById('contraseña').style.borderRight= '1px solid red';
                </script>";
            }else{
                echo "<script> document.getElementById('contraseña').style.borderBottom= '1px solid black';
                document.getElementById('contraseña').style.borderRight= '';
                </script>";
            }
            if($error['contraseña1']!=""){
                echo "<script> document.getElementById('contraseña1').style.borderBottom= '1px solid red';
                document.getElementById('contraseña1').style.borderRight= '1px solid red';
                </script>";
            }else{
                echo "<script> document.getElementById('contraseña1').style.borderBottom= '1px solid black';
                document.getElementById('contraseña1').style.borderRight= '';
                </script>";
            }
            if(!empty($cuenta_Creada)){
                echo "<script>window.close();</script>";
            }
        }
    ?>
</body>
</html>