const asalSayiForm = document.getElementById("asal-sayi-bulma");
const sayiInput = document.getElementById("sayi");
const result = document.getElementById("result");

asalSayiForm.addEventListener("submit", (e) => {
  const sayiValue = Number(sayiInput.value);

  if (sayiValue === 2) {
    result.innerHTML = "En küçük asal sayı!";
    return;
  }

  if (sayiValue < 2 || sayiValue % 2 === 0) {
    result.innerHTML = "Sayı asal değil!";
    return;
  }

  for (let i = 3; i * i <= sayiValue; i += 2) {
    if (sayiValue % i === 0) {
      result.innerHTML = "Sayı asal değil!";
      return;
    }
  }

  result.innerHTML = "Sayı asaldır";
});
