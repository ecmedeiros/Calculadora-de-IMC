const form = document.querySelector('.form');


function CalculaIMC(evento) {
    evento.preventDefault();
    let peso = document.querySelector(".input-peso").value;
    let altura = document.querySelector(".input-altura").value;
    let imc = (peso / altura ** 2).toFixed(2);
    let resultado = document.querySelector('.resultado');
    let condicao = "";

    if (imc <= 18) {
        condicao = "(Abaixo do peso)";
    } else if (imc >= 18.5 && imc <= 24.9) {
        condicao = "(Peso Normal)";
    } else if (imc >= 25 && imc <= 29.9) {
        condicao = ("(Sobrepeso)");
    } else if (imc >= 30 && imc <= 34.9) {
        condicao = "(Obesidade grau 1)";
    } else if (imc >= 35 && imc <= 39.9) {
        condicao = "Obesidade grau 2";
    } else if (imc >= 40) {
        condicao = "Obesidade grau 3";
    }
    resultado.innerHTML = `Seu IMC é ${imc} ${condicao}`

}

form.addEventListener('submit', CalculaIMC);


