const result = document.getElementById("result");
const suankiBirim = document.getElementById("suanki-birim");
const donusecekBirim = document.getElementById("donusecek-birim");
const sayiC = document.getElementById("sayi");

const factors = {
  b: 1 / 8,
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4
};

document.getElementById("internet-birimleri").addEventListener("submit", function(){

    const from = suankiBirim.value;
    const to = donusecekBirim.value;
    const value = Number(sayiC.value);

    result.innerHTML = value * (factors[from] / factors[to]);
});