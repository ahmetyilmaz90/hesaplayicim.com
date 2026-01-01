/*DOM elemanlarını cache'lemek*/
const result = document.getElementById("result")
const methot = document.getElementById("methot");
const labelSayi1 = document.querySelector('label[for="sayi1"]');
const labelSayi2Yuzde = document.querySelector('label[for="sayi2-yuzde"]');
const input1 = document.getElementById("sayi1");
const input2 = document.getElementById("sayi2-yuzde");

let belirtec = true;

/*Methot değişimi*/
methot.addEventListener("change", function(){
    let methotValue = methot.value
    console.log(methotValue)
    if (methotValue == "islem1") {
        labelSayi1.innerHTML = "1.Sayı"
        labelSayi2Yuzde.innerHTML = "2.Sayı"
        input1.placeholder = "1.Sayıyı giriniz."
        input2.placeholder = "2.Sayıyı giriniz."
        belirtec = true;
    }else {
        labelSayi1.innerHTML = "Sayı"
        labelSayi2Yuzde.innerHTML = "Yüzde"
        input1.placeholder = "Sayıyı giriniz."
        input2.placeholder = "Yüzdeyi giriniz."
        belirtec = false;
    }

})

document.getElementById("yuzde-hesaplama").addEventListener("submit", function(){
    if (belirtec) {
        result.innerHTML = "%" + (((input1.value) / (input2.value)) * 100).toString();
    }else {
        result.innerHTML = (input1.value * (input2.value /100)).toString();
    }
})