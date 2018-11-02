import * as types from '../constants'

var images = [
    { id: '30', opened: false, matched: false },
    { id: '31', opened: false, matched: false },
    { id: '32', opened: false, matched: false },
    { id: '33', opened: false, matched: false },
]

var doubledCards = images.concat(images);

var shuffle = (cards) => {
    let currentIndex = cards.length;
    let temporaryValue;
    let randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
    return cards;
}

var shuffledCards = shuffle(doubledCards);

const initialState = shuffledCards

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FLIP:
            state[action.index].opened = true;
            var openedCards = JSON.parse(localStorage.getItem('openedCards'))
                ? JSON.parse(localStorage.getItem('openedCards'))
                : [];
            var openedCard = {
                index: action.index,
                id: action.id,
            }
            openedCards.push(openedCard);
            localStorage.setItem('openedCards', JSON.stringify(openedCards));
            //console.log(openedCards);
            console.log(state[openedCards[0].index])
            if (openedCards.length === 2) {
                if (openedCards[0].id === openedCards[1].id) {
                    state[openedCards[0].index].matched = true;
                    state[openedCards[1].index].matched = true;
                    console.log(state)
                } else {
                    openedCards[0].opened = false;
                    openedCards[1].opened = false;
                    console.log(openedCards)
                }
                localStorage.removeItem('openedCards');
            }
            return state
        default: return state
    }
}

export default reducer