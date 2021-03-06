
// Comando para establecer la conexion

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connection', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

// Escuchar 'estadoActual

socket.on('estadoActual', function( resp ) {
    
    label.text( resp.actual);
});

$('button').on('click', function() {
    
    socket.emit('siguienteTicket', null, function(siguienteTicket){
        label.text(siguienteTicket);
    });
    
});

