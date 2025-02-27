import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SoundButton from './Audio/SoundButton';
import NextWordButton from './NextWordButton';
import HeartButton from './Heart/HeartButton';

interface WordCardProps {
  currentWord: {
    id: number;
    hawaiianWord: string;
    pronunciation: string;
    type: string;
    englishTranslation: string;
  };
  onNextWord: () => void;
  isWordChanged: boolean;
}

const WordCard: React.FC<WordCardProps> = ({ currentWord, onNextWord, isWordChanged }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.mainWord}>{currentWord.hawaiianWord}</Text>
    <View style={styles.buttonsContainer}>
      <SoundButton isWordChanged={isWordChanged} />
      <HeartButton word={currentWord} /> 

    </View>
    <Text style={styles.pronunciation}>/{currentWord.pronunciation}/</Text>
    <Text style={styles.type}>{currentWord.type}</Text>
    <Text style={styles.translation}>{currentWord.englishTranslation}</Text>
    <NextWordButton onPress={onNextWord} />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mainWord: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#07607b',
    marginBottom: 10,
    letterSpacing: 1,
  },
  pronunciation: {
    fontSize: 18,
    color: '#4eacb8',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  type: {
    fontSize: 14,
    color: '#b8e7ca',
    marginRight: 10,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  translation: {
    fontSize: 35,
    color: '#6cd1af',
    fontWeight: '600',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default WordCard;