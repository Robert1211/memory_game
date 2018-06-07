
 
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var checkForMatch = function(){
if(cardsInPlay[0] === cardsInPlay[1]){
	console.log("You found a match!");
} else {
	console.log("Sorry, try again");
}
};
cardsInPlay.push(cards[0]);
cardsInPlay.push(cards[2]);
cardsInPlay.push(cards[1]);

var flipCard = function(cardId){
 
 if(cardsInPlay.lenght === 2 && cardsInPlay[0] === cardsInPlay[1]) {     
	alert('You found a match');
} else {
      alert('Sorry, try again');
}
                                                  
   console.log("User flipped " + cards[0]);
   console.log("User flipped " + cards[2]);
  // checkForMatch();                                //     tutaj ma byc wedlug assesmentu 9
};

 //  flipCard();
  flipCard(0, 2);  // te dwie wersje sa dobre
    


 




