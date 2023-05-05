let name = prompt("isminizi giriniz");

let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let newday = now.getDate();

if (newday == 0){
    day = "pazar"
}
else if (newday == 1){
    day = "pazartesi"
}
else if (newday == 2){
    day = "salı"
}
else if (newday == 3){
    day = "çarşamba"
}
else if (newday == 4){
    day = "perşembe"
}
else if (newday == 5){
    day = "cuma"
}
else if (newday == 6){
    day = "cumartesi"
}

document.querySelector(".header").innerHTML = `
     Merhaba , ${name} ! Hoşgeldiniz !                 
` 

document.querySelector(".time").innerHTML = `
    ${hours} : ${minutes} : ${seconds}  ${day}               
` 
document.querySelector(".p").innerHTML = `
    ${p}              
` 