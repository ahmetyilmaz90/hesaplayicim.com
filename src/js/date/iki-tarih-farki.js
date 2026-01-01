const result = document.getElementById("result");
const buyukTarih = document.getElementById("buyuk-tarih");
const kucukTarih = document.getElementById("kucuk-tarih");

document.getElementById("tarih-farki-hesaplama").addEventListener("submit", function(){
    let buyuk = new Date(buyukTarih.value);
    let kucuk = new Date(kucukTarih.value);

    let yil = buyuk.getFullYear() - kucuk.getFullYear();
    let ay = buyuk.getMonth() - kucuk.getMonth();
    let gun = buyuk.getDate() - kucuk.getDate();

    if (gun < 0) {
        ay--;
        // büyük tarihin bir önceki ayı kaç gün çekiyor
        let oncekiAyGun = new Date(buyuk.getFullYear(), buyuk.getMonth(), 0).getDate();
        gun += oncekiAyGun;
    }

    if (ay < 0) {
        yil--;
        ay += 12;
    } 

    let sonuc = [];

    if (yil > 0){
        sonuc.push(`${yil} yıl`);
    }
    if (ay > 0){
        sonuc.push(`${ay} ay`);
    }
    if (gun > 0){
        sonuc.push(`${gun} gün.`)
    }


    if (sonuc.length == 0) {
        result.innerHTML = "Fark Yok!";
    }else {
        result.innerHTML = sonuc.join(", ")
    }
})