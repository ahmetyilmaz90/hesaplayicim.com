/*Cache*/
const result = document.getElementById("result");
const methot = document.getElementById("methot");

const label1 = document.querySelector('label[for="sayi1"]');
const label2 = document.querySelector('label[for="sayi2"]');
const label3 = document.querySelector('label[for="sayi3"]');

const inpt1 = document.getElementById("sayi1");
const inpt2 = document.getElementById("sayi2");
const inpt3 = document.getElementById("sayi3");

let methotValue;


/*Middleware :3 */
function setRequired(input, value) {
    input.required = value;
}

function showInput2(show) {
    label2.style.display = show ? "inline-block" : "none";
    inpt2.style.display = show ? "inline-block" : "none";
}

function showInput3(show){
    label3.style.display = show ? "inline-block" : "none";
    inpt3.style.display = show ? "inline-block" : "none";
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


/*Şekil tanımlamaları*/
const shapes = {
    ucgen: {
        setup() {
            label1.innerHTML = "1.Kenar";
            label2.innerHTML = "2.Kenar";
            label3.innerHTML = "3.Kenar";

            inpt1.placeholder = "1.Kenarı giriniz.";
            inpt2.placeholder = "2.Kenarı giriniz.";
            inpt3.placeholder = "3.Kenarı giriniz.";

            showInput2(true);
            showInput3(true);
            setRequired(inpt2, true);
            setRequired(inpt3, true);
            setMinMax(inpt2, null, null);

        },

        calculate() {
            const a = Number(inpt1.value);
            const b = Number(inpt2.value);
            const c= Number(inpt3.value);

            if (a + b <= c || a + c <= b || b + c <= a) {
                return "Bu kenarlar üçgen oluşturmaz";
            } else {
                return a + b + c;
            }
            
        }
    },

    kare: {
        setup() {
            label1.innerHTML = "Kenar";
            inpt1.placeholder = "Kenarı giriniz";
            showInput2(false);
            showInput3(false);
            setRequired(inpt2, false);
            setRequired(inpt3, false)
            setMinMax(inpt2, null, null);
            
        },

        calculate() {
            return Number(inpt1.value) * 4;
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
            showInput3(false);
            setRequired(inpt3, false);

            setMinMax(inpt2, 3, 3.15);
        },

        calculate() {
            return (Number(inpt2.value) || Math.PI) * Number(inpt1.value) * 2;
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
            showInput3(false);
            setRequired(inpt3, false)
            setMinMax(inpt2, null, null);
        },

        calculate() {
            return 2 * (Number(inpt1.value) + Number(inpt2.value));
        }
    }
};


/*UI düzeltme*/
methot.addEventListener("change", () => {
    methotValue = methot.value;
    console.log(methotValue)
    shapes[methotValue].setup();
});

/*Hesaplama*/
document.getElementById("cevre-hesaplama").addEventListener("submit", () => {
    result.innerHTML = shapes[methotValue].calculate();
});