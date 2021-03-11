import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from '../actions/decks'

export default function decks (state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.payload.decks
      }

    case ADD_DECK :
      return {
        ...state,
        [action.payload.deck.id]: action.payload.deck
      }

    case REMOVE_DECK :

      return Object.fromEntries(Object.entries(state).filter(([key, value]) => !value.id.includes(action.payload.id)))

    case ADD_CARD:
      return {
        ...state,
          [action.payload.card.id]: {
            ...state[action.payload.card.id],
            cards: state[action.payload.card.id].cards.concat(action.payload.card)
          } 
      }
  
      default :
        return state 
    }
}