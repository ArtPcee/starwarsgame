let partidaInciada = false;
let tieFighters = [];
let xWing;
let textArea = document.getElementById('Partida');

function iniciarPartida() {

    partidaInciada = true;

    const numeroSerieXWing = document.getElementById('numeroSerie').value;
    const quiereR2D2 = document.getElementById('quiereR2D2').checked;


    for (let i = 1; i <= 5; i++) {

        const tieFighter = new TieFighter({
            numeroSerie: i,
            vidaActual: 10,
            vidaMax: 10,
            fuerzaAtaque: 2
        })

        tieFighters.push(tieFighter);
    };



    xWing = new XWing({
        numeroSerie: numeroSerieXWing,
        vidaActual: 20,
        vidaMax: 20,
        fuerzaAtaque: 4,
        r2d2Incorporado: quiereR2D2,
        escudoActual: 10,
        escudoMaximo: 10
    });




    textArea.value = '¡Bienvenido al juego! Tu X-Wing ha sido configurado:\n\n';

}


function botonDisparar() {
    if (!partidaInciada) {
        alert('Debes iniciar una partida para poder jugar.');

    } else if (tieFighters.length === 0) {
        textArea.value += '¡Enhorabuena! Has eliminado a todos los enemigos.';
        partidaInciada = false;

    } else {

        if (tieFighters[0].vidaActual > 0) {
            xWing.disparar(tieFighters[0]);
            textArea.value += `Has hecho ${xWing.fuerzaAtaque} de daño al TieFigther y le has dejado a: ${tieFighters[0].vidaActual} de vida.\n`;

            if (tieFighters[0].vidaActual > 0) {
                tieFighters[0].escogerAccion(xWing);
                textArea.value +=`Tu escudo actual es de: ${xWing.escudoActual}.\nTu vida actual es de: ${xWing.vidaActual}.\n`;
                textArea.value +=`El enemigo con numero: ${tieFighters[0].numeroSerie} le quedan ${tieFighters[0].vidaActual} de vida.\n\n`;

                if (xWing.vidaActual <= 0) {
                    textArea.value += 'Has sido derrotado!! Mas suerte la proxima vez.';
                    partidaInciada = false;

                }
            }

        } else {
            textArea.value += `El enemigo con numero: ${tieFighters[0].numeroSerie} ha sido derrotado.\n\n`;
            tieFighters.shift();   

        }
    }

}

function botonReparar() {
    if (!partidaInciada) {
        alert('Debes iniciar una partida para poder jugar.');

    } else {
        xWing.reparar();
        textArea.value +=`Tu escudo actual es de: ${xWing.escudoActual}.\nTu vida actual es de: ${xWing.vidaActual}.\n`;

        if (tieFighters[0].vidaActual > 0) {
            tieFighters[0].escogerAccion(xWing);
            textArea.value +=`Tu escudo actual es de: ${xWing.escudoActual}.\nTu vida actual es de: ${xWing.vidaActual}.\n`;
            textArea.value +=`El enemigo con numero: ${tieFighters[0].numeroSerie} le quedan ${tieFighters[0].vidaActual} de vida.\n\n`;

            if (xWing.vidaActual <= 0) {
                textArea.value += 'Has sido derrotado!! Mas suerte la proxima vez.';
                partidaInciada = false;

            }
        }
    }
}

