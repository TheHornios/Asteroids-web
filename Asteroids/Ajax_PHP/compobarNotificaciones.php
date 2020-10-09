<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';
    if(isset($_SESSION['user_id'])){
        $resultado = -1;
        if(strlen(verAmidesNoAñadidas($conexion,$_SESSION['user_id']))!=3){
            $resultado = 0;
        }
        if(obtnerMensajesNoLeidosTotal($conexion,$_SESSION['user_id'])!=1){
            $resultado = 0;
        }
        echo $resultado;
    }
?>