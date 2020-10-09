<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';
    if(isset($_REQUEST['num'])){
        $num = $_REQUEST['num'];
        $usu = $_SESSION['user_id'];
        $numeros = mysqli_num_rows(mysqli_query($conexion,"SELECT * from iconos WHERE usuario='$usu' LIMIT 1"));
        if($numeros==0){
            mysqli_query($conexion,"INSERT into iconos (usuario,img) values ('$usu','$num')");
        }else{
            mysqli_query($conexion,"UPDATE iconos set img='$num' where usuario='$usu' ");
        }
    }
?>