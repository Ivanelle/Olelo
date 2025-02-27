import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/components/HomeScreen';
import HeartedWordsScreen from './app/components/Heart/HeartedWordsScreen';

// Create a stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Kamailio' }} // Custom title for the home screen
        />
        {/* Hearted Words Screen */}
        <Stack.Screen
          name="HeartedWords"
          component={HeartedWordsScreen}
          options={{ title: 'Hearted Words' }} // Custom title for the hearted words screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;