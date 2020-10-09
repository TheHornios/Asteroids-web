var buscarAmigo = document.getElementById("buscar_Chat").innerHTML;
window.addEventListener("resize",function(e){
    tamChat();
});
tamChat();
function tamChat(){
    if(window.innerHeight==789){
        document.getElementById("cuerpo_chat").style.height = 75+"%";
    }
    if(window.innerHeight==969){
        document.getElementById("cuerpo_chat").style.height = 80+"%";
    }
    if(window.innerHeight==657){
        document.getElementById("cuerpo_chat").style.height = 70+"%";
    }
}

/* Animacion botones chat Y cosas varias del chat*/
var click_amigos_add = false;
var minimizar = false;
var cuerpoSinTocar = null;
document.getElementById("min").addEventListener("click", function () {
    if(!minimizar){
        minimizar = true;
        $('.chat').addClass('minimizar_Chat');
        $('.chat_fondo').addClass('minimizar_Chat');
        $('.minimizar .barr1').css('transform','rotate(-35deg)');
        $('.minimizar .barr2').css('transform','rotate(+35deg)');
        $('.tresBarras').css('opacity','0');
        setTimeout(() => {
            $('.chat').removeClass('minimizar_Chat');
            $('.chat_fondo').removeClass('minimizar_Chat');
            $('.chat').css('bottom','-35vh');
            $('.chat_fondo').css('bottom','-35vh');
        }, 250);
    }else{
        minimizar = false;
        $('.chat').addClass('aumentar_Chat');
        $('.chat_fondo').addClass('aumentar_Chat');
        $('.minimizar .barr1').css('transform','rotate(+35deg)');
        $('.minimizar .barr2').css('transform','rotate(-35deg)');
        $('.tresBarras').css('opacity','1');
        setTimeout(() => {
            $('.chat').removeClass('aumentar_Chat');
            $('.chat_fondo').removeClass('aumentar_Chat');
            $('.chat').css('bottom','0');
            $('.chat_fondo').css('bottom','0');
        }, 250);
    }
});
anadirListenersDeLaCabeceraAnadirAmigos();
function anadirListenersDeLaCabeceraAnadirAmigos(){
    document.getElementById("buscar").addEventListener("mouseover", function () {
        if(click_amigos_add){
            document.getElementById("buscar").src = "../img/chat/close2.png";
        }else{
            document.getElementById("buscar").src = "../img/chat/sh2.png";
        }
    });
    document.getElementById("add").addEventListener("mouseover", function () {
        document.getElementById("add").src = "../img/chat/add2.png";
    });
    document.getElementById("buscar").addEventListener("mouseout", function () {
        if(click_amigos_add){
            document.getElementById("buscar").src = "../img/chat/close1.png";
        }else{
            document.getElementById("buscar").src = "../img/chat/sh1.png";
        }
    });
    document.getElementById("add").addEventListener("mouseout", function () {
        document.getElementById("add").src = "../img/chat/add1.png";
    });
    document.getElementById("amigos_add").addEventListener("mouseover", function () {
        $('#amigos_add').css('background','#373C44');
        $('#amigos_add').css('border','#373C44');
        $('#amigos_add').css('transition','all ease-out 0.25s');
    });
    document.getElementById("amigos_add").addEventListener("mouseout", function () {
        if(!click_amigos_add){
            $('#amigos_add').css('background','#434953');
            $('#amigos_add').css('border','#373C44');
        }
    });
    document.getElementById("buscar").addEventListener("click", function () {
        if(!click_amigos_add){
        $('#amigos_add').css('background','#373C44');
        $('#amigos_add').css('border','#373C44');
        click_amigos_add = true;
        $('.amigos_texto').addClass('ocultar_amigos_add');
        $('#amigos_add').addClass('aumentarInput_amigos_add');
        
        setTimeout(() => {
            $('#amigos_add').css('width','85%');
            $('.amigos_texto').css('display','none');
            $('.amigos_texto').css('transform','translateX(-100%)');

            $('.amigos_texto').removeClass('ocultar_amigos_add');
            $('#amigos_add').removeClass('aumentarInput_amigos_add');
            document.getElementById("buscar").src = "../img/chat/close1.png";
        }, 250);
        }else{
            click_amigos_add = false;
            $('.amigos_texto').addClass('desocultar_amigos_add');
            $('#amigos_add').addClass('disminuirInput_amigos_add');
            setTimeout(() => {
                $('#amigos_add').css('width','60%');
                $('.amigos_texto').css('display','inline-block');
                $('.amigos_texto').css('transform','translateX(0%)');
                $('.amigos_texto').removeClass('desocultar_amigos_add');
                $('#amigos_add').removeClass('disminuirInput_amigos_add');
                $('#amigos_add').css('background','#434953');
                $('.amigos_texto').css('margin-right','55%');
                $('#amigos_add').css('border','#373C44');
                document.getElementById("buscar").src = "../img/chat/sh1.png";
        }, 250);
        }
    });
    document.getElementById("amigos_add").addEventListener("click", function () {
        if(!click_amigos_add){
        $('#amigos_add').css('background','#373C44');
        $('#amigos_add').css('border','#373C44');
        click_amigos_add = true;
        $('.amigos_texto').addClass('ocultar_amigos_add');
        $('#amigos_add').addClass('aumentarInput_amigos_add');
        
        setTimeout(() => {
            $('#add').css('margin','4px');
            $('#amigos_add').css('width','85%');
            $('.amigos_texto').css('display','none');
            $('.amigos_texto').css('transform','translateX(-100%)');

            $('.amigos_texto').removeClass('ocultar_amigos_add');
            $('#amigos_add').removeClass('aumentarInput_amigos_add');
            document.getElementById("buscar").src = "../img/chat/close1.png";
        }, 250);
        }
    });
    document.getElementById("amigos_add").addEventListener('keydown',function(e){
        if(e.key=='Enter'){
            buscarAmigoXX();
            document.getElementById("amigos_add").value = "";
        }
    });
    /* Boton Añadir */
    document.getElementById("add").addEventListener("click", function () {
        buscarAmigoXX();
        document.getElementById("amigos_add").value = "";
    });
}
function buscarAmigoXX(){
    var xhr  = new XMLHttpRequest();
    xhr.open("GET","../Ajax_PHP/buscar_Amigo.php?amigo="+document.getElementById("amigos_add").value,true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4  && this.status == 200){
            var text = this.responseText;
            if(text!=""){
                if(text=='hjfdbsdkhj'){
                    $('#amigos_add').css("border","solid 1px red");
                    mensajePopUp("Ya le as enviado una peticion",'red');
                    setTimeout(() => {
                        $('#amigos_add').css("border","");
                    }, 600);
                }else{
                    $('#amigos_add').css("border","solid 1px green");
                    mensajePopUp("Peticion enviada correctamente",'green');
                    setTimeout(() => {
                        $('#amigos_add').css("border","");
                    }, 600);
                }
            }else{
                $('#amigos_add').css("border","solid 1px red");
                mensajePopUp("Error el usuario no existe",'red');
                setTimeout(() => {
                    $('#amigos_add').css("border","");
                }, 600);
            }
        }
    }
}
function mensajePopUp(texto,color){
    var h5 = document.createElement('h5');
    h5.textContent = texto;
    h5.id = "popUp";
    document.body.appendChild(h5);
    $("#popUp").css('background',color);
    setTimeout(() => {
        document.querySelector('#popUp').remove();
    }, 1000);
}
// Punto Rojo de notificacion
function cargaChatNotificaciones(){
    var xhr  = new XMLHttpRequest();
    xhr.open("GET","../Ajax_PHP/compobarNotificaciones.php",true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4  && this.status == 200){
            
            var text = this.responseText;
            //console.log(text);
            if(text==0){
                $('#notificacion').css("opacity","1");
            }else{
                $('#notificacion').css("opacity","0");
            }
        }
    }
    
}
cargaChatNotificaciones();
anadirAmigo();
var intervaloChat = null;

