let turno = turnoAleatorio();
let jugador1 = [];        
let jugador2 = [];          
let juegoTerminado = false;

const jugadasGanadoras = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], 
    [1, 4, 7], [2, 5, 8], [3, 6, 9], 
    [1, 5, 9], [3, 5, 7]             
];

const resultadoEl = document.getElementById('ganador');

impTablero();
actualizarMensaje();



function turnoAleatorio() {
    let numero = Math.floor(Math.random() * 2) + 1;
    return numero === 1 ? 'X' : 'O';
}

function impTablero() {
    const tablero = document.getElementById('contenedor');
    tablero.innerHTML = '';
    for (let i = 1; i <= 9; i++) {
        tablero.innerHTML += `<div id="${i}" class="celda" onclick="jugada(${i})"></div>`;
    }
}

function jugada(id_Celda) {
    if (juegoTerminado) return;

    const celda = document.getElementById(id_Celda);

    if (celda.innerText !== '') return;

    celda.innerText = turno;
    celda.classList.add('ocupada');

    if (turno === 'X') {
        jugador1.push(id_Celda);
        if (hayGanador(jugador1)) {
            finalizarJuego('X');
            return;
        }
    } else {
        jugador2.push(id_Celda);
        if (hayGanador(jugador2)) {
            finalizarJuego('O');
            return;
        }
    }
    if (jugador1.length + jugador2.length === 9) {
        finalizarJuego(null);
        return;
    }

    turno = cambiaTurno(turno);
    actualizarMensaje();
}

function hayGanador(jugadasDelJugador) {
    return jugadasGanadoras.some(combinacion =>
        combinacion.every(casilla => jugadasDelJugador.includes(casilla))
    );
}

function cambiaTurno(turnoActual) {
    return turnoActual === 'X' ? 'O' : 'X';
}

function finalizarJuego(ganador) {
    juegoTerminado = true;
    if (ganador) {
        resultadoEl.innerText = `${ganador} ha ganado!`;
    } else {
        resultadoEl.innerText = 'Empate';
    }
}

function actualizarMensaje() {
    resultadoEl.innerText = `Turno de: ${turno}`;
}

function reiniciarJuego() {
    jugador1 = [];
    jugador2 = [];
    juegoTerminado = false;
    turno = turnoAleatorio();
    impTablero();
    actualizarMensaje();
}
