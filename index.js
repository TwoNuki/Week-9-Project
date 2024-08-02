let deck =[];
let suits = ['Spade', 'Club', 'Heart', 'Diamond']
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

class Card {
constructor(suit, number){
this.suit = suit;
this.value = value;
}

for(suit of suits){
    for (let value of values){
    this.deck.push(new Card(suit, value));
    }
    }
}



class Player {
constructor(name) {
this.score = 0;
this.hand = []; //will have 26 cards
this.name = name
}
}

class GameOfWar {
    constructor(){
    this.deck = [];
    this.players = [new Player(`string`), new Player(`string2`)];
    this.makeDeck();
    }
    
    makeDeck() {
    this.deck = [];
    //function that will run the code for the deck creation
    this.players[0].hand = this.deck.splice(0, 26)
    this.players[1].hand = this.deck.splice(0, 26)
    }
    
    startGame(){
    /*run the cards and compare cards in hand 26 times
    for loop that runs 26 times and compares cards (conditional logic?)*/


    let game = new GameOfWar();

    checkRanks(card);{
        switch(card.rank) {
            case 'A': return 1;   // Ace
            case '2': return 2;
            case '3': return 3;
            case '4': return 4;
            case '5': return 5;
            case '6': return 6;
            case '7': return 7;
            case '8': return 8;
            case '9': return 9;
            case '10': return 10;
            case 'J': return 11;  // Jack
            case 'Q': return 12;  // Queen
            case 'K': return 13;  // King
            default: return 0;   // Invalid rank
        }
    }

    for(let i=0; i < 26; i++){
        if(checkRanks(player1Deck[i]) > checkRanks(player2Deck[i])){
        p1Score++;
        console.log();
        }
        else if (checkRanks(player1Deck[i]) > checkRanks(player2Deck[i])){
        p2Score++;
        console.log();
        }
        else {
        console.log('tie');
        }
    }
    
}
}