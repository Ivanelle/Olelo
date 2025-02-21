import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import AsyncStorage
from '@react-native-async-storage/async-storage';

const HeartedWordScreen = () => {
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
}