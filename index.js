
//initial variables for creating the suits and values of those suits
let suits = ['Spade', 'Club', 'Heart', 'Diamonds'];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];


//creating the Card class to be able to have methods that identify the above listed suits and values as their designations
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

//Player class that starts with an initial score of 0, an empty hand array, and a name that will become P1 or P2
class Player {
    constructor(name) {
        this.score = 0;
        this.hand = [];
        this.name = name;
    }
}

//the game class itself that will contain most of the methods for constructing the deck that starts as an empty array, identifying the player name as strings, and running the makeDeck method
class GameOfWar {
    constructor() {
        this.deck = [];
        this.players = [new Player('Player 1'), new Player('Player 2')];
        this.makeDeck();
    }

    //the makeDeck method that also contains the empty deck array, followed by a nested for...of loop that will take both the suits and values created at the beginning, and push them to the deck array
    makeDeck() {
        this.deck = [];
        for (let suit of suits) {
            for (let value of values) {
                this.deck.push(new Card(suit, value));
            }
        }
        //shuffles the deck array and uses the splice method to split it and distribute equally between players
        this.deck = this.shuffle(this.deck);
        this.players[0].hand = this.deck.splice(0, 26);
        this.players[1].hand = this.deck.splice(0, 26);
    }

    //the shuffle method using the 'fisher-yates' method that takes the deck as an argument, and uses a for loop to iterate through the deck array, choose a number at random, and switch the numbers at i and j around before returning the now-shuffled array
    shuffle(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    //method using a switch case to go through and check each card to give them a point value
    checkRanks(card) {
        switch (card.value) { 
            case '2': return 2;
            case '3': return 3;
            case '4': return 4;
            case '5': return 5;
            case '6': return 6;
            case '7': return 7;
            case '8': return 8;
            case '9': return 9;
            case '10': return 10;
            case 'J': return 11;
            case 'Q': return 12;
            case 'K': return 13;
            case 'A': return 14;
            default: return 0;
        }
    }

    //method to start the game itself, initializing each player's score as 0 and then using the shift method to take the first card from each player's hand and show it. uses conditional logic to compare the card value and awarding a point to whichever player had the higher valued card, or no points if the card values are tied.
    startGame() {
        let p1Score = 0;
        let p2Score = 0;

            let card1 = this.players[0].hand.shift();
            let card2 = this.players[1].hand.shift();

            if (this.checkRanks(card1) > this.checkRanks(card2)) {
                p1Score++;
                console.log(`${this.players[0].name} wins with ${card1.value} of ${card1.suit}`);
            } else if (this.checkRanks(card1) < this.checkRanks(card2)) {
                p2Score++;
                console.log(`${this.players[1].name} wins with ${card2.value} of ${card2.suit}`);
            } else {
                console.log(`This round is a tie. ${this.players[0].name} had ${card1.value} of ${card1.suit} and ${this.players[1].name} had ${card2.value} of ${card2.suit}`);
            }
        }

        //uses conditional logic to compare player scores and declaring a winner
        if (p1Score > p2Score) {
            console.log(`${this.players[0].name} wins the game with ${p1Score} points!`);
        } else if (p1Score < p2Score) {
            console.log(`${this.players[1].name} wins the game with ${p2Score} points!`);
        } else {
            console.log("The game is a tie!");
        }
        console.log(`${this.players[0].name} Score: ${p1Score}`);
        console.log(`${this.players[1].name} Score: ${p2Score}`);
    }
}