<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';
    if(file_exists('../img/imagenesUsuarios/'.$_SESSION['user_id'])){
        $ficheros2  = scandir('../img/imagenesUsuarios/'.$_SESSION['user_id'], 1);
        echo json_encode($ficheros2);
    }else{
        echo -1;
    }
?>