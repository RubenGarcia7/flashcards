import {
  _getDecks,
  _saveDeck,
  _saveCard
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getDecks()
  ]).then(([decks]) => ({
    decks
  }))
}

export function saveDeck(deckName) {
  return _saveDeck(deckName)
}

export function saveCard(card) {
  return _saveCard(card)
}