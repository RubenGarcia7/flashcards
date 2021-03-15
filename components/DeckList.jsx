import React, { useEffect, useRef, useState } from 'react'
import { Animated, TouchableOpacity, TouchableWithoutFeedback, FlatList, StyleSheet, View, Text, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

const DeckList = ({ decks, navigation, dispatch }) => {
  // Load initial data
   useEffect(() => {
    dispatch(handleInitialData())
  }, [])

  const [activeBtn, setActiveBtn] = useState(null)

  // Transforming nested object into array of objects
  const arr = Object.entries(decks)
  const decksArray = []
  for(let i = 0; i < arr.length; i++) {
  decksArray.push(arr[i][1])
  }
  
  const handleTouchFloating = () => {
    navigation.navigate('NewDeck')
  }

  const scaleValue = new Animated.Value(0);

  // Start animatin and navigate to Deck
  const handleTouchDeck = (index, id) => {
    setActiveBtn(index)

    scaleValue.setValue(0);
    Animated.timing(
        scaleValue,
        {
          toValue: 1,
          duration: 300,
          useNativeDriver: true 
        }
    ).start();
    
    setTimeout(() => {
      navigation.navigate('Deck', {
      id
     })
    }, 300);
  }

  // Set animation values
  const buttonScale = scaleValue.interpolate({
  inputRange: [0, 0.5, 1.2],
  outputRange: [1, 1.1, 1]
  });
  
  // Button component
  const renderBtn = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.itemBtn} onPress={() => handleTouchDeck(index, item.id)}>
        {
        // Enable animation only on the button that is clicked
        activeBtn === index && (
          <Animated.View style={[styles.itemContainer, {
            transform: [{
              scale: buttonScale
            }]
          }]}>
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            <View>
              <Text>{item.cards.length}</Text>
            </View>
          </Animated.View>
        )}
        {activeBtn !== index && (
          <View style={styles.itemContainer}>
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            <View>
              <Text>{item.cards.length}</Text>
            </View>
          </View>
        )}   
      </TouchableOpacity>
    )}
    
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Select a deck to start</Text>
      <FlatList
        data={decksArray}
        keyExtractor={(item) => item.id}
        renderItem={renderBtn}
      />

      <TouchableOpacity style={styles.button} onPress={() => handleTouchFloating()}>
         <Ionicons name="add-outline" size={24} color='white' />
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
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 15
  },
  itemBtn: {
    
  },
  itemContainer: {
    margin: 15,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 7,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontWeight: '500'
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


