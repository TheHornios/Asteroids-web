function crearMenuImagenesDrop(){
    let div1 = crearElemento('div');
    div1.id="fondoBlanco";
    añadir(document.body,div1);
    let div = crearElemento('div');
    div.id="menuImagenesDrop";
    añadir(document.body,div);
    document.getElementById("logoClick").removeEventListener("click",crearMenuImagenesDrop);
    añadirCabecera();
    añadirCuerpo();
    añadirPie();
}
function añadirCuerpo(){
    let div = crearElemento('div');
    div.id = 'cuerpoMenuImagenesDrop';
    añadir(query('#menuImagenesDrop')[0],div);
    crearSubuirFoto();
}
function crearSubuirFoto(){
    quitarHoverBtnElegir();
    quitarListenerBtnElegir();
    listenersDragAndDrop();
    query('#cuerpoMenuImagenesDrop')[0].innerHTML = '';
    $('#subirMenuImagenesDrop').css('border-bottom','royalblue 2px solid');
    $('#fotosMenuImagenesDrop').css('border-bottom','');
    let img = crearElemento('img');
    let h2 = crearElemento('h2');
    let h3 = crearElemento('h3');
    let div = crearElemento('div');
    img.src = '../img/menu/drop.png';
    h2.innerHTML = "Arrastra una foto de perfil aquí";
    h3.innerHTML = "-o-";
    div.innerHTML = "Selecciona una foto de tu ordenador";
    div.id = 'selectCuerpoMenuImagenesDrop';
    
    añadir(query("#cuerpoMenuImagenesDrop")[0],img);
    añadir(query("#cuerpoMenuImagenesDrop")[0],h2);
    añadir(query("#cuerpoMenuImagenesDrop")[0],h3);
    añadir(query("#cuerpoMenuImagenesDrop")[0],div);//gallery
    let divgale = crearElemento('div');
    divgale.id = 'gallery';
    añadir(query("#cuerpoMenuImagenesDrop")[0],divgale);
    div.addEventListener('click',botonPedirImagen);
    
}
function botonPedirImagen(){
    if(query("#imagenesForm")[0]==null){
        let from = crearElemento('form');
        from.setAttribute('method','post');
        from.setAttribute('enctype','multipart/form-data');
        from.id = 'imagenesForm';
        let input = crearElemento('input');
        input.type = 'file';
        input.id = 'botonCargaImagenes';
        input.setAttribute('name','filenme');
        input.setAttribute('accept','image/*');
        let input2 = crearElemento('input');
        input2.type = 'submit';
        input2.setAttribute('name','enviar');
        input2.id = 'btnEnviarFormualrio';
        input2.setAttribute('value','enviar');

        añadir(from,input);
        añadir(from,input2);
        añadir(query("#cuerpoMenuImagenesDrop")[0],from);
        query("#botonCargaImagenes")[0].addEventListener('change',function(){query("#btnEnviarFormualrio")[0].click();});
        query("#imagenesForm")[0].addEventListener('submit',dejarFocoBotonCargaImagenes);
    }
    query("#botonCargaImagenes")[0].click();

}
function dejarFocoBotonCargaImagenes(e){
    e.preventDefault();
    let divgale = crearElemento('div');
    divgale.id = 'gallery';
    añadir(query("#cuerpoMenuImagenesDrop")[0],divgale);
    let barraCargar = crearElemento("progress");
    barraCargar.id = 'progress-bar'
    barraCargar.max = 100 ;
    barraCargar.value = 0;
    añadir(query('#pieMenuImagenesDrop')[0],barraCargar);
    progressBar = document.getElementById('progress-bar');
    handleFiles(query("#botonCargaImagenes")[0].files);
}
function crearSelecionarFotos(){
    query('#cuerpoMenuImagenesDrop')[0].innerHTML = '';
    $('#fotosMenuImagenesDrop').css('border-bottom','royalblue 2px solid');
    $('#subirMenuImagenesDrop').css('border-bottom','');
    crearDivImagenFecha();
}
/* Esta funcnion crea una etiqueta img que nos valdra para luego poder selecionar que foto queremos */
function crearDivImagenFecha(){
    crearAjax('../Ajax_PHP/todasLasImagenesUnUsuario.php',function(e){
        if(e != '-1'){
            let arr = JSON.parse(e)
            for(let i = 0;i<arr.length-2;i++){
                let div = crearElemento('div');
                div.id = "selectFotoDiv";
                let img = crearElemento('img');
                img.src = '../img/imagenesUsuarios/'+usu+'/'+arr[i];
                img.draggable = false;
                añadir(div,img);
                img = crearElemento('img');
                img.draggable = false;
                img.src = '../img/iconos/ffe5e0ea9d.png';
                img.id = 'tickImagenesDrop';
                añadir(div,img);
                añadir(query("#cuerpoMenuImagenesDrop")[0],div);
                div.addEventListener('mouseover',ponerTick(div));
                div.addEventListener('mouseout',quitarTick(div));
                div.addEventListener('click',clickTick(div));
            }
        }
    });
}
function clickTick(cosa){
    return function(e){
        query("#selectFotoDiv").forEach(ele=>{
            if(ele.lastChild.src.includes('img/iconos/e1.png')){
                ele.lastChild.src =  '../img/iconos/ffe5e0ea9d.png';
                ele.lastChild.style.visibility = 'hidden';
            }
        });
        cosa.lastChild.src = '../img/iconos/e1.png';
        cosa.lastChild.style.visibility = 'visible';
        anadirHoverBtnElegir();
        anadirListenerBtnElegir();
    }
}
function ponerTick(cosa){
    return function(e){
        if(cosa.lastChild.src.includes('img/iconos/e1.png')){
            cosa.lastChild.style.visibility = 'visible';
        }else{
            cosa.lastChild.style.visibility = 'visible';
        }
        
    }
}
function quitarTick(cosa){
    return function(e){
        if(cosa.lastChild.src.includes('img/iconos/e1.png')){
            cosa.lastChild.style.visibility = 'visible';
        }else{
            cosa.lastChild.style.visibility = 'hidden';
        }
    }
}
/* Pulsar el boton elegir y cambiar el valor en la Base de Datos  */
function clickBotonElegir(){
    let imagenEleguida = -1;
    query('#selectFotoDiv').forEach(elem =>{
        if(elem.lastChild.src.includes('img/iconos/e1.png')){
            imagenEleguida = elem.firstChild.src.substring(elem.firstChild.src.lastIndexOf('/')+1,elem.firstChild.src.lastIndexOf('.'));
        }
    });
    crearAjax('../Ajax_PHP/cambiarImagenUsuario.php?num='+imagenEleguida,function(e){
        ponerImagenUsuario();
        query("#menuImagenesDrop")[0].remove();
        query("#fondoBlanco")[0].remove();
    });
}
function anadirListenerBtnElegir(){
    query('#elegiMenuImagenesDrop')[0].addEventListener('click',clickBotonElegir);
}
function quitarListenerBtnElegir(){
    if( query('#elegiMenuImagenesDrop')[0]!=undefined){
        query('#elegiMenuImagenesDrop')[0].removeEventListener('click',clickBotonElegir);
    }
}
function anadirHoverBtnElegir(){
    //query('#elegiMenuImagenesDrop')[0].style.background = 'rgb(51, 83, 180)';
    query('#elegiMenuImagenesDrop')[0].style.opacity = 1;
    query('#elegiMenuImagenesDrop')[0].style.cursor = 'pointer';
    query('#elegiMenuImagenesDrop')[0].addEventListener('mouseover',function(){query('#elegiMenuImagenesDrop')[0].style.background = 'rgb(51, 83, 180)'});
    query('#elegiMenuImagenesDrop')[0].addEventListener('mouseout',function(){query('#elegiMenuImagenesDrop')[0].style.background = 'royalblue'});
}
function quitarHoverBtnElegir(){
    if( query('#elegiMenuImagenesDrop')[0]!=undefined){
        query('#elegiMenuImagenesDrop')[0].style.cursor = 'initial';
        query('#elegiMenuImagenesDrop')[0].style.background = 'royalblue';
        query('#elegiMenuImagenesDrop')[0].style.opacity = 0.50;
        query('#elegiMenuImagenesDrop')[0].addEventListener('mouseover',function(){query('#elegiMenuImagenesDrop')[0].style.background = 'royalblue'});
    }
}
function añadirPie(){
    let div = crearElemento('div');
    div.id = "pieMenuImagenesDrop";
    let boton1 = crearElemento('div');
    let boton2 = crearElemento('div');
    boton1.id = "elegiMenuImagenesDrop";
    boton1.style.opacity = 0.50;
    boton2.id = "cancelMenuImagenesDrop";
    boton1.innerHTML = "Elegir como foto de perfil";
    boton2.innerHTML = "Cancelar";
    //boton1.addEventListener('click',clickBotonElegir);
    añadir(div,boton1);
    añadir(div,boton2);
    añadir(query('#menuImagenesDrop')[0],div);
    listenersPieMenuImagenesDrop();
    
}

