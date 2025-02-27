import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NextWordButton = ({ onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Next Word</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#4eacb8',
      paddingVertical: 10, 
      paddingHorizontal: 20,  
      borderRadius: 8,  
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    buttonText: {
      color: '#f6f1d2',
      fontSize: 16, 
      fontWeight: '600',
      textTransform: 'uppercase',
    },
});

export default NextWordButton;
