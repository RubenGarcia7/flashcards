import React from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet }
 from 'react-native'

const QuizCard = ({card, cardIndex, onAnswer, deck}) => {

  console.log(deck)

  return (
    <View style={styles.container}>
      <Text>{card.title}</Text>
      <Text>{deck.cards.length - cardIndex} questions remaining</Text>
      <TouchableOpacity style={styles.btnSubmit} onPress={() => onAnswer()}>
        <Text style={styles.btnSubmitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingTop: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSubmit: {
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    elevation: 4
  },
  btnSubmitText: {
    color: '#E91E63',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(QuizCard)
