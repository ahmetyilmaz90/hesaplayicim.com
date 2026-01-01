/*Cache*/
const result = document.getElementById("result");
const methot = document.getElementById("methot");

const label1 = document.querySelector('label[for="sayi1"]');
const label2 = document.querySelector('label[for="sayi2"]');

const inpt1 = document.getElementById("sayi1");
const inpt2 = document.getElementById("sayi2");

let methotValue;

/*Yardımcı Fonksiyonlar /middleware :D/ */
function setRequired(input, value) {
    input.required = value;
}

function showInput2(show) {
    label2.style.display = show ? "inline-block" : "none";
    inpt2.style.display = show ? "inline-block" : "none";
}

function setMinMax(input, min, max) {
    if (min !== null) {
        input.min = min;
        input.max = max;
    } else {
        input.removeAttribute("min");
        input.removeAttribute("max");
    }
}


/* Şekillerimiz */
const shapes = {
    ucgen: {
        setup() {
            label1.innerHTML = "Yükseklik";
            label2.innerHTML = "Taban";

            inpt1.placeholder = "Yüksekliği giriniz";
            inpt2.placeholder = "Tabanı giriniz";
            showInput2(true);
            setRequired(inpt2, true);
            setMinMax(inpt2, null, null);

        },

        calculate() {
            return (inpt1.value * inpt2.value) / 2;
        }
    },

    kare: {
        setup() {
            label1.innerHTML = "Kenar";
            inpt1.placeholder = "Kenarı giriniz";
            showInput2(false);
            setRequired(inpt2, false);

            setMinMax(inpt2, null, null);
            
        },

        calculate() {
            return inpt1.value ** 2;
        }
    },

    daire: {
        setup() {
            label1.innerHTML = "Yarıçap";
            label2.innerHTML = "Pi Sayısı";

            inpt1.placeholder = "Yarıçap giriniz";
            inpt2.placeholder = "İsteğe bağlı Pi giriniz.";

            showInput2(true);
            setRequired(inpt2, false);

            setMinMax(inpt2, 3, 3.15);
        },

        calculate() {
            return (inpt2.value || Math.PI) * inpt1.value ** 2;
        }
    },

    dikdortgen: {
        setup() {
            label1.innerHTML = "Kısa Kenar";
            label2.innerHTML = "Uzun Kenar";
            inpt1.placeholder = "Kısa kenarı giriniz.";
            inpt2.placeholder = "Uzun kenarı giriniz.";
            showInput2(true);
            setRequired(inpt2, true);
            setMinMax(inpt2, null, null);
        },

        calculate() {
            return inpt1.value * inpt2.value;
        }
    }
};


/*UI düzeltme*/
methot.addEventListener("change", () => {
    methotValue = methot.value;
    shapes[methotValue].setup();
});

/*Hesaplama*/
document.getElementById("alan-hesaplama").addEventListener("submit", () => {
    result.innerHTML = shapes[methotValue].calculate();
});