<?php
    //include("Mostrar.php");

    function cambio(&$i,&$x){
        $aux = $i;
        $i = $x;
        $x = $aux;
    }

    function ordenarBurbuja(&$tabala,$col,$ascendente){ 
        $ordenado = true;
        $tamArr = count($tabala);
        $pos = 0;
        while($pos<$tamArr && $ordenado){
            $ordenado = false;
            for($i = 0;$i<$tamArr-1-$pos;$i++){
                if($ascendente){
                    if($tabala[$i][$col]>$tabala[$i+1][$col]){
                        cambio($tabala[$i+1][$col],$tabala[$i][$col]);
                        $ordenado = true;
                    }
                }else{
                    if($tabala[$i][$col]<$tabala[$i+1][$col]){
                        cambio($tabala[$i][$col],$tabala[$i+1][$col]);
                        $ordenado = true;
                    }
                }
            }
            $pos++;
        }
    }
   
   // mostrarArrayBidimensional($banco);
?>