import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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

// Styles for the Home component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Home;
