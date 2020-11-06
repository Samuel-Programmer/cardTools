// A basic deck creating method 

function createDeck() {
    let suit = ['clubs', 'spades', 'diamonds', 'hearts'];
    let rank = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    let value = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < rank.length; j++) {
            this.cards.push(new Card(value[j], suit[i], rank[j]));
        }
    }
}


// A basic deck shuffle function

function shuffleDeck() {
    var m = this.cards.length, t, i;

    // Pick a remaining element
    while (m) {
        i = Math.floor(Math.random() * m--);

        // Swap it with the current element
        t = this.cards[m];
        this.cards[m] = this.cards[i];
        this.cards[i] = t;
    }
}