<?php
    function compobarCantidadPartidas($conexion,$user,$mision,$cant,$partidasJugadas){
        $query = mysqli_query($conexion,"SELECT id from logros where user='$user' and logro='$mision' ");
        if(mysqli_num_rows($query)==0){
            if($cant<=$partidasJugadas){    
                return "si";   
            }else{
                return "no";
            }
        }else{
            return "esta";
        }
    }
    function añadirDineroCantidadpartidas($conexion,$user,$mision,$cant,$partidasJugadas,$monedasAdd){
        $query = mysqli_query($conexion,"SELECT id from logros where user='$user' and logro='$mision' ");
        if(mysqli_num_rows($query)==0){
            if($cant<=$partidasJugadas){
                $date21 = date("Y-m-d");
                mysqli_query($conexion,"INSERT into logros (user,logro,fecha) values ('$user','$mision', '$date21')");
                mysqli_query($conexion,"UPDATE user set monedas=monedas+'$monedasAdd' where usuario='$user' ");   
            }
        }
    }
    function getFecha($conexion,$user,$mision){
        $query = mysqli_query($conexion,"SELECT fecha from logros where user='$user' and logro='$mision' ");
        $rows = mysqli_fetch_array($query);
        return $rows[0];
    }
?>