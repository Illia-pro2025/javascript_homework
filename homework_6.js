let number = 0;
while (number < 10) {
  number += 1;
  console.log(number);
}

for (let i = 2; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(i*7);
}

let n = Number(prompt("ecrit un nombre"));

for (let i = 0; i < n; i++) {

  if (i >= n) {
    break;
  }
  console.log(i);
}

let i = 1;

while (i <= 20) {
  if (i % 3 === 0) {
    i++; 
    continue; 
  }
  console.log(i);
  i++;
}