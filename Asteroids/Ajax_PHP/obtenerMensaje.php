<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';

    //"{msg:".$rows[0].",date:".$rows[1]."}";
    if(isset($_SESSION['user_id'])){
        $text1 = obtenerMensajesChat($conexion,$_REQUEST['amigo'],$_SESSION['user_id']);
        echo $text1;
    }
?>