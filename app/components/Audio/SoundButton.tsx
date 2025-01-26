import React, { useState, useEffect, useRef } from "react";
import { Audio } from 'expo-av';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';

  
interface SoundButtonProps {
    isWordChanged: boolean;
}

  const SoundButton: React.FC<SoundButtonProps> = ({ isWordChanged }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const soundRef = useRef<Audio.Sound | null>(null);
    // const [ earImage, setEarImage ] = useState(require('../../../assets/images/ear-icon.png'));
  
    useEffect(() => {
        const loadSound = async () => {
          if (soundRef.current) {
            await soundRef.current.unloadAsync();
          }
    
          try {
            const { sound } = await Audio.Sound.createAsync(
              require('../../../assets/sounds/quacking.wav') 
            );
            soundRef.current = sound; 
          } catch (error) {
            console.error('Sound load error:', error);
          }
        };
    
        loadSound();
    
        return () => {
            if (soundRef.current) {
              soundRef.current.unloadAsync();
            }
          };
        }, [isWordChanged]); 
    
        const toggleSound = async () => {
            if (soundRef.current) {
              try {
                if (!isPlaying) {
                  setIsPlaying(true);
                  await soundRef.current.playAsync(); 
                } else {
                  setIsPlaying(false);
                  await soundRef.current.stopAsync(); 
                  
                }
              } catch (error) {
                console.error('Sound play error:', error);
                setIsPlaying(false);
              }
            }
          };

  return (
    <TouchableOpacity
      onPress={toggleSound}
      style={[
        styles.button,
        isPlaying? styles.playingButton : styles.stoppedButton
      ]}
      activeOpacity={0.7}
    >
      {/* <Image source={earImage} style={styles.earIcon}/> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: '#E8E8E8',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  earIcon: {
    width: 30,
    height: 30,
  },
  playingButton: {
    backgroundColor: '#4CAF50',
  },
  stoppedButton: {
    backgroundColor: '#E8E88', 
  }
});

export default SoundButton;