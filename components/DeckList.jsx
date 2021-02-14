import React from 'react'
import { TouchableOpacity, FlatList, StyleSheet, View, Text, Alert } from 'react-native'

const DeckList = ({ navigation }) => {
  const decks = [
    {name: 'HTML', quizzes: 11, id: 1},
    {name: 'CSS', quizzes: 15, id: 2},
    {name: 'Javascript', quizzes: 9, id: 3},
    {name: 'React', quizzes: 12, id: 4}
  ]

  const handleTouch = (id) => {
    navigation.navigate('Deck')
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleTouch(item.id)}>
            <View>
              <Text>{item.name}</Text>
            </View>
            <View>
              <Text>{item.quizzes}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    padding: 20,  
    // alignItems: 'center',
    // justifyContent: 'center',
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
})


export default DeckList
