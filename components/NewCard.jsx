import React from 'react'
import { Button, Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCard } from '../actions/decks'
import { Formik } from 'formik'

const NewCard = ({ decks, dispatch, route, navigation }) => {
  const id = route.params.id

  return (
      <Formik
        initialValues={{title: '', answer: ''}}
        onSubmit={(values) => {
          navigation.navigate('Deck', {
            id: id
          })
          setTimeout(() => {
            dispatch(handleAddCard(values.title, values.answer, id)) 
          }, 500);
          
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.form}>
            <Text style={styles.label}>What is the title of your card?</Text>
            <TextInput
              style={styles.input}
              placeholder='title'
              onChangeText={handleChange('title')}
              value={values.title}
            />
            <Text style={styles.label}>What is the answer of your card?</Text>
            <TextInput
              style={styles.input}
              placeholder='answer'
              onChangeText={handleChange('answer')}
              value={values.answer}
            />
            <Button title='Submit' color='#E91E63' onPress={handleSubmit}/>
          </View>
        )}
      </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  form: {
    marginTop: 40,
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 6,
    fontSize: 18,
    padding: 20,
    marginBottom: 20
  },
  label: {
    marginBottom: 10,
    fontSize: 18
  }
})

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(NewCard)
