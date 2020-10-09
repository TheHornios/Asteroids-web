<?php
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';
    if(isset($_SESSION['user_id'])){
        $texto =verAmidesNoAñadidas($conexion,$_SESSION['user_id']);
        $arr = array();
        for($i=0;$i<count($texto);$i++){
            
            if(file_exists('../img/imagenesUsuarios/'.$texto[$i])){
                $usuAmigo = $texto[$i];
                $ficheros2  = scandir('../img/imagenesUsuarios/'.$texto[$i], 1);
                $query = mysqli_query($conexion,"SELECT img from iconos WHERE usuario='$usuAmigo' LIMIT 1");
                if(mysqli_num_rows($query)!=0){
                    $rows = mysqli_fetch_array($query);
                    for($w = 0;$w<count($ficheros2);$w++){
                        if(explode('.',$ficheros2[$w])[0] == $rows[0]){
                            $arr[] = array($texto[$i],'../img/imagenesUsuarios/'.$usuAmigo.'/'.$ficheros2[$w]); 
                        }
                    }
                }else{
                    $arr[] = array($texto[$i],'../img/iconos/icono_cara_sonrriente.png');
                }
            }else{
                $arr[] = array($texto[$i],'../img/iconos/icono_cara_sonrriente.png');
            }
        }
        echo json_encode($arr);
    }
?>