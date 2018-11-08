import * as types from '../constants'
import shuffledCards1 from '../data/generateCards1'
import shuffledCards2 from '../data/generateCards2'
import shuffledCards3 from '../data/generateCards3'
import shuffledCards4 from '../data/generateCards4'

const initialState = {
    cards: [],
    score: 0,
    highestScore: 0,
    level: 1,
    complete: false,
}

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START:
            let a = 'shuffledCards' + state.level;
            return {
                ...state,
                cards: a === 'shuffledCards1' ? 
                            shuffledCards1 : 
                            (a === 'shuffledCards2' ? 
                            shuffledCards2 : 
                            (a === 'shuffledCards3' ? 
                            shuffledCards3 : 
                            shuffledCards4)),
            }
        case types.OPEN:
            return {
                ...state,
                cards: state.cards.map((card, index) => index === action.index
                    ? { ...card, opened: true }
                    : card
                )
            }
        case types.CHECK:
            const selectedCards = action.openedCards;
            if (selectedCards[0].id === selectedCards[1].id) {
                return {
                    ...state,
                    cards: state.cards.map((card) =>
                        card.id === selectedCards[0].id
                            ? { ...card, matched: true }
                            : card
                    ),
                    score: state.score + 50,
                }
            } else if (selectedCards[0].id !== selectedCards[1].id) {
                return {
                    ...state,
                    cards: state.cards.map((card) =>
                        card.id === selectedCards[0].id || card.id === selectedCards[1].id
                            ? { ...card, opened: false }
                            : card
                    ),
                    score: state.score - 10,
                }
            }
            return state
        case types.COMPLETE:
            let score = state.score;
            localStorage.setItem('score', JSON.stringify(score));
            let highestScore = JSON.parse(localStorage.getItem('highestScore')) ?
                JSON.parse(localStorage.getItem('highestScore')) :
                state.score;
            highestScore = highestScore < score ?
                score :
                highestScore;
            localStorage.setItem('highestScore', JSON.stringify(highestScore));
            return {
                ...state,
                complete: true
            }
        case types.PASSLEVEL:
            return {
                ...state,
                cards: [],
                complete: false,
                level: state.level + 1,
                score: JSON.parse(localStorage.getItem('score'))
            }
        case types.SHOWSCORE:
            console.log(state.highestScore);
            return {
                ...state,
                highestScore: JSON.parse(localStorage.getItem('highestScore'))
            }
        default: return state
    }
}

export default reducer