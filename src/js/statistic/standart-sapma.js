const result = document.getElementById("result");
const dataArea = document.getElementById("data-area");

function getNumbers(datas){
    const numbers = datas.match(/-?\d+(\.\d+)?/g) || [];
    return numbers.map(Number);
}

document.getElementById("p-standart-sapma").addEventListener("submit", function(){

    const elemans = getNumbers(dataArea.value);

    if (elemans.length === 0) {
        result.innerHTML = "Lütfen sayısal verileri giriniz.";
        return;
    }

    const n = elemans.length;

    // Aritmetik ortalama
    let toplam = 0;
    elemans.forEach(num => toplam += num);
    const ortalama = toplam / n;

    // Kareler toplamı
    let kareToplam = 0;
    elemans.forEach(num => {
        kareToplam += (num - ortalama) ** 2;
    });

    // Standart sapma
    const stdSapma = Math.sqrt(kareToplam / n);

    result.innerHTML = stdSapma;
});
