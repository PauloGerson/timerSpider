let timerP = document.querySelector('.clock');
let timer = new Date();
let dia = String(timer.getDate());
let hora = String(timer.getHours())
let min = String(timer.getMinutes())
let secon = String(timer.getSeconds())
console.log(secon);

let format = dia + ':' + hora + ':' + min + ':' + secon;
timerP.innerHTML = format
 console.log(format)