import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK } from '../actions/decks'

export default function decks (state = [], action) {
  switch(action.type) {
    case ADD_DECK :
      return state.concat(action.payload.deck)
    
    case REMOVE_DECK :
      return state.filter(element => element.id !== action.payload.id)

      default :
        return state 
    }
}