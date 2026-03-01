"use strick";

let list = Number(prompt("1 or 2 or 3"));
let message;
switch (list) {
  case 1:
    message = "Кава";
    break;
  case 2:
    message = "Чай";
    break;
  case 3:
    message = "Сік";
}
alert(message);

let day = prompt("day please");

switch (day) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    message = " робочий день";
    break;

  case "субота":
  case "неділя":
    message = "вихідний";
}
console.log(message);

let month = Number(prompt("номер місяця"));

switch (month) {
  case 12:
  case 1:
  case 2:
    message = "winter";
    break;
  case 3:
  case 4:
  case 5:
    message = "sprinter";
    break;
  case 6:
  case 7:
  case 8:
    message = "summer";
    break;
  case 9:
  case 10:
  case 11:
    message = "autumn";
    
}
console.log(message);

let colors = prompt("colors please");

switch (colors) {
  case  "зелений":
    message = "йти";
    break;
  case "жовтий":
    message = "чекати";
    break;
  case "червоний":
    message = "стоп";
    
}
console.log(message);

let a = 10;
let b = 5;
let opperation = prompt("оператора");

switch (opperation) {
  case  "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  case "%":
    console.log(a % b);
   
}
