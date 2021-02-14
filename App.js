import { StatusBar } from 'expo-status-bar'
import React from 'react'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DeckList'>
        <Stack.Screen
        name='DeckList'
        component={DeckList}
        options={{
          title: 'Your Decks',
          headerStyle: {
            backgroundColor: '#E91E63'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center'
          }
        }}
        />
        <Stack.Screen
        name='Deck'
        component={Deck}
        options={{
          title: 'Your Decks',
          headerStyle: {
            backgroundColor: '#E91E63'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {

          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
