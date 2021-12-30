let text = "que funcion tan curiosa";
let first, last, text2;
function mayus(i=0){
    if(i == 0){
        first = text[i].toUpperCase();
    }
    if ( i == text.length-1){
        last = text[i].toUpperCase();
        text2 = first+text.slice(1,text.length-1)+last;
        console.log(`Cadena modificada: ${text2}`);
        return;
    }
    i++;
    mayus(i);
}
mayus();
