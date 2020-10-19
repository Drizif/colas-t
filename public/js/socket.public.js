let socket = io();

let lblT1 = $('#lblTicket1');
let lblT2 = $('#lblTicket2');
let lblT3 = $('#lblTicket3');
let lblT4 = $('#lblTicket4');

let lblE1 = $('#lblEscritorio1');
let lblE2 = $('#lblEscritorio2');
let lblE3 = $('#lblEscritorio3');
let lblE4 = $('#lblEscritorio4');

let lblT = [lblT1, lblT2, lblT3, lblT4];
let lblE = [lblE1, lblE2, lblE3, lblE4];


socket.on('estadoActual', (data) => {
    actualizaHtml(data.ultimos4);
});

socket.on('ultimos4', (data) => {
    actualizaHtml(data.ultimos4);

    let audio = new Audio('audio/new-ticket.mp3');
    audio.
    audio.play();
});

function actualizaHtml(ultimos4) {
    for (let i = 0; i < ultimos4.length; i++) {
        lblT[i].text('Ticket ' + ultimos4[i].numero);
        lblE[i].text('Escritorio ' + ultimos4[i].escritorio);

    }
}