import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

/**
 * GameGallery Component
 * Displays a gallery of game previews, with clickable images to load the game.
 */
const GameGallery = ({ onGameSelect }) => {
  return (
    <View style={styles.galleryContainer}>
      <Text style={styles.title}>Game Gallery</Text>

      {/* Preview for 2048 Game */}
      <TouchableOpacity onPress={onGameSelect}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/300x200.png?text=2048+Preview' }}  // Placeholder for 2048 game preview
          style={styles.galleryImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GameGallery;
