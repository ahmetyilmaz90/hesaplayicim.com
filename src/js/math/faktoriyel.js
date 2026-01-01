async function faktoriyelAsync(n) {
    if (n == 0){
        return 1n;
    }

    let sonuc = 1n;
    let sayac = 0;
    for (; n >= 1; n--){
        sonuc *= BigInt(n);
        sayac++
        if (sayac % 100 === 0) {
            await new Promise(r => setTimeout(r, 0));
        }
    }

    return sonuc;
}

const result = document.getElementById("result");

document.getElementById("faktoriyel-hesaplama").addEventListener("submit", async function() {

    let faktoriyel = parseInt(document.getElementById("faktoriyel").value);

    result.innerHTML = "Hesaplanıyor..."; /*Uzun işlemlerde hesaplandığını belirtmek için*/

    result.innerHTML = (await faktoriyelAsync(faktoriyel)).toString();

});