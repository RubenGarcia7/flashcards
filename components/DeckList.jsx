import React, { useEffect } from 'react'
import { TouchableOpacity, FlatList, StyleSheet, View, Text, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

const DeckList = ({ decks, navigation, dispatch }) => {
  // Load initial data
   useEffect(() => {
    dispatch(handleInitialData())
  }, [])

  console.log(decks)

  const deckList = [
    {name: 'HTML', quizzes: 11, id: 1},
    {name: 'CSS', quizzes: 15, id: 2},
    {name: 'Javascript', quizzes: 9, id: 3},
    {name: 'React', quizzes: 12, id: 4}
  ]

  const handleTouchDeck = (id) => {
    navigation.navigate('Deck')
  }

  const handleTouchFloating = () => {
    navigation.navigate('NewDeck')
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={deckList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleTouchDeck(item.id)}>
            <View>
              <Text>{item.name}</Text>
            </View>
            <View>
              <Text>{item.quizzes}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleTouchFloating()}>
         <Ionicons name="add-outline" size={28} color="white" />
      </TouchableOpacity>
    </View>
    
  )
}

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    padding: 20 
  },
  item: {
    backgroundColor: '#eee',
    borderRadius: 7,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E91E63',                             
    position: 'absolute',
    bottom: 20,
    right: 20,
  }
})


