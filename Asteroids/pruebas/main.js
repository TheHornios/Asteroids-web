var players = [];
var salas = [];
var disparos = [];

var connections = [];
var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var io = require('socket.io')(http);
console.log('runing');

class DisparoServidor{
    constructor(id,x,y,angulo,direccionX,direccionY){
        this.id = id;
        this.x = x;
        this.y = y;
        this.angulo = angulo;
        this.direccionX = direccionX;
        this.direccionY = direccionY;
    }
}
class Nave{
    constructor(id,x,y,angulo,aceleracion){
        this.id = id;
        this.x = x;
        this.y = y;
        this.angulo = angulo;
        this.aceleracion = aceleracion;
    }
}


var port = 2525;
http.listen(port);

/*io.on('connection', (socket) => {
    console.log("nuvea Conexion");
});*/

function getCounter(){
    io.sockets.emit('getCounter',connections.length);
}
function getSalas(e){
    io.sockets.emit('getSalas',e);
}
function getDeisparos(disparos123){
    io.sockets.emit('getDeisparos',disparos123);
}
function salaYaExiste(creador){
    io.sockets.emit('salaYaExiste',creador);
}
function heartBeat(){
    io.sockets.emit('heartBeat',players);
}
function getSalaEspecifica(dato){
    io.sockets.emit('getSalaEspecifica',dato);
}
setInterval(heartBeat,5);

io.sockets.on('connection',function(socket){
    //anadir Disaparos
    socket.on('anadirDisparos',function(data){
        
        let encontrado = -1;
        for(let i = 0;i<disparos.length;i++){
            if(disparos[i][0]==data.id){
                encontrado = i;
            }
        }
        if(encontrado!=-1){
            disparos[encontrado][1] = data.arr;
        }else{
            disparos.push(new Array(data.id,data.arr));
        }
    });
    //PedirDisparos
    socket.on('pedirDisapros',function(data){
        let arr = new Array();
        for(let i = 0;i<disparos.length;i++){
            if(disparos[i][0]==data){;
                
                arr = disparos[i][1];
            }         
        }
      
        if(arr.length != 0){
            getDeisparos(arr);
        }
        
    });
    //Crear Sala    
    socket.on('starSala',function(data){
        let existe = true;
        for(let i = 0;i<salas.length;i++){
            if(salas[i][0]==data.id){
                existe = false;
            }
        }
        if(!existe){
            salaYaExiste(data.creador);
        }else{
            salas.push(new Array(data.id,data.creador,""));
            getSalas(data.id);
        }
    });
    //Unirse a una Sala
    socket.on('unirseSala1vs1',function(data){
        let existe = true;
        for(let i = 0;i<salas.length;i++){
            if(salas[i][0]==data.id&&salas[i][2]==""){
                existe = false;
                salas[i][2] = data.amigo;
            }
        }
        if(!existe){
            getSalas(data.id);
        }else{
            salaYaExiste(data.amigo);
        }
    });
    //ennviar SalaJugador Exacto
    socket.on('salaEspecifica',function(data){
        let existe = true;
        let int = -1;
        for(let i = 0;i<salas.length;i++){
            if(salas[i][1]==data||salas[i][2]==data){
                existe = false;
                int = i;
            }
        }
        if(!existe){
            getSalaEspecifica(salas[int]);
        }
    });
    //Inicio de partida
    socket.on('start',function(data){
        connections.push(socket);
        getCounter();
        console.log(data.id);
        players.push(new Nave(data.id,data.x,data.y,data.angulo,data.aceleracion));
    });
    //Actualizacion
    socket.on('actualizar',function(data){
        
        for(let i = 0;i<players.length;i++){
           
            if(players[i].id == data.id){
                players[i].x = data.x;
                players[i].y = data.y;
                players[i].angulo = data.angulo;
                players[i].aceleracion = data.aceleracion;
            }
        }
        
    });
});