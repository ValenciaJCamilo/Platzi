const caracteres = [
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    ["0","1","2","3","4","5","6","7","8","9"],
    ["!","#","$","&","/","(",")","*","+","-",".","_",","]
]
let pass="";


function ramdom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


function newPassword(cont=0){
    let i = ramdom(0,caracteres.length)
    let character = caracteres[i][ramdom(0,caracteres[i].length)]
    pass += character;
    cont++;
    if(cont === 20){
          document.write(`Su nueva contraseña es: ${pass}`);
        return
    }
    newPassword(cont);
}

newPassword();
