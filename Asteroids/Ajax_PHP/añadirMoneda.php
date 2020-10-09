<?php
    session_start();
    include("../Funciones_PHP/Sql_Funtion.php");
    require '../Funciones_PHP/Funcioneslogros.php';
    require '../Funciones_PHP/baseDeDatos.php';
    
    $usu = $_SESSION['user_id'];
    $moneda = $_POST['mone']; 
    mysqli_query($conexion,"UPDATE user set monedas=monedas+'$moneda' where usuario='$usu' ");   
?>