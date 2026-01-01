const result = document.getElementById("result");
const adetGunu = document.getElementById("adet-baslangici");
const donguSayisi = document.getElementById("gun-sayisi");

document.getElementById("adet-gunu").addEventListener("submit", function() {

    const adet = new Date(adetGunu.value);
    const dongu = Number(donguSayisi.value) || 28;

    // Sonraki adet
    const nextAdet = new Date(adet);
    nextAdet.setDate(nextAdet.getDate() + dongu);

    // Yumurtlama (ortalama)
    const ovulation = new Date(nextAdet);
    ovulation.setDate(ovulation.getDate() - 14);

    result.innerHTML = `
        Sonraki adet: <b>${nextAdet.toLocaleDateString("tr-TR")}</b><br>
        Yumurtlama: <b>${ovulation.toLocaleDateString("tr-TR")}</b>
    `;
});
