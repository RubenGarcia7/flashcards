import React from 'react'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native'

const Deck = ({ navigation }) => {

  const handleTouch = () => {
    navigation.navigate('NewCard')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deck Title</Text>
      <Text style={styles.subtitle}>Number of cards</Text>
      <TouchableOpacity style={styles.btnStart}>
        <Text style={styles.btnStartText}>Start Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnAdd} onPress={() => handleTouch()}>
        <Text style={styles.btnAddText}>Add New Card</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback>
        <Text style={styles.delete}>Delete Deck</Text>
      </TouchableWithoutFeedback>
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
    padding: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    color: '#E91E63',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#F06292',
    textAlign: 'center'
  },
  btnStart: {
    backgroundColor: '#E91E63',
    borderRadius: 7,
    padding: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 25,
    marginBottom: 15,
    shadowOffset: {
      height: 1,
      width: 1
    },
    elevation: 4
  },
  btnStartText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  btnAdd: {
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
  btnAddText: {
    color: '#E91E63',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  delete: {
    color: '#F44336',
    textAlign: 'center'
  }
})

export default Deck
