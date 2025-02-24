let year = +prompt("В якому році ви народились?");
let message = "";

if (!year) {
    console.log("Шкода, що Ви не захотіли ввести свій рік народження");
} else {
    let age = 2025 - year;
    message += `Ваш вік ${age}. `;
}

let city = prompt("З якого ви міста?");
if (!city) {
    console.log("Шкода, що Ви не захотіли ввести своє місто");
} else {
    switch (city.toLowerCase()) {
        case "київ":
            message += "Ти живеш у столиці Київ. ";
            break;
        case "вашингтон":
            message += "Ти живеш у столиці Вашингтон. ";
            break;
        case "лондон":
            message += "Ти живеш у столиці Лондон. ";
            break;
        default:
            message += `Ти живеш у місті ${city}. `;
    }
}

let favoriteSport = prompt("Яки ваш улюблени спорт?");
if (!favoriteSport) {
    console.log("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
} else {
    favoriteSport = favoriteSport.toLowerCase();
    if (favoriteSport === "бокс") {
        message += "Круто! Хочеш стати Усіком?";
    } else if (favoriteSport === "футбол") {
        message += "Круто! Хочеш стати Мессі?";
    } else if (favoriteSport === "баскетбол") {
        message += "Круто! Хочеш стати Шакілом?";
    }
}

console.log(message);
