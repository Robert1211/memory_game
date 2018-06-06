
 
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push('queen');

var cardTwo = cards[2];
cardsInPlay.push('king');


 console.log("User flipped"+" "+cardOne);     
 console.log("User flipped"+" "+ cardTwo);    

 if(cardsInPlay.lenght === 2 && cardsInPlay[0] === cardsInPlay[1] ) {
	alert('You found a match');
} else {
      alert('Sorry, try again');
}

 //console.log("User flipped"+" "+cardOne); 
 // console.log("User flipped"+" "+ cardTwo);

/*
if (cardsInPlay.lenght === 2 && cardsInPlay[0] === cardsInPlay[1]){
	 alert("You found a match");
} else if
  (cardsInPlay.lenght === 2 && cardsInPlay[0] !== cardsInPlay[1]){
  	 alert("Sorry");
  }
*/


