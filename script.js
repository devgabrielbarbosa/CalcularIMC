
function calcularImc() {

    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const nome = document.getElementById("nome").value
    const imc = parseFloat((peso / (altura * altura))).toFixed(1);

    let resultado = document.getElementById("resultado");
    console.log(resultado.innerText)
    if (nome === '' || altura === '' || peso === '') {
        resultado.innerText = `Preencha os campos corretamente acima`;
    } else {
        document.getElementById(
            'resultado'
        ).innerText = `Olá ${nome}, o seu imc é: ${imc} ${classificacao(imc)}`;
    }

}
calcularImc();


function classificacao(imc) {

    if (imc < 18.5) {
        return "voce está abaixo do peso Ideal"
    }
    if (imc >= 18.5 && imc <= 24.9) {
        return "voce está com o seu peso Ideal"
    }
    if (imc >= 25 && imc <= 29.0) {
        return "voce está acima do peso Ideal"
    }
    if (imc >= 30 && imc <= 34.9) {
        return "voce está com Grau de obesidade |"
    }
    if (imc >= 35 && imc <= 39.9) {
        return "voce está com Grau obesidade  ||"
    }
    if (imc >= 40) {
        return "voce está com Grau obesidade  |||"
    }
}

function remuveValue() {
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('nome').value = '';
    document.getElementById("resultado").innerHTML = "";
}

remuveValue();
