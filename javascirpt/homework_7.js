"use stric";
const numbers=[24, 35, 67]
numbers[1]=10
console.log(numbers)

const string=["stop","start","finish"]
string[3]="replay"
console.log(string)

const listNumber=[4,56,76,67,82]
let summ=0
for (const number of listNumber) {
   summ+=number
}
console.log(summ)

for (let i = 0; i < listNumber.length; i++) {
    console.log(listNumber[i]);

}
const listString= ["illia" ,"sviat" ,"polina" ,"katerena","mari" ]
for (let i = 0; i < listString.length; i++) {
    if (listString[i].length>=5) {
        console.log(listString[i])

    }

}

 const numbersList = [1, 12, 23, 34, 45, 56, 67, 78, 89, 90];
let bigNumber = numbersList[0];

for (const number of numbersList) {
  if (bigNumber < number) {
    bigNumber = number;
  }
}
console.log(bigNumber);

for (let i = 1; i < numbersList.length; i+=2) {
    console.log(numbersList[i])
    
}