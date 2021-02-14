import React from 'react'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Formik } from 'formik'

const NewDeck = () => {
  return (
    <View>
      <Formik
        initialValues={{title: ''}}
        onSubmit={(value) => {

        }}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder='title'
              onChangeText={props.handleChange('title')}
              value={props.value.title}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    padding: 20
  }
})

export default NewDeck
