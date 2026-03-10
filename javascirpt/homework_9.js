// const friend = ["Mango", "Poly", "Ajax"];
// let numberFriend =[]
// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         numberFriend.push(`${i+1}-${array[i]}`)

//     }
//     return numberFriend
// }
// console.log(logItems(friend))

// let message =prompt("message pour gravure")
// let pricePerWord=5

// function  calculateEngravingPrice(message, pricePerWord){
//   let totalPrice=0
// let arr= message.split(" ")
//   totalPrice=arr.length*pricePerWord

// return totalPrice
// }
// console.log(calculateEngravingPrice(message ,pricePerWord))

// function findLongestWord(string) {
//   let longsWords = "";
//   const newArray = string.split(" ");
//   for (const element of newArray) {
//     if (element.length>=longsWords.length) {
//         longsWords=element
//     }
//   }
//   return longsWords;
// }
// console.log(findLongestWord("hello I love you"));

// let string = prompt("ecrit un message");
// function formatString(string) {
//   let newString = "";
//   if (string.length< 40) {
//     newString=string;
//   }else if (string.length >= 40) {
//     newString = string.substring(40, string.length)+"...";
//   } 
//   return newString
// }
// console.log(formatString(string));

// let message=prompt("ecrit un message")
// function checkForSpam(message){
// if (message.includes("spam") || message.includes("sale")) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// return message
// }
// console.log(checkForSpam(message));


let input = Number(prompt("ecrivé un nombre"));
const numbers = [];
let total = 0;
// Напиши скрипт з наступним функціоналом:

// Введення зберігається в змінну 
//  input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив
//  триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel,
//  якщо масив не порожній, необхідно порахувати суму всіх елементів
//   масиву і записати її в змінну total. Використовуй цикл for або
//    for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.


// 🔔 Робити перевірку того, що користувач ввів саме число, 
// а не довільний набір символів, не обов
// 'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом '
// Було введено не число, попробуйте ще раз
// ', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.