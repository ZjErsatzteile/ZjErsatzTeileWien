document.getElementById("partForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = new FormData(event.currentTarget);
  const get = (name) => (form.get(name) || "").toString().trim();

  const text =
`Hallo ZJ Ersatzteile,

ich möchte folgendes Ersatzteil anfragen:

🚗 Fahrzeug: ${get("marke")} ${get("modell")}
📅 Baujahr: ${get("baujahr")}
🔧 Motor/Leistung: ${get("motor") || "nicht angegeben"}
🔎 FIN/VIN: ${get("vin") || "nicht angegeben"}

🧩 Ersatzteil: ${get("teil")}
🔢 Originalteilenummer: ${get("teilenummer") || "nicht angegeben"}

💬 Nachricht:
${get("nachricht") || "Keine weiteren Angaben"}

Bitte um Preis und Verfügbarkeit. Danke!`;

  const whatsappUrl = "https://wa.me/436677995349?text=" + encodeURIComponent(text);
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
