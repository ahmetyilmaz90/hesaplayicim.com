const result = document.getElementById("result");
const suankiBirim = document.getElementById("suanki-birim");
const donusecekBirim = document.getElementById("donusecek-birim");
const sayiC = document.getElementById("sayi");

const factors = {
  mL: 0.001,            // Mililitre
  L: 1,                 // Litre
  milimetreküp: 0.000001, // mm³
  santimetreküp: 0.001,   // cm³ = 1 mL
  metreküp: 1000,         // m³
  gal: 3.78541           // US Gallon
};

document.getElementById("hacim-donusturme").addEventListener("submit", function(){

    const value = Number(sayiC.value);
    const from = suankiBirim.value;
    const to = donusecekBirim.value;

    result.innerHTML = value * (factors[from] / factors[to]);
})