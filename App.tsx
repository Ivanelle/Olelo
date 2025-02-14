import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { hawaiianWords } from './data/hawaiianWords';
import WordCard from './app/components/WordCard';

export default function App() {
  const [currentWord, setCurrentWord] = useState(
    hawaiianWords[Math.floor(Math.random() * hawaiianWords.length)]
  );
  const [isWordChanged, setIsWordChanged] = useState(false);

  const getNextWord = () => {
    const remainingWords = hawaiianWords.filter((w) => w.id !== currentWord.id);
    const newWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];
    setCurrentWord(newWord);
    setIsWordChanged((prev) => !prev); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <WordCard 
        currentWord={currentWord} 
        onNextWord={getNextWord} 
        isWordChanged={isWordChanged}  
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },
});