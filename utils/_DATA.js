import { generateId } from '../utils/helpers'

export const _getDecks = () => {
  // try {
  //   const res = await axios.get('http://localhost:5000/api/decks')
  //   return res.data
  // }
  // catch(err) {
  //   console.log(err)
  // }
  return decks

}

const decks = {
  '01': {
    cards: []
  }
}

function formatDeck ({ deckName }) {
  return {
    title: deckName,
    id: generateId(),
    cards: []
  }
}

function formatCard ({ title, answer }) {
  return {
    title: cardName,
    answer: answer,
    id: generateId(),
  }
}

export async function _saveDeck ({ deckName }) {
  return new Promise((res, rej) => {
    const formattedDeck = formatDeck({
      deckName
    })
    res(formattedDeck)
  })
}

export async function _saveCard ({ title, answer }) {
  return new Promise((res, rej) => {
    const formattedCard = formatCard({
      title,
      answer
    })
    res(formattedCard)
  })
}