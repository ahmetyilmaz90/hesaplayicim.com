const satisFiyati = document.getElementById("satis-fiyati");
const maliyet = document.getElementById("maliyet");
const result = document.getElementById("result");


document.getElementById("kar-zarar-hesaplama").addEventListener("submit", function(){

    const satisFiyatiValue = parseFloat(satisFiyati.value);
    const maliyetValue = parseFloat(maliyet.value);

    const sonucFarki = Math.abs(satisFiyatiValue - maliyetValue); 


    if (satisFiyatiValue < maliyetValue) {
        result.innerHTML = `${sonucFarki} | Zarar...`;
    }else if (satisFiyatiValue > maliyetValue) {
        result.innerHTML = `${sonucFarki} | Kâr!`;
    }else {
        result.innerHTML = "Kâr veya zarar yok!";
    }
})