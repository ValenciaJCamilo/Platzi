/*
Escribe una función recursiva para encontrar
el número mayor de un array.
*/
const miArray = [];
let max = 0;
let min;

function llenar(){
    for (let i = 0; i < 10; i++)
    miArray.push(Math.floor(Math.random() * (101 - 1)) + 1);
    console.log(miArray);
}

function numeroMayor(i=0){
    if(miArray==""){
        llenar();
        let max=0;
        min = miArray[0];
    }

    if(max < miArray[i]){
        max = miArray[i];
    }
    if(min > miArray[i]){
        min = miArray[i];
    }
    if(i === miArray.length){
        console.log(`El numero mayor de este array es: ${max}`)
        console.log(`El numero menor de este array es: ${min}`)
        return;
    }else{
        i++;
        numeroMayor(i);
    }

}

numeroMayor();