var filesDone = 0
var filesToDo = 0
var progressBar = document.getElementById('progress-bar')
let uploadProgress = []

function añadirCabecera(){
    let div = crearElemento('div');
    let h1 = crearElemento('h1');
    let imgCerrar = crearElemento('img');
    imgCerrar.draggable = false;
    let subir = crearElemento('span');
    let fotos = crearElemento('span');
    let nav = crearElemento('div');
    nav.id = 'nav';
    imgCerrar.id = 'cerrarMenuImagenesDrop';
    subir.id = "subirMenuImagenesDrop";
    fotos.id = "fotosMenuImagenesDrop";
    h1.innerHTML = 'Selecciona una foto para tu perfil';
    imgCerrar.src = '../img/chat/close10.png'
    fotos.innerHTML = 'Fotos';
    subir.innerHTML = 'Subir fotos';
    añadir(div,h1);
    añadir(div,imgCerrar);
    añadir(nav,subir);
    añadir(nav,fotos);
    añadir(div,nav);
    añadir(query('#menuImagenesDrop')[0],div);
    listenersCabeceraMenuImagenesDrop();
}
function listenersPieMenuImagenesDrop(){
    query("#cancelMenuImagenesDrop")[0].addEventListener('click',()=>{query("#fondoBlanco")[0].remove();query("#menuImagenesDrop")[0].remove();});
}
function listenersCabeceraMenuImagenesDrop(){
    query("#cerrarMenuImagenesDrop")[0].addEventListener('mouseover',()=>{query("#cerrarMenuImagenesDrop")[0].src = '../img/chat/close11.png'});
    query("#cerrarMenuImagenesDrop")[0].addEventListener('mouseout',()=>{query("#cerrarMenuImagenesDrop")[0].src = '../img/chat/close10.png'});
    query("#cerrarMenuImagenesDrop")[0].addEventListener('click',()=>{query("#fondoBlanco")[0].remove();query("#menuImagenesDrop")[0].remove();});
    query("#subirMenuImagenesDrop")[0].addEventListener('click',crearSubuirFoto);
    query("#fotosMenuImagenesDrop")[0].addEventListener('click',crearSelecionarFotos);
}
/* Drag  And Drop */
function listenersDragAndDrop(){
    // Añado los preventDefaults a todos 
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        query("#menuImagenesDrop")[0].addEventListener(eventName, preventDefaults, false)
    });
    //Esto va a servir para poner el reborde en otro color 
    ['dragenter', 'dragover'].forEach(eventName => {
        query("#menuImagenesDrop")[0].addEventListener(eventName, bordeAzul, false)
    });

    ['dragleave', 'drop'].forEach(eventName => {
        query("#menuImagenesDrop")[0].addEventListener(eventName, quitarBordeAzul, false)
    });
    // pillar el archivo a selecionar 
    query("#menuImagenesDrop")[0].addEventListener('drop', handleDrop, false); 
}
function quietarListenersDragAndDrop(){
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        query("#menuImagenesDrop")[0].removeEventListener(eventName, preventDefaults, false)
    });
    //Esto va a servir para poner el reborde en otro color 
    ['dragenter', 'dragover'].forEach(eventName => {
        query("#menuImagenesDrop")[0].removeEventListener(eventName, bordeAzul, false)
    });

    ['dragleave', 'drop'].forEach(eventName => {
        query("#menuImagenesDrop")[0].removeEventListener(eventName, quitarBordeAzul, false)
    });
    // pillar el archivo a selecionar 
    query("#menuImagenesDrop")[0].removeEventListener('drop', handleDrop, false); 
}
function handleFiles(files) {
    files = [...files]
    initializeProgress(files.length) 
    files.forEach(subirArchivos)
    files.forEach(vistaPrevia) //teminar est
}
function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files

    query('#cuerpoMenuImagenesDrop')[0].innerHTML = '';
    let divgale = crearElemento('div');
    divgale.id = 'gallery';
    añadir(query("#cuerpoMenuImagenesDrop")[0],divgale);
    let barraCargar = crearElemento("progress");
    barraCargar.id = 'progress-bar'
    barraCargar.max = 100 ;
    barraCargar.value = 0;
    añadir(query('#pieMenuImagenesDrop')[0],barraCargar);
    progressBar = document.getElementById('progress-bar')

    handleFiles(files)
}
function bordeAzul(e) {
    $("#menuImagenesDrop").css("border",'royalblue solid 2px');
}

