import React, { useState } from 'react';
import  { 
    View, Text, 
    TouchableOpacity, 
    StyleSheet, 
    SafeAreaView 
} from 'react-native';
import { hawaiianWords } from "./data/hawaiianWords";
import NextWordButton from './app/components/NextWordButton';

export default function App() {
    const [currentWord, setCurrentWord] = useState (
        hawaiianWords[Math.floor(Math.random() * hawaiianWords.length)]
    );

    const getNextWord = () => {
        const remainingWords = hawaiianWords.filter(w => w.id !== currentWord.id
        );

        const newWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];

        setCurrentWord(newWord);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.mainWord}>{currentWord.hawaiianWord}</Text>
            <Text style={styles.pronunciation}>/{currentWord.pronunciation}/</Text>
            <Text style={styles.type}>{currentWord.type}</Text>
            <Text style={styles.translation}>{currentWord.englishTranslation}</Text>

            <NextWordButton onPress={getNextWord}/>
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
      infoContainer: {
        alignItems: 'center',
      },
      pronunciation: {
        fontSize: 18,
        color: '#7F8C8D',
        marginBottom: 5,
        fontStyle: 'italic',
      },
      secondaryInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
      },
      buttonContainer: {
        marginTop: 50, 
      }
    });
    