

const cards = ["queen","queen","king","king"];
const cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[1];
cardsInPlay.push (cardOne);
cardsInPlay.push (cardTwo);

console.log ("User flipped "+cardsInPlay);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0]===cardsInPlay[1]) {alert("You found a match!");
}else {alert("Sorry, try again.");
}
}