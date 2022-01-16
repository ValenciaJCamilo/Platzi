var opc1 = "tijeras";
var opc2 = "piedra";
var opc3 = "papel";

function resultadoGanador(usuario, pc) {
    switch (true) {
        case usuario === pc :
            console.log("Empate")
        break;
        case usuario === opc1 && pc === opc3 :
            console.log("Ganaste")
        break;
        case usuario === opc2 && pc === opc1 :
            console.log("Ganaste")
        break;
        case usuario === opc3 && pc === opc2 :
            console.log("Ganaste")
        break;
        default: 
            console.log("Perdiste")
    }
}

