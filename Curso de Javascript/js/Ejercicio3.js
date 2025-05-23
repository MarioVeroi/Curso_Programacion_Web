var num1 = prompt("¿Cuál es el primer número a sumar?");
var num2 = prompt("¿Cuál es el segundo número a sumar?");

//Totales
var total = parseInt(num1) + parseInt(num2);
var totalresta = parseInt(num1) - parseInt(num2);
var totalDivision = parseInt(num1) / parseInt(num2);
var totalMulti = parseInt(num1) * parseInt(num2);

document.getElementById("resultadoSumas").textContent = `${num1} + ${num2} = ${total}`;
document.getElementById("resultadoRestas").textContent = `${num1} - ${num2} = ${totalresta}`
document.getElementById("resultadoDivision").textContent = `${num1} / ${num2} = ${totalDivision}`
document.getElementById("resultadoMulti").textContent = `${num1} * ${num2} = ${totalMulti}`