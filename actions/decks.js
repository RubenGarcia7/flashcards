import { saveDeck } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    payload: {
      decks
    }
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    payload: {
      deck
    }
  }
}

export function handleAddDeck (deckName) {
  return (dispatch) => {
    return saveDeck({
      deckName
    })
    .then((deck) => {
      dispatch(addDeck(deck))
    })   
  }
}