<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';
    echo getImgEnemiga($conexion,$_REQUEST['amigo']);
?>