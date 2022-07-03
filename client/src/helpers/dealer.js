import CardGUI from './cardgui';
import Deck from './deck';


export default class Dealer {
    constructor(scene) {
        this.dealCards = () => {
            
            let opponentSprite = 'cyanCardBack';
            let playerOneHand = [];
            let deck = new Deck();
            deck.shuffle();
            deck.deal(playerOneHand, 5);
            console.log(playerOneHand);
            for (let i = 0; i < 5; i++) {
                let playerCard = new CardGUI(scene);
                playerCard.render(475 + (i * 100), 650, playerOneHand[i].spritePath);

            //    let opponentCard = new CardGUI(scene);
            //    scene.opponentCards.push(opponentCard.render(475 + (i * 100), 125, opponentSprite).disableInteractive());
            }
        }
    }
}