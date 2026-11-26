let contagem de classificação = 0;
let contaazar = 0;

function sorte() {
    let min = 1;
    let max = 100;
    let dif = max - min + 1;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);


    let mostrar = document.getElementById('resultado')

    if (num > 50) {
        contasorte++;
        mostrar.innerHTML = `<h1>SORTE: ${contasorte}</h1><img src="https://www.deezer.com/br/album/594953592">`;
    }else{
        contaazar++;
    mostrar.innerHTML = `<h1>AZAR: ${contaazar}<h1><img src="https://es.pinterest.com/pin/872713234195776915/">`;
    }
}