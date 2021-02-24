import React from 'react'
import { Button, Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, TextInput } from 'react-native'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/decks'

const NewDeck = ({ dispatch }) => {

  return (

      <Formik
        initialValues={{title: ''}}
        onSubmit={(values) => {
          console.log(values.title)
          dispatch(handleAddDeck(values.title))
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.form}>
            <Text style={styles.label}>What is the title of your deck?</Text>
            <TextInput
              style={styles.input}
              placeholder='title'
              onChangeText={handleChange('title')}
              value={values.title}
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

export default connect(mapStateToProps)(NewDeck)
