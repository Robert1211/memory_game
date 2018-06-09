
var cards = [
{
	rank: 'queen',                                   //powojne "" qute zmienic moze na jedno'
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];
var cardsInPlay = [];

var checkForMatch = function(){
  if(cardsInPlay.lenght ===2 && cardsInPlay[0] === cardsInPlay[1]){
  result = alert("You found match");
  }else if (cardsInPlay.lenght === 2 && cardsInPlay [0] !== cardsInPlay[1]){
  result = alert("Sorry. Try again");
  }
};

  var flipCard = function(){
  var cardId = this.getAttribute('data-id');

  this.setAttribute('src', cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  if (cardsInPlay.lenght === 2){
  }                                                                 
  checkForMatch();                               
};
  var createBoard = function(){
  for(var i = 0; i < cards.lenght; i++) {
  var cardElement = document.crElement('img');
  cardElement.setAttribute ('src', 'images/back.png');
  cardElement.setAttribute('data-id', i);
  cardElement.addEventListener('click', flipCard);
  document.getElementByTagName('game-board').appendChild(cardElement);
}
};
createBoard();
















 




