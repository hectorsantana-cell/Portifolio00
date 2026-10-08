
let numero

function parouimpar(){
numero = Number(prompt("informe um número: "));

resultado = numero % 2;

if(numero == 79){
    alert("SLOWPOKE")
}

if(resultado == 0){
    alert("o número " + numero + " é par");
}else{
    alert("o número " + numero + " é impar");
}
}