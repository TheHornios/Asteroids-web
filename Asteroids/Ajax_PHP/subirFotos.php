<?php
    session_start();
    $numero = 1;
    if(!file_exists("../img/imagenesUsuarios/".$_SESSION['user_id']."/")){
        mkdir("../img/imagenesUsuarios/".$_SESSION['user_id']."/");
        $dni = $_SESSION['user_id'];
        $name = $_FILES['file']['name'];
        $tmp_name =  $_FILES['file']['tmp_name'];
        $file = "../img/imagenesUsuarios/".$_SESSION['user_id']."/";
        $arrayImg = explode('.',$name);
        move_uploaded_file($tmp_name,$file.$numero.".".$arrayImg[count($arrayImg)-1]);
    }
    $file = "../img/imagenesUsuarios/".$_SESSION['user_id']."/";
    $ficheros1  = scandir($file);
  
    $arrBuen = array(); 
    for($i = 0;$i<count($ficheros1 );$i++){
        $arrBuen[] = explode('.',$ficheros1[$i])[0];
    }
    sort($arrBuen);
    $ultimo = $arrBuen[count($arrBuen)-1];
    $dni = $_SESSION['user_id'];
    $name = $_FILES['file']['name'];
    $tmp_name =  $_FILES['file']['tmp_name'];
    $arrayImg = explode('.',$name);
    move_uploaded_file($tmp_name,$file.($ultimo+1).".".$arrayImg[count($arrayImg)-1]);
    
?>