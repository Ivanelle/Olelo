import React, { useState } from 'react';
import {
  View, Text,
  StyleSheet
} from 'react-native';
import SoundButton from './Audio/SoundButton';
import NextWordButton from './NextWordButton';

interface WordCardProps {
  currentWord: {
    hawaiianWord: string;
    pronunciation: string;
    type: string;
    englishTranslation: string;
  };
  onNextWord: () => void;
}

const WordCard: React.FC<WordCardProps> = ({ currentWord, onNextWord }) => {
    const [isWordChanged, setIsWordChanged ] = useState(false);

    const handleNextWord = () => {
        setIsWordChanged(!isWordChanged)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.mainWord}>{currentWord.hawaiianWord}</Text>
      <SoundButton isWordChanged={isWordChanged}/>
      <Text style={styles.pronunciation}>/{currentWord.pronunciation}/</Text>
      <Text style={styles.type}>{currentWord.type}</Text>
      <Text style={styles.translation}>{currentWord.englishTranslation}</Text>
      <NextWordButton onPress={onNextWord}/>
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
    color: '#2C3E50',
    marginBottom: 10,
    letterSpacing: 1,
  },
  pronunciation: {
    fontSize: 18,
    color: '#7F8C8D',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  type: {
    fontSize: 14,
    color: '#34495E',
    marginRight: 10,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  translation: {
    fontSize: 24,
    color: '#2980B9',
    fontWeight: '600',
    marginTop: 10,
  }
});

export default WordCard;