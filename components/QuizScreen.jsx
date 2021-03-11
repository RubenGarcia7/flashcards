import React, { useState } from 'react'
import { connect } from 'react-redux'
import QuizCard from './QuizCard'
import QuizResult from './QuizResult'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet }
 from 'react-native'

const QuizScreen = ({dispatch, navigation, route, decks}) => {
  const [currentCard, setCurrentCard] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [incorrectAnswers, setIncorrectAnswers] = useState(0)

  const deck = route.params.deck[0]
  const cards = route.params.deck[0].cards

  const handleSubmitRight = () => {
    console.log('Correct!')
    setCurrentCard(currentCard + 1)
    setCorrectAnswers(correctAnswers + 1)
  }

  const handleSubmitWrong= () => {
    console.log('Incorrect!')
    setCurrentCard(currentCard + 1)
    setIncorrectAnswers(incorrectAnswers + 1)
  }

  return (
    <>
      { currentCard < cards.length ?
        <QuizCard card={cards[currentCard]} deck={deck} cardIndex={currentCard} onAnswerRight={handleSubmitRight} onAnswerWrong={handleSubmitWrong}/>
        : 
        <QuizResult correctAnswers={correctAnswers} incorrectAnswers={incorrectAnswers}/>
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
