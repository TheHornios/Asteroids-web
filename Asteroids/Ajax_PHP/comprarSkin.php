<?php
    session_start();
    include("../Funciones_PHP/Sql_Funtion.php");
    require '../Funciones_PHP/Funcioneslogros.php';
    require '../Funciones_PHP/baseDeDatos.php';
    $usu = $_SESSION['user_id'];
    $moneda = 0;
    $query1 = mysqli_query($conexion,"SELECT * from user where usuario='$usu'");
    if ($r1 = mysqli_fetch_array($query1)) {
        $moneda =  $r1['monedas'];
    }
    $arraySkins =array();
    $querySkins = mysqli_query($conexion,"SELECT nombre,precio from skinsdeljuego ");
    while($rows = mysqli_fetch_array($querySkins)){
        $arraySkins[] = array($rows[0],$rows[1]);
    }
    $arr = null;
    for($i = 0;$i<count($arraySkins);$i++){
        if ($arraySkins[$i][0] ==$_REQUEST['skin']){
            $arr = $arraySkins[$i];
        }
    }
    if($arr!=null){
        if($moneda>=$arr[1]){
            $date21 = date("Y-m-d");
            $skin = $arr[0];
            $monedaSkin = $arr[1];
            $que = mysqli_query($conexion,"SELECT * from tienda where usu='$usu' AND skin='$skin'");
            if(mysqli_num_rows($que)==0){
                mysqli_query($conexion,"INSERT into tienda (usu,skin,fecha) values ('$usu','$skin', '$date21')");
                mysqli_query($conexion,"UPDATE user set monedas=monedas-'$monedaSkin' where usuario='$usu' ");    
                echo $arr[1];
            }else{
                echo 'no';
            }
         
        }else{
            echo 'no';
        }
    }else{
        echo 'no';
    }
?>