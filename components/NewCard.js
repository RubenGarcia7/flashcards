import React from 'react'
import { Button, Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCard } from '../actions/decks'
import { Formik } from 'formik'
import * as Yup from 'yup'

const NewCard = ({ decks, dispatch, route, navigation }) => {
  const id = route.params.id

  // Form validation schema
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Title must be at least 2 characters')
      .max(50, "Title can't have more than 50 characters")
      .required('Title is a required field'),
    answer: Yup.string()
      .min(2, 'Answer must be at least 2 characters')
      .max(70, "Answer can't have more than 70 characters")
      .required('Answer is a required field'),
  })

  return (
      <Formik
        initialValues={{title: '', answer: ''}}
        validationSchema={validationSchema}
        onSubmit={(values) => {

          setTimeout(() => {
            dispatch(handleAddCard(values.title, values.answer, id)) 
          }, 500);

          navigation.navigate('Deck', {
            id
          })
          
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched, handleBlur }) => (
          <View style={styles.form}>
            <Text style={styles.label}>What is the title of your card?</Text>
            <TextInput
              style={styles.input}
              placeholder='Question'
              onChangeText={handleChange('title')}
              value={values.title}
              onBlur={handleBlur('title')}
            />
            <Text style={styles.errorMessage}>
              {touched.title && errors.title}
            </Text>
            
            <Text style={styles.label}>What is the answer of your card?</Text>
            <TextInput
              style={styles.input}
              placeholder='Answer'
              onChangeText={handleChange('answer')}
              value={values.answer}
              onBlur={handleBlur('answer')}
            />
            <Text style={styles.errorMessage}>
              {touched.answer && errors.answer}
            </Text>
         
            <Button title='Add Card' color='#E91E63' onPress={handleSubmit}/>
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
    marginBottom: 10
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

export default connect(mapStateToProps)(NewCard)
