import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeartButton = ({ word }) => {
  const [isHearted, setIsHearted] = useState(false);

  useEffect(() => {
    const checkIfHearted = async () => {
      const heartedWords = JSON.parse(await AsyncStorage.getItem('heartedWords') || '[]');
      setIsHearted(heartedWords.some((w) => w.id === word.id));
    };

    checkIfHearted();
  }, [word]);

  const toggleHeart = async () => {
    try {
      const heartedWords = JSON.parse(await AsyncStorage.getItem('heartedWords') || '[]');
      let updatedHeartedWords;

      if (isHearted) {
        updatedHeartedWords = heartedWords.filter((w) => w.id !== word.id);
      } else {
        updatedHeartedWords = [...heartedWords, word];
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