<?php
    session_start();
    include("../Funciones_PHP/Sql_Funtion.php");
    require '../Funciones_PHP/Funcioneslogros.php';
    require '../Funciones_PHP/baseDeDatos.php';

    echo getFecha($conexion,$_SESSION['user_id'],$_REQUEST['mision']);
?>