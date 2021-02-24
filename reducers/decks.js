import { RECEIVE_DECKS, ADD_DECK } from '../actions/decks'

export default function decks (state = [], action) {
  switch(action.type) {
    case ADD_DECK :
      return state.concat(action.payload.deck)
  }
  return state 
}