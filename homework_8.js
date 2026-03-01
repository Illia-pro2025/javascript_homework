let cards = ["card_1", "card_2", "card_3", "card_4", "card_5"];
console.log(cards.slice(2))

const cardToRemove = "card_3";
const cardLocal = cards.indexOf(cardToRemove);
const cardDelet = cards.splice(cardLocal, 1);
console.log(cards);

const cardToInsert = "card_6";
const index = 5;
cards.splice(index, 0, cardToInsert);
console.log(cards);

const cardToUpdate = "card_4";
const cardIndex = cards.indexOf(cardToUpdate)
const cardUpdate = cards.splice(cardIndex, 1, "card_7");
console.log(cards)


//exerce 1
let cardssss = ["card_1", "card_2", "card_3", "card_4", "card_5"]; 
let string = ""
for (const element of cardssss) {
    string+=element
}
console.log(string)
console.log(cardssss.join(""))


