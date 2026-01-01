const result = document.getElementById("result");
const cinsiyetC = document.getElementById("cinsiyet");
const yasC = document.getElementById("yas");
const kiloC = document.getElementById("kilo");
const boyC = document.getElementById("boy");

document.getElementById("bazal-metabolizma").addEventListener("submit", function(){
    const yas = Number(yasC.value);
    const kilo = Number(kiloC.value);
    const boy = Number(boyC.value);

    if (cinsiyetC.value == "erkek"){
        result.innerHTML = (10 * kilo) + (6.25 * boy) - (5 * yas) + 5 + " kcal/gün";
    }
    else {
        result.innerHTML = (10 * kilo) + (6.25 * boy) - (5 * yas) - 161 + " kcal/gün";
    }
})