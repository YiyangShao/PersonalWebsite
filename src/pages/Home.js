import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';  // Import the global stylesheet

/**
 * Home Component
 * This is the home page of the personal website. It displays a welcome message and
 * includes navigation to the Games page.
 */
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Personal Website</Text>
      <Text style={styles.subtitle}>This is the Home Page</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Games')}>
        <Text style={styles.buttonText}>Go to Games Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
