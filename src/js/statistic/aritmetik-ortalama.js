const result = document.getElementById("result");
const dataArea = document.getElementById("data-area")

function getNumbers(datas){
    const numbers =  datas.match(/-?\d+(\.\d+)?/g) || [];
    return numbers.map(Number);
}

document.getElementById("aritmetik-ortalama").addEventListener("submit", function(){

    const elemans = getNumbers(dataArea.value);
    
     if (elemans.length == 0) {
        result.innerHTML = "Lütfen sayısal verileri giriniz.";
        return;
     };

    let aritmetik=0;
    elemans.forEach(element => {
        aritmetik += element
    });

    result.innerHTML = aritmetik / elemans.length;
})