function quitarBordeAzul(e) {
    $("#menuImagenesDrop").css("border",'transparent solid 2px');
}
function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
}
function subirArchivos(file, i) {
    var url = '../Ajax_PHP/subirFotos.php';
    var xhr = new XMLHttpRequest()
    var formData = new FormData()
    xhr.open('POST', url, true)

    // Add following event listener
    xhr.upload.addEventListener("progress", function(e) {
        updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
    })

    xhr.addEventListener('readystatechange', function(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
           // console.log(this.responseText);
            setTimeout(function(){ if(query('#progress-bar')[0]!=null){query('#progress-bar')[0].remove()} }, 100);
            quietarListenersDragAndDrop();
            setTimeout(function(){  crearSelecionarFotos(); }, 200);
        }
        else if (xhr.readyState == 4 && xhr.status != 200) {
            query('#progress-bar')[0].remove() 
            crearSubuirFoto();
        }
    })

    formData.append('file', file)
    xhr.send(formData)
}
function vistaPrevia(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
        let img = document.createElement('img')
        img.src = reader.result
        img.draggable = false;
        document.getElementById('gallery').appendChild(img)
    }
}
function initializeProgress(numfiles) {
    progressBar.value = 0
    uploadProgress = []

    for(let i = numfiles; i > 0; i--) {
        uploadProgress.push(0)
    }
}
function updateProgress(fileNumber, percent) {
    uploadProgress[fileNumber] = percent
    let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
    progressBar.value = total
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
function query(css){
    return document.querySelectorAll(css);
}
function crearElemento(texto){
    return document.createElement(texto);
}
function añadir(elemento1,elemento2){
    elemento1.appendChild(elemento2);
}