setInterval(() => {
    cargaChatNotificaciones();
}, 5000);
var intervaloNotificaciones = setInterval(() => {
    anadirAmigo();

}, 10000);

// Boton de tres barras pulsar
var cahtCurerpo = document.getElementById("cuerpo_chat").innerHTML;


var can = "";
var can1 = "";
/* ChatAmigos */
var arregloAmigos = 0;
function mostrarAmigos(e){
    can = "";
    if(e.length != 0){
        arregloAmigos = JSON.parse(e);
        for(let i = 0;i<arregloAmigos.length;i++){
            can += "<div class='mostrarchat' id='colMost"+i+"'><img class='icono_chat_personas' src='"+arregloAmigos[i][1]+"'/>"+arregloAmigos[i][0]+"<div id='"+arregloAmigos[i][0].toLowerCase()+"notifi'></div><div id='linea'></div></div>";
        };
    }
}
var cuerpo = "";
var pie = "";
/* Notificacion Nuevo Amigo */
function anadirAmigo(){
    
    function raton(int){
        for(let i = 0;i<int;i++){
            document.getElementById("imgChatCancel"+i).addEventListener("mouseover", function () {document.getElementById("imgChatCancel"+i).src = "../img/chat/close11.png";});
            document.getElementById("imgChatAcept"+i).addEventListener("mouseover", function () {document.getElementById("imgChatAcept"+i).src = "../img/chat/check2.png";});
        }
        for(let i = 0;i<int;i++){
            document.getElementById("imgChatCancel"+i).addEventListener("mouseout", function () {document.getElementById("imgChatCancel"+i).src = "../img/chat/close10.png";});
            document.getElementById("imgChatAcept"+i).addEventListener("mouseout", function () {document.getElementById("imgChatAcept"+i).src = "../img/chat/check.png";});
        }
        for(let i = 0;i<int;i++){
            document.getElementById("imgChatCancel"+i).addEventListener("click", function () {clickCancel(i)});
            document.getElementById("imgChatAcept"+i).addEventListener("click", function(){ clickAcept(i)});
        }
    }
     function notificacionDeCadaUsuario(e){
         
        var arr = e.substring(0,e.length-3).toLowerCase();
        arr = arr.split("*~<");
        
        for(let i=0;i<arr.length;i++){
            $("#"+arr[i]+"notifi").css('opacity','1');
            $("#"+arr[i]+"notifi").css('background','red');
            $("#"+arr[i]+"notifi").css('border-radius','50%');
            $("#"+arr[i]+"notifi").css('width','10px');
            $("#"+arr[i]+"notifi").css('height','10px');
            $("#"+arr[i]+"notifi").css('float','right');
            $("#"+arr[i]+"notifi").css('margin-right','4%');
            setTimeout(() => {
                $("#"+arr[i]+"notifi").css('opacity','0');
            }, 1600);
        }
    }
    function mostrarAmigosSinAnadir(e){
        can1 = "";
        if(e.length!=0){
            var arreglo = JSON.parse(e);

            for(let i = 0;i<arreglo.length;i++){
                
                if(arreglo[i]!=""){
                    can1 += "<div class='colChat' id='colAmi"+i+"'><img class='icono_chat_personas' src='"+arreglo[i][1]+"'/>"+arreglo[i][0]+"<img id='imgChatCancel"+i+"' class='imgChat' src='../img/chat/close10.png'/><img class='imgChat' id='imgChatAcept"+i+"' src='../img/chat/check.png'/><div id='linea'></div></div>";
                }
            }
        }
        
        document.getElementById("cuerpo_chat").innerHTML = cahtCurerpo+(can+can1);
        
        $('#cuerpo_chat').css('overflow-y','scroll');
        if(arregloAmigos.length!=null){
            listener(arregloAmigos.length);
        }
        if(e.length!=0){
            raton(arreglo.length);
        }
        crearAjax("../Ajax_PHP/amigosSinLeer.php",notificacionDeCadaUsuario);
    }
    crearAjax("../Ajax_PHP/retornarAmigosAnadidos.php",mostrarAmigos);
    setTimeout(() => {
        crearAjax("../Ajax_PHP/retornarAmigosParaAceptar.php",mostrarAmigosSinAnadir);
    },200);
    function clickAcept(int){
        var parte = document.getElementById("colAmi"+int).innerHTML.substring(document.getElementById("colAmi"+int).innerHTML.indexOf('>')+1);
        var nombre = parte.substring(0,parte.indexOf('<'));
        crearAjax("../Ajax_PHP/aceptarAmigo.php?amigo="+nombre,function(){anadirAmigo();});
    }
    function clickCancel(int){
        var parte = document.getElementById("colAmi"+int).innerHTML.substring(document.getElementById("colAmi"+int).innerHTML.indexOf('>')+1);
        var nombre = parte.substring(0,parte.indexOf('<'));
        crearAjax("../Ajax_PHP/borrarAmigo.php?amigo="+nombre,function(){anadirAmigo();});
    }
    /* Parte del click en los amigos para adceder al chat */
    function listener(int){
        for(let i = 0;i<int;i++){
            document.getElementById("colMost"+i).addEventListener("click", function () {clickChatLeer(i)});
        }
    }
    function clickChatLeer(int){
        var parte = document.getElementById("colMost"+int).innerHTML.substring(document.getElementById("colMost"+int).innerHTML.indexOf('>')+1);
        var nombre = parte.substring(0,parte.indexOf('<'));
        var src = document.getElementById("colMost"+int).firstChild.src.substring(document.getElementById("colMost"+int).firstChild.src.lastIndexOf('/')+1);
        if(src == 'icono_cara_sonrriente.png'){
            src = '../img/iconos/'+src;
        }else{
            src = '../img/imagenesUsuarios/'+nombre+"/"+src;
        }
        
        clearInterval(intervaloNotificaciones);
        if(intervaloNotificaciones!=null){
            setTimeout(() => {
                document.getElementById("volver").addEventListener("click",volverPaTras);
                chatAmigoLeerOescribir(nombre,src);
            }, 200);
        }
        intervaloNotificaciones = null;
    }
}
/* Funcnion Que Muestra El Chat */
function chatAmigoLeerOescribir(nombre,src) {
    document.getElementById("cuerpo_chat").innerHTML = cahtCurerpo;
    $('#cuerpo_chat').css('overflow-y','hidden');
    
    console.log(nombre);
    var cabeceraHtml = "<img class='icono_chat_personaHablas' src='"+src+"'/><div id='cuerpo_chat_cabecera'>"+nombre+"</div>";
    document.getElementById("buscar_Chat").innerHTML = cabeceraHtml;
    cuerpo = "<div id='cuerpo_chat_perosnas_chat'>";
    cuerpoSinTocar = "<div id='cuerpo_chat_perosnas_chat'></div>";
    pie = "<div id='pie_chat_perosnas_chat'><input id='mensaje_chat' type='text' autocomplete='off' name='mensaje' placeholder='Escribe un mensaje'><img id='enviar_img' src='../img/chat/enviar.png'/></div>";
    mostrarMensajes(nombre,mostarChatAmigoLeerOescribir);
    function mostarChatAmigoLeerOescribir(){
        cuerpo += "</div>";
        document.getElementById("cuerpo_chat").innerHTML = cahtCurerpo+cuerpo+pie;
        if(document.getElementById("cuerpo_chat_perosnas_chat")!=null){
            document.getElementById("mensaje_chat").focus(); 
            botonEnviar(nombre,src);
            /* CSS DE CADA MENSAJE */
            estilosChat(nombre);
    
            document.getElementById("cuerpo_chat_perosnas_chat").scrollTo(0,document.getElementById("cuerpo_chat_perosnas_chat").scrollHeight);
            maximoScroll = document.getElementById("cuerpo_chat_perosnas_chat").scrollTop;
            if(intervaloChat==null){
                setTimeout(() => {
                    recargarCuerpoChat(nombre);
                }, 500);
            }
        }
        
    }
    
    function recargarCuerpoChat(nombre){
        intervaloChat = setInterval(() => {
            cuerpo = "";
            mostrarMensajes(nombre,mostarChatAmigoLeerOescribir2);
            
        }, 2000)

        function mostarChatAmigoLeerOescribir2(){
            if(document.getElementById("cuerpo_chat_perosnas_chat")!=null){
                document.getElementById("cuerpo_chat_perosnas_chat").innerHTML = cuerpo;
                
                //botonEnviar(nombre);
                /* CSS DE CADA MENSAJE */
                estilosChat(nombre);
                document.getElementById("cuerpo_chat_perosnas_chat").scrollTo(0,document.getElementById("cuerpo_chat_perosnas_chat").scrollTop);
                if(maximoScroll==document.getElementById("cuerpo_chat_perosnas_chat").scrollTop){
                    if(document.querySelector('#cuerpo_chat_perosnas_chat')!=null){
                        var quiery = document.querySelector('#cuerpo_chat_perosnas_chat').lastChild;
                        if(quiery!=null){
                            if(quiery.className == 'desti'){
                                document.getElementById("cuerpo_chat_perosnas_chat").scrollTo(0,document.getElementById("cuerpo_chat_perosnas_chat").scrollHeight);
                            }
                        }
                    }
                }
            }else{
                document.getElementById("cuerpo_chat").innerHTML = cahtCurerpo+cuerpoSinTocar+pie;
                document.getElementById("cuerpo_chat_perosnas_chat").innerHTML = cuerpo;
                document.getElementById("cuerpo_chat_perosnas_chat").scrollTo(0,document.getElementById("cuerpo_chat_perosnas_chat").scrollHeight);
                estilosChat(nombre);
                document.getElementById("mensaje_chat").focus(); 
                botonEnviar(nombre,src);
            }
           
        }
    }
}
var maximoScroll;
function estilosChat(nombre){
    crearAjax("../Ajax_PHP/ponerMensajesEnLeido.php?amigo="+nombre,function(){});
}
function botonEnviar(nombre,src){
    document.getElementById("enviar_img").addEventListener("mouseover", function () {document.getElementById("enviar_img").src = '../img/chat/enviar1.png'});
    document.getElementById("enviar_img").addEventListener("mouseout", function () { document.getElementById("enviar_img").src = '../img/chat/enviar.png'});
    document.getElementById("enviar_img").addEventListener("click", function () {enviarMensaje(nombre,src)});
    document.getElementById("mensaje_chat").addEventListener("keydown", function (e) { if(e.key=='Enter'){enviarMensaje(nombre,src)}});
}
function enviarMensaje(nombre,src) {
    if(document.getElementById("mensaje_chat")!=null){
        var mensaje = document.getElementById("mensaje_chat").value;
        crearAjax("../Ajax_PHP/anadirMensaje.php?amigo="+nombre+"&msg="+mensaje,function(){});
        document.getElementById("mensaje_chat").value = "";
        if(document.getElementById("cuerpo_chat_perosnas_chat")!=null){
            document.getElementById("cuerpo_chat_perosnas_chat").scrollTo(0,document.getElementById("cuerpo_chat_perosnas_chat").scrollHeight);
            maximoScroll = document.getElementById("cuerpo_chat_perosnas_chat").scrollTop;
           
        }
        
        chatAmigoLeerOescribir(nombre,src);
    }
}
function prueba(e){
    console.log(e);
}
function mostrarMensajes(nombre,funcion){
    crearAjax("../Ajax_PHP/obtenerMensaje.php?amigo="+nombre,escribirElMensaje);
    function escribirElMensaje(e){
        
        var arr = e.split("}{");
        arr[0] = arr[0].substring(1,arr[0].length);
        arr[arr.length-1] = arr[arr.length-1].substring(0,arr[arr.length-1].length-1);
        for(let i = 0;i<arr.length;i++){
            cuerpo+="<div class="+arr[i].substring(arr[i].indexOf("remitente~")+10,arr[i].length).toLowerCase()+"><span id='clear'>"+arr[i].substring(arr[i].indexOf("'msg':'")+7,arr[i].indexOf("','date':'"))+"</span><span id='hora'>"+arr[i].substring(arr[i].indexOf("'date':'")+19,arr[i].lastIndexOf("'")-3)+"</span></div>";
        }
        funcion();
    }
    
}
function volverPaTras(){
    clearInterval(intervaloChat);
    intervaloChat = null;
    intervaloNotificaciones = null;
    document.getElementById("buscar_Chat").innerHTML = buscarAmigo;
    document.getElementById("volver").removeEventListener('click',volverPaTras);
    anadirListenersDeLaCabeceraAnadirAmigos();
    anadirAmigo();
    intervaloNotificaciones = setInterval(() => {
        anadirAmigo();
    }, 2000);
    setInterval(() => {
        cargaChatNotificaciones();
    }, 2000);
}

function crearAjax(url,funct){

    var xhr  = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4  && this.status == 200){
            var text = this.responseText;
            funct(text);
        }
    }
    
}