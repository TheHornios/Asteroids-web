<?php
    session_start();
    include("../Funciones_PHP/Sql_Funtion.php");
    require '../Funciones_PHP/Funcioneslogros.php';
    require '../Funciones_PHP/baseDeDatos.php';
    $arrMisiones = array(
    array('part1',1,100),
    array('part2',10,150),
    array('part3',50,200),
    array('part4',100,500),
    array('part5',1000,1000),
    array('pts1',1000,100),
    array('pts2',10000,150),
    array('pts3',100000,500),
    array('pts4',1000000,1000),
    array('pts5',2000000,1000),
    array('pts6',3000000,1000),
    array('pts7',4000000,1000),
    array('pts8',5000000,1000),
);
    
    $arr = null;
    for($i = 0;$i<count($arrMisiones);$i++){
        if($arrMisiones[$i][0]==$_REQUEST['cual']){
            $arr = $arrMisiones[$i];
        }
    }
    $partidasJugadas = '';
    if(substr($arr[0],0,strlen($arr[0])-1)=='part'){
       $partidasJugadas = consultaNumeroPartidasUsu($conexion,$_SESSION['user_id']);
    }else{
        $partidasJugadas = maximaPuntuacion($conexion,$_SESSION['user_id']);
    }
    añadirDineroCantidadpartidas($conexion,$_SESSION['user_id'],$_REQUEST['cual'],$arr[1],$partidasJugadas,$arr[2]);
    echo $arr[2];
?>