import { saveDeck, saveCard } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'

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

export function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    payload: {
      id
    }
  }
}

export function addCard(card) {
  return {
    type: ADD_CARD,
    payload: {
      card
    }
  }
}

export function handleAddDeck (deckName, navigation) {
  return (dispatch) => {
    return saveDeck({
      deckName
    })
    .then((deck) => {
      dispatch(addDeck(deck))
      navigation.navigate('Deck', {
        id: deck.id
      })
    })   
  }
}

export function handleRemoveDeck(id) {
  return (dispatch) => {
    dispatch(removeDeck(id))
  }
}

export function handleAddCard(title, answer, id) {
  return (dispatch) => {
    dispatch(addCard({
      title,
      answer,
      id
    }))
  }
}
