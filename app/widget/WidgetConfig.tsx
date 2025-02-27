import React, { useState, useEffect } from 'react';
import { hawaiianWords } from '@/data/hawaiianWords';
import  { 
  View, Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';

export default function widgetVersion() {
    const [currentWord, setCurrentWord] = useState (
        hawaiianWords[Math.floor(Math.random() * hawaiianWords.length)]
    );

  const getNextWord = () => {
    const remainingWords = hawaiianWords.filter(w => w.id !== currentWord.id
    );

    const newWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];

    setCurrentWord(newWord);
  };

  return (
    <View style={styles.container}>
      {currentWord && (
        <>
          <Text style={styles.wordText}>{currentWord.hawaiianWord}</Text>
          <Text style={styles.definitionText}>
            {currentWord.englishTranslation}
          </Text>
        </>
      )}
      <TouchableOpacity 
        style={styles.button}
        onPress={getNextWord}
      >
        <Text style={styles.buttonText}>Next Word</Text>
      </TouchableOpacity>
    </View>
  )
};

    const styles = StyleSheet.create({
        container: {
          width: 250,
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 15,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 3
        },
        wordText: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
          color: '#333'
        },
        definitionText: {
            fontSize: 14,
            color: '#666',
            textAlign: 'center',
            marginBottom: 15
          },
          button: {
            width: '100%',
            backgroundColor: '#007bff',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center'
          },
          buttonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold'
          }
});

