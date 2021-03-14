import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet }
 from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

const QuizResult = ({ correctAnswers, incorrectAnswers, navigation, deck, onCompletedRestart, onCompletedBack}) => {
  // Reset notification after submitting the quiz
  useEffect(() => {
    clearLocalNotification().then(setLocalNotification).then(console.log('Success!'))
  }, [])

  const totalAnswers = correctAnswers + incorrectAnswers
  const score = (correctAnswers / totalAnswers * 100).toFixed(0)
  const id = deck.id

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Completed</Text>
      <Text style={styles.result}>You have answered {correctAnswers} correctly out of {totalAnswers}</Text>
      <Text style={styles.score}>Your score is {score}%</Text>
      <TouchableOpacity style={styles.btnPrimary} onPress={() => onCompletedRestart()}>
        <Text style={styles.btnPrimaryText}>Restart Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSecondary} onPress={() => onCompletedBack(id)}>
        <Text style={styles.btnSecondaryText}>Back To Deck</Text>
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
  title: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10
  },
  result: {
    fontSize: 16,
    marginBottom: 10
  },
  score: {
    fontSize: 16,
    color: '#E91E63',
    fontWeight: '600',
    marginBottom: 20
  },
  btnPrimary: {
    backgroundColor: '#E91E63',
    borderRadius: 7,
    padding: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 25,
    marginBottom: 15,
    width: '100%',
    shadowOffset: {
      height: 1,
      width: 1
    },
    elevation: 4
  },
  btnPrimaryText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btnSecondary: {
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: '100%',
    shadowOffset: {
      height: 1,
      width: 1
    },
    elevation: 4
  },
  btnSecondaryText: {
    color: '#E91E63',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default QuizResult
