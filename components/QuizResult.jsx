import React from 'react'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet }
 from 'react-native'

const QuizResult = () => {
  return (
    <View style={styles.container}>
      <Text>Quiz Completed</Text>
      <Text>You have answered X correct</Text>
      <TouchableOpacity>
        <Text>Restart Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Back To Deck</Text>
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

export default QuizResult
