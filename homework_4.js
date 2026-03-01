"use strick";

let firstText = prompt("введите текст");
let lastText = prompt("введите текст");

const totalText =
  firstText.length !== 0 && lastText.length !== 0
    ? "Обидва поля заповнені"
    : "Не всі поля заповнені";
   
console.log(totalText);

let firstNumber = Number(prompt("введите число"));
let lastNumber = Number(prompt("введите число"));

const totalNumber =
  firstNumber + lastNumber > 10
    ? "Сума більша за 10"
    : "Сума менша або дорівнює 10";
console.log(totalNumber);

if (firstNumber + lastNumber > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

let textJavaScript = prompt("введите текст");
const confirme = textJavaScript.includes("JavaScript")
  ? "Текст містить слово JavaScript"
  : "Текст не містить слово JavaScript";

const result =
  firstNumber + lastNumber > 10 && firstNumber + lastNumber < 20
    ? "Число входить в діапазон від 10 до 20"
    : "Число не входить в діапазон від 10 до 20";
console.log(result);

let surname = prompt("name please");
let email = prompt("email please");
let code = prompt("code please");

const confirmeDonné =
  surname.length >= 3 && email.includes("@") && code.length >= 6
    ? "Перенаправлення на іншу сторінку"
    : "Помилка: неправильне заповнення";

console.log(confirmeDonné)