import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeartButton = ({ wordId }) => {
  const [isHearted, setIsHearted] = useState(false);

  useEffect(() => {
    const checkIfHearted = async () => {
      const heartedWords = JSON.parse(await AsyncStorage.getItem('heartedWords') || '[]');
      setIsHearted(heartedWords.includes(wordId));
    };

    checkIfHearted();
  }, [wordId]);

  const toggleHeart = async () => {
    try {
      const heartedWords = JSON.parse(await AsyncStorage.getItem('heartedWords') || '[]');
      let updatedHeartedWords;

      if (isHearted) {
        updatedHeartedWords = heartedWords.filter((id) => id !== wordId);
      } else {
        updatedHeartedWords = [...heartedWords, wordId];
      }

      await AsyncStorage.setItem('heartedWords', JSON.stringify(updatedHeartedWords));
      setIsHearted(!isHearted);
    } catch (error) {
      Alert.alert('Error', 'Failed to update hearted words.');
      console.error('Error toggling heart:', error);
    }
  };

  return (
    <TouchableOpacity onPress={toggleHeart} style={{ padding: 8 }}>
      <MaterialIcons
        name={isHearted ? 'favorite' : 'favorite-border'}
        size={24}
        color={isHearted ? 'red' : 'gray'}
      />
    </TouchableOpacity>
  );
};

export default HeartButton;