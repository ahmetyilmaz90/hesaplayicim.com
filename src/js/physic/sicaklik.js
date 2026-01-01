const result = document.getElementById("result");
const suankiBirim = document.getElementById("suanki-birim");
const donusecekBirim = document.getElementById("donusecek-birim");
const sayiC = document.getElementById("sayi");

function convertTemp(value, from, to) {
  let c;
  let imkan = "";

  if (from === to) {
    if (from == "K" && value < 0) {
        imkan = "İmkansız:";
        return [value, imkan];
    } 
  };



  // önce Celsius
  if (from === "C") c = value;

  else if (from === "F") c = (value - 32) * 5 / 9;

  else if (from === "K") {
    if (value < 0) {
      c = value - 273.15;
      imkan = "İmkansız:";
    } else {
      c = value - 273.15;
    }
  }

  // Celsius'tan hedefe
  if (to === "C") return [c, imkan];
  if (to === "F") return [c * 9 / 5 + 32, imkan];
  if (to === "K") {
    const k = c + 273.15;
    if (k < 0) imkan = "İmkansız:";
    return [k, imkan];
  }
}

document.getElementById("sicaklik-donusturme").addEventListener("submit", function(){

    const value = Number(sayiC.value);
    const from = suankiBirim.value;
    const to = donusecekBirim.value;
    const [sonuc, imkan] = convertTemp(value, from, to);
    result.innerHTML = `${imkan} ${sonuc}`; 
})