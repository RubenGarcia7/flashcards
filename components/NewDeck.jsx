import React from 'react'
import { Button, Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, TextInput } from 'react-native'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/decks'
import * as Yup from 'yup'

const NewDeck = ({ navigation, dispatch, decks }) => {

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Title must be at least 2 characters')
      .max(50, "Title can't have more than 50 characters")
      .required('Title is a required field')
  })

  return (
      <Formik
        initialValues={{title: ''}}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(handleAddDeck(values.title, navigation))
        }}
      >
        {({ handleChange, handleSubmit, values, touched, errors }) => (
          <View style={styles.form}>
            <Text style={styles.label}>What is the title of your deck?</Text>
            <TextInput
              style={styles.input}
              placeholder='Title'
              onChangeText={handleChange('title')}
              value={values.title}
            />
            <Text style={styles.errorMessage}>
              {touched.title && errors.title}
            </Text>
            <Button title='Create Deck' color='#E91E63' onPress={handleSubmit}/>
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
  },
  errorMessage: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 20,
  }
})

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(NewDeck)
