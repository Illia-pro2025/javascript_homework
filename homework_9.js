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

let message=prompt("ecrit un message")
function checkForSpam(message){
if (message.includes("spam")) {
  console.log(true) 
}
else {
  console.log(false)
}
return message
}
console.log(checkForSpam(message));