<?php
    function consulatTop($conexion,$top){
        $texto = "";
        $query_Top10 = mysqli_query($conexion,"SELECT * from partidas order by pts desc LIMIT $top");
        $cont = 1;
        
        while($rows = mysqli_fetch_array($query_Top10)){
            $usu = $rows[0];
            $query_icono = mysqli_query($conexion,"SELECT img from iconos where usuario='$usu' ");
            if(mysqli_num_rows($query_icono)==0){
                $texto .= '<tr><td>'.$cont .'</td>'.'<td><img id="imgTop10" src="../img/iconos/icono_cara_sonrriente.png"/>'.$rows[0].'</td>'.'<td>'.$rows[1].'</td>'.'<td>'.$rows[3].'</td>'.'<td>'.$rows[2].'</td></tr>';
            }else{
                if(file_exists("../img/imagenesUsuarios/".$usu."/")){
                    $file = "../img/imagenesUsuarios/".$usu."/";
                    $ficheros1  = scandir($file);
                    $rows1 = mysqli_fetch_array($query_icono);
                    for($i = 0;$i<count($ficheros1);$i++){
                        if(explode('.',$ficheros1[$i])[0] == $rows1[0]){
                            $texto .= '<tr><td>'.$cont .'</td>'.'<td><img id="imgTop10" src="../img/imagenesUsuarios/'.$usu.'/'.$ficheros1[$i].'"/>'.$rows[0].'</td>'.'<td>'.$rows[1].'</td>'.'<td>'.$rows[3].'</td>'.'<td>'.$rows[2].'</td></tr>';
                        }
                    }
                }
            }
            $cont ++;
        }
        return $texto;
    }
    function consultaMisPts($conexion,$usu){
        $texto = "";
        $query_Top10 = mysqli_query($conexion,"SELECT * from partidas WHERE usu='$usu' order by pts desc");
        $cont = 1;
        while($rows = mysqli_fetch_array($query_Top10)){
            $texto .= '<tr><td>'.$cont .'</td>'.'<td>'.$rows[0].'</td>'.'<td>'.$rows[1].'</td>'.'<td>'.$rows[3].'</td>'.'<td>'.$rows[2].'</td></tr>';
            $cont ++;
        }
        return $texto;
    }

    function consultaMaximaPts($conexion,$usu){
        $texto = "";
        $query_Top10 = mysqli_query($conexion,"SELECT * from partidas WHERE usu='$usu' order by pts desc LIMIT 1");
        while($rows = mysqli_fetch_array($query_Top10)){
            $texto .= $rows[1];
        }
        return $texto;
    }
    function consultaNumeroPartidasUsu($conexion,$usu){
        $query_Top10 = mysqli_query($conexion,"SELECT * from partidas WHERE usu='$usu' order by pts desc");
        $cont = 1;
        while($rows = mysqli_fetch_array($query_Top10)){
            $cont ++;
        }
        return $cont;
    }
    function añadirSkin($conexion,$usu,$val1,$val2){
        mysqli_query($conexion,"UPDATE skins set nave='$val1', asteroide='$val2' where usu='$usu' ");
    }
    function getSkinNave($conexion,$usu){
        $query_Top10 = mysqli_query($conexion,"SELECT nave from skins WHERE usu='$usu' ");
        while($rows = mysqli_fetch_array($query_Top10)){
            return (integer)$rows[0];
        }
    }
    function getSkinAsteroid($conexion,$usu){
        $query_Top10 = mysqli_query($conexion,"SELECT asteroide from skins WHERE usu='$usu' ");
        while($rows = mysqli_fetch_array($query_Top10)){
            return (integer)$rows[0];
        }
    }
    function getChatText($conexion,$usu,$usu1){
        $query_Top10 = mysqli_query($conexion,"SELECT texto from chat WHERE remitente='$usu' ");
        $texto = "";
        while($rows = mysqli_fetch_array($query_Top10)){
            $texto .= $rows[0];
        }
        return $texto;
    }
    function addChatText($conexion,$usu,$usu1,$text){
        $date21 = date("Y-m-d H:i:s");
        $sql_Partida  = "INSERT into chat (fecha,remitente,destinatario,texto) values ('$date21','$usu', '$usu1', '$text')";
        mysqli_query($conexion,$sql_Partida);
        $i = date("Y-m-d");
        $a = explode('-',$i);
        $o = $a[0]."-".$a[1]."-".($a[2]-3);
        $query_Top10 = mysqli_query($conexion,"DELETE FROM chat WHERE DATEDIFF('$date21',fecha)>=3");
    }
    function buscarAmigo($conexion,$usu){
        $query1 = mysqli_query($conexion,"SELECT usuario from user where usuario='$usu'");
        $texto = "";
        while($rows = mysqli_fetch_array($query1)){
            $texto .= $rows[0];
        }
        return $texto;
    }
    function verSiYaEresAmigo($conexion,$usu,$usu1){
        $query1 = mysqli_query($conexion,"SELECT yo from amigos where yo='$usu'AND amigo='$usu1'");
        $texto = "";
        while($rows = mysqli_fetch_array($query1)){
            $texto .= $rows[0];
        }
        return $texto;
    }
    function añadirAmigo($conexion,$usu,$usu1){
        mysqli_query($conexion,"INSERT into amigos (yo,amigo,acept) values ('$usu','$usu1',0) ");
    }
    function verAmidesNoAñadidas($conexion,$usu){
        $query1 = mysqli_query($conexion,"SELECT yo from amigos where amigo='$usu' AND acept=0");
        $texto = array();
        while($rows = mysqli_fetch_array($query1)){
            $texto[]= $rows[0];
        }
        return $texto;
    }
    function verAmigosAñadidos($conexion,$usu){
        $query1 = mysqli_query($conexion,"SELECT amigo from amigos where yo='$usu' AND acept=1");
        $texto = array();
        while($rows = mysqli_fetch_array($query1)){
            $texto[] = $rows[0];
        }
        $query1 = mysqli_query($conexion,"SELECT yo from amigos where amigo='$usu' AND acept=1");
        while($rows = mysqli_fetch_array($query1)){
            $texto[] = $rows[0];
        }
        return $texto;
    }
    function aceptarAmigo($conexion,$usu,$usu1){
        mysqli_query($conexion,"UPDATE amigos set acept=1 where yo='$usu' and amigo='$usu1' ");
    }
    function aceptarBorrar($conexion,$usu,$usu1){
        mysqli_query($conexion,"DELETE FROM amigos WHERE yo = '$usu' and amigo='$usu1'");
    }
    function obtenerMensajesChat($conexion,$usu,$usu1){
        $query_Top10 = mysqli_query($conexion,"SELECT texto,fecha,remitente from chat WHERE (remitente='$usu' AND destinatario='$usu1')or(remitente='$usu1' AND destinatario='$usu') order by fecha ");
        $texto = "";
        while($rows = mysqli_fetch_array($query_Top10)){
            $texto .= "{'msg':'".$rows[0]."','date':'".$rows[1]."'remitente~".($rows[2]==$usu1?'remi':'desti')."}";
        }
        return $texto;
    }
    function obtnerMensajesNoLeidosTotal($conexion,$usu){
        $query_Top10 = mysqli_query($conexion,"SELECT id from chat WHERE ((destinatario='$usu')) and leido = 0 order by fecha");
        $texto = "1";
        while($rows = mysqli_fetch_array($query_Top10)){
            $texto .= $rows[0];
        }
        return $texto;
    }
    function ponerMensajesEnLeido($conexion,$usu,$usu1){
        mysqli_query($conexion,"UPDATE chat set leido=1 where remitente='$usu1' and destinatario='$usu' ");
    }
    function amigosSinLeer($conexion,$usu){
        $query_Top10 = mysqli_query($conexion,"SELECT remitente from chat WHERE ((destinatario='$usu')) and leido = 0");
        $texto = "*~<";
        while($rows = mysqli_fetch_array($query_Top10)){
            $texto .= $rows[0]."*~<";
        }
        return $texto;
    }
    function getImgEnemiga($conexion,$usu){
        $query_Top10 = mysqli_query($conexion,"SELECT nave from skins WHERE usu='$usu' ");
        return mysqli_fetch_array($query_Top10)[0];
    }
    function maximaPuntuacion($conexion,$usu){
        $query_Top10 = mysqli_query($conexion,"SELECT MAX(pts) from partidas WHERE usu='$usu' ");
        return mysqli_fetch_array($query_Top10)[0];
    }
    function tienesLaSkin($conexion,$usu,$skin){
        $que = mysqli_query($conexion,"SELECT * from tienda where usu='$usu' AND skin='$skin'");
        if(mysqli_num_rows($que)==0){
            return true;
        }else{
            return false;
        }
    }
    function crearColumnasAjustesTeclado($conexion,$usu,$arr,$arrMovimientos){
        $query = mysqli_query($conexion,"SELECT * from teclado where usu='$usu'");
        if(mysqli_num_rows($query)==0){
            for($i = 0;$i<count($arr);$i++){
                $tecla = $arr[$i];
                $mov = $arrMovimientos[$i];
                mysqli_query($conexion,"INSERT into teclado (usu,tecla,movimiento) values ('$usu','$tecla','$mov') ");
            }
        }
    }
    function obtenerTecla($conexion,$usu,$mov){
        $query = mysqli_query($conexion,"SELECT * from teclado where usu='$usu' and movimiento='$mov'");
        return mysqli_fetch_array($query)[2];
    }
?>