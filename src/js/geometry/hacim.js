/*Cache*/
const result = document.getElementById('result');
const methot = document.getElementById('methot');

const label1 = document.querySelector('label[for="sayi1"]');
const label2 = document.querySelector('label[for="sayi2"]');
const label3 = document.querySelector('label[for="sayi3"]');

const inpt1 = document.getElementById('sayi1');
const inpt2 = document.getElementById('sayi2');
const inpt3 = document.getElementById('sayi3');

let methotValue;


/* İnput alanı gerekli ise aç, değilse kapat. */
function setRequired(input, value) {
	input.required = value;
}

/* 2.İnput alanı gerekli ise aç, değilse kapat*/
function showInput2(show) {
	label2.style.display = show ? 'inline-block' : 'none';
	inpt2.style.display = show ? 'inline-block' : 'none';
}


/*3.input alanını gerekli ise aç, değilse kapat*/
function showInput3(show) {
	label3.style.display = show ? 'inline-block' : 'none';
	inpt3.style.display = show ? 'inline-block' : 'none';
}

/* Tamamen pi sayısının min-maxini ayarlamak için bir fonks.*/
function setMinMax(input, min, max) {
	if (min !== null) { //Eğer veri girili değilse veriler ayarlanır.
		input.min = min;
		input.max = max;
	} else { //Veri giriliyken çalışırsa devre dışı bıraktırır.
		input.removeAttribute('min');
		input.removeAttribute('max');
	}
}


/*Şekil tanımlamaları*/
const shapes = {
	prizmasi: {
		setup() {
			label1.innerHTML = 'Uzunluk';
			label2.innerHTML = 'Genişlik';
			label3.innerHTML = 'Yükseklik';

			inpt1.placeholder = 'Uzunluğu giriniz.';
			inpt2.placeholder = 'Genişliği giriniz.';
			inpt3.placeholder = 'Yüksekliği giriniz.';

			showInput2(true);
			showInput3(true);
			setRequired(inpt2, true);
			setRequired(inpt3, true);
			setMinMax(inpt2, null, null)
		},

		calculate() {
			const a = Number(inpt1.value);
			const b = Number(inpt2.value);
			const c = Number(inpt3.value);

			return a * b * c;
		},
	},

	kup: {
		setup() {
			label1.innerHTML = 'Kenar';
			inpt1.placeholder = 'Kenarı giriniz';
			showInput2(false);
			showInput3(false);
			setRequired(inpt2, false);
			setRequired(inpt3, false);
			setMinMax(inpt2, null, null);
		},

		calculate() {
			return Number(inpt1.value) ** 3;
		},
	},

	silindir: {
		setup() {
			label1.innerHTML = 'Yarıçap';
			label2.innerHTML = 'Pi Sayısı';
			label3.innerHTML = 'Yükseklik';

			inpt1.placeholder = 'Yarıçapı giriniz';
			inpt2.placeholder = 'İsteğe bağlı.';
			inpt3.placeholder = 'Yüksekliği giriniz.';

			showInput2(true);
			setRequired(inpt2, false);
			showInput3(true);
			setRequired(inpt3, true);

			setMinMax(inpt2, 3, 3.15);
		},

		calculate() {
			const pi = inpt2.value ? Number(inpt2.value) : Math.PI;
			const r = Number(inpt1.value);
			const h = Number(inpt3.value);

			return pi * (r ** 2) * h;
		},
	},

	kure: {
		setup() {
			label1.innerHTML = 'Yarıçap';
			label2.innerHTML = 'Pi Sayısı';
			inpt1.placeholder = 'Yarıçapı giriniz';
			inpt2.placeholder = 'İsteğe bağlı.';

			showInput2(true);
			setRequired(inpt2, false);
			showInput3(false);
			setRequired(inpt3, false);
			setMinMax(inpt2, 3, 3.15);
		},

		calculate() {
			const piSayisi = inpt2.value ? Number(inpt2.value) : Math.PI;
            const yaricap = Number(inpt1.value);

            return (4/3) * piSayisi * (yaricap ** 3);
		},
	},

    koni: {
		setup() {
			label1.innerHTML = 'Yarıçap';
			label2.innerHTML = 'Pi Sayısı';
            label3.innerHTML = "Yükseklik";
			inpt1.placeholder = 'Yarıçapı giriniz';
			inpt2.placeholder = 'İsteğe bağlı.';
            inpt3.placeholder = "Yüksekliği giriniz.";

			showInput2(true);
			setRequired(inpt2, false);
			showInput3(true);
			setRequired(inpt3, true);
			setMinMax(inpt2, 3, 3.15);
		},

		calculate() {
			const piSayisi = inpt2.value ? Number(inpt2.value) : Math.PI;
            const yaricap = Number(inpt1.value);
            const yukseklik = Number(inpt3.value);

            return (1/3) * piSayisi * (yaricap ** 2) * yukseklik;
		},
	},

    piramit: {
		setup() {
			label1.innerHTML = 'Taban Alanı';
			label2.innerHTML = 'Yükseklik';
			inpt1.placeholder = 'Taban alanı giriniz';
			inpt2.placeholder = 'Yükseklik giriniz.';

			showInput2(true);
			setRequired(inpt2, true);
			showInput3(false);
			setRequired(inpt3, false);
			setMinMax(inpt2, null, null);
		},

		calculate() {
            const tabanAlani = Number(inpt1.value);
			const yukseklik = Number(inpt2.value);

            return (1/3) * tabanAlani * yukseklik;
		},
	},
};

/*UI düzeltme*/
methot.addEventListener('change', () => {
	methotValue = methot.value;
	console.log(methotValue);
	shapes[methotValue].setup();
});

/*Hesaplama*/
document.getElementById('hacim-hesaplama').addEventListener('submit', () => {
	result.innerHTML = shapes[methotValue].calculate();
});