import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from '../actions/decks'

export default function decks (state = [], action) {
  switch(action.type) {
    case ADD_DECK :
      return state.concat(action.payload.deck)
    
    case REMOVE_DECK :
      return state.filter(element => element.id !== action.payload.id)

    case ADD_CARD:
      return {
        ...state.map(element => {
          if (element.id === action.payload.card.id) {
            return {...element, cards: element.cards.concat(action.payload.card)}
          }
        })
      }
  
      default :
        return state 
    }
}