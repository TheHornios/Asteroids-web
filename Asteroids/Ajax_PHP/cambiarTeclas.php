<?php
    session_start();
    include("../Funciones_PHP/Sql_Funtion.php");
    require '../Funciones_PHP/Funcioneslogros.php';
    require '../Funciones_PHP/baseDeDatos.php';
    $tecla = $_POST['tecla'];
    $usu = $_SESSION['user_id'];
    $mov = $_POST['mov'];
    $query = mysqli_query($conexion,"SELECT * from teclado where usu='$usu' AND movimiento='$mov' AND tecla='$tecla'");
    if(mysqli_num_rows($query)==0){
        $query = mysqli_query($conexion,"SELECT * from teclado where usu='$usu' AND tecla='$tecla'");
        if(mysqli_num_rows($query)!=0){
            $rows = mysqli_fetch_array($query);
            $newMov = $rows[3];
            mysqli_query($conexion,"UPDATE teclado set tecla='' where usu='$usu' AND movimiento='$newMov' ");
        }
        mysqli_query($conexion,"UPDATE teclado set tecla='$tecla' where usu='$usu' AND movimiento='$mov' ");
    }
    
?>