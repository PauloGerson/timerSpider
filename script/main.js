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
    console.log(input_date)
    if(input_date){
        let format = formatsDate(new Date(input_date).getTime()-Date.now())
        segundos.innerHTML = format[3];
        minutos.innerHTML = format[2];
        horas.innerHTML = format[1];
        dias.innerHTML = format[0];
    }
}
 
start()
function formatsDate(duration){
    let s = isNaN(duration)?0:parseInt(((duration/1000)%60))
    let m = isNaN(duration)?0:parseInt(((duration/1000/60)%60))
    let h = isNaN(duration)?0:parseInt(((duration/1000/60/60)%24))
    let d = isNaN(duration)?0:parseInt(((duration/1000/60/60/24)%24))
    return [d, h<10?h<0?"00":"0"+h:h, m<10?m<0?"00":"0"+m:m, s<10?s<0?"00":"0"+s:s]
}