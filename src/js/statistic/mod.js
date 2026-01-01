const result = document.getElementById("result");
const dataArea = document.getElementById("data-area");

function getNumbers(datas){
    const numbers = datas.match(/-?\d+(\.\d+)?/g) || [];
    return numbers.map(Number);
}

document.getElementById("mod").addEventListener("submit", function(){

    const elemans = getNumbers(dataArea.value);

    if (elemans.length == 0) {
        result.innerHTML = "Lütfen sayısal verileri giriniz.";
        return;
    }

    const counts = {};
    let maxCount = 0;
    let modes = [];

    elemans.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;

        if (counts[num] > maxCount) {
            maxCount = counts[num];
            modes = [num];
        } else if (counts[num] === maxCount) {
            if (!modes.includes(num)) {
                modes.push(num);
            }
        }
    });

    // Eğer herkes 1 kere geçmişse mod yok
    if (maxCount === 1) {
        result.innerHTML = "Mod yok (tüm değerler tekil).";
        return;
    }

    result.innerHTML = modes.join(", ")
});
