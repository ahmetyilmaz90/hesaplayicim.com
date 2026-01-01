const result = document.getElementById("result");
const tarihC = document.getElementById("dogum-tarihi");

function getBurc(gun, ay) {
    if ((ay == 3 && gun >= 21) || (ay == 4 && gun <= 19)) return "Koç";
    if ((ay == 4 && gun >= 20) || (ay == 5 && gun <= 20)) return "Boğa";
    if ((ay == 5 && gun >= 21) || (ay == 6 && gun <= 20)) return "İkizler";
    if ((ay == 6 && gun >= 21) || (ay == 7 && gun <= 22)) return "Yengeç";
    if ((ay == 7 && gun >= 23) || (ay == 8 && gun <= 22)) return "Aslan";
    if ((ay == 8 && gun >= 23) || (ay == 9 && gun <= 22)) return "Başak";
    if ((ay == 9 && gun >= 23) || (ay == 10 && gun <= 22)) return "Terazi";
    if ((ay == 10 && gun >= 23) || (ay == 11 && gun <= 21)) return "Akrep";
    if ((ay == 11 && gun >= 22) || (ay == 12 && gun <= 21)) return "Yay";
    if ((ay == 12 && gun >= 22) || (ay == 1 && gun <= 19)) return "Oğlak";
    if ((ay == 1 && gun >= 20) || (ay == 2 && gun <= 18)) return "Kova";
    return "Balık";
};

document.getElementById("burc").addEventListener("submit", function(){
    const tarih = new Date(tarihC.value);
    const gun= tarih.getDate();
    const ay = tarih.getMonth() + 1;

    result.innerHTML = getBurc(gun, ay);

});