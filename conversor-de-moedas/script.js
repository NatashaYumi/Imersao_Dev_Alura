function Converter() {
  const dolar = 5.2634,
    euro = 6.15511,
    bitCoin = 230445.25,
    ethereun = 16055.96,
    binanceCoin = 230445.25;

  var valorEmReal = 0,
    valorEmMoedaEstrangeira = parseFloat(
      document.getElementById("valor").value
    );

  if (document.getElementById("moeda").value == "euro") {
    Calcular(valorEmMoedaEstrangeira, euro);
  } else if (document.getElementById("moeda").value == "dolar") {
    Calcular(valorEmMoedaEstrangeira, dolar);
  } else if (document.getElementById("moeda").value == "bitCoin") {
    Calcular(valorEmMoedaEstrangeira, bitCoin);
  } else if (document.getElementById("moeda").value == "ethereun") {
    Calcular(valorEmMoedaEstrangeira, ethereun);
  } else {
    Calcular(valorEmMoedaEstrangeira, binanceCoin);
  }

  function Calcular(valorEmMoedaEstrangeira, moeda) {
    valorEmReal = valorEmMoedaEstrangeira * moeda;
    document.getElementById("valorConvertido").innerHTML =
      "O resultado em real é R$ " +
      valorEmReal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });
  }
}