const chatBox = '                           hola                                             ';

if(chatBox.trim().length == 0) {
    console.log('No se puede enviar un mensaje vacio');
} else {
    console.log('Enviado');
}


const coordinates = [ 1, 2, 3, [0.5, 0.4], [2, 3, 4] ];

console.log(coordinates.flat());