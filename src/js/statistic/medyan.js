const result = document.getElementById("result");
const dataArea = document.getElementById("data-area");

function getNumbers(datas){
    const numbers = datas.match(/-?\d+(\.\d+)?/g) || [];
    return numbers.map(Number);
}

document.getElementById("medyan").addEventListener("submit", function(){

    const elemans = getNumbers(dataArea.value);

    if (elemans.length == 0) {
        result.innerHTML = "Lütfen sayısal verileri giriniz.";
        return;
    }

    elemans.sort((a, b) => a - b);
    const n = elemans.length;
    const mid = Math.floor(n / 2);

    let medyan;

    if (n % 2 === 0) {
        // çift eleman
        medyan = (elemans[mid - 1] + elemans[mid]) / 2;
    } else {
        // tek eleman
        medyan = elemans[mid];
    }

    result.innerHTML = medyan;
});
