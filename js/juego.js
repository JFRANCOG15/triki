let turno ='O'
impTablero()

function jugada(id_Celda){

    let celda = document.getElementById(id_Celda)
    celda.innerText = turno
    turno = cambiaTurno(turno)
}

function impTablero(turno){
    let tablero = document.getElementById('contenedor')
    for (i=1;i<=9;i++){
     tablero.innerHTML += `<div id="${i}" class="celda" onclick="jugada('${i}')"></div>`   
}
}

function cambiaTurno(turno){
    if (turno == 'X'){
        return turno = 'O'
    } else{
        return turno ='X'
    }
}