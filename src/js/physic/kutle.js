const result = document.getElementById("result");
const suankiBirim = document.getElementById("suanki-birim");
const donusecekBirim = document.getElementById("donusecek-birim");
const sayiC = document.getElementById("sayi");

const factors = {
  mg: 0.001,        // miligram
  g: 1,             // gram
  kg: 1000,         // kilogram
  ton: 1000_00,   // ton (metrik)
  oz: 28.349523125, // ons
  lb: 453.59237,    // pound
  ct: 0.2           // karat
};


document.getElementById("kutle-donusturme").addEventListener("submit", function(){

    const value = Number(sayiC.value);
    const from = suankiBirim.value;
    const to = donusecekBirim.value;

    result.innerHTML = value * (factors[from] / factors[to]);
})