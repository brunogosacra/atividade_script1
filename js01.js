function calcularIMC() {
    const pesoInput = document.getElementById('peso').value;
    const alturaInput = document.getElementById('altura').value;

    const peso = parseFloat(pesoInput);
    const altura = parseFloat(alturaInput);
    const elementoResultado = document.getElementById('resultado');

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        elementoResultado.style.display = "block";
        elementoResultado.innerHTML = "Por favor, digite valores válidos para peso e altura.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal (adequado)";
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30.0 && imc <= 39.9) {
        classificacao = "Obesidade";
    } else {
        classificacao = "Obesidade grave";
    }

    
    elementoResultado.style.display = "block";
    elementoResultado.innerHTML = `IMC: ${imc.toFixed(2)}<br>Classificação:<br>${classificacao}`;
}