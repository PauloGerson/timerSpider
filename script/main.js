let dias = document.querySelector('#dias');
let horas = document.querySelector('#horas');
let minutos = document.querySelector('#minutos');
let segundos = document.querySelector('#segundos');
let clock;

function start(){
    clock  = setInterval(timer,1000)
}
function timer(){
    let format = formatsDate(new Date('2022-01-03T23:00').getTime()-Date.now())

    segundos.innerHTML = format[3];
    minutos.innerHTML = format[2];
    horas.innerHTML = format[1];
    dias.innerHTML = format[0];
}
 
start()
function formatsDate(duration){
    let s = isNaN(duration)?0:parseInt(((duration/1000)%60))
    let m = isNaN(duration)?0:parseInt(((duration/1000/60)%60))
    let h = isNaN(duration)?0:parseInt(((duration/1000/60/60)%24))
    let d = isNaN(duration)?0:parseInt(((duration/1000/60/60/24)%24))
    return [d, h<10?"0"+h:h, m<10?"0"+m:m, s<10?"0"+s:s]
}