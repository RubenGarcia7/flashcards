import React, { useState } from 'react'
import { connect } from 'react-redux'
import QuizCard from './QuizCard'
import QuizResult from './QuizResult'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet }
 from 'react-native'

const QuizScreen = ({dispatch, navigation, route, decks}) => {
 const [currentCard, setCurrentCard] = useState(0)

  const deck = route.params.deck[0]
  const cards = route.params.deck[0].cards

  console.log(cards)

  const handleSubmit = () => {

    setCurrentCard(currentCard + 1)
  }

  return (
    <>
      { currentCard < cards.length ?
        <QuizCard card={cards[currentCard]} deck={deck} cardIndex={currentCard} onAnswer={handleSubmit}/>
        : 
        <QuizResult />
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingTop: 20,
    padding: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  }
})

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(QuizScreen)
