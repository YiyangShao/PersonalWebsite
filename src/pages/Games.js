import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import Game from '../components/2048/src/components/Game';  // Import the 2048 game

/**
 * Games Component
 * This page contains the 2048 game and other game-related content.
 */
const Games = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Games Page</Text>
      <Text style={styles.subtitle}>Play 2048 Below:</Text>
      
      {/* Render 2048 Game */}
      <Game />
    </View>
  );
};

export default Games;
