var teclado = {
    teclas: new Array(),
    iniciar:function(){
        //teclado.reiniciar();
        document.addEventListener("keydown", teclado.guardarTecla, false);
        document.addEventListener("keyup", teclado.quitarTecla, false);

      //  document.onkeydown = teclado.guardarTecla;
      //  document.onkeyup= teclado.reiniciar;
    },
    guardarTecla:function(e){
       // console.log(e.key);
       var w = true;
       for(let i = 0;i<teclado.teclas.length;i++){
            if(teclado.teclas[i]==e.key){
                w = false;
            }
       }
       if(w){
        teclado.teclas.push(e.key);
       }
        
        //console.log(teclado.teclas.length);
    },
    quitarTecla:function(e){
        var index = teclado.teclas.indexOf(e.key);
        if(index > -1){
            teclado.teclas.splice(index,1);
        }
        
       //console.log(e.key+" TeclaPulsada");
    },
    teclaPulsada:function(codigoTecla){
        return(teclado.teclas.indexOf(codigoTecla) !== -1)?true:false;
    },
    reiniciar:function(){
        teclado.teclas = new Array();
       // document.onkeyup = teclado.quitarTecla;
    },
    getDerecha:function(){
        return teclasDeUsuario[0];
    },
    getIzquierda:function(){
        return teclasDeUsuario[1];
    },
    getMovimiento:function(){
        return teclasDeUsuario[2];
    },
    getDisparar:function(){
        if(teclasDeUsuario[3]=='Space'){
            return " ";
        }else{
            return teclasDeUsuario[3];
        }
        
    },
    getBombas:function(){
        return teclasDeUsuario[4];
    },
    getPausa:function(){
        return teclasDeUsuario[5];
    },
}