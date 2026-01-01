const result = document.getElementById("result")

const girisTabani = document.getElementById("giris-tabani");
const cikisTabani = document.getElementById("cikis-tabani");
const sayi = document.getElementById("sayi")

document.getElementById("sayi-tabani-cevirme").addEventListener("submit", function () {

    const giris = parseInt(girisTabani.value);
    const cikis = parseInt(cikisTabani.value);
    const deger = sayi.value.trim().toLowerCase();

    const allowedChars = "0123456789abcdefghijklmnopqrstuvwxyz".slice(0, giris);
    const regex = new RegExp(`^[${allowedChars}]+$`);

    if (!regex.test(deger)) {
        result.innerHTML = "Bu sayı seçilen tabana uygun değil";
        return;
    }

    const onluk = parseInt(deger, giris);
    result.innerHTML = onluk.toString(cikis);
});
