<?php

    //retorna la posicion si esta en el caso de que no este retorna -1
    function busquedaBinaria($tabla,$colum,$valor){
        $posMedio = floor(count($tabla)/2);
        $inf = 0;
        $sup = count($tabla);
           // echo $posMedio." ".$inf." ".$sup." ".$tabla[$posMedio][0]." ".$valor;
            while($tabla[$posMedio][$colum]!=$valor&&$sup-$inf!=1){
                    if($tabla[$posMedio][$colum]>$valor){
                        $sup = $posMedio;
                        $posMedio = floor($sup/2);
                    }else{
                        $inf = $posMedio;
                        $posMedio = floor(($inf+$sup)/2);
                    }
            }
       
        if($sup-$inf==1&&$tabla[$inf][$colum]!=$valor){
            return array($inf,$sup);
        }else{
            return array($posMedio,-1);
        }
    }
?>