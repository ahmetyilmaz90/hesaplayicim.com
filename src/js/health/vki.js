const result = document.getElementById("result");
const boy = document.getElementById("human-height");
const kilo = document.getElementById("human-weight");

function printResult(r ,vkih, kategori) {
    r.innerHTML = `
        Vücut Kitle İndeksi: <b>${vkih}</b><br>
        Kategori: <b>${kategori}</b>
    `
}

document.getElementById("vucut-kitle-indeksi").addEventListener("submit", function(){
    const cm = boy.value / 100;  

    const vki = (Number(kilo.value) / cm ** 2).toFixed(1);

    if (vki < 18.5) {
        printResult(result, vki, "Zayıf");
    }else if (vki >= 18.5 && vki < 25){
        printResult(result, vki, "Normal");
    }else if (vki >= 25 && vki < 30) {
        printResult(result, vki, "Fazla Kilolu");
    }else {
        printResult(result, vki, "Obez");
    }

})