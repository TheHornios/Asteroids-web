<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';

    if(file_exists('../img/imagenesUsuarios/'.$_SESSION['user_id'])){
        $ficheros2  = scandir('../img/imagenesUsuarios/'.$_SESSION['user_id'], 1);
        $usu = $_SESSION['user_id'];
        $query = mysqli_query($conexion,"SELECT img from iconos WHERE usuario='$usu' LIMIT 1");
        $srcImagenUsu = -1;
        if(mysqli_num_rows($query)!=0){
            $rows = mysqli_fetch_array($query);
            $texto = '-1';
            for($i = 0;$i<count($ficheros2);$i++){
                if(explode('.',$ficheros2[$i])[0] == $rows[0]){
                    $texto = $usu.'/'.$ficheros2[$i];
                }
            }
            echo $texto;
        }else{
            echo '-1';
        }
    }else{
        echo '-1';
    }
?>