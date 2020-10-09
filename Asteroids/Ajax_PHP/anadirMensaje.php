<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';
    if(isset($_SESSION['user_id'])){
        if($_REQUEST['msg']!=""&&$_REQUEST['msg']!=" "){
            echo addChatText($conexion,$_SESSION['user_id'],$_REQUEST['amigo'],$_REQUEST['msg']);
        }
    }
?>