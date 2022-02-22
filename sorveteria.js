function gerarTemperaturaAleatoria(){
    let sinal = Math.random();
    let temperatura = Math.floor(Math.random()*5);

    if(sinal > 0.5)
    temperatura = Math.floor(Math.random()*(-5));
    else
    temperatura = Math.floor(Math.random()*(-5));

    
    console.log (temperatura);

if (temperatura <= - 5) 
console.log("A temperatura está normal! - " + temperatura);
else if (temperatura > -5 && temperatura < 0)
console.log ("Cuidado! A temperatura está subindo! - " + temperatura)
else 
console.log(" A temperatura é crítica - " + temperatura);

//FIRA CODE



}

//Criar a ideia de um sensor que lê a temperatura periodicamente 

setInterval(gerarTemperaturaAleatoria, 10000);


