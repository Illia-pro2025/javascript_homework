// Завдання 1

const user = {
  myPasion: "hobby",
  subscript: "premium",
};
user.mood = "happy";
user.myPasion = "skydiving";
user.subscript = "false";
const keys = Object.keys(user);
console.log(user);

// Завдання 2

const countProps = function (obj) {
  let sum = [];
  const key = Object.keys(obj);
  sum.push(key.length);
  return sum;
};
console.log(countProps(user));
// Завдання 3

const employees = {
  Іван: 10,
  Марія: 15,
  Олег: 7,
  Анна: 20,
};

const findBestEmployee = function (employees) {
  let bestname = "";
  let maxNumber = 0;
  for (let name in employees) {
    if (employees[name] > maxNumber) {
      maxNumber = employees[name];
      bestname = name;
    }
  }
  return `${bestname}:${maxNumber}`;
};

console.log(findBestEmployee(employees));

// Завдання 4

const employeesSalary = {
  Іван: 1000,
  Марія: 1500,
  Олег: 1200,
  Анна: 2000,
};

function countTotalSalary(employees) {
  let total = 0;

  for (let name in employees) {
    total += employees[name];
  }

  return total;
}

console.log(countTotalSalary(employeesSalary));

// Завдання 5

const products = [
  { name: "Apple", price: 30 },
  { name: "Banana", price: 20 },
  { name: "Orange", price: 25 },
];
const openProducts = function (products) {
  let productsName = [];
  let productsPrice = [];
  for (const item of products) {
    productsName.push(item.name);
    productsPrice.push(item.price);
  }
 return productsName

};
console.log(openProducts(products));

// Завдання 6

const allProdcuts = [
  { quanty: 10, price: 88, name: "Apple" },
  { quanty: 50, price: 5, name: "Banana" },
  { quanty: 80, price: 29, name: "Orange" },
];

const calculateTotalPrice = function (allProdcuts) {
  let string = "";
  for (const item of allProdcuts) {
    string += `name:${item.name},price:${item.quanty * item.price}`;
  }
  return string;
};
console.log(calculateTotalPrice(allProdcuts));

// Завдання 7 — додаткове, виконувати не обов'язково
// Напиши сценарій керування особистим кабінетом інтернет-банку.
//  Є об'єкт account в якому необхідно реалізувати методи для
//  роботи з балансом та історією транзакцій.
