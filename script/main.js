let dias = document.querySelector('#dias');
let horas = document.querySelector('#horas');
let minutos = document.querySelector('#minutos');
let segundos = document.querySelector('#segundos');

let teste = 60;
let teste2 = 10;

let horasHoje = new Date()

let teste3 = 5;

let teste4 = 6;
let clock;

function start(){
    clock  = setInterval(timer,1000)
    
}
function timer(){
    teste--
    if(teste < 0){
        teste = 60;
        teste2--;
    }
    if(teste2 < 0){
        teste2 = 60;
        teste3--;
    }
    if(teste3  < 0){
        teste3 = 60
        teste4--;
    }

    var formatS = (teste < 10 ? '0' + teste : teste)
    var formatM = (teste2 < 10 ? '0' + teste2 : teste2)
    var formatH = (teste3 < 10 ? '0' + teste3: teste3)
    var formatD = (teste4 < 10 ? '0' + teste4: teste4)

    segundos.innerHTML = formatS;
    minutos.innerHTML = formatM;
    horas.innerHTML = formatH;
    dias.innerHTML = formatD;
}
 
start()
