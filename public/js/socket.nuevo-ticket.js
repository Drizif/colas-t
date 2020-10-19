// Comando para establecer la conexion
var socket = io();
var label = $('#lblNuevoTicket');


socket.on('connect', function () {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function () {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', (resp) => {
    label.text(resp.actual);
});

$('button').on('click', function () {

    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket);
    });

});