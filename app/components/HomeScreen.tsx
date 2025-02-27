import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';
import WordCard from './WordCard';
import { hawaiianWords } from '@/data/hawaiianWords';

const HomeScreen = ({ navigation }) => {
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

  // Swipe gesture handler
  const swipeGesture = Gesture.Pan()
    .onEnd((event) => {
      if (event.translationX < -50) {
        // Swipe left: Navigate to HeartedWordsScreen
        navigation.navigate('HeartedWords');
      } else if (event.translationX > 50) {
        // Swipe right: Navigate to HeartedWordsScreen
        navigation.navigate('HeartedWords');
      }
    });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={swipeGesture}>
        <SafeAreaView style={styles.container}>
          <WordCard
            currentWord={currentWord}
            onNextWord={getNextWord}
            isWordChanged={isWordChanged}
          />
        </SafeAreaView>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },
});

export default HomeScreen;