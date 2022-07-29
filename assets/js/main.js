const form = document.querySelector('.form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector(".input-peso");
    const inputAltura = evento.target.querySelector(".input-altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado(`Peso inválido`, false);
        return;
    }
    if (!altura) {
        setResultado(`Altura inválida`, false)
        return;
    }
    const imc = getImc(peso, altura);
    const NivelImc = getNivelImc(imc);

    const msg = `Seu IMC é de ${imc} ${NivelImc}`

    setResultado(msg, true);
});


function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed();
}

function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso normal', 'sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc <= 18) return nivel[0];
    if (imc >= 18.5 && imc <= 24.9) return nivel[1];
    if (imc >= 25 && imc <= 29.9) return nivel[2];
    if (imc >= 30 && imc <= 34.9) return nivel[3];
    if (imc >= 35 && imc <= 39.9) return nivel[4];
    if (imc >= 40) return nivel[5];

}

function criaParagrafo() {
    const paragrafo = document.createElement('p');// cria um <p> na memoria
    return paragrafo;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';//Da o valor pra esse paragrafo 
    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('resultado-valido');
    } else {
        p.classList.add('resultado-invalido');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}




