const result = document.getElementById("result");
const formElmnt = document.getElementById("derece-donusturme");
const from = document.getElementById("from");
const to = document.getElementById("to");

const olcuBirimi = document.getElementById("sayi");

// Hepsini RADYAN'a çevirme
const toRad = {
  deg: v => v * Math.PI / 180,
  rad: v => v,
  grad: v => v * Math.PI / 200
};
const fromRad = {
  deg: v => v * 180 / Math.PI,
  rad: v => v,
  grad: v => v * 200 / Math.PI
};

formElmnt.addEventListener("submit", function(){
    const value = Number(olcuBirimi.value);
    const rad = toRad[from.value](value);
    const out = fromRad[to.value](rad);

    result.innerHTML = out;
})