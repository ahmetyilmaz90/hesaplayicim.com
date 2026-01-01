const result = document.getElementById("result");
const saunkiBirim = document.getElementById("suanki-birim");
const donusecekBirim = document.getElementById("donusecek-birim");
const sayiC = document.getElementById("sayi");

const factors = {
    metrekare: 1,
    dekar: 1000,
    donum: 1000,
    hektar: 10000
};

document.getElementById("arazi-birimleri").addEventListener("submit", function(){

    const value = Number(sayiC.value);
    const from = saunkiBirim.value;
    const to = donusecekBirim.value;



    result.innerHTML = value * (factors[from] / factors[to]);
})