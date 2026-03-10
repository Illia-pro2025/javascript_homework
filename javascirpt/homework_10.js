// Завдання 1. Лічильник подій 🔢

// Створіть функцію, яка рахує, скільки елементів масиву відповідають певній умові, використовуючи колбек-функцію для перевірки.

// Створіть функцію countItems(array, condition)
// Створіть змінну count = 0
// Пройдіться по масиву циклом for...of
// Для кожного елемента викличте condition(element)
// Якщо condition повертає true, збільште count на 1
// Поверніть кінцевий результат

// Початковий код:
const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

// Функція countItems тут
function countItems(array, condition) {
  let count = 0;
  for (const item of array) {
    condition(item) ? count++ : count;
  }
  return count;
}
// Умови для перевірки:
const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;

// Тестування
console.log("Парних чисел:", countItems(numbers, isEven));
console.log("Чисел більше 10:", countItems(numbers, isLarge));
console.log("Коротких слів:", countItems(words, isShort));

// Завдання 2: Калькулятор з операціями 📚

// Створіть універсальний калькулятор, який може виконувати різні математичні операції залежно від переданої колбек-функції.

// Створіть стрілкову функцію calculate(a, b, operation)
// Функція повинна викликати operation(a, b) та повернути результат
// Створіть 4 стрілкові функції для операцій: add, subtract, multiply, divide
// У функції divide додайте перевірку на ділення на нуль
// Протестуйте всі операції
// Початковий код:

// // Функція calculate тут

function calculate(a, b, operation) {
  return operation(a, b);
}
// Стрілкові функції для операцій тут
const add = function (a, b) {
  let result = a + b;
  return result;
};
const subtract = function (a, b) {
  let result = a - b;
  return result;
};
const multiply = function (a, b) {
  let result = a * b;
  return result;
};
const divide = function (a, b) {
  let result = 0;
  if (b === 0) {
    result = "помилку";
    return result;
  }
  result = a / b;
  return result;
};
// Тестування

console.log(calculate(10, 5, add)); // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide)); // Повинно показати 2
console.log(calculate(10, 0, divide)); // Повинно показати помилку

// Завдання 3: Генератор повідомлень 💬

// Створіть функцію, яка повторює певну дію задану кількість разів, використовуючи колбек-функцію для генерації повідомлень.

// Створіть функцію repeatMessage(times, messageCreator)
// Створіть цикл for від i = 0 до i < times
// На кожній ітерації викликайте messageCreator(i)
// Протестуйте з різними колбеками


// function repeatMessage(times, messageCreator) {
//   for (let i = 0; i < times; i++) {
//     return messageCreator(i);
//   }
//   return messageCreator(i);
// }
// console.log(repeatMessage(times, messageCreator));

// Завдання 4: Кінотеатр (творче та додаткове завдання) ⭐

// Створіть власну функцію обробки списку фільмів, яка може застосовувати різні дії до кожного фільму у колекції.

// Створіть функцію processMovies(movies, action)
// Пройдіться по масиву фільмів циклом for або for...of
// Для кожного фільму викличте action(movie, index) (передайте фільм та його номер)
// Створіть мінімум 3 різні колбек-функції для обробки фільмів
// Протестуйте всі варіанти
const animes = [
  "Naruto",
  "Demon Slayer",
  "Suzume",
  "Frieren",
  "7 Sins Capital",
];
function processAnime(animes, action) {
  const result = [];
  result.push(action(animes));

  return result;
}
function action(animes) {
  let indexAnime = [];
  for (let i = 0; i < animes.length; i++) {
    indexAnime.push(`${animes[i]}-${i + 1}`);
  }
  return indexAnime;
}
console.log(processAnime(animes, action));
