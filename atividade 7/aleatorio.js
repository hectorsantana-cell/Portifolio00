function aleatorio() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    let mostar = document.getElementById("resultado");
    mostar.innerHTML = `<p>Acabei de pensar no número ${num}.</p>`
if(num === 67) {
    mostar.innerHTML = `<p>Você é burro</p>`
}else{}
}