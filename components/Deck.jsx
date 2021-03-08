import React from 'react'
import { connect } from 'react-redux'
import { handleRemoveDeck } from '../actions/decks'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet }
 from 'react-native'

const Deck = ({ dispatch, navigation, route, decks}) => {

  const id = route.params.id
  const deck = decks.filter(d => d.id === id)
  const { title, cards } = deck[0]


  const handleAddCard = () => {
    navigation.navigate('NewCard', {
      id: id
    })
    
  }

   const handleDelete = (id) => {
    //  console.log(id)
    navigation.navigate('DeckList')
    setTimeout(() => {
      dispatch(handleRemoveDeck(id))
    }, 500);
  }

  if (!deck) {
    return null;
  }

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{cards.length} cards</Text>
        <TouchableOpacity style={styles.btnStart}>
        <Text style={styles.btnStartText}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAdd} onPress={() => handleAddCard()}>
        <Text style={styles.btnAddText}>Add New Card</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={() => handleDelete(id)}>
        <Text style={styles.delete}>Delete Deck</Text>
        </TouchableWithoutFeedback>
      </>
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


function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Deck)
