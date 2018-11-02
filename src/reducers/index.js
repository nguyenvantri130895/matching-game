import {combineReducers} from 'redux'
import cards from './cards'
import openedCards from './openedCards'

const reducer = combineReducers({
    cards,
    openedCards
})

export default reducer