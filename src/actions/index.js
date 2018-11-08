import * as types from './../constants'

export const start = () => {
    return {
        type: types.START,
    }
}

export const check = (openedCards) => {
    return {
        type: types.CHECK,
        openedCards,
    }
}

export const open = (index) => {
    return {
        type: types.OPEN,
        index,
    }
}

export const complete = () => {
    return {
        type: types.COMPLETE,
    }
}

export const showScore = () => {
    return {
        type: types.SHOWSCORE,
    }
}

export const passLevel = () => {
    return {
        type: types.PASSLEVEL,
    }
}