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
  '12345678-2ff8-42d3-809e-4e7811936cfe': {
    cards: [{title: 'What does CSS stand for?', answer: 'Cascading Style Sheets', id: '56464-345345-78898-4534'}, {title: 'What is HTML?', answer: 'The language of the web', id: '1646-245345-78898-4534'}, {title: 'How are inexperienced developers called?', answer: 'Junior Developers', id: '02454-345345-78898-4534'}],
    id: '12345678-2ff8-42d3-809e-4e7811936cfe',
    title: 'Web Development'
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