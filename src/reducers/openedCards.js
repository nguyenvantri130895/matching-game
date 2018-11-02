// import * as types from '../constants'

// const initialState = []

// var reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case types.FLIP:
//             var openedCard = {
//                 index: action.index,
//                 id: action.id,
//                 opened: true,
//                 matched: false
//             }
//             state.push(openedCard)
//             console.log(state)
//             if (state.length === 2) {
//                 if (state[0].id === state[1].id) {
//                     state[0].matched = true;
//                     state[1].matched = true;
//                     console.log(state)
//                 } else{
//                     state[0].opened = false;
//                     state[1].opened = false;
//                     console.log(state)
//                 }
//                 state = [];
//             }
//             return [...state]
//         default: return state
//     }
// }

// export default reducer