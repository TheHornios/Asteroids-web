<?php 
    session_start();
    require '../Funciones_PHP/baseDeDatos.php';
    require '../Funciones_PHP/Sql_Funtion.php';

    if(isset($_SESSION['user_id'])){
        $usu = $_SESSION['user_id'];
        $tipo = $_POST['tipo']; 
        $valor = $_POST['valor']; 

        $existe = false;
        $query_Top10 = mysqli_query($conexion,"SELECT * from volumen where user='$usu' AND tipo='$tipo' ");
        while($rows = mysqli_fetch_array($query_Top10)){
            $existe  = true;
        }

        if($existe){
            mysqli_query($conexion,"UPDATE volumen set valor='$valor' where user='$usu' and tipo='$tipo' ");   
        }else{
            $sql_Partida  = "INSERT into volumen (user,tipo,valor) values ('$usu','$tipo', '$valor')";
            mysqli_query($conexion,$sql_Partida);
        }
    }
?>