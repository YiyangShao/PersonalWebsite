import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GameGallery from '../components/GameGallery';
import Game2048 from '../components/2048/src/components/Game';
import FlappyBird from '../components/FlappyBird/FlappyBird';  // Import Flappy Bird game
import styles from '../styles';

/**
 * Games Component
 * Displays a gallery of games and loads the selected game when clicked.
 */
const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  const handleBackToGallery = () => {
    setSelectedGame(null);
  };

  return (
    <View style={styles.container}>
      {selectedGame === '2048' ? (
        <>
          <TouchableOpacity style={styles.backButton} onPress={handleBackToGallery}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <Game2048 />
        </>
      ) : selectedGame === 'FlappyBird' ? (
        <>
          <TouchableOpacity style={styles.backButton} onPress={handleBackToGallery}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <FlappyBird />
        </>
      ) : (
        <GameGallery onGameSelect={handleGameSelect} />
      )}
    </View>
  );
};

export default Games;
