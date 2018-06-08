
 
//var cards = ["queen","queen","king","king"];
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
if(cardsInPlay[0] === cardsInPlay[1]){
     alert("You find a match");                  //  zmiana unit10	console.log("You found a match!");
} else {
      alert("Sorry try agin");                   //	console.log("Sorry, try again");
}
};
 /*  cardsInPlay.push(cards[0]);
   cardsInPlay.push(cards[1]);
   cardsInPlay.push(cards[2]);
   cardsInPlay.push(cards[3]); 
 */
var flipCard = function(cardId){
   if(cardsInPlay.lenght === 2 && cardsInPlay[0] === cardsInPlay[1]) {     
	alert('You found a match');
  } else {
      alert('Sorry, try again');
  }
   console.log("User flipped " + cards[0].rank);
   console.log(cards[0].cardImage);
   console.log(cards[0].suit);
   cardsInPlay.push(cards[0].rank);
   
   console.log("User flipped " + cards[2].rank); 
   console.log(cards[2].cardImage);
   console.log(cards[2].suit);   
   cardsInPlay.push(cards[2].rank);                                       
    checkForMatch();                                //     tutaj ma byc wedlug assesmentu 9
};

 //  flipCard();
  flipCard(0, 2);  // te dwie wersje sa dobre
    


 




