const result = document.getElementById("result");

document.getElementById("oran-hesaplama").addEventListener("submit", function(){
    let pay = parseFloat(document.getElementById("pay").value);
    let payda = parseFloat(document.getElementById("payda").value);

    result.innerHTML = (pay/payda);
})
