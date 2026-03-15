// 1 Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод
// "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити
//  рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції
//  виводити повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: "User",
  accountNumber: "123456789321",
  balance: 4500,
  deposit: function () {
    let dipos = Number(prompt("combien voulez vous mettre sur le compte"));
    if (dipos === 0) {
      return "imposibily transaction";
    } else {
      alert(`vous avez ajouté ${dipos} à ${this.balance}`);
    }
    return this.balance + dipos;
  },
  withdraw: function () {
    let withd = Number(prompt("combien voulez vous retirer du compte"));
    if (withd === 0) {
      return "imposibily transaction";
    } else {
      alert(`vous avez retirer ${withd} de ${this.balance}`);
    }
    return this.balance - withd;
  },
};
console.log(bankAccount.deposit())
console.log(bankAccount.withdraw())

// 2 Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте
// до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false",
//  якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt().
//  Якщо метод повернув "true" вивести повідомлення  і навпаки

const weather = {
  temperature: function () {
    let degred = Number(prompt("quelle degré avez-vous?"));
    if (degred < 0) {
      alert("температура нижче 0 градусів Цельсія");
      return true;
    } else {
      alert("температура + 0 градусів Цельсія");
      return false;
    }
    return degred;
  },
  humidity: 100,
  windSpeed: 40,
};

console.log(weather.temperature())
// 3 Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод
// "login", який буде перевіряти правильність введеного email та password.

const user = {
  name: "illia",
  email: "Illia.si@mail.ru",
  password: "********",
  login: function () {
    let message = "";
    if (this.email.includes("@", ".") && this.password.length >= 8) {
      message="le mail et code sont aprouvé";
    } else {
      message="le mail et code sont non aprouvé";
    }
    return alert(message);
  },
};
console.log(user.login());
// 4 Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating".
//  Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та
// "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль.

const animes = {
  title:'7 sins capital',
  director:"aniliblia",
  year:"2014",
  rating:10,
  aprouveur:function(){
    if (this.rating>8) {
      return true
    } else {
      return false;
    }
    return this.rating
  }
};
console.log(animes.aprouveur())