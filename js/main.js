const alpha_ru = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"];
// const alpha_en = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


const inputText = document.querySelector(".input-txt");
const button = document.querySelector(".button");

button.addEventListener("click", function () {
    let z = 0;
    if (inputText.value == "") {
        z = 0;
        return document.querySelector('.error').innerHTML = "Введите слово";
    }
    if (!isCyrillic(inputText.value)) return document.querySelector('.error').innerHTML = "Только русские символы";
    let t = inputText.value;
    t = t.toLowerCase().split("");
    for (let i = 0; i < t.length; i++) {
        for (let x = 0; x < alpha_ru.length; x++) {
            if (t[i] == alpha_ru[x]) z += x + 1;
        }
    }
    document.querySelector('.out').innerHTML = z;
    getNumerology(z);
});




const getNumerology = (a) => {
    let b = String(a).split("");
    let v = 0;
    b.forEach(i => {
        v += Number(i);
    });
    if (v.toString().length <= 1) {
        return document.querySelector('.out2').innerHTML = v;
    }
    getNumerology(v);
}



function isCyrillic(str) {
    return /[а-я]/i.test(str);
}


