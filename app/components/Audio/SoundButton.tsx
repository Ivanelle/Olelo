import React, { useState, useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg'; 


interface SoundButtonProps {
  isWordChanged: boolean;
}

const SoundButton: React.FC<SoundButtonProps> = ({ isWordChanged }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Audio.Sound | null>(null);

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
      activeOpacity={0.7}
    >

      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={isPlaying ? '#07607b' : '#4eacb8'} // Change icon color based on playing state
        width={24}
        height={24}
      >
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
        />
      </Svg>
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
});

export default SoundButton;