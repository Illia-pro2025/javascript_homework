"use stick";
let c = prompt("what is the temperature?");
let celsius = c * (9 / 5) + 32;
console.log(celsius);

const daysInMonth = prompt("кількості днів у місяці");
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(daysInMonth);
console.log(hoursInMonth);
console.log(minutesInMonth);

const H = 100;
const health = H - 10;
const E = 100;
const energy = E - 50;
console.log(health);
console.log(energy);

const totalPrice = prompt("суми покупки");
const discount = totalPrice / 10;
const discountedPrice = totalPrice - discount;
console.log(discountedPrice);

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

const floatString = "45.67";
const parsedFloat = Number(parseFloat(floatString));
console.log(parsedFloat);

const intString = "123";
const parsedIntта = Number(parseInt(intString));
console.log(parsedIntта);

const number = prompt("числo ?");
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
const convertedString = toString(integer);
console.log(convertedInt)
console.log(convertedString);