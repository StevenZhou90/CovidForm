import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View, } from 'react-native';
import Intro from './forms/intro'
import Demo from './forms/demo'
import Health from './forms/health'
import Risk from './forms/risk'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Demographics" component={Demo} />
        <Stack.Screen name="Health" component={Health} />
        <Stack.Screen name="Risk" component={Risk} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;