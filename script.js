
function calcularImc() {

    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const nome = document.getElementById("nome").value
    const imc = parseInt((peso / (altura * altura))).toFixed(2);

        let resultado = document.getElementById("resultado");
        console.log(resultado.innerText)
        if(resultado.innerText = undefined){
            document.getElementById('resultado').textContent = `Digite seu peso e sua altura`;
            return
        }else{
            document.getElementById('resultado').textContent = `Olá ${nome} o seu imc é ${imc}. ${classificacao(imc)}`;
        }
}
calcularImc();


function classificacao(imc){
    
    if(imc < 18.5) {
        return "Voce esta abaixo do peso Ideal"
    }
    if(imc >= 18.5 && imc <= 24.9) {
        return "Voce esta com o seu peso Ideal"
    }
    if(imc >= 25 && imc <= 29.0) {
        return "Voce esta acima do peso Ideal"
    }
    if(imc >= 30 && imc <= 34.9) {
        return "Voce esta com Grau de obesidade |"
    } 
    if(imc >= 35 && imc <= 39.9) {
        return "Voce esta com Grau obesidade  ||"
    }
    if(imc >= 40){
        return "Voce esta com Grau obesidade  |||"
    }
}

function remuveValue() {
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('nome').value = '';
    document.getElementById("resultado").innerHTML = "";
}

remuveValue();
