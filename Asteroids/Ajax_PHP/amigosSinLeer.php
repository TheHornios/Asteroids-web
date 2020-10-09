<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';
    if(isset($_SESSION['user_id'])){
        $text = amigosSinLeer($conexion,$_SESSION['user_id']);
        echo substr($text,3,strlen($text));
    }
?>