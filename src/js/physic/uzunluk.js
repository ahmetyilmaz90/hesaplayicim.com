const result = document.getElementById("result");
const suankiBirim = document.getElementById("suanki-birim");
const donusecekBirim = document.getElementById("donusecek-birim");
const sayiC = document.getElementById("sayi");

const factors = {
  micrometre: 0.000001, // µm
  mm: 0.001,            // milimetre
  cm: 0.01,             // santimetre
  m: 1,                 // metre
  km: 1000,             // kilometre

  inch: 0.0254,         // inç
  ft: 0.3048,           // foot
  mil: 1609.344         // mil
};


document.getElementById("uzunluk-donusturme").addEventListener("submit", function(){

    const value = Number(sayiC.value);
    const from = suankiBirim.value;
    const to = donusecekBirim.value;

    result.innerHTML = value * (factors[from] / factors[to]);
})