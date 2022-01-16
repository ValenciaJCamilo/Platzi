/*Declaramos las variables globales*/
var opc1 = "piedra";
var opc2 = "papel";
var opc3 = "tijera";

/*Declaramos la función*/
var resultado = function(usuario, pc){
    if(usuario != pc){
        if(usuario === opc1 && pc === opc3){
            console.log("El usuario ganó con: "+ opc1)
        }else if(usuario === opc2 && pc === opc1){
            console.log( "El usuario ganó con: " + opc2)
        }else if(usuario === opc3 && pc === opc2){
            console.log("El usuario ganó con: " + opc3)
        }else{
            console.log("La PC ganó!")
        }
    }else if(usuario === pc){
        console.log("Empate")
    }
};

resultado(opc1,opc3) //El usuario ganó con piedra```