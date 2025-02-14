import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const HeartButton = ({ wordId }) => {
    const [ isHearted, setIsHearted ] = useState(false);

    useEffect(() => {
        const heartedWords = JSON.parse(storage.getString('heartedWords') || '[]');
        setIsHearted(heartedWords.includes(wordId));
    }, [wordId]);

    const toggleHeart = () => {
        try {
            const heartedWords = JSON.parse(storage.getString('heartedWords') || '[]')

            let updatedHeartedWords;

            if (isHearted) {
                updatedHeartedWords = heartedWords.filter((id) => id !==wordId);
            } else {
                updatedHeartedWords = [...heartedWords, wordId]
            }

            storage.set('heartedWords', JSON.stringify(updatedHeartedWords));
            setIsHearted(!isHearted);
        } catch (error) {
            Alert.alert('Error', 'Failed to update hearted words.');
            console.error('Error toggling heart', error)
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