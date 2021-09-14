function Converter() {
    var valorElemento = document.getElementById("valor");

    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);


    var valorEmReal = valorEmDolar * 5.24;
    console.log(valorEmReal)
    var elementoConvertido = document.getElementById("valorConvertido");
    valorConvertido = "O valor em real é R$ " + valorEmReal.toFixed(2);
    elementoConvertido.innerHTML = valorConvertido;
}