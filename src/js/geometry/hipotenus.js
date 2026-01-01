const result = document.getElementById("result");
const methot = document.getElementById("methot");
const ciktiBicimi = document.getElementById("cikti-bicimi");
const kenar1Inpt = document.getElementById("kenar1")
let methotValue;


const kenar2HipotenusLabel = document.querySelector('label[for="kenar2-hipotenus"]');
const kenar2HipotenusInpt = document.getElementById("kenar2-hipotenus")

/*Ara fonks*/
function sadeKok(n) {
    let katsayi = 1;
    let kalan = n;

    for (let i = 2; i * i <= kalan; i++) {
        while (kalan % (i * i) === 0) {
            kalan /= i * i;
            katsayi *= i;
        }
    }

    if (kalan === 1) return `${katsayi}`;
    if (katsayi === 1) return `√${kalan}`;

    return `${katsayi}√${kalan}`;
}


methot.addEventListener("change", function(){
    methotValue = methot.value;
    if (methotValue == "hipotenus-hesapla") {
        kenar2HipotenusLabel.innerHTML = "2.Kenar";
        kenar2HipotenusInpt.placeholder = "2.Kenar uzunluğu giriniz.";
    }else {
        kenar2HipotenusLabel.innerHTML = "Hipotenüs";
        kenar2HipotenusInpt.placeholder = "Hipotenüsü giriniz."
    }
})

document.getElementById("hipotenus-hesaplama").addEventListener("submit", function(){
    if (!methotValue){
        methotValue = "hipotenus-hesapla";
    }

    const a = Number(kenar1Inpt.value);
    const hb = Number(kenar2HipotenusInpt.value);


    if (methotValue == "hipotenus-hesapla" && ciktiBicimi.value == "gercek") {
        result.innerHTML = Math.sqrt(a ** 2 + hb ** 2);
    }
    
    else if (methotValue == "kenar-hesapla" && ciktiBicimi.value == "gercek"){

        if (hb <= a){
            result.innerHTML = "Hipotenüs kenardan büyük olmalıdır!";
        }else {
            result.innerHTML = Math.sqrt(hb ** 2 - a ** 2);
        }

    }
    
    else if (methotValue == "hipotenus-hesapla" && ciktiBicimi.value == "karekok") {
        const ic = hb ** 2 + a ** 2;

        result.innerHTML = sadeKok(ic); 
    } 
    
    else if (methotValue == "kenar-hesapla" && ciktiBicimi.value == "karekok"){

        if (hb<=a ){
            result.innerHTML = "Hipotenüs kenardan büyük olmalıdır!";
        }else {
            const ic = hb**2 - a**2;

            result.innerHTML = sadeKok(ic);             
        }
    }

})