import { RECEIVE_DECKS, ADD_DECK } from '../actions/decks'

export default function decks (state = {}, action) {
  switch(action.type) {
    case ADD_DECK :
      return {
        ...state,
        [action.payload.deck.id]: action.payload.deck
      }
  }
  return state 
}