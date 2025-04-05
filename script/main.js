let meses = document.querySelector('#meses');
let dias = document.querySelector('#dias');
let horas = document.querySelector('#horas');
let minutos = document.querySelector('#minutos');
let segundos = document.querySelector('#segundos');
let clock;
let input_date = false;

function start(){
    clock  = setInterval(timer,1000)
    getJson()
}
function zero(value){
    
    return value<10&&value.length<2?"0"+value:value;
}
function format(json){
    return `${json.Ano}-${zero(json['Mês'])}-${zero(json.Dia)}T${zero(json.Hora)}:${zero(json.Minutos)}`
}
function getJson(){
    const AJAX = new XMLHttpRequest()
    AJAX.open("GET","lancamento.json");
    AJAX.send();
    AJAX.onload=function () {input_date=format(JSON.parse(AJAX.responseText))  }

}
function timer(){
    if(input_date){
        let format = formatsDate(new Date(input_date).getTime()-Date.now())
        segundos.innerHTML = format[4];
        minutos.innerHTML = format[3];
        horas.innerHTML = format[2];
        dias.innerHTML = format[1];
        meses.innerHTML = format[0];
        format[0]<2?meses.parentNode.querySelector("p").innerHTML="Mês":0

    }
}
 
start()
function formatsDate(duration) {
    if (isNaN(duration)) {
        return [0, 0, "00", "00", "00"];
    }
    
    // Convertendo para valores positivos
    duration = Math.max(duration, 0);
    
    // Calculando cada unidade
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    const days = Math.floor(duration / (1000 * 60 * 60 * 24)) % 30; // Dias no mês atual
    const months = Math.floor(duration / (1000 * 60 * 60 * 24 * 30)); // Meses totais
    
    // Formatando a saída
    return [
        months,
        days,
        hours < 10 ? `0${hours}` : hours,
        minutes < 10 ? `0${minutes}` : minutes,
        seconds < 10 ? `0${seconds}` : seconds
    ];
}
