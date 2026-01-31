const indirimHesaplama = document.getElementById("indirim-hesaplama");
const fiyat = document.getElementById("fiyat");
const indirim = document.getElementById("indirim");
const result = document.getElementById("result");
const formatla = (n) => Number.isInteger(n) ? n : +n.toFixed(2);

indirimHesaplama.addEventListener("submit", () => {
    const fiyatValue = Number(fiyat.value);
    const indirimValue = Number(indirim.value);

    const yeniFiyat = fiyatValue * (1 - indirimValue / 100);
    const fark = fiyatValue - yeniFiyat;

    result.innerHTML = `
        Yeni Fiyat: <b>${formatla(yeniFiyat)}</b><br>
        Aradaki Fark: <b>${formatla(fark)}</b>
    `;
});