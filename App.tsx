import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/components/HomeScreen'; 
import HeartedWordsScreen from './app/components/Heart/HeartedWordsScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Kamailio' }} // Custom title for the home screen
        />
        <Stack.Screen
          name="HeartedWords"
          component={HeartedWordsScreen}
          options={{ title: 'My Words' }} // Custom title for the hearted words screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}