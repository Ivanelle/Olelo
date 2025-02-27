import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import AsyncStorage
from '@react-native-async-storage/async-storage';

const HeartedWordsScreen = () => {
    const [heartedWords, setHeartedWords ] = useState([]);

    useEffect(() => {
        const fetchHeartedWords = async () => {
          try {
            const heartedWords = JSON.parse(await AsyncStorage.getItem('heartedWords') || '[]');
            setHeartedWords(heartedWords);
          } catch (error) {
            console.error('Error fetching hearted words:', error);
          }
        };
    
        fetchHeartedWords();
      }, []);
      
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Hearted Words</Text>
          {heartedWords.length > 0 ? (
            <FlatList
              data={heartedWords}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.wordItem}>
                  <Text style={styles.hawaiianWord}>{item.hawaiianWord}</Text>
                  <Text style={styles.englishTranslation}>{item.englishTranslation}</Text>
                </View>
              )}
            />
          ) : (
            <Text style={styles.emptyMessage}>No hearted words yet.</Text>
          )}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F7F7F7',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#07607b',
        marginBottom: 16,
        textAlign: 'center',
      },
      wordItem: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      },
      hawaiianWord: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#07607b',
      },
      englishTranslation: {
        fontSize: 16,
        color: '#4eacb8',
      },
      emptyMessage: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
      },
    });

export default HeartedWordsScreen;