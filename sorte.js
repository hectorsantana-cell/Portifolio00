let contasorte = 0; 
let contaazar = 0; 

function sorte() { 
    let min = 1; 
    let max = 100; 
    let dif = max - min + 1; 
    let aleatorio = Math.random(); 
    let num = min + Math.trunc(dif * aleatorio); 
    let mostrar = document.getElementById('resultado'); 

    if (num > 50) { 
        contasorte++; 
        mostrar.innerHTML = `<h1>SORTE: ${contasorte}</h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdX_dEMM01TrplLTI7NJ0pvAHk4jqEYxB2MBGdZdr9nzDOg_gOXt9OfI6y&s=10">`; 
    } else { 
        contaazar++; 
        mostrar.innerHTML = `<h1>AZAR: ${contaazar}</h1><img src="https://i.pinimg.com/1200x/03/8c/e3/038ce36954ae191fb5543951801d7c7e.jpg">`; 
    } 
}
