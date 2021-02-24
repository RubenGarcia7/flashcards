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

export async function _saveDeck ({ deckName }) {
  return new Promise((res, rej) => {
    const formattedDeck = formatDeck({
      deckName
    })
    res(formattedDeck)
  })
}