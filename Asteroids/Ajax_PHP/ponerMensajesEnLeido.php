<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';
    if(isset($_SESSION['user_id'])){
        ponerMensajesEnLeido($conexion,$_SESSION['user_id'],$_REQUEST['amigo']);
    }
?>