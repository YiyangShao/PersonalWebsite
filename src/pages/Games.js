import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import GameGallery from '../components/GameGallery';
import Game from '../components/2048/src/components/Game';
import styles from '../styles';

/**
 * Games Component
 * Displays a gallery of games and loads the selected game when clicked.
 */
const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameSelect = () => {
    setSelectedGame('2048');
  };

  const handleBackToGallery = () => {
    setSelectedGame(null);
  };

  return (
    <View style={styles.container}>
      {selectedGame === '2048' ? (
        <>
          {/* Back to Gallery button at the top-left */}
          <TouchableOpacity style={styles.backButton} onPress={handleBackToGallery}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <Game />  {/* Render the 2048 game */}
        </>
      ) : (
        <GameGallery onGameSelect={handleGameSelect} />
      )}
    </View>
  );
};

export default Games;
