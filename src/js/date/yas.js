const result = document.getElementById("result")

document.getElementById("yas-hesaplama").addEventListener("submit", function(){
    const dogumTarihi = new Date(document.getElementById("dogum-tarihi").value);

    const bugün = new Date();

    if (dogumTarihi > bugün) {
        result.innerHTML = "Doğum tarihi bugünden büyük olamaz!"
        return;
    }

    let yil = bugün.getFullYear() - dogumTarihi.getFullYear();
    let ay = bugün.getMonth() - dogumTarihi.getMonth();
    let gun = bugün.getDate() - dogumTarihi.getDate();

    console.log(yil, ay, gun)

    if (gun<0){
        ay--
        const oncekiAy = new Date(bugün.getFullYear(), bugün.getMonth(), 0);
        gun += oncekiAy.getDate();
    }

    if (ay < 0){
        yil--;
        ay+=12;
    }

    result.innerHTML = `Şu ana kadar ${yil} yıl, ${ay} ay, ${gun} gün yaşadınız.`;

})