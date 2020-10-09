<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';
    if(isset($_SESSION['user_id'])){
        $texto = buscarAmigo($conexion,$_REQUEST['amigo']);
        if($texto!=""&&strtoupper ($_SESSION['user_id'])!=strtoupper ($_REQUEST['amigo'])){
            if(verSiYaEresAmigo($conexion,$_SESSION['user_id'],$_REQUEST['amigo'])!=""){
                echo 'hjfdbsdkhj';
            }else{
                añadirAmigo($conexion,$_SESSION['user_id'],$_REQUEST['amigo']);
                echo $texto;
            }
        }else{
            echo "";
        }
    }
?>