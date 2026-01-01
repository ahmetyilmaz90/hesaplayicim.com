const result = document.getElementById("result");
const dataArea = document.getElementById("data-area");

function getNumbers(datas){
    const numbers = datas.match(/-?\d+(\.\d+)?/g) || [];
    return numbers.map(Number);
}

document.getElementById("varyans").addEventListener("submit", function(){

    const elemans = getNumbers(dataArea.value);

    if (elemans.length === 0) {
        result.innerHTML = "Lütfen sayısal verileri giriniz.";
        return;
    }

    const n = elemans.length;

    // Ortalama
    let toplam = 0;
    elemans.forEach(num => toplam += num);
    const ortalama = toplam / n;

    // Varyans
    let kareToplam = 0;
    elemans.forEach(num => {
        kareToplam += (num - ortalama) ** 2;
    });

    const varyans = kareToplam / n;

    result.innerHTML = varyans;
});
