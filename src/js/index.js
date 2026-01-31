if (document.getElementsByClassName("calculator-container").length > 0) {
    /* Performans için Cachelemek*/
    const resetBtn = document.getElementById("reset-btn");
    const resultOutput = document.getElementById("result");
    const copyBtn = document.getElementById("copy-btn");
    const inputs = document.querySelectorAll("input");
    const dataTextArea = document.querySelector("textarea") || null;
    const resultBtn = document.getElementById("result-btn");

    /*Temizleme butonu işlevi*/
    resetBtn.addEventListener("click", function() {
        if (inputs.length > 0) {
            inputs.forEach(inp => inp.value = "");
        }

        if (dataTextArea) {
            dataTextArea.value = "";
        }

        resultOutput.textContent = "";
        console.log("Veriler Temizlendi!");
    });    

    /*Enter tuşuna basınca hesaplama fonksiyonu*/
    document.addEventListener("keydown", (e)=>{
        if (e.key === "Enter" && !resultBtn.disabled) {
            resultBtn.click()
        }
    });   
    
    /*Veri formlarının sayfayı yenileme olayını iptal etmeyi sağlayan ve hesaplandı bildirimi yapan kod:*/
    document.getElementsByTagName("form")[0].addEventListener("submit", function(e) {
        e.preventDefault();
        console.log("Hesaplandı!")
    });    

    /*Kopyalama işlevi */
    copyBtn.addEventListener("click", () => {
        const oldText = resultOutput.innerText;
        let reelText;

        if (oldText !== "Kopyalandı!" && oldText) {

            /*Butonları bir süre devre dışı bırakmak*/
            resetBtn.disabled = true;
            resultBtn.disabled = true;
            copyBtn.disabled = true;


        navigator.clipboard.writeText(oldText)
        
            .then( () => {
                reelText = resultOutput.innerText;
                resultOutput.innerText = "Kopyalandı!";
                    
                setTimeout(() => {
                    resultOutput.innerText = reelText;
                    resultOutput

                    resetBtn.disabled = false;
                    resultBtn.disabled = false;
                    copyBtn.disabled = false;

                }, 1200);
                console.log("Kopyalandı!");
            } )    
        }
    });
}

const main = document.querySelector("main");


/* Toggle Buton işlevi */
const toggle = document.getElementById("menu-toggle");
const navList = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navList.classList.toggle("active");
    main.classList.toggle("notactive");
});


/* Mobilde menu açma kontrolü */
document.querySelectorAll('.nav-group').forEach(group => {
  group.addEventListener('click', () => {
    if (window.innerWidth < 1024) {

      /* Önce diğerlerini kapatıyoruz! */
      document.querySelectorAll('.nav-group.open').forEach(g => {
        if (g !== group){
            g.classList.remove('open');
        }});

      /* Daha sonra dokunulanı açıp/kapıyoruz*/
      group.classList.toggle('open');
    }
  });
});

/*Footer tarih gösterme*/
document.getElementById("date-site").innerHTML = new Date().getFullYear();