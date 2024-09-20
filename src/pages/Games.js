import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Games Component
 * This is a placeholder for the Games page. It will display available games in the future.
 */
const Games = ({ navigation }) => {   // Accepting navigation prop (if needed)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Games Page</Text>
      <Text style={styles.subtitle}>Available games will be listed here soon.</Text>
    </View>
  );
};

// Styles for the Games component
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
  },
});

export default Games;
