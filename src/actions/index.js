import * as types from './../constants'

export const flip = (index, id, opened, matched) => {
    return {
        type: types.FLIP,
        index,
        id, 
        opened, 
        matched
    }
}