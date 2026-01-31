const clocks = {
  istanbul: "Europe/Istanbul",

  paris: "Europe/Paris",
  londra: "Europe/London",
  berlin: "Europe/Berlin",
  moskova: "Europe/Moscow",

  dubai: "Asia/Dubai",
  mumbai: "Asia/Kolkata",
  tokyo: "Asia/Tokyo",
  shanghai: "Asia/Shanghai",
  singapur: "Asia/Singapore",

  "new-york": "America/New_York",
  "los-angeles": "America/Los_Angeles",
  chicago: "America/Chicago",
  "sao-paulo": "America/Sao_Paulo",

  kahire: "Africa/Cairo",
  tunus: "Africa/Tunis",
  cezayir: "Africa/Algiers"
};//Bütün timezonelarımız burada.


function getTime(tz) {
  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(new Date());
}

function updateClocks() {
  Object.entries(clocks).forEach(([id, tz]) => {
    const card = document.getElementById(id);
    card.querySelector("p").textContent = getTime(tz);
  });
}

updateClocks();
setInterval(updateClocks, 1000);