import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Animated }
 from 'react-native'

const QuizCard = ({card, cardIndex, onAnswerRight, onAnswerWrong, deck}) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const remainingQuestions = deck.cards.length - cardIndex

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleOnAnswerRight = () => {
    setIsFlipped(false)
    onAnswerRight()
  }

  const handleOnAnswerWrong = () => {
    setIsFlipped(false)
    onAnswerWrong()
  }

  return (
    <View style={styles.container}>
      {isFlipped === false ?
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>{card.title}</Text>
        </View>  
        :
        <View style={styles.cardContainerAnswer}>
           <Text style={styles.cardAnswer}>Answer: </Text>
          <Text style={styles.cardText}>{card.answer}</Text>
        </View>  
      } 
      <Text style={styles.remaining}>{remainingQuestions} {remainingQuestions > 1 ? 'questions' : 'question'} remaining</Text>
      <TouchableOpacity style={styles.btnShow} onPress={() => handleFlip()}>
        <Ionicons name="reload" size={20} color="white" style={styles.btnShowText}/>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnWrong} onPress={() => handleOnAnswerWrong()}>
          <Ionicons name="thumbs-down" size={27} color="white" style={styles.btnWrongText}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRight} onPress={() => handleOnAnswerRight()}>
          <Ionicons name="thumbs-up" size={27} color="white" style={styles.btnRightText}/>
        </TouchableOpacity>
      </View>
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
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#3F51B5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 20
  },
  cardContainerAnswer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 20
  },
  cardText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800'
  },
  cardAnswer: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10
  },
  btnContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  remaining: {
    marginTop: 20,
    fontSize: 14
  },
  btnRight: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',  
    borderWidth: 5,
    borderColor: '#4CAF50',
    // shadowColor: "#000000",
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 1,
    //   width: 1
    // },
    // elevation: 4
  },
  btnRightText: {
    color: '#4CAF50',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btnWrong: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',  
    borderWidth: 5,
    borderColor: '#F44336',
    // shadowColor: "#000000",
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 1,
    //   width: 1
    // },
    // elevation: 4
  },
  btnWrongText: {
    color: '#F44336',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btnShow: {
    marginTop: 20,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E91E63',  
    // shadowColor: "#000000",
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 1,
    //   width: 1
    // },
    // elevation: 4
  },
  btnShowText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(QuizCard